import { CounterClockwiseClockIcon, DotsHorizontalIcon, ExitIcon, PauseIcon, PlayIcon, SpeakerLoudIcon, SpeakerOffIcon, VideoIcon } from '@radix-ui/react-icons'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Slider } from '../../ui/slider'
import { Label } from '../../ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import { useCast, useEventListener } from '@jdion/cast-react'
import { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../ui/collapsible'

const Loader = () => {
  return (
    <div role="status">
      <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export const Player = () => {
  const { player, getState } = useCast()
  const castState = getState()
  const { isConnected } = castState
  const { toggleMute, togglePlay, setVolume, seek, seekPercentage, getFormattedTime, getState: getPlayerState } = player
  const playerState = getPlayerState()
  const { volume, isMuted, currentTime, isBuffering, progress, duration, isPlaying, isMediaLoaded } = playerState
  const [progressInput, setProgressInput] = useState(currentTime)
  const [volumeInput, setVolumeInput] = useState(volume)

  useEventListener('playerStateChanged')
  useEventListener('castStateChanged')

  useEffect(() => {
    setVolumeInput(volume)
  }, [volume])

  useEffect(() => {
    setProgressInput(progress)
  }, [progress])

  const handleVolume = ([volume]: number[]) => {
    setVolumeInput(volume)
  }

  const handleSeek = ([percentage]: number[]) => {
    setProgressInput(percentage)
  }

  const onSeekCommit = ([percentage]: number[]) => {
    seekPercentage(percentage)
  }

  const onVolumeCommit = ([volume]: number[]) => {
    setVolume(volume)
  }

  const startCast = () => {
    player.startCast('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').catch(console.error)
  }

  const endCast = () => {
    player.endCast()
  }

  const PlayPauseIcon = () => {
    if (isBuffering) return <Loader />
    if (isPlaying) return <PauseIcon /> 

    return <PlayIcon />
  }

  return (
    <Card className="!bg-inherit m-auto">
      <CardHeader className="flex justify-between md:flex-row md:items-center">
        <div className="grid gap-2.5 md:mb-0 mb-5">
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
        <div className="flex justify-between">
          <Button disabled={!isConnected} className="w-20" variant="outline" onClick={endCast}>
            <ExitIcon />
          </Button>
          <Button disabled={!isMediaLoaded} className="w-20" variant="outline" onClick={() => toggleMute()}>{isMuted ? <SpeakerLoudIcon /> : <SpeakerOffIcon />}</Button>
          <Button className="w-20" onClick={startCast}>
            <span className="mr-1">Cast</span>
            <VideoIcon />
          </Button>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-xs">{getFormattedTime(currentTime)}</span>
          <Slider 
            defaultValue={[progress]} 
            disabled={!isMediaLoaded || isBuffering} 
            className="my-8" 
            max={100} 
            step={0.01} 
            onValueChange={handleSeek} 
            onValueCommit={onSeekCommit}
            value={[progressInput]} 
          />
          <span className="ml-4 text-xs">{getFormattedTime(duration)}</span>
        </div>
        <div className="flex justify-between">
          <Button disabled={!isMediaLoaded} className="w-20" variant="outline" onClick={() => seek(currentTime - 15)}><CounterClockwiseClockIcon /></Button>
          <Button disabled={!isMediaLoaded || isBuffering} className="w-60" variant="outline" onClick={() => togglePlay()}><PlayPauseIcon/></Button>
          <Button disabled={!isMediaLoaded} className="w-20" variant="outline" onClick={() => seek(currentTime + 15)}><CounterClockwiseClockIcon className="transform scale-x-[-1]" /></Button>
        </div>
        <Collapsible className="mt-8">
          <CollapsibleTrigger asChild={true}>
            <Button variant="outline">
              <DotsHorizontalIcon/>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="w-full">
            <div className="grid gap-4 mt-6">
              <div>
                <Label>Volume</Label>
                <Slider disabled={!isMediaLoaded} defaultValue={[volume]} value={[volumeInput]} max={1} step={0.01} onValueChange={handleVolume} onValueCommit={onVolumeCommit} />
              </div>
              <div>
                <Label>Cast State</Label>
                <pre className="whitespace-pre-wrap text-sm bg-slate-800/20 rounded-md p-4 mt-4">{JSON.stringify(castState, null, 2)}</pre>
              </div>
              <div>
                <Label>Player State</Label>
                <pre className="whitespace-pre-wrap text-sm bg-slate-800/20 rounded-md p-4 mt-4">{JSON.stringify(playerState, null, 2)}</pre>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
