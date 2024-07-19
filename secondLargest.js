const secondLargest = nums => {
  let largest = nums[0]
  let secondlargest = nums[0]

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > largest) {
      secondlargest = largest
      largest = nums[i]
    } else if (nums[i] < largest && nums[i] > secondlargest) {
      secondlargest = nums[i]
    }
  }

  return secondlargest
}

console.log(secondLargest([5, 10, 7, 2, 1])); // Output: 7
console.log(secondLargest([20, 10, 30, 40, 50])); // Output: 40
console.log(secondLargest([-10, -5, -20, -30, 0])); // Output: -5