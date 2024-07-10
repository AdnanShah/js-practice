// find the correct order and insert it correctly
const insertionSort = array => {

  for (let i = 1; i < array.length; i++) {

    for (let j = i - 1; j >= 0; j--) {

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] =
          [array[j + 1], array[j]]
      }
    }
  }


  // for (let i = 1; i < array.length; i++) {
  //   let j = i - 1

  //   while (j >= 0 && array[j] > array[j + 1]) {
  //     [array[j], array[j + 1]] =
  //       [array[j + 1], array[j]]

  //     j--
  //   }
  // }


  return array
}

const arr = [5, 1, 0, 3, 2, 4]

const sortedArray = insertionSort(arr)
console.log("🚀 ~ sortedArray:", sortedArray)
