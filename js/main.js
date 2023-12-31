const menu = document.querySelector('.menu-button')
const mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click', ()=>{
    mobileNav.classList.toggle('active')
    menu.classList.toggle('clicked')
})

const navDropDowns = document.querySelectorAll('.mobile-nav li > div.drop-down')
const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li > a.down')
mobileNavLinks.forEach((link, index) => {
    link.addEventListener('click', (event)=>{
                event.preventDefault()
console.log(index)
        link.classList.toggle('active')
        navDropDowns[index].classList.toggle('active')
        })
})

// faqs section

const faqs = document.querySelectorAll('.faqs')

faqs.forEach(faq => {

    faq.addEventListener('click', () => { 

        if(faq.classList.contains("active")){
            faq.classList.remove('active')   
        }

        else{
                  // remove all active classes
    faqs.forEach(faq1 => {
        faq1.classList.remove('active')
})
// toogle active
        faq.classList.add('active')  
        }
    })
})