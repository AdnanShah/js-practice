// "Selection Sort: Finding and Placing the Smallest Element"
const selectionSort = async (array) => {
  // Loop through each element of the array
  for (let i = 0; i < array.length; i++) {
    let lowestIndex = i;
    console.log(`\nStep ${i + 1}: Start - Current Array: ${array}`);

    // Find the smallest element in the unsorted part of the array
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIndex]) {
        lowestIndex = j;
      }
    }

    // Swap the smallest element with the first unsorted element
    if (lowestIndex !== i) {
      console.log(`Swapping ${array[i]} and ${array[lowestIndex]}`);
      [array[i], array[lowestIndex]] = [array[lowestIndex], array[i]];

      // Log the array after swap
      console.log(`After Swap: ${array}`);
    }
  }

  // Final sorted array
  console.log(`\nSorted Array: ${array}`);
};

// Test the function with a sample array
const array = [40, 10, 60, 30, 50, 20];
selectionSort(array);
