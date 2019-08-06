const body = document.querySelector('body');

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelector('.digits');

const start = document.createElement('button');
const reset = document.createElement('button');
start.textContent = 'Start';
reset.textContent = 'Reset';
body.append(start);
body.append(reset);
body.style.display = 'flex';
body.style.flexDirection = 'column';

const maxTime = 10000;

start.addEventListener('click', event => {
  digits.style.color = 'black';
  let timer = 0;
  const counter = setInterval(() => {
    start.disabled = true;
    timer += 10;
    msTens.textContent = Math.floor(timer / 10) % 10;
    msHundreds.textContent = Math.floor((timer / 100) % 10);
    secondOnes.textContent = Math.floor((timer / 1000) % 10);
    secondTens.textContent = Math.floor(timer / 10000);
    if (timer >= maxTime) {
      clearInterval(counter);
      digits.style.color = 'red';
      start.disabled = false;
    }
  }, 10);

  reset.addEventListener('click', event => {
    clearInterval(counter);
    digits.style.color = 'black';
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    start.disabled = false;
  });
});
