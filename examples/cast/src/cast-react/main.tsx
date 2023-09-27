// eslint-disable-next-line import/default
import React from 'react'
import { createRoot } from 'react-dom/client'
import { CastDemo } from './cast.component'
import { CastProvider } from '@jdion/cast-react'
import { castInstance } from '../cast/cast.instance'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CastProvider instance={castInstance}>
      <CastDemo />
    </CastProvider>
  </React.StrictMode>,
)
