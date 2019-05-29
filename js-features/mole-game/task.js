"use strict";
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

function getHole(index) {
  var holeActive;
  holeActive = document.getElementById(`hole${index}`);
  return holeActive;
} 


for (var i=1; i<10; i++) {
  var hole;
  hole = getHole(i);
  hole.onclick = clickHole;
}
