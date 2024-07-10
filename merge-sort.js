const sortAndMerge = (arr1, arr2) => {
  const sortedList = []

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedList.push(arr1.shift())
    } else {
      sortedList.push(arr2.shift())
    }
  }

  return [...sortedList, ...arr1, ...arr2]
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return sortAndMerge(left, right)
}

const unSortedList = [5, 4, 1, 9, 2]
console.log("🚀 ~ mergeSort:", mergeSort(unSortedList)) // [1, 2, 4, 5, 9]
