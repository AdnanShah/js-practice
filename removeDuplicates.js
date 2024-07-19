const removeDuplicates = array => {
  // return [...new Set(array)]

  const uniqueArr = []


  for (let i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i])
    }
  }
  return uniqueArr

}

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]