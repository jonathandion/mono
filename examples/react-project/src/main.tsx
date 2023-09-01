import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './app'
import './index.css'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App name="app-test"/>
  </StrictMode>,
)
