"use strict";

var elemCookie = document.getElementById("cookie");

function firstClick() {
  elemCookie.width = 220;
  elemCookie.height = 137;
}

function secondClick() {
  elemCookie.width = 200;
  elemCookie.height = 127;
}

function clickCounter() {
  var elemClickCounter = document.getElementById("clicker__counter");
  var number_counter;
  number_counter = parseInt(elemClickCounter.textContent);
  elemClickCounter.textContent = number_counter + 1;
}

elemCookie.onclick = function() {
  clickCounter();
  if (elemCookie.width === 220) {
    secondClick();
  } else firstClick();
}
