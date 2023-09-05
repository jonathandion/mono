import { Cast } from '@jdion/cast'

const stringify = (payload: Record<string, unknown>) => JSON.stringify(payload, null, 2)

const $ = <T extends HTMLElement>(selector: string): T | null => {
  const el = document.querySelector(selector)

  if (el) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return el as T
  }

  return null
}

const init = () => {
  const cast = new Cast()
  const $castState = $('#cast-state')
  const $playerState = $('#player-state')
  const $time = $('#time')

  if ($castState) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    $castState.innerHTML = stringify(cast.getState() as unknown as Record<string, unknown>)
  }
   
  if ($playerState) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    $playerState.innerHTML = stringify(cast.player.getState() as unknown as Record<string, unknown>)
  }

  if ($time) {
    $time.innerHTML = `${cast.player.getFormattedTime(cast.player.getState().currentTime)}`
  }

  $('#play-stop-button')?.addEventListener('click', () => {
    cast.player.togglePlay()
  })

  $('#volume')?.addEventListener('change', (event) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const volume = Number((event.target as HTMLInputElement).value) / 100

    cast.player.setVolume(volume)
  })

  $('#end-cast-button')?.addEventListener('click', () => {
    cast.player.endCast()
  })

  $('#forward-button')?.addEventListener('click', () => {
    const state = cast.player.getState()

    cast.player.seek(state.currentTime + 30)
  })

  $('#backward-button')?.addEventListener('click', () => {
    const state = cast.player.getState()

    cast.player.seek(state.currentTime - 30)
  })

  $('#mute-unmute-button')?.addEventListener('click', () => {
    cast.player.toggleMute()
  })

  $('#start-cast-button')?.addEventListener('click', () => {
    cast.player.startCast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').catch((error) => {
      console.error(error)
    })
  })

  cast.on('playerStateChanged', (state) => {
    const $time = $('#time')
    const $playerState = $('#player-state')

    $('#volume')?.setAttribute('value', `${state.volume * 100}`)
    $('#progress-bar')?.setAttribute('value', `${state.progress}`)

    if ($playerState) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      $playerState.innerHTML = stringify(state as unknown as Record<string, unknown>)
    }

    if ($time) {
      $time.innerHTML = `${cast.player.getFormattedTime(state.currentTime)}`
    }
  })

  cast.on('castStateChanged', (state) => {
    const $castState = $('#cast-state')

    if ($castState) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      $castState.innerHTML = stringify(state as unknown as Record<string, unknown>)
    }
  })
}

document.addEventListener('DOMContentLoaded', init)
