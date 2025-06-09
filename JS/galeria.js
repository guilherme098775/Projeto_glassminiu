document.addEventListener('DOMContentLoaded', function () {
    const lista = document.querySelector('.galeria-lista');
    const slides = document.querySelectorAll('.galeria-slide');
    const prevButton = document.querySelector('.galeria-prev');
    const nextButton = document.querySelector('.galeria-next');
    let slideAtual = 0;

    function atualizarCarrossel() {
        lista.style.transform = `translateX(-${slideAtual * 100}vw)`;
    }

    nextButton.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % slides.length;
        atualizarCarrossel();
    });

    prevButton.addEventListener('click', () => {
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        atualizarCarrossel();
    });

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            abrePopup(`.popup${index + 1}`);
        });
    });

    // Inicializa o carrossel na posição correta
    atualizarCarrossel();
});