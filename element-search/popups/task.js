"use strict";
document.getElementById("modal_main").className = "modal modal_active";

const arrModalClose = document.getElementsByClassName("modal__close");
const arrModalSuccess = document.getElementsByClassName("show-success");

const arrModalCloseLength = arrModalClose.length;

for (var i=0; i < arrModalCloseLength; i++) {
  arrModalClose.item(i).onclick = function() {
  document.getElementById("modal_main").className = "modal";
  }
}



arrModalSuccess.item(0).onclick = function() {
  document.getElementById("modal_success").className = "modal modal_active";
}


