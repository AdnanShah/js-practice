const romanToInt = (s) => {
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;

  for (let index = 0; index < s.length; index++) {
    let curr = sym[s[index]]
    let next = sym[s[index + 1]]

    if (next >= curr) {
      result += curr
    } else {
      result = curr
    }
  }

  return result
}

console.log("result:", romanToInt('III'))
console.log("result:", romanToInt('MCMXCIV'))