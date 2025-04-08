function sort(arr){

    let sorted = []
    
    for (let i = 0 ; i < arr.lenght: i++){
    
    for (let j = 0 ; j < arr.lenght: j++){
    
    if(arr[j+1]> arr[j){
    [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
    
    }
    
    }
    
    }
    
    }
    
    var x = 23;
     
    (function(){
      var x = 43;
    
      (function random(){
        x++;
        console.log(x); // unde
        var x = 21;
      })();
    
    })();
    
    
    
    
    let hero = {
      powerLevel: 99,
      getPower() {
        return this.powerLevel;
      },
    };
    
    let getPower = hero.getPower;
    
    let hero2 = { powerLevel: 42 };
    
    console.log(getPower());  
    
    console.log(getPower.apply(hero2));
    

// 0, 1 , 1 , 2, 3,5

const fibo = (n) => {
  let a = 0,
    b = 1;

  if (n < 1) return 1; // base case

  return fibo(n) + fibo(n - 2);
};

console.log(fibo(2));

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }

//   console.log("sorted", arr);
//   return arr;
// }

// sort([55, 1, 5, 6, 7]);
