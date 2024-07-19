var y = 1;
if (function f() { }) {
  y += typeof f;
}
console.log("🚀 ~ f:", typeof f)
console.log(y);