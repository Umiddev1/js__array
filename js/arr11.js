let n = 10;
let arr = [];
if (n > 0) {
  for (let i = 1; i <= n;++i) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
}
console.log(arr);