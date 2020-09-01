'use strict';

// Drop-menu
const toggle = document.querySelector('.header__toggle');
const menu = document.querySelector('.toggle-menu');

toggle.addEventListener('click', (event) => {
  menu.style = `
    visibility: visible;
    opacity: 0.9;
  `;
});

document.addEventListener('click', (event) => {
  if (!toggle.contains(event.target)) {
    menu.style = `
      visibility: hidden;
      opacity: 0;
    `;
  }
});

// Carosel1

const cards = document.querySelectorAll('.cards-wrapper');
const prevBtn = document.querySelector('.toggle__left');
const nextBtn = document.querySelector('.toggle__right');
const dotsSlides = document.querySelectorAll('.dots__icon');
const slidesWrapper = document.querySelector('.discount__products');
const slidesField = document.querySelector('.cards-box');
const width = window.getComputedStyle(slidesWrapper).width;

let offset = 0;
let dotIndex = 0;

function carousel() {
  for (const dot of dotsSlides) {
    dot.classList.remove('dots__icon--active');

    if (dotIndex < 0) {
      dotIndex = dotsSlides.length - 1;
    }

    if (dotIndex > dotsSlides.length - 1) {
      dotIndex = 0;
    }

    dotsSlides[dotIndex].classList.add('dots__icon--active');
  }
}

slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';

slidesField.style.width = 100 * cards.length + '%';

cards.forEach(slide => {
  slide.style.width = width;
});

nextBtn.addEventListener('click', () => {
  if (offset === +width.slice(0, width.length - 2) * (cards.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;
  dotIndex++;
  carousel();
});

prevBtn.addEventListener('click', () => {
  if (offset === 0) {
    offset = +width.slice(0, width.length - 2) * (cards.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
    dotIndex--;
    carousel();
  }

  slidesField.style.transform = `translateX(-${offset}px)`;
});

// Carosel2
const slides = document.querySelectorAll('.comment-card');
const prev = document.querySelector('#btn-left');
const next = document.querySelector('#btn-right');
const dots = document.querySelectorAll('.comment-dots__icon');

let slideIndex = 0;
let dotPosition = 0;

function carouselDots() {
  for (const dot of dots) {
    dot.classList.remove('comment-dots__icon--active');

    if (dotPosition < 0) {
      dotPosition = dots.length - 1;
    }

    if (dotPosition > dots.length - 1) {
      dotPosition = 0;
    }

    dots[dotPosition].classList.add('comment-dots__icon--active');
  }
}

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // eslint-disable-next-line no-return-assign
  slides.forEach(item => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
  plusSlides(-1);
  dotPosition--;
  carouselDots();
});

next.addEventListener('click', () => {
  plusSlides(1);
  dotPosition++;
  carouselDots();
});
