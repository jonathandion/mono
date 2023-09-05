import { useCast, useEventListener } from '@jdion/cast-react'

export const CastDemo = () => {
  const cast = useCast()
  const playerState = useEventListener('playerStateChanged')
  const castState = useEventListener('castStateChanged')

  const startCast = async () => {
    await cast.player.startCast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
  }

  const endCast = () => {
    cast.player.endCast()
  }

  const togglePlay = () => {
    cast.player.togglePlay()
  }

  const toggleMute = () => {
    cast.player.toggleMute()
  }

  const seek = (state: 'backward' | 'forward') => {
    const { currentTime } = cast.player.getState()

    switch (state) {
      case 'backward':
        cast.player.seek(currentTime - 30)

        return

      case 'forward':
        cast.player.seek(currentTime + 30)

        return
    }
  }

  const setVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const volume = Number((event.target as HTMLInputElement).value) / 100

    cast.player.setVolume(volume)
  }

  return (
    <div>
      <fieldset>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button type="button" onClick={() => startCast()}>Start Cast</button>
        <button type="button" onClick={endCast}>End Cast</button>
        <br />
        <br />
        <div>
          <button type="button" onClick={togglePlay}>Play/Stop</button>
          <button type="button" onClick={toggleMute}>Mute/Unmute</button>
          <button type="button" onClick={() => seek('backward')}>Backward</button>
          <button type="button" onClick={() => seek('forward')}>Forward</button>
        </div>
        <br />
        <label htmlFor="set-volume">Volume</label>
        <br />
        <input id="set-volume" type="range" min="0" max="100" step="1" onChange={setVolume} />
      </fieldset>
      <h2>Cast State</h2>
      <pre>{JSON.stringify(castState, null, 2)}</pre>
      <h2>Player State</h2>
      <pre>{JSON.stringify(playerState, null, 2)}</pre>
    </div>
  )
}

