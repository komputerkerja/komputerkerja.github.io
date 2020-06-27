const menu1 = document.querySelector('nav ul.transaksi');
const menu2 = document.querySelector('nav ul.pengaturan');
const menu3 = document.querySelector('nav ul.Laporan');

menu1.addEventListener('click',()=>{
    menu1.classList.length == 1 ? menu1.classList += ' menu1': menu1.classList.remove('menu1');
    menu2.classList.length == 1 ? menu2.classList += ' menu2': menu2.classList.remove('menu2');
    menu3.classList.length == 1 ? menu3.classList += ' menu3': menu3.classList.remove('menu3');
});
menu2.addEventListener('click',()=>{
    menu2.classList.length == 1 ? menu2.classList += ' menu1': menu2.classList.remove('menu1');
    menu3.classList.length == 1 ? menu3.classList += ' menu3': menu3.classList.remove('menu2');
    menu1.classList.length == 1 ? menu1.classList += ' menu2': menu1.classList.remove('menu3');
});
menu3.addEventListener('click',()=>{
    menu3.classList.length == 1 ? menu3.classList += ' menu1': menu3.classList.remove('menu1');
    menu2.classList.length == 1 ? menu2.classList += ' menu2': menu2.classList.remove('menu2');
    menu1.classList.length == 1 ? menu1.classList += ' menu3': menu1.classList.remove('menu3');
});