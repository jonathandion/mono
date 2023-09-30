import { Tilt } from '@jdion/tilt-react'
import './app.css'

export const App = () => {
  return (
    <div className="container mx-auto p-20 flex items-center justify-center">
      <Tilt className="h-[250px] w-[250px] drop-shadow-2xl text-6xl flex items-center justify-center max-w-sm p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow">👽</Tilt>
    </div>
  )
}

