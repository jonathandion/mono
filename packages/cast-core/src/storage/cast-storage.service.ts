const CAST_STORAGE_KEY = 'cast-session'

export const persistSession = (sessionId: string) => {
  sessionStorage.setItem(CAST_STORAGE_KEY, sessionId)
}

export const getSessionId = () => {
  return sessionStorage.getItem(CAST_STORAGE_KEY)
}

export const forgetSession = () => {
  return sessionStorage.removeItem(CAST_STORAGE_KEY)
}
