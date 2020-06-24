const login = document.querySelector('nav ul li:nth-child(1)');
const regist = document.querySelector('nav ul li:nth-child(2)');
const forgot = document.querySelector('nav ul li:nth-child(3)');
const frmlogin = document.querySelector('section:nth-child(2)');
const frmregist = document.querySelector('section:nth-child(3)');
const frmforgot = document.querySelector('section:nth-child(4)');

login.addEventListener('click',()=>{
    login.classList.add('active');
    regist.classList.remove('active');
    forgot.classList.remove('active');

    frmlogin.classList.remove('form-hidden');
    frmregist.classList.remove('form-show');
    frmforgot.classList.remove('form-show');
});
regist.addEventListener('click',()=>{
    login.classList.remove('active');
    regist.classList.add('active');
    forgot.classList.remove('active');

    frmlogin.classList.add('form-hidden');
    frmregist.classList.add('form-show');
    frmforgot.classList.remove('form-show');
});
forgot.addEventListener('click',()=>{
    login.classList.remove('active');
    regist.classList.remove('active');
    forgot.classList.add('active');

    frmlogin.classList.add('form-hidden');
    frmregist.classList.remove('form-show');
    frmforgot.classList.add('form-show');
});

