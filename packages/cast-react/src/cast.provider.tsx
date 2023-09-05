import type { PropsWithChildren } from 'react'
import { CastContext } from './cast.context'
import type { CastInstance } from '@jdion/cast'

export const CastProvider: React.FC<PropsWithChildren<{ instance: CastInstance }>> = ({ instance, children }) => {
  return (
    <CastContext.Provider value={instance}>
      {children}
    </CastContext.Provider>
  )
}

