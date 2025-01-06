/* scrolled header background */

const navbar1 = document.querySelector('.header-navbar');
const navbar2 = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        navbar1.classList.add('scrolled');
    } else {
        navbar1.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        navbar2.classList.add('scrolled');
    } else {
        navbar2.classList.remove('scrolled');
    }
});

/* navbar button */
function myFunction() {
    let x = document.getElementById("navbar-dropdown");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

