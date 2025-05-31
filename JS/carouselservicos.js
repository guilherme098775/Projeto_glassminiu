// Carrossel com rolagem por arrastar e setas
const carrossel = document.getElementById('carrosselFotos');
let isDown = false;
let startX;
let scrollLeft;

carrossel.addEventListener('mousedown', (e) => {
  isDown = true;
  carrossel.classList.add('active');
  startX = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});
carrossel.addEventListener('mouseleave', () => {
  isDown = false;
  carrossel.classList.remove('active');
});
carrossel.addEventListener('mouseup', () => {
  isDown = false;
  carrossel.classList.remove('active');
});
carrossel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - startX) * 1.5; // Sensibilidade
  carrossel.scrollLeft = scrollLeft - walk;
});

// Touch
carrossel.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});
carrossel.addEventListener('touchend', () => {
  isDown = false;
});
carrossel.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - carrossel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carrossel.scrollLeft = scrollLeft - walk;
});

// Setas
document.querySelector('.carrossel-seta.esquerda').onclick = () => {
  carrossel.scrollBy({ left: -340, behavior: 'smooth' });
};
document.querySelector('.carrossel-seta.direita').onclick = () => {
  carrossel.scrollBy({ left: 340, behavior: 'smooth' });
};