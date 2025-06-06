document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector('.galeria-lista');
    const slides = document.querySelectorAll('.galeria-slide');
    const prev = document.querySelector('.galeria-prev');
    const next = document.querySelector('.galeria-next');
    let index = 0;
    const total = slides.length;
    const slideWidth = slides[0]?.offsetWidth + 14 || 0;

    function updateCarrossel() {
        lista.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    if (prev) prev.onclick = () => { index = (index - 1 + total) % total; updateCarrossel(); };
    if (next) next.onclick = () => { index = (index + 1) % total; updateCarrossel(); };
    window.addEventListener('resize', updateCarrossel);

    // Expansão ao clicar no slide
    slides.forEach((slide, idx) => {
        // Impede arrastar imagem
        slide.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', e => e.preventDefault());
        });

        slide.addEventListener('click', function () {
            const imgs = Array.from(document.querySelectorAll('.galeria-slide img:not(.hovergaleria)'));
            let current = idx;

            function showOverlay(index) {
                // Remove overlay antigo se existir
                const old = document.querySelector('.galeria-expand-overlay');

                // Calcula índices circularmente
                const prevIdx = (index - 1 + imgs.length) % imgs.length;
                const nextIdx = (index + 1) % imgs.length;

                // Cria overlay
                const overlay = document.createElement('div');
                overlay.className = 'galeria-expand-overlay';
                overlay.innerHTML = `
                    <div class="galeria-expand-content">
                        <div class="galeria-expand-side galeria-expand-prev">
                            <img src="${imgs[prevIdx].src}" alt="" />
                            <button class="galeria-expand-btn prev">&#10094;</button>
                        </div>
                        <div class="galeria-expand-center">
                            <img src="${imgs[index].src}" alt="" />
                        </div>
                        <div class="galeria-expand-side galeria-expand-next">
                            <img src="${imgs[nextIdx].src}" alt="" />
                            <button class="galeria-expand-btn next">&#10095;</button>
                        </div>
                    </div>
                    <button class="galeria-expand-close">&times;</button>
                `;
                document.body.appendChild(overlay);

                // Impede arrastar imagem no overlay
                overlay.querySelectorAll('img').forEach(img => {
                    img.addEventListener('dragstart', e => e.preventDefault());
                });

                // Fechar overlay
                overlay.querySelector('.galeria-expand-close').onclick = () => overlay.remove();
                overlay.onclick = (e) => {
                    if (e.target === overlay) overlay.remove();
                };

                // Navegação
                overlay.querySelector('.galeria-expand-btn.prev').onclick = (e) => {
                    e.stopPropagation();
                    showOverlay(prevIdx);
                };
                overlay.querySelector('.galeria-expand-btn.next').onclick = (e) => {
                    e.stopPropagation();
                    showOverlay(nextIdx);
                };
                // Clique nas imagens laterais também navega
                overlay.querySelector('.galeria-expand-prev img').onclick = (e) => {
                    e.stopPropagation();
                    showOverlay(prevIdx);
                };
                overlay.querySelector('.galeria-expand-next img').onclick = (e) => {
                    e.stopPropagation();
                    showOverlay(nextIdx);
                };
            }

            showOverlay(current);
        });
    });
});