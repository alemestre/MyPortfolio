function burgerMenu() {
    const menu = document.getElementById('mobile-menu')
    const navBarMenu = document.querySelector(".navbar__menu")
    const navBarContent = document.querySelector(".navbar__menu__content")
    const items = document.querySelector("navbar__menu__content>li")
    console.log(items)


    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        navBarMenu.classList.toggle('is-active');
        navBarContent.classList.toggle('is-active');
        console.log('ok')
    })
    navBarContent.addEventListener('click', function() {
        navBarMenu.classList.remove('is-active')
    })
}

burgerMenu()

// Apparition titre 
let h1 = document.querySelector("h1")
let h2AboutMe = document.querySelector(".about-me h2")
let h2Skills = document.querySelector(".skills h2")
let h2Portfolio = document.querySelector(".portfolio>h2")
let h2Contact = document.querySelector(".contact>h2")

let textH1 = "Amélie Le Mestre"
let textH2About = "A propos"
let textH2Skills = "Compétences"
let textH2Portofio = "Portfolio"
let textH2Contact = "Contact"



titre = [h1, h2AboutMe, h2Skills, h2Portfolio, h2Contact];
texte = [textH1, textH2About, textH2Skills, textH2Portofio, textH2Contact]

elements = [[h1, textH1, 0,100], [h2AboutMe, textH2About,0,150], [h2Skills, textH2Skills,0,150], [h2Portfolio,textH2Portofio,0,150], [h2Contact,textH2Contact,0,150]]



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function typeWriter(element, txt,i,speed) {
    console.log(txt, speed)

    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(element, txt,i, speed);
        }, speed);
    }
}

document.addEventListener("scroll", function () {
    elements.forEach(element => {
        if (element[2] == 0) {
            if (isInViewport(element[0])) {
                typeWriter(element[0], element[1],0, element[3]);
                element[2] = 1;
            }

        }
    });

})


