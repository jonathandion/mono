import type { FC } from 'react'
import { useState } from 'react'
import './app.css'
import { cn } from '@jdion/tailwindcss/classnames'
import { isDom } from '@jdion/dom/types'

interface AppProps {
  name: string;
}

export const App: FC<AppProps> = () => {
  const [count, setCount] = useState(0)

  return (
    <div data-testid="app">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        </a>
      </div>
      <h1 className={cn('text-6xl font-bold', {
        'text-slate-500': isDom,
      })}>
        Vite + React
      </h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

