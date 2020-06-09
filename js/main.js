const menuIcon = document.querySelector('.base-menu-icon');
const navmenu = document.querySelector('.nav-menu');

if(window.innerWidth <= 798 ){
    menuIcon.addEventListener('click',function(){
        navmenu.classList.toggle('transform-out');
    });    
}


function resizeFunc(){
    let i = window.innerWidth; 
    if( i > 798 ){
        navmenu.classList.remove('transform-out');
    } else{
        navmenu.classList.add('transform-out');
    }
}
    
function loadFunc(){
    let i = window.innerWidth; 
    if( i > 798 ){
        navmenu.classList.remove('transform-out');
    } else{
        navmenu.classList.add('transform-out');
    }
}    


