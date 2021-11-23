let arr = [2,44,1,56];
let minNumber = arr.pop();

for (let i = minNumber;i >= 0;i--) {
  if(minNumber > arr[i]) {
    console.log(arr[i]);
  }
}