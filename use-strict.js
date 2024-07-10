// console.log("🚀 ~ x:", x)
x = 3.14; // This will not cause an error.
console.log("🚀 ~ x:", x)
myFunction();
console.log("🚀 ~ y:", y)

function myFunction() {
  // "use strict";
  let y = 3.14; // This will cause an error
  console.log("🚀 ~ y:", y)
}