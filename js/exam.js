const imgs = document.getElementById('imgs');
const elLeftBtn = document.getElementById('prev');
const elRightBtn = document.getElementById('next');

let img = document.querySelectorAll('#imgs img');
let one = 0;

function changeImage() {
  if (one > img.length - 1) {
    one = 0;
  }
  else if (one < 0) {
    one = img.length - 1;
  }
  imgs.style.transform = `translateX(${-one * 500}px)`;
}
function changeRight() {
  one++;
  changeImage();
}
function changeLeft() {
  one--;
  changeImage();
}
