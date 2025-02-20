// O(n log n)
// divide-and-conquer
const quickSort = (arr) => {
  if (arr.length <= 1) return arr

  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
};

const unSortedList = [5, 4, 1, 9, 2];
console.log("🚀 ~ Quick Sort Result:", quickSort(unSortedList));
