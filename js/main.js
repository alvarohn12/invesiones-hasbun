const slides = document.querySelectorAll('.slider_ofertas img');
let currentSlides = 0;

function nextSlide() {
    slides[currentSlides].style.display = 'none';
    currentSlides = (currentSlides + 1) % slides.length;
    slides[currentSlides].style.display = 'block';
}

setInterval(nextSlide, 3000); // Cambiar de diapositiva cada 3 segundos
let currentSlide = 0;

    function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    currentSlide = index;

    slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateIndicators();
    }

    function nextSlide() {
        const totalSlides = document.querySelectorAll('.slide').length;
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        const totalSlides = document.querySelectorAll('.slide').length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        showSlide(index);
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
        });
    }