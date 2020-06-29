
const halLogin = document.querySelector('section:nth-child(1)');
const halRegist = document.querySelector('section:nth-child(2)');
const halForgot = document.querySelector('section:nth-child(3)');
const login = document.querySelector('nav ul li:nth-child(1)');
const regist = document.querySelector('nav ul li:nth-child(2)');
const forgot = document.querySelector('nav ul li:nth-child(3)');
login.addEventListener('click',()=>{
    halLogin.classList.remove('toggle-hidden');
    halRegist.classList.remove('toggle-normal')
    halForgot.classList.remove('toggle-normal');
});
regist.addEventListener('click',()=>{
    halRegist.classList.add('toggle-normal');
    halLogin.classList.add('toggle-hidden');
    halForgot.classList.remove('toggle-normal');
});
forgot.addEventListener('click',()=>{
    halForgot.classList.add('toggle-normal');
    halLogin.classList.add('toggle-hidden');
    halRegist.classList.remove('toggle-normal');
});






