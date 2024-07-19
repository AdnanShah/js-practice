function MaxSubArraySum(arr) {

  let max = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j]
      max = Math.max(max, currentSum);
    }
  }

  return max

}


const arr = [-2, 3, -1, 2];
const max = MaxSubArraySum(arr);
console.log(max); // Output: 4


