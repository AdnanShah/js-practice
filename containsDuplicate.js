const findDuplicates = nums => nums.filter((num, i) => nums.indexOf(num) !== i)

const arr = [4, 5, 12, 5, 4]
console.log("🚀 ~ findDuplicates:", findDuplicates(arr))


// const hasDuplicates = (nums) => {
//   return !(nums.length === new Set(nums).size)
// }

// const hasDuplicates2 = (nums) => {
//   const numsSet = new Set()

//   for (let num of nums) {
//     if (numsSet.has(num)) {
//       return true
//     }
//     numsSet.add(num)
//   }
//   return false
// }

// // const arr = [4, 5, 12, 5, 4]

// // hasDuplicates(arr)
// // console.log("🚀 ~ hasDuplicates(arr):", hasDuplicates(arr))

// // const arr1 = [4, 5, 12]

// // console.log("🚀 ~ hasDuplicates(arr1):", hasDuplicates(arr1))



// const arr = [4, 5, 12, 5, 4]

// hasDuplicates2(arr)
// console.log("🚀 ~ hasDuplicates2(arr):", hasDuplicates2(arr))

// const arr1 = [4, 5, 12]

// console.log("🚀 ~ hasDuplicates2(arr1):", hasDuplicates2(arr1))
