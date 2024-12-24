const navMenu = document.getElementById('nav-menu');
const abrirNav = document.getElementById('abrir-nav');
const cerrarNav = document.getElementById('cerrar-nav');

function mostrarNav() {
    navMenu.classList.remove('ocultarNav');
    navMenu.classList.add('mostrarNav');
    navMenu.style.display = 'block';
}

function ocultarNav() {
    navMenu.classList.remove('mostrarNav');
    navMenu.classList.add('ocultarNav');
}

navMenu.addEventListener('animationend', (event) => {
    if (event.animationName === 'ocultarNav') {
        navMenu.style.display = "none";
    }
});

abrirNav.addEventListener('click', mostrarNav);

cerrarNav.addEventListener('click', ocultarNav);