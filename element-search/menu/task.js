"use strict";

let findMenuSubElements = document.getElementsByClassName("menu_sub");

const lengthMenuSubElements = findMenuSubElements.length;
  for (let i = 0; i < lengthMenuSubElements; i++) {
  findMenuSubElements.item(i).previousElementSibling.onclick = function() {
     findMenuSubElements.item(i).className = "menu menu_sub menu_active";
  }
}
