const menu = document.querySelectorAll("nav ul");
// const menu2 = document.querySelectorAll("nav ul.pengaturan");
// const menu3 = document.querySelectorAll("nav ul.laporan");

const menu1H3 = document.querySelectorAll("nav ul.transaksi .menu-control h3");
const menu2H3 = document.querySelectorAll("nav ul.pengaturan .menu-control h3");
const menu3H3 = document.querySelectorAll("nav ul.laporan .menu-control h3");

menu1H3.forEach(e=>{
    e.addEventListener('click',()=>{
        e.parentElement.lastElementChild.classList.toggle('menu-list-open');
    })
})
menu2H3.forEach(e=>{
    e.addEventListener('click',()=>{
        e.parentElement.lastElementChild.classList.toggle('menu-list-open');
    })
})
menu3H3.forEach(e=>{
    e.addEventListener('click',()=>{
        e.parentElement.lastElementChild.classList.toggle('menu-list-open');
    })
})



menu.forEach(e=>{
    e.firstElementChild.addEventListener('click',()=>{
        e.firstElementChild.parentElement.classList.toggle('offset-menu');
    });
});
