// partition and sort by pivot value
const quickSort = arr => {
  if (arr.length <= 1) return arr

  const pivot = arr[0]

  const leftArr = []
  const rightArr = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const unSortedList = [5, 4, 1, 9, 2]
console.log("🚀 ~ quick Sort:", quickSort(unSortedList)) // [1, 2, 4, 5, 9]
