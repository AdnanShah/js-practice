// const PalindromeChecker = value => {
//   if (value === value.split('').reverse().join('')) {
//     console.log(value, true);
//     return true
//   }
//   console.log(value, false);
//   return false
// }


const PalindromeChecker = value => {
  const length = Math.floor(value.length / 2);

  for (let index = 0; index < length; index++) {
    const headValue = value[index]
    const tailValue = value[value.length - index - 1]

    if (headValue === tailValue) {
      console.log('is a palindrome')
      return true
    } else {
      console.log('is not a palindrome')
      return false
    }

  }

}


// const test = PalindromeChecker('check') // false
const test = PalindromeChecker('racecar') // true

console.log("🚀 ~ test:", test)