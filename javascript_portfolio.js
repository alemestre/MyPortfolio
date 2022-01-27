function burgerMenu () {
    const menu = document.getElementById('mobile-menu')
    const navbarMenu = document.querySelector(".navbar__menu")
    const body = document.querySelector("body")
    const header = document.querySelector('header')


menu.addEventListener ('click', function (){
    menu.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
    body.classList.toggle('is-active');
    header.classList.toggle('is-active');
    console.log('ok')
})
}

burgerMenu()
