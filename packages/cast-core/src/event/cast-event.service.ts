import type { CastState, PlayerState } from '../cast.def'

// eslint-disable-next-line complexity
export const getPlayerStateFromEvent = (
  state: PlayerState,
  event: cast.framework.RemotePlayerChangedEvent,
): PlayerState => {

  switch (event.field) {
    case 'displayName': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        displayName: event.value as string,
      }
    }

    case 'imageUrl': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        imageUrl: event.value as string,
      }
    }

    case 'duration': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        duration: event.value as number,
      }
    }

    case 'title': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        title: event.value as string,
      }
    }

    case 'mediaInfo': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        mediaInfo: event.value as chrome.cast.media.MediaInfo,
      }
    }

    case 'volumeLevel': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        volume: event.value as number,
      }
    }

    case 'currentTime': {

      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        currentTime: event.value as number,
      }
    }

    case 'isMuted': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        isMuted: event.value as boolean,
      }
    }

    case 'isMediaLoaded': {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        isMediaLoaded: event.value as boolean,
      }
    }

    case 'playerState': {
      return {
        ...state,
        isPlaying: event.value === chrome.cast.media.PlayerState.PLAYING,
        isPaused: event.value === chrome.cast.media.PlayerState.PAUSED,
        isIdle: event.value === chrome.cast.media.PlayerState.IDLE,
        isBuffering: event.value === chrome.cast.media.PlayerState.BUFFERING,
      }
    }

    default: {
      return state
    }
  }
}

export const getCastStateFromEvent = (state: CastState, event: cast.framework.CastStateEventData): CastState => ({
  ...state,
  status: event.castState,
  isConnecting: event.castState === cast.framework.CastState.CONNECTING,
  isConnected: event.castState === cast.framework.CastState.CONNECTED,
  noDevicesAvailable: event.castState === cast.framework.CastState.NO_DEVICES_AVAILABLE,
})
