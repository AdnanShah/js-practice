// JavaScript Currying is a technique of transforming a function that takes
// multiple arguments into a sequence of functions, each taking one argument at a time.

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8
