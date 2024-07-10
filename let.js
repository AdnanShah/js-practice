var counter = 30;

if (counter === 30) {
  console.log(counter); // break application with undefined
  // let counter = 31;
  let counter = 31;
  console.log(counter); // 31
}

console.log(counter); // 30 (because the variable in if block won't exist here)