"use string"
let letter = document.querySelectorAll('.symbol');
let str =
setTimeout(function() {
str = prompt("Что показать?","")}, 2000);


let conf = function() {confirm("Начинаем?") ? setTimeout(start, [1000]) : undefined;}
console.log(letter);

let start = function() {

  // if (!((str.length / 2) % 2 === 0)) {
  //     str += ".";
  //     console.log(str);
  // };

  for (var i = 0; i < letter.length; i++) {
    letter[i].classList.add("symbol-ani");
  };
  for (var i = (letter.length / 2) - Math.ceil(str.length / 2), j = 0; i < (letter.length / 2) + Math.ceil(str.length / 2); i++, j++ ) {
      letter[i].textContent = str[j];
      letter[i].classList.add("color");
  }
  for (var i = 0; i < (letter.length / 2) - Math.ceil(str.length / 2); i++) {
    letter[i].textContent = "$"
  }
  for (var i = (letter.length / 2) + Math.ceil(str.length / 2); i < letter.length; i++) {
    letter[i].textContent = "%"
  }

}


setTimeout(conf, 2000);
