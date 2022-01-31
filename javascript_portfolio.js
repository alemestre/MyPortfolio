function burgerMenu () {
    const menu = document.getElementById('mobile-menu')
    const navbarMenu = document.querySelector(".navbar__menu")
    const navBarContent = document.querySelector(".navbar__menu__content")
    const header = document.querySelector('header')


menu.addEventListener ('click', function (){
    menu.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
    navBarContent.classList.toggle('is-active');
    header.classList.toggle('is-active');
    console.log('ok')
})
}

burgerMenu()

// Apparition titre 
let h1= document.querySelector("h1")
let h2AboutMe = document.querySelector(".about-me h2")
let h2Skills = document.querySelector(".skills h2")
let h2Portfolio = document.querySelector(".portfolio>h2")
let h2Contact = document.querySelector(".contact>h2")

let textH1 = "Amélie Le Mestre"
let textH2About = "A propos"
let textH2Skills = "Compétences"
let textH2Portofio = "Projets"
let textH2Contact = "Contact"



titre = [h1, h2AboutMe, h2Skills, h2Portfolio, h2Contact];
texte = [textH1,textH2About, textH2Skills, textH2Portofio, textH2Contact]

console.log (titre, texte)



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
        for(let n=0; n<= titre.length ; n++) {
            if(isInViewport(titre[n])) {
                typeWriter(titre[n],texte[n]);
            }
            scroll1 = 1;
        }
 
    }
})


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