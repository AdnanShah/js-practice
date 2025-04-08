// The factorial of a number n is the product of all positive integers from 1 to n.

const factorial = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

// console.log(factorial(2)); // 2
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(10)); // 3628800

const factorialRecursive = (n) => {
  if (n === 1) return 1;

  return n * factorialRecursive(n - 1);
};

console.log("factorialRecursive =>", factorialRecursive(2)); // 2
console.log("factorialRecursive =>", factorialRecursive(5)); // 120
// console.log(factorialRecursive(0)); // 1
// console.log(factorialRecursive(10)); // 3628800
