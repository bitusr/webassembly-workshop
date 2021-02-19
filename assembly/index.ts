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
