"use strict";

const timerCountdown = function() {
  const elementTime = document.getElementById("timer");
  if (elementTime.textContent === '0') {
    alert( 'Вы победили в конкурсе' );
    clearInterval(timer);
    } else {
        elementTime.textContent = elementTime.textContent - 1;
      }
}

var timer;
timer = setInterval(timerCountdown, 1000);

