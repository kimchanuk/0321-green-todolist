//서브밋을 눌럿을때 input값이 h1태그에 할당

const loginForm = document.querySelector('#login-form');

const loginFormText = document.querySelector('#login-form__text');

const loginFormSubmit = document.querySelector('#login-form__submit');

const greeting = document.querySelector('#greeting');

let onLogin = event => {
  event.preventDefault();
  randomIndex = Math.floor(Math.random() * images.length);
  good();
  const loginTextValue = loginFormText.value;
  const greeting = document.querySelector('#greeting');
  loginFormText.value = '';
  greeting.innerHTML = `<span style="color:red">${loginTextValue}</span> <span style="color:blue">반갑다</span>`;
  greeting.classList.toggle('hidden');
  loginForm.classList.toggle('hidden');
};

loginForm.addEventListener('submit', onLogin);
