const factorial = n => {
  let result = 1

  for (let i = 1; i < n; i++) {
    result *= i
  }

  return result
}

// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(10)); // 3628800


const factorialRecursive = n => {
  console.log("🚀 ~ n:", n)
  if (n == 1) return 1

  const result = n * factorialRecursive(n - 1)
  console.log("🚀 ~ n:", n, result)
  return result
}


console.log(factorialRecursive(5)); // 120
// console.log(factorialRecursive(0)); // 1
// console.log(factorialRecursive(10)); // 3628800
