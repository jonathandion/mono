export const promisify = <T>(callbackBasedFunction: (...args: unknown[]) => void): (...args: unknown[]) => Promise<T> => {
  return function (...args: unknown[]): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      callbackBasedFunction(...args, (error: unknown, result: T) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(result)
        }
      })
    })
  }
}
