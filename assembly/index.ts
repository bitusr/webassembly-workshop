declare function log(n: i32): void

// if not exported (i.e. not used), not gonna be compiled
export function minusOne(n: i32): i32 {
  log(n)

  return n - 1;
}

export function fizzbuzz(n: i32): String | null {
  if (n % 15 === 0) {
    return 'fizzbuzz'
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'buzz'
  }
  return null
}

memory.grow(2)
store<u8>(0, 21) // allocate to memory
store<u8>(1, 99)

export function readMemory(n: i32): i32 {
  return load<u8>(n) // load from memory
}

export function isPrimeWasm(x: u32): bool {
  if (x < 2) {
    return false;
  }

  for (let i: u32 = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}
