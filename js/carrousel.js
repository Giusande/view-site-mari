const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotsNav = document.querySelector('.dots');

    let currentIndex = 0;
    let interval;

    // Cria os pontinhos dinamicamente
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => moveToSlide(index));
      dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    function moveToSlide(index) {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
      resetInterval();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      moveToSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Troca automática a cada 10 segundos
    function startAutoSlide() {
      interval = setInterval(nextSlide, 10000);
    }

    function resetInterval() {
      clearInterval(interval);
      startAutoSlide();
    }

    startAutoSlide();