const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelector('.digits');

console.log(digits);

let timer = 0;
const maxTime = 10000;

const counter = setInterval(() => {
  timer += 10;
  msTens.textContent = Math.floor(timer / 10) % 10;
  msHundreds.textContent = Math.floor((timer / 100) % 10);
  secondOnes.textContent = Math.floor((timer / 1000) % 10);
  secondTens.textContent = Math.floor(timer / 10000);
  if (timer >= maxTime) {
    clearInterval(counter);
    digits.style.color = 'red';
  }
}, 10);
