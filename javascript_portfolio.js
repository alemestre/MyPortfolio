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


let i = 0;

var speed = 100; 

function typeWriter(element,txt) {
    console.log(txt)
  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () {
        typeWriter(element,txt);
    }, speed);
  }
}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  scroll1 = 0
document.addEventListener("scroll", function () {
    if (scroll1 == 0) {
        if (isInViewport(document.querySelector(".home__content>h1"))) {
            typeWriter(document.querySelector(".home__content>h1"),"Amelie Le Mestre")
            scroll1 = 1
        }
    }
    if (scroll1 == 0) {
        if (isInViewport(document.querySelector(".about-me__content>h1"))) {
            typeWriter()
            scroll1 = 1
        }
    }
})
