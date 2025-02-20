const arr = [1, 2, 3, 3, 8, 11, 4, 5, 6, 6, 5, 7, 5];

const secondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
};

console.log(secondLargest(arr)); // Output: 8
