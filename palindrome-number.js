var isPalindrome = function (x) {
  console.log("🚀 ~ x:", x)
  let originalX = x
  let reverseX = 0

  while (x > 0) {
    const lastX = x % 10
    reverseX = reverseX * 10 + lastX
    x = Math.floor(x / 10)
  }

  return originalX === reverseX
};


console.log('================================', isPalindrome(121))
console.log('================================', isPalindrome(123))