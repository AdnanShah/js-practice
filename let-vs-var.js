function userDetails(username) {
  // console.log('salary', salary); // undefined due to hoisting
  if (username) {
    console.log('salary', salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible due to function scope)
  // console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");