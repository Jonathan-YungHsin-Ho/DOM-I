const head = document.querySelector('head');
const font = document.createElement('link');
font.href =
  'https://fonts.googleapis.com/css?family=Titillium+Web&display=swap';
font.rel = 'stylesheet';
head.append(font);

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.background = '#080808';
body.style.color = '#008f11';

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelector('.digits');

digits.style.fontFamily = 'Titillium Web';
digits.style.marginTop = '25%';

const buttons = document.createElement('div');
const start = document.createElement('button');
const reset = document.createElement('button');
start.textContent = 'Start';
reset.textContent = 'Reset';
body.append(buttons);
buttons.append(start);
buttons.append(reset);

buttons.style.width = '22%';
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-between';

const buttonStyle = document.querySelectorAll('button');
buttonStyle.forEach(element => {
  element.style.fontSize = '20px';
  element.style.borderRadius = '5px';
  element.style.border = 'none';
  element.style.fontFamily = 'Titillium Web';
  element.style.textTransform = 'uppercase';
  element.style.padding = '2% 8%';
});

const maxTime = 10000;

start.addEventListener('click', event => {
  digits.style.color = '#008f11';
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
    digits.style.color = '#008f11';
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    start.disabled = false;
  });
});
