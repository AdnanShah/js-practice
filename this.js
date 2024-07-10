window.name = "global";

var person = {
  name: "jason",

  shout: function () {
    console.log("my name is ", this.name);
  },
  shout2: () => {
    console.log("my name is ", this.name);
  },
  // Shorter syntax
  shout3() {
    console.log("my name is ", this.name);
  }
};

person.shout();  // "jason"
person.shout2(); // "global"
person.shout3(); // "jason"

// let name = "global";

// var person = {
//   name: "jason",

//   shout: function () {
//     console.log("my name is ", this.name);
//   },
//   shout2: () => {
//     console.log("my name is ", this.name);
//   },
//   // Shorter syntax
//   shout3() {
//     console.log("my name is ", this.name);
//   }
// };

// person.shout();  // "jason"
// person.shout2(); // "global"
// person.shout3(); // "jason"


// let name = "Suprabha"
// let newObject = {
//   name: "supi",
//   arrowFunc: () => {
//     console.log('arrowFunc', this.name);
//   },
//   regularFunc() {
//     console.log('regularFunc', this.name);
//   }
// }
// newObject.arrowFunc(); // Suprabha
// newObject.regularFunc(); // supi

// // function print() {
// //   console.log(arguments)
// // }

// // // print()
// // print("hello", 400, false)


// // const print = () => {
// //   console.log(arguments)
// // }

// // print("hello", 400, false)

// // const obj = {
// //   name: 'deeecode',
// //   age: 200,
// //   print: () => {
// //     console.log(this)
// //     console.log(this)
// //   }
// // }

// // obj.print()

