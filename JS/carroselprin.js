document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let intervalId;

    function updateCarousel() {
        carouselItems.forEach((item, idx) => {
            item.classList.toggle('ativo', idx === currentIndex);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function startAutoScroll() {
        intervalId = setInterval(showNextImage, 5000);
    }
    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    // Botões (mantém para desktop)
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoScroll(); showNextImage(); startAutoScroll(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoScroll(); showPrevImage(); startAutoScroll(); });

    // Swipe para mobile
    let startX = 0;
    let isSwiping = false;
    const carouselImages = document.querySelector('.carousel-images');
    if (carouselImages) {
        carouselImages.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        });
        carouselImages.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            let diff = e.touches[0].clientX - startX;
            if (Math.abs(diff) > 50) {
                if (diff < 0) {
                    stopAutoScroll();
                    showNextImage();
                    startAutoScroll();
                } else {
                    stopAutoScroll();
                    showPrevImage();
                    startAutoScroll();
                }
                isSwiping = false;
            }
        });
        carouselImages.addEventListener('touchend', () => {
            isSwiping = false;
        });
    }

    updateCarousel();
    startAutoScroll();
});