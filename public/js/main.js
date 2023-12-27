const menu = document.querySelector('.menu-button')
const mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click', ()=>{
    mobileNav.classList.toggle('active')
    menu.classList.toggle('clicked')
})

const navDropDowns = document.querySelectorAll('.mobile-nav li > div.drop-down')
const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li > a.down')
console.log(mobileNavLinks)
mobileNavLinks.forEach((link, index) => {
    link.addEventListener('click', (event)=>{
                event.preventDefault()
console.log(index)
        link.classList.toggle('active')
        navDropDowns[index].classList.toggle('active')
        })
})