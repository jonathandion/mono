import load from 'load-script'

type LoadScriptArguments = Parameters<typeof load>

export const loadScript = async (src: LoadScriptArguments[0], options: LoadScriptArguments[1] = {}) =>
  new Promise((resolve, reject) => load(src, options, (err, script) => {
    if (err) reject(err)

    resolve(script)
  }))

