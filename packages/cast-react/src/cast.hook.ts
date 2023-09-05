import { useContext, useEffect, useState } from 'react'
import type { CastInstance, Events } from '@jdion/cast'
import { CastContext } from './cast.context'

export const useCast = (): CastInstance => {
  const context = useContext(CastContext)

  if (!context) {
    throw new Error('Cast instance not provided to <CastProvider />')
  }

  return context
}

export const useEventListener = <E extends keyof Events>(eventName: E) => {
  const [state, setState] = useState<Events[E] | null>(null)
  const chromecast = useCast()

  useEffect(() => {
    chromecast.on(eventName, setState)
  }, [chromecast, eventName])

  return state
}
