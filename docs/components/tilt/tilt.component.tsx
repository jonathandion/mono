import { Tilt } from '@jdion/tilt-react'

export const TiltComponent = () => {
  return (
    <div className="container mx-auto p-20 flex items-center justify-center">

      <Tilt
        className="flex h-[150px] w-[300px] content-center items-center justify-center rounded-xl border border-neutral-800"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{
          transform: 'translateZ(60px)',
        }}>
          <span className="text-white text-4xl font-bold uppercase" role="img" aria-label="alien">
            Tilt ✨
          </span>
        </div>
      </Tilt>
    </div>
  )
}
