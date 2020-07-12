const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',()=>{
    const nav = document.querySelector('nav');
    const span1 = document.querySelector('.toggle span:nth-child(1)');
    const span2 = document.querySelector('.toggle span:nth-child(2)');
    const span3 = document.querySelector('.toggle span:nth-child(3)');

    span1.classList.toggle('toggle-navigator-spanfirst');
    span2.classList.toggle('toggle-navigator-spansec');
    span3.classList.toggle('toggle-navigator-spanthird');
    nav.classList.toggle('toggle-navigator');
});
