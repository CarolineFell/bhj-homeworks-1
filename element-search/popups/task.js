"use strict";
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const arrModalClose = document.getElementsByClassName("modal__close");
const arrModalSuccess = document.getElementsByClassName("show-success");
const arrModalCloseLength = arrModalClose.length;

modalMain.classList.add("modal_active");

for (var i = 0; i < arrModalCloseLength; i++) {
  arrModalClose.item(i).onclick = function() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.remove("modal_active");
  }
}

arrModalSuccess.item(0).onclick = function() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}
