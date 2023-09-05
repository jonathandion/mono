import { Cast } from '@jdion/cast'

export const Player = () => {
  const cast = new Cast()

  const startCast = () => {
    cast.player.startCast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').catch(console.error)
  }

  return (
    <div>
      <button type="button" onClick={startCast}>Cast</button>
    </div>
  )
}
