const bubbleSort = (arr, key) => {
  let n = arr.length;
  let sortedArr = [...arr]; // Create a copy to avoid mutating original data
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (sortedArr[i][key] > sortedArr[i + 1][key]) {
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]]; // Swap elements
        swapped = true;
      }
    }
  } while (swapped);

  return sortedArr;
};

const selectionSort = (arr, key, order = 'asc') => {
  let n = arr.length;
  let sortedArr = [...arr]; // Copy array to avoid mutations

  for (let i = 0; i < n - 1; i++) {
    let extremeIdx = i;

    for (let j = i + 1; j < n; j++) {
      if ((order === 'asc' && sortedArr[j][key] < sortedArr[extremeIdx][key]) ||
        (order === 'desc' && sortedArr[j][key] > sortedArr[extremeIdx][key])) {
        extremeIdx = j;
      }
    }

    if (extremeIdx !== i) {
      [sortedArr[i], sortedArr[extremeIdx]] = [sortedArr[extremeIdx], sortedArr[i]];
    }
  }

  return sortedArr;
};

const quickSort = (arr, key, order = 'asc') => {
  if (arr.length <= 1) return arr;

  let sortedArr = [...arr]; // Copy to avoid mutations
  let pivot = sortedArr[sortedArr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if ((order === 'asc' && sortedArr[i][key] < pivot[key]) ||
      (order === 'desc' && sortedArr[i][key] > pivot[key])) {
      left.push(sortedArr[i]);
    } else {
      right.push(sortedArr[i]);
    }
  }

  return [...quickSort(left, key, order), pivot, ...quickSort(right, key, order)];
};

// Mock Data
const mockData = [
  { id: 3, name: 'Alice', age: 25 },
  { id: 1, name: 'Charlie', age: 30 },
  { id: 2, name: 'Bob', age: 22 }
];

console.log("Original Data:", mockData);
// console.log("Bubble Sort by ID:", bubbleSort(mockData, 'id'));
console.log("Selection Sort by Name:", selectionSort(mockData, 'name'));
// console.log("Quick Sort by Age (Descending):", quickSort(mockData, 'age', 'desc'));
