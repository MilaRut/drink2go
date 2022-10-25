// BURGER MENU

let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--hidden')) {
    navMain.classList.remove('nav--hidden');
    navMain.classList.add('nav--visible');
  } else {
    navMain.classList.add('nav--hidden');
    navMain.classList.remove('nav--visible');
  }
});

//SLIDER

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slider__item'),
    dots = document.querySelectorAll('.slider__pagination-dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slider__item--active');
    }
    slides[n].classList.add('slider__item--active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('slider__pagination-dot--active');
    }
    dots[n].classList.add('slider__pagination-dot--active');
};

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
    index++;
    prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
    index--;
    prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//SELECT

const selectSingle = document.querySelector('.catalog__sorting');
const selectSingle_title = selectSingle.querySelector('.catalog__sorting-label');
const selectSingle_labels = selectSingle.querySelectorAll('.catalog__select-label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

//LEAFLET

const COORDS = {
  lat: 59.968322,
  lng: 30.317359
};

const ZOOM_DEFAULT = 17;

const mapPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [16, 32],
});

var map = L.map('map-canvas').setView(COORDS, ZOOM_DEFAULT);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(
      COORDS,
      {
        draggable: false,
        icon: mapPinIcon,
      }
    ).addTo(map);
