document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const btnHamburguer = document.getElementById('menu-hamburguer');

    // Abre/fecha menu hamburguer e anima o botão
    btnHamburguer.onclick = function () {
        navMenu.classList.toggle('ativo');
        btnHamburguer.classList.toggle('ativo');
    };

    // Submenu toggle
    const submenuToggle = navMenu.querySelector('li > span.submenu-toggle');
    const submenuLi = submenuToggle?.parentElement;

    if (submenuToggle && submenuLi) {
        submenuToggle.onclick = function (e) {
            e.stopPropagation();
            submenuLi.classList.toggle('open');
        };

        // Fecha submenu ao clicar fora
        document.addEventListener('click', function (e) {
            if (!submenuLi.contains(e.target)) {
                submenuLi.classList.remove('open');
            }
        });
    }
});