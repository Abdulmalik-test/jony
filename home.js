// navbar
const nav = document.querySelector("header nav");

window.addEventListener("scroll", () => {
    const windowHeight = window.pageYOffset;

    if (windowHeight >= 500) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    } 
});

const toggle = document.querySelector('.toggle');
const links = document.querySelector("nav ul")
toggle.addEventListener("click", () => {
    links.classList.toggle("show");
})


// date

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });