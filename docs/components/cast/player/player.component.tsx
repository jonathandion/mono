import { ExitIcon, PauseIcon, PlayIcon, SpeakerLoudIcon, SpeakerOffIcon, VideoIcon } from '@radix-ui/react-icons'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Slider } from '../../ui/slider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import { Separator } from '../../ui/separator'
import { useCast, useEventListener } from '@jdion/cast-react'
import { useState } from 'react'

export const Player = () => {
  const { player } = useCast()
  const { toggleMute, togglePlay, setVolume, state } = player
  const { isPlaying, volume, isMuted } = state
  const playerState = useEventListener('playerStateChanged')
  const castState = useEventListener('castStateChanged')
  const [volumeInput, setVolumeInput] = useState(1)

  const handleVolume = ([volume]: number[]) => {
    setVolumeInput(volume)
  }

  const onValueCommit = ([volume]: number[]) => {
    setVolume(volume)
  }

  const startCast = () => {
    player.startCast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').catch(console.error)
  }

  const endCast = () => {
    player.endCast()
  }

  return (
    <div>
      <Card className="!bg-inherit">
        <CardHeader className="flex justify-between flex-row items-center">
          <div className="grid gap-2.5">
            <CardTitle>Sintel (2010) </CardTitle>
            <CardDescription>Third Open Movie by Blender Foundation</CardDescription>
            <div className="flex align-items">
              <Badge variant="outline" className="mr-2">Animation</Badge>
              <Badge variant="outline" className="mr-2">Short</Badge>
              <Badge variant="outline">Fantasy</Badge>
            </div>
          </div>
          <img className="w-full max-w-xs h-32 object-cover border border-slate-800 rounded-md" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" alt="Sintel Poster" />
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={startCast}>
            <span className="mr-1">Cast</span>
            <VideoIcon/>
          </Button>
          <Button variant="outline" onClick={endCast}>
            <ExitIcon/>
          </Button>
          <Separator/>
          <Button variant="outline" onClick={() => togglePlay()}>{isPlaying ? <PauseIcon/> : <PlayIcon />}</Button>
          <Button variant="outline" onClick={() => toggleMute()}>{isMuted ? <SpeakerLoudIcon /> : <SpeakerOffIcon/>}</Button>
          <Separator/>
          <Slider defaultValue={[volume]} value={[volumeInput || volume]} max={1} step={0.01} onValueChange={handleVolume} onValueCommit={onValueCommit} />
        </CardContent>
      </Card>
    </div>
  )
}
