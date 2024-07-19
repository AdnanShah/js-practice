for (let number = 1; number < 100; number++) {
  if (number % 3 == 0 && number % 5 === 0) {
    console.log(`${number} FIZZ && BUZZ`)
  }
  else if (number % 5 === 0) {
    console.log(`${number} BUZZ`)
  }
  else if (number % 3 === 0) {
    console.log(`${number} FIZZ`)
  }
  else {
    console.log(`${number}`)
  }
}