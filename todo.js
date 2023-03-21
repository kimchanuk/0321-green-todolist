/* 투두리스트 만들기 */
// 추가) 할일 값을 받아와서 ul의 li로 출력하기
// 완료) 할일을 완료(체크)를 했을때, 완료표시
// 삭제) 할일을 삭제

// 할일 입력창에 값을 입력하고 sumbit을 했을때(이벤트)-form
// 작성한 할일을 ul에 li로 추가(실행할 함수)
const todoForm = document.querySelector('#memo-form');
todoForm.addEventListener('submit', todoAdd);
let count = document.querySelector('#count');

// 투두를 추가하는 함수
function todoAdd(e) {
  e.preventDefault();
  randomIndex = Math.floor(Math.random() * images.length);
  good();
  // input태그의 값을 가져와서 ul의 list로 추가하기
  // todoForm.firstElementChild 는 input type=text
  const todoValue = todoForm.firstElementChild.value;

  // li태그 생성 ul찾아서 추가
  const li = document.createElement('li');

  // li태그에 추가할 내용 : 체크박스, 텍스트노드, 버튼
  // 태그 생성
  const check = document.createElement('input');
  check.type = 'checkbox';
  const text = document.createTextNode(todoValue);
  const button = document.createElement('button');
  button.innerHTML = 'X';

  // li 태그에 생성한 태그 추가
  li.appendChild(check);
  li.appendChild(text);
  li.appendChild(button);

  //document.querySelector("#todolist"); ul
  document.querySelector('#todolist').appendChild(li);
  checkToDo();
  // input의 value값을 "" 으로 바꿈
  todoForm.firstElementChild.value = '';

  // check에 클릭 이벤트 추가
  check.addEventListener('click', todoCheck);
  // button에 클릭 이벤트 추가
  button.addEventListener('click', todoDelete);
}

// check에 들어가는 todoCheck 함수 작성
function todoCheck(e) {
  // 이벤트 객체를 통해서
  // 이벤트가 실행된 태그 찾아서 값 사용
  const check = e.target;
  const li = check.parentNode;
  if (check.checked) {
    li.style.color = 'lightgray';
  } else {
    check.parentNode.style.color = '';
  }
  checkToDo();
}

// 버튼에 클릭 이벤트를 추가해서
// 선택된 li가 삭제되는 함수 작성 remove()
function todoDelete(e) {
  const button = e.target;
  const li = button.parentNode;
  li.remove();
  checkToDo();
}

function checkToDo() {
  const lilength = document.querySelectorAll('li');
  const checked = document.querySelectorAll('li input:checked');

  count.innerHTML = `전체할일 : ${lilength.length} 남은할일: ${checked.length}`;
}
