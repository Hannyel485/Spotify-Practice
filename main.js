//Scroll animado
const btnAbrir = document.getElementById('buttonAbrir');
const btnCerrar = document.getElementById('buttonExit');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
var header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0);
})

btnAbrir.addEventListener('click', function(){
    overlay.classList.add('active',);
    body.classList.add('non-scroll');
})

btnCerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
    body.classList.remove('non-scroll');

})
