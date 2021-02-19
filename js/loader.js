class WasmLoader {
  constructor() {
    this._imports = {
      env: {
        abort() {
          throw new Error('Abort called from wasm file')
        }
      },
      index: {
        log(n) {
          console.log(n)
        }
      }
    }
  }

  async wasm(path, imports = this._imports) {
    console.log(`Fetching ${path}`)

    if (!loader.instantiateStreaming) {
      return this.wasmFallback(path, imports)
    }

    // instantiateStreaming takes Promise, converts to bytes
    const { instance } = await loader.instantiateStreaming(fetch(path), imports)

    return instance?.exports
  }

  async wasmFallback(path, imports) {
    console.log(`Using fallback`)

    const resp = await fetch(path)
    // array buffer is an array of raw binary data
    const bytes = await resp?.arrayBuffer()
    const { instance } = loader.instantiate(bytes, imports)

    return instance?.exports
  }
}
