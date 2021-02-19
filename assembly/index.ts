// if not exported (i.e. not used), not gonna be compiled
export function minusOne(n: i32): i32 {
  if (n === 44) {
    // abort is implemented in the loader.js and passed from there
    // i.e. we can import javascript functions in our WebAssembly code
    abort()
  }

  return n - 1;
}
