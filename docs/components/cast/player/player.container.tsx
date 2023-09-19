import { CastProvider } from '@jdion/cast-react'

import { Cast } from '@jdion/cast'
import { Player } from './player.component'

const cast = new Cast()

export const CastPlayer = () => {
  return (
    <CastProvider instance={cast}>
      <Player />
    </CastProvider>
  )
}

