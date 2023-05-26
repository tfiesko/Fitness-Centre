// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
