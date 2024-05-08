// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    }
  }
});



//navigation
const navMenu = document.querySelector('.nav__list');

navMenu.addEventListener('click', function(e) {
  if(e.target.classList.contains('link-dropdown')) {
    e.preventDefault();

    let dropdownMenu = e.target.nextElementSibling;

    if(dropdownMenu) {
      dropdownMenu.classList.toggle('dropdown--active');
      e.target.classList.toggle('link-dropdown--active');
    }
  }
})

//search
const searchInput = document.querySelector('.search__input'),
      searchTooltip = document.querySelector('.search__tooltip');

searchInput.addEventListener('input', function(e) {
  if(e.target.value) {
    searchTooltip.classList.add('search__tooltip--hide');
  } else {
    searchTooltip.classList.remove('search__tooltip--hide');
  }
})

//mobile-menu
  const iconMenu = document.querySelector('.header-main__menu-icon');
  const menuBody = document.querySelector('.header-nav');

  let menuIsOpen = false;

  function toggleMenu() {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuIsOpen = !menuIsOpen;
  }

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      toggleMenu();
    });
  }