import memoize from 'p-memoize'

import type { CastOptions, CastState, Events, Player } from './cast.def'
import { getCastStateFromEvent, getPlayerStateFromEvent } from './event/cast-event.service'
import { forgetSession, getSessionId, persistSession } from './storage/cast-storage.service'
import { loadScript } from '@jdion/dom/load-script'
import { isDom } from '@jdion/dom/types'

import { EventEmitter } from 'events'

const ee = new EventEmitter()

export class Cast {
  private instance: cast.framework.CastContext | null
  private controller: cast.framework.RemotePlayerController | null
  private remotePlayer: cast.framework.RemotePlayer | null
  private state: CastState
  private options: CastOptions

  constructor(options?: CastOptions) {
    this.instance = null
    this.controller = null
    this.remotePlayer = null

    this.options = {
      receiverApplicationId: 'CC1AD845',
      autoJoinPolicy: 'origin_scoped',
      resumeSavedSession: true,
      ...options,
    }

    this.state = {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      status: 'NOT_CONNECTED' as cast.framework.CastState.NOT_CONNECTED,
      isConnecting: false,
      isConnected: false,
      noDevicesAvailable: false,
    }

    if (!isDom) return

    const hasSession = getSessionId()

    if (hasSession) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.init(this.options)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private withLazyInit<T extends (...args: any[]) => ReturnType<T>>(
    method: T,
  ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    return async (...args: Parameters<T>) => {
      await this.init(this.options)

      return method(...args)
    }
  }

  private requestSession = async () => {
    const session = this.instance?.getCurrentSession()

    if (session) return session

    try {
      await this.instance?.requestSession()
    }
    catch (error) {
      // When the user clicks on the cast button and then cancels the device selection,
      // an error is thrown. If no devices are available, the error type will be `chrome.cast.ErrorCode.SESSION_ERROR`.
      // If a device is available but the selection is canceled, the error type will be `chrome.cast.ErrorCode.CANCEL`.
      if (error === chrome.cast.ErrorCode.SESSION_ERROR || error === chrome.cast.ErrorCode.CANCEL) {
        return null
      }

      throw error
    }

    return this.instance?.getCurrentSession() ?? null
  }

  public on = <EventName extends keyof Events>(eventName: EventName, cb: (state: Events[EventName]) => void) => {
    ee.on(eventName, cb)
  }

  public removeListener = <EventName extends keyof Events>(eventName: EventName, cb: (state: Events[EventName]) => void) => {
    ee.removeListener(eventName, cb)
  }

  public getState = () => {
    return this.state
  }

  public player: Player = {
    state: {
      currentTime: 0,
      progress: 0,
      volume: 1,
      title: null,
      imageUrl: null,
      displayName: null,
      duration: 0,
      isBuffering: false,
      isIdle: false,
      isMediaLoaded: false,
      isMuted: false,
      mediaInfo: null,
      isPaused: false,
      isPlaying: false,
    },

    getState: () => {
      return this.player.state
    },

    startCast: this.withLazyInit(async (contentId: string, contentType?: string) => {
      const mediaInfo = new chrome.cast.media.MediaInfo(contentId, contentType ?? 'video/mp4')
      const session = await this.requestSession()
      const request = new chrome.cast.media.LoadRequest(mediaInfo)

      if (!session) return

      await session.loadMedia(request)
    }),

    getProgress: () => {
      if (!this.remotePlayer || !this.controller) return this.player.state.progress 

      return this.controller.getSeekPosition(this.remotePlayer.currentTime, this.remotePlayer.duration)
    },

    toggleMute: () => {
      this.controller?.muteOrUnmute()
    },

    getFormattedTime: (timeInSec: number) => {
      if (!this.controller) return '00:00:00'

      return this.controller.getFormattedTime(timeInSec)
    },

    togglePlay: () => {
      this.controller?.playOrPause()
    },

    setVolume: (volume: number) => {
      if (!this.remotePlayer) return

      this.remotePlayer.volumeLevel = volume
      this.controller?.setVolumeLevel()
    },

    seek: (seconds: number) => {
      if (!this.remotePlayer) return
      if (!this.controller) return

      this.remotePlayer.currentTime = seconds
      this.controller.seek()
    },

    seekPercentage: (percentage: number) => {
      if (!this.remotePlayer) return
      if (!this.controller) return

      const time = this.controller.getSeekTime(percentage, this.remotePlayer.duration)

      this.remotePlayer.currentTime = time
      this.controller.seek()
    },

    endCast: () => {
      this.instance?.endCurrentSession(true)
    },
  }


  private onPlayerStateChanged = (event: cast.framework.RemotePlayerChangedEvent) => {
    const playerState = getPlayerStateFromEvent(this.player.state, event)

    playerState.progress = this.player.getProgress()
    this.player.state = playerState
    ee.emit('playerStateChanged', playerState)
  }

  private onCastStateChanged = (event: cast.framework.CastStateEventData): void => {
    const session = this.instance?.getCurrentSession()
    const castState = getCastStateFromEvent(this.state, event)

    this.state = castState
    ee.emit('castStateChanged', castState)

    if (!session) return

    switch (event.castState) {
      case cast.framework.CastState.CONNECTED:
        persistSession(session.getSessionId())

        return

      case cast.framework.CastState.NOT_CONNECTED:
        forgetSession()

        return
    }
  }

  private getIsCastApiAvailable(callback: (isAvailable: boolean, reason?: string) => void) {
    window.__onGCastApiAvailable = callback
  }

  private init = memoize(
    (options: CastOptions) =>
      new Promise<void>((resolve, reject) => {
        if (!isDom) return

        this.getIsCastApiAvailable((isAvailable) => {
          if (!isAvailable) {
            const error = new Error('Failed to load the Chromecast API')

            ee.emit('status', 'rejected')
            ee.emit('error', error)
            reject(error)

            return
          }

          this.instance = cast.framework.CastContext.getInstance()
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          this.instance.setOptions(options as unknown as cast.framework.CastOptions)
          this.remotePlayer = new cast.framework.RemotePlayer()
          this.controller = new cast.framework.RemotePlayerController(this.remotePlayer)
          this.controller.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, this.onPlayerStateChanged)

          this.instance.addEventListener(
            cast.framework.CastContextEventType.CAST_STATE_CHANGED,
            this.onCastStateChanged,
          )

          ee.emit('status', 'resolved')
          resolve()
        })

        loadScript('https:///www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1').catch((error) => {
          ee.emit('error', new Error('Failed to load the Chromecast Script'))
          ee.emit('status', 'rejected')
          reject(error)
        })
      }),
  )
}
