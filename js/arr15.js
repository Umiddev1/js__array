function fibonacci(x) {
  let fibArr = [];
  let a = 1;
  let b = 0;
  let c = null;
  while (a < x) {
    c = a;
    a = b + a;
    b = c;
    fibArr.push(a);
  }
  return fibArr;
}

console.log(fibonacci(15));
