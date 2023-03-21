/*
body의 이미지가 새로고침할때 마다 변경됨
1)이미지가 여러개 있어야함 2)이미지는 랜덤한 순서로 변경됨
새로고침 할때마다 => body를 새로 부를때마다 바뀜
랜덤값은 매스랜덤씀 정수값을위해 *100 그리고 소수는 버림
*/

const body = document.querySelector('body');
const images = [
  '훈이.jpg',
  '유리.jpg',
  '철수.jpeg',
  '부리부리3.jpeg',
  '부리부리.png',
  '흰둥이.jpeg',
];
let randomIndex = Math.floor(Math.random() * images.length);

let good = () => {
  body.style.backgroundImage = `url(./image/${images[randomIndex]})`;
  body.style.backgroundSize = '300px';
};

good();
