"use strict";

const timerCountdown = function() {
  const elementTime = document.getElementById("timer");
  elementTime.textContent = elementTime.textContent - 1;
}


setTimeout(function() {
  clearInterval(timer);
  alert( 'Вы победили в конкурсе' );
}, 60000);

timer = setInterval(timerCountdown, 1000);


