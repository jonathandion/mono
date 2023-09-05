export const promisify = <T>(cb: (...args: unknown[]) => void): (...args: unknown[]) => Promise<T> => {
  return function (...args: unknown[]): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      cb(...args, (error: unknown, result: T) => {
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
