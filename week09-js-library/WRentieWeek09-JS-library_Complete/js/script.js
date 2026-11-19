/*
  WEBWORKS STUDIO — WEEK 9
  Splide carousel for the supplied Northline Creative projects.
*/
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector(".projects-carousel");

  if (!carouselElement || typeof Splide === "undefined") {
    console.error("The project carousel or Splide library could not be found.");
    return;
  }

  const projectsCarousel = new Splide(carouselElement, {
    type: "slide",
    perPage: 3,
    perMove: 1,
    gap: "1.25rem",
    arrows: true,
    pagination: true,
    autoplay: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    keyboard: "focused",
    rewind: true,
    breakpoints: {
      850: {
        perPage: 2,
        gap: "1rem"
      },
      620: {
        perPage: 1,
        gap: "0.75rem"
      }
    }
  });

  projectsCarousel.mount();
});
