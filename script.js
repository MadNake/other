"use string"
let letter = document.querySelectorAll('.symbol');
let str = prompt("Что показать?","")


let conf = function() {confirm("Начинаем?") ? setTimeout(start, [1000]) : undefined;}
console.log(letter);


let start = function() {
  for (var i = 0; i < letter.length; i++) {
    letter[i].textContent = 'b'
  }
}


setTimeout(conf, [2000]);
