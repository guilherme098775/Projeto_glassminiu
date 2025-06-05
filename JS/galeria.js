document.addEventListener('DOMContentLoaded', function () {
    const imagens = carrossel.querySelectorAll('img');
    let indiceAtual = 0;
    let startX = 0;
    let isDragging = false;

    function mostrarImagem(indice) {
        imagens.forEach((img, i) => {
            img.style.display = i === indice ? 'block' : 'none';
        });
    }

    // Inicializa mostrando a primeira imagem
    mostrarImagem(indiceAtual);

    // Eventos para touch (mobile)
    carrossel.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    carrossel.addEventListener('touchend', function (e) {
        if (!isDragging) return;
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            // Swipe para a esquerda (próxima imagem)
            indiceAtual = (indiceAtual + 1) % imagens.length;
            mostrarImagem(indiceAtual);
        } else if (endX - startX > 50) {
            // Swipe para a direita (imagem anterior)
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            mostrarImagem(indiceAtual);
        }
        isDragging = false;
    });

    // Eventos para mouse (desktop)
    carrossel.addEventListener('mousedown', function (e) {
        startX = e.clientX;
        isDragging = true;
    });

    carrossel.addEventListener('mouseup', function (e) {
        if (!isDragging) return;
        let endX = e.clientX;
        if (startX - endX > 50) {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            mostrarImagem(indiceAtual);
        } else if (endX - startX > 50) {
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            mostrarImagem(indiceAtual);
        }
        isDragging = false;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const lista = document.querySelector('.galeria-lista');
    const slides = document.querySelectorAll('.galeria-slide');
    const prevBtn = document.querySelector('.galeria-prev');
    const nextBtn = document.querySelector('.galeria-next');
    let indiceAtual = 0;
    let startX = 0;
    let isDragging = false;

    function mostrarSlide(indice) {
        slides.forEach((slide, i) => {
            slide.style.display = i === indice ? 'block' : 'none';
        });
    }

    // Inicializa mostrando o primeiro slide
    mostrarSlide(indiceAtual);

    // Botões prev/next
    prevBtn.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
        mostrarSlide(indiceAtual);
    });
    nextBtn.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % slides.length;
        mostrarSlide(indiceAtual);
    });

    // Swipe touch
    lista.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    lista.addEventListener('touchend', function (e) {
        if (!isDragging) return;
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            indiceAtual = (indiceAtual + 1) % slides.length;
            mostrarSlide(indiceAtual);
        } else if (endX - startX > 50) {
            indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
            mostrarSlide(indiceAtual);
        }
        isDragging = false;
    });

    // Swipe mouse
    lista.addEventListener('mousedown', function (e) {
        startX = e.clientX;
        isDragging = true;
    });
    lista.addEventListener('mouseup', function (e) {
        if (!isDragging) return;
        let endX = e.clientX;
        if (startX - endX > 50) {
            indiceAtual = (indiceAtual + 1) % slides.length;
            mostrarSlide(indiceAtual);
        } else if (endX - startX > 50) {
            indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
            mostrarSlide(indiceAtual);
        }
        isDragging = false;
    });

    // Expandir imagem ao clicar
    slides.forEach((slide) => {
        const img = slide.querySelector('img');
        if (img) {
            img.addEventListener('click', function () {
                const modal = document.getElementById('galeria-modal');
                const modalImg = document.getElementById('galeria-modal-img');
                modal.style.display = 'flex';
                modalImg.src = this.src;
            });
        }
    });
});

// Fechar modal
document.querySelector('.galeria-modal-close').addEventListener('click', function () {
    document.getElementById('galeria-modal').style.display = 'none';
});

// Fechar modal ao clicar fora da imagem
document.getElementById('galeria-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
});

$(document).ready(function(){
  $('.slider2').bxSlider({
    slideWidth: 360,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 10,
    pager: true,
    controls: true,
    auto: true,
    pause: 3000,
    speed: 500,
    adaptiveHeight: true
  });
});