import { Tilt } from '@jdion/tilt-react'
import './app.css'

export const App = () => {
  return (
    <div className="container mx-auto p-20 flex items-center justify-center">
      <Tilt
        className="flex h-[200px] w-[200px] content-center items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
        style={{
          boxShadow: '0 48px 60px 0 rgba(2,14,26,.24)',
          transformStyle: 'preserve-3d',
        }} 
      >
        <div style={{
          transform: 'translateZ(60px)',
        }}>
          <span className="text-6xl" role="img" aria-label="alien">👽</span>
        </div>
      </Tilt>
    </div>
  )
}

