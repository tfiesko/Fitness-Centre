// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (document.querySelector('.swiper-reviews')) {
  const swiperReviews = new Swiper('.swiper-reviews', {
    // Optional parameters
    spaceBetween: 30,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
  });
}
