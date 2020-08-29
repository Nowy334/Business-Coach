const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav__links');
const clk = document.querySelectorAll('.click');


menuBtn.addEventListener('click', ()=>{

    menuBtn.classList.toggle('open');
    nav.classList.toggle('nav-active');

});

for (let i = 0; i < clk.length; i++) {

    clk[i].addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('nav-active');
    });
}



