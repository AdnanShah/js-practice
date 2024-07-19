// const fibonacci = n => {

//   const fib = [0, 1]

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]
//   }

//   return fib
// }


const fibonacci = n => {
  if (n < 0) return
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log("🚀 ~ fibonacci:", fibonacci(2)) // [0, 1]
console.log("🚀 ~ fibonacci:", fibonacci(5)) // [0, 1, 1, 2, 3]
// console.log("🚀 ~ fibonacci:", fibonacci(10)) // [0, 1, 1, 2, 3]