const getNaturalSum = n => {
  let sum = 0

  for (let i = 0; i <= n; i++) {
    sum += i
  }

  return sum
}

console.log(getNaturalSum(2))
console.log(getNaturalSum(20))


const getNaturalSumRecersive = n => {

  if (n < 1) return n

  return n + getNaturalSumRecersive(n - 1)
}

console.log(getNaturalSumRecersive(2))
console.log(getNaturalSumRecersive(20))


// function getFactorial(num) {
//   return 5 + getFactorial(4);
//               4 + getFactorial(3);
//                   3 + getFactorial(2);
//                       2 + getFactorial(1);
//                           return 1;
//   }