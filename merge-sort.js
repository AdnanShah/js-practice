const mergeAndSort = (left, right) => {
  let sortedList = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedList.push(left.shift())
    } else {
      sortedList.push(right.shift())
    }
  }

  return [...sortedList, ...left, ...right]
}

const mergeSort = (arr) => {
  console.log("🚀 ~ arr:", arr)
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return mergeAndSort(left, right)
};

const unSortedList = [5, 4, 1, 9, 2];
console.log("🚀 Sorted List:", mergeSort(unSortedList));
