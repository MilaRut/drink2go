let navMain=document.querySelector(".nav"),navToggle=document.querySelector(".nav__toggle");navMain.classList.remove("nav--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("nav--hidden")?(navMain.classList.remove("nav--hidden"),navMain.classList.add("nav--visible")):(navMain.classList.add("nav--hidden"),navMain.classList.remove("nav--visible"))}));const prev=document.getElementById("btn-prev"),next=document.getElementById("btn-next"),slides=document.querySelectorAll(".slider__item"),dots=document.querySelectorAll(".slider__pagination-dot");let index=0;const activeSlide=e=>{for(slide of slides)slide.classList.remove("slider__item--active");slides[e].classList.add("slider__item--active")},activeDot=e=>{for(dot of dots)dot.classList.remove("slider__pagination-dot--active");dots[e].classList.add("slider__pagination-dot--active")},prepareCurrentSlide=e=>{activeSlide(index),activeDot(index)},nextSlide=()=>{index==slides.length-1?(index=0,prepareCurrentSlide()):(index++,prepareCurrentSlide())},prevSlide=()=>{0==index?(index=slides.length-1,prepareCurrentSlide()):(index--,prepareCurrentSlide())};dots.forEach(((e,t)=>{e.addEventListener("click",(()=>{index=t,prepareCurrentSlide()}))})),next.addEventListener("click",nextSlide),prev.addEventListener("click",prevSlide);const selectSingle=document.querySelector(".catalog__sorting"),selectSingle_title=selectSingle.querySelector(".catalog__sorting-label"),selectSingle_labels=selectSingle.querySelectorAll(".catalog__select-label");selectSingle_title.addEventListener("click",(()=>{"active"===selectSingle.getAttribute("data-state")?selectSingle.setAttribute("data-state",""):selectSingle.setAttribute("data-state","active")}));for(let e=0;e<selectSingle_labels.length;e++)selectSingle_labels[e].addEventListener("click",(e=>{selectSingle_title.textContent=e.target.textContent,selectSingle.setAttribute("data-state","")}));const COORDS={lat:59.968322,lng:30.317359},ZOOM_DEFAULT=17,mapPinIcon=L.icon({iconUrl:"./img/map-pin.svg",iconSize:[38,50],iconAnchor:[16,32]});var map=L.map("map-canvas").setView(COORDS,17);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);var marker=L.marker(COORDS,{draggable:!1,icon:mapPinIcon}).addTo(map);