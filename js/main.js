const menu = document.querySelector('nav .bi-list')
const close = document.querySelector('nav .bi-x')
const mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click', ()=>{
    mobileNav.classList.add('active')
})
close.addEventListener('click', ()=>{
    mobileNav.classList.remove('active')
})