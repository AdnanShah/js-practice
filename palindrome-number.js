/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = 0
  let copyNumber = x

  while (copyNumber > 0) {
    let lastDigit = copyNumber % 10
    reverse = reverse * 10 + lastDigit
    copyNumber = Math.floor(copyNumber / 10)
  }

  return x === reverse
};

console.log('================================', isPalindrome(121))