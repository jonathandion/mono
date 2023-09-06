import { ExitIcon, PauseIcon, PlayIcon, SpeakerLoudIcon, SpeakerOffIcon, VideoIcon } from '@radix-ui/react-icons'
import { Button } from '../../ui/button'
import { Slider } from '../../ui/slider'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import { Separator } from '../../ui/separator'
import { useCast, useEventListener } from '@jdion/cast-react'
import { useState } from 'react'

export const Player = () => {
  const { player } = useCast()
  const { toggleMute, togglePlay, setVolume, state } = player
  const { isPlaying, volume, title, isMuted } = state
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
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={startCast}>
            <span className="mr-1">Cast</span>
            <VideoIcon/>
          </Button>
          <Button onClick={endCast}>
            <ExitIcon/>
          </Button>
          <Separator/>
          <Button onClick={() => togglePlay()}>{isPlaying ? <PauseIcon/> : <PlayIcon />}</Button>
          <Button onClick={() => toggleMute()}>{isMuted ? <SpeakerLoudIcon /> : <SpeakerOffIcon/>}</Button>
          <Separator/>
          <Slider defaultValue={[volume]} value={[volumeInput || volume]} max={1} step={0.01} onValueChange={handleVolume} onValueCommit={onValueCommit} />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}
