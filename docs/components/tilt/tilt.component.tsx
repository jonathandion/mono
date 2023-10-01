import { Tilt } from '@jdion/tilt-react'

export const TiltComponent = () => {
  return (
    <Tilt className="h-[150px] mx-auto w-[300px] flex items-center justify-center rounded-xl border border-neutral-800">
      <div className="flex items-center">
        <div className="text-white text-4xl font-bold uppercase">Tilt ✨</div>
      </div>
    </Tilt>
  )
}
