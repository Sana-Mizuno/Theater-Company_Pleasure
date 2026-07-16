const slides = document.querySelectorAll('.hero__slide');
const buttons = document.querySelectorAll('.hero__nav button');
let current = 0;

function showSlide(index) {
    if (!slides.length) {
        return;
    }
    slides[current].classList.remove('active');
    if (buttons[current]) {
        buttons[current].classList.remove('active');
    }
    current = index;
    slides[current].classList.add('active');
    if (buttons[current]) {
        buttons[current].classList.add('active');
    }
}

function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
}

if (slides.length && buttons.length) {
    let slideInterval = setInterval(nextSlide, 6000);

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 6000);
        });
    });
}

const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const backdrop = document.querySelector('[data-navbar-backdrop]');

if (toggle && menu && backdrop) {
    function toggleMenu() {
        const open = menu.classList.toggle('open');
        backdrop.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
        menu.setAttribute('aria-hidden', !open);
    }

    toggle.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);

    document.querySelectorAll('.navbar__menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            backdrop.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
        });
    });
}
