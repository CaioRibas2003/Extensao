// Interação de cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 15px 25px rgba(255,103,0,0.5)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0 5px 15px rgba(255,103,0,0.2)";
    });
});

// Função de fade-in ao scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Carrossel de MVPs
const carousel = document.querySelector('.prototype-carousel');

if (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    const setActiveSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentIndex = index;
    };

    prevBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        setActiveSlide(nextIndex);
    });

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setActiveSlide(nextIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => setActiveSlide(index));
    });

    setActiveSlide(0);
}

console.log("Site carregado!");

