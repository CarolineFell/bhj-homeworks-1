"use strict";

var arrHole = ["hole1", "hole2", "hole3"];
const elemHole = document.getElementById("hole1");
const elemHole2 = document.getElementById("hole2");
const elemHole3 = document.getElementById("hole3");
const elemHole4 = document.getElementById("hole4");
const elemHole5 = document.getElementById("hole5");
const elemHole6 = document.getElementById("hole6");
const elemHole7 = document.getElementById("hole7");
const elemHole8 = document.getElementById("hole8");
const elemHole9 = document.getElementById("hole9");

const elemDead = document.getElementById("dead");
const elemLost = document.getElementById("lost");



function clickHole() {
  if (this.className.includes("hole_has-mole")) {
    var countDead;
    countDead = Number(elemDead.textContent) + 1;
    elemDead.textContent = countDead;
  } else {
    var countLost;
    countLost = Number(elemLost.textContent) + 1;
    elemLost.textContent = countLost;
  }
    isWin();
}

function isWin() {
  if (elemDead.textContent === '10') {
    alert('Победа!');
  } else if (elemLost.textContent === '5') {
    alert('Вы проиграли :(');
  }

  if ((elemDead.textContent === '10') || (elemLost.textContent === '5')) {
    elemDead.textContent = 0;
    elemLost.textContent = 0;
   }

}

elemHole.onclick = clickHole;
elemHole2.onclick = clickHole;
elemHole3.onclick = clickHole;
elemHole4.onclick = clickHole;
elemHole5.onclick = clickHole;
elemHole6.onclick = clickHole;
elemHole7.onclick = clickHole;
elemHole8.onclick = clickHole;
elemHole9.onclick = clickHole;
