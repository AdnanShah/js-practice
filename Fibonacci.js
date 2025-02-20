const fibonacci = n => {
  let a = 0, b = 1

  for (let i = 2; i <= n; i++) {
    let temp = a + b
    a = b
    b = temp
  }

  return b
}


// const fibonacci = n => {
//   if (n <= 1) return n

//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

console.log("🚀 ~ fibonacci:", fibonacci(2)) // [0, 1]
console.log("🚀 ~ fibonacci:", fibonacci(5)) // [0, 1, 1, 2, 3]
console.log("🚀 ~ fibonacci:", fibonacci(10)) // [0, 1, 1, 2, 3]