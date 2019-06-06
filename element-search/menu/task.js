"use strict";

let findMenuSubElements = document.getElementsByClassName("menu_sub");

const lengthMenuSubElements = findMenuSubElements.length;
  for (let i = 0; i < lengthMenuSubElements; i++) {
  findMenuSubElements.item(i).previousElementSibling.onclick = function() {
     event.preventDefault();
     findMenuSubElements.item(i).classList.add("menu_active");
      for (let j = 0; j < lengthMenuSubElements; j++) {
        if (j != i ) {
          findMenuSubElements.item(j).classList.remove("menu_active");
        }
  }
    }
  }


