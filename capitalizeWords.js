const capitalizeWords = string => {
  const words = string.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')
}

console.log(capitalizeWords("the quick brown fox")); // 'The Quick Brown Fox'
console.log(capitalizeWords("hello world")); // 'Hello World'