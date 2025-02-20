// find the correct order and insert it correctly
const insertionSort = (array) => {
  console.log("Initial Array:", array.join(" "));

  // performs unnecessary swaps instead of shifting elements
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] =
          [array[j + 1], array[j]]
      }
    }
  }

  //  (shift right and insert)
  // for (let i = 1; i < array.length; i++) {
  //   let key = array[i]; // Current element to be inserted
  //   let j = i - 1;

  //   console.log(`\nIteration ${i}: Inserting ${key}`);

  //   // Shift elements greater than key to the right
  //   while (j >= 0 && array[j] > key) {
  //     array[j + 1] = array[j];
  //     j--;

  //     // Print the shifting process
  //     console.log("  ", array.join(" "));
  //   }

  //   array[j + 1] = key; // Insert at correct position

  //   // Print after insertion
  //   console.log("  ", array.join(" "));
  // }

  console.log("\nSorted Array:", array.join(" "));



  return array
}

const arr = [5, 1, 0, 3, 2, 4]

const sortedArray = insertionSort(arr)
console.log("🚀 ~ sortedArray:", sortedArray)
