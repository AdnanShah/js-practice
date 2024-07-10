const selectionSort = array => {

  for (let i = 0; i < array.length; i++) {

    let lowestIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIndex]) {
        lowestIndex = j
      }
    }

    const temp = array[lowestIndex]
    array[lowestIndex] = array[i]
    array[i] = temp

    // [array[i], array[lowestIndex]] = [array[lowestIndex], array[i]]
  }
  return array
}

const arr = [5, 1, 0, 3, 2, 4]

const sortedArray = selectionSort(arr)
console.log("🚀 ~ sortedArray:", sortedArray)
