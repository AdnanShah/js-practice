const longestWord = str => {
  let longestWordLength = 0
  const allWords = str.split(' ')

  for (let i = 0; i < allWords.length; i++) {

    if (allWords[i].length > longestWordLength) {
      longestWordLength = allWords[i].length
    }
  }

  return longestWordLength
}

// console.log(longestWord("The quick brown fox jumps over the lazy dog")); // 'quick'

console.log(longestWord("This is a test strings")); // 'string'
