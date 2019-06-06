"use strict";

const getSliderItemActive = document.getElementsByClassName("slider__item");
const arrowPrev = document.getElementsByClassName("slider__arrow slider__arrow_prev");
const arrowNext = document.getElementsByClassName("slider__arrow slider__arrow_next");
let numberSlide = 0;
let prevSlide;

arrowPrev.item(0).onclick = function() {
    prevSlide = numberSlide;
    numberSlide = numberSlide - 1;
    if (numberSlide === -1) { numberSlide = 4;}
    getSliderItemActive.item(numberSlide).classList.add("slider__item_active");
    getSliderItemActive.item(prevSlide).classList.remove("slider__item_active");
    return numberSlide;
}

arrowNext.item(0).onclick = function() {
   prevSlide = numberSlide;
   numberSlide = numberSlide + 1;
   if (numberSlide === 5) { numberSlide = 0;}
   console.log(numberSlide);
    getSliderItemActive.item(numberSlide).classList.add("slider__item_active");
    getSliderItemActive.item(prevSlide).classList.remove("slider__item_active");
   return numberSlide;
}