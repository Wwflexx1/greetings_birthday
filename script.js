// Анимация при скролле
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2 // Триггер анимации, когда элемент на 20% виден
  });

  images.forEach(image => observer.observe(image));
});