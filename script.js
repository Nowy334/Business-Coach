const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav__links');


menuBtn.addEventListener('click', ()=>{

    menuBtn.classList.toggle('open');
    nav.classList.toggle('nav-active');

});

