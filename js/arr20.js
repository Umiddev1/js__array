let arr = [4,5,7,6,8];
let sum = 0;
let sum1 = 0;
for (let i = 0; i < arr.length;++i) {
  if (arr[i] % 2 == 0) {
    sum++;
  }
  else if (arr[i] % 2 == 1) {
    sum1++;
  }
}
console.log("Juft son",sum ,"ta bor","Toq son",sum1 ,"ta bor") ;