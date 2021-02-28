const navMenu = document.querySelectorAll('nav ul.nav-menu li a');
navMenu.forEach((e)=>{
    e.addEventListener('click',(i)=>{
        navMenu.forEach(menu=>{
            if(menu.classList.contains('active-menu'))menu.classList.toggle('active-menu')
        });
        e.classList.toggle('active-menu')
    })
});

window.addEventListener('scroll',()=>{
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.toggle('sticky',window.scrollY > 0);
})