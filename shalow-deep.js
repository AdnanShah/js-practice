const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
// const testCopy = typeof (JSON.stringify(original))
// console.log("🚀 ~ testCopy:", testCopy)

deepCopy.b.c = 42;

console.log(original.b.c); // 2 (unchanged)
console.log(deepCopy.b.c); // 42
