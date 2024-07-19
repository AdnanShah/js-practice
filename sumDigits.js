const sumDigits = number => {
  let digits = number.toString().split('');
  console.log("🚀 ~ digits:", digits)

  let sumOfDigits = 0

  for (let i = 0; i < digits.length; i++) {
    sumOfDigits += parseInt(digits[i])
  }

  return sumOfDigits
}

console.log(sumDigits(123)); // 6
console.log(sumDigits(456)); // 15
console.log(sumDigits(789)); // 24