//현재 시간을 1초마다 다시 화면에 출력
//현재시간 date()
//현재 시간 들고와도 자동으로 값이 바뀌지는 않음
//그 값을 새로 들고오면 바뀜
//(새로고침이 아니라 new Date()값을 새로 할당하면됨)
//타이머 함수인 interval을 이용하면 실시간 new Date가능
//노가다 하기싫음 innderHTML에 숫자를 date()를 통해 수정해야함

let getClock = () => {
  let date = new Date(); //new라서 객체임 현재 시간을 가저옴
  const clock = document.querySelector('#clock');
  const year = document.querySelector('#year');

  const currentYear = date.getFullYear();
  const weather = String(date.getMonth()).padStart(2, '0');
  const today = date.getDate();

  let hour = String(date.getHours()).padStart(2, '0');
  let mimute = String(date.getMinutes()).padStart(2, '0');
  let second = String(date.getSeconds()).padStart(2, '0');

  //이렇게만하면 멈춰있고 끝임 그래서 타이머 함수 적용해줘야함
  clock.innerHTML = `<span style="color:red">${hour}시 ${mimute}분 ${second}초</span>`;
  year.innerHTML = `<span style="color:blue">${currentYear}년 ${weather}월:${today}일 Mon</span>`;
};

//타이머 함수를 통해서 1초마다 시간을 받아오게 작성
setInterval(getClock, 1000);
getClock();
