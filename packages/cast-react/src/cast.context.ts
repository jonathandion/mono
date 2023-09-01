import { createContext } from 'react'

import type { CastInstance } from '@jdion/cast'

export const CastContext = createContext<CastInstance | null>(null)
