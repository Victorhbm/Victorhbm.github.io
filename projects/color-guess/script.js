const balls = document.getElementsByClassName('ball');
const colorToGuess = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const resetGameButton = document.getElementById('reset-game');
const score = document.getElementById('score');
const error = document.getElementById('error');
let counter = 0;
let counterError = 0;

function randomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function addBallsColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
  }
}
addBallsColor();

function sortColor() {
  const randomIndex = parseInt(Math.random() * 6, 10);
  const getStyle = window.getComputedStyle(balls[randomIndex]).getPropertyValue('background-color');
  colorToGuess.innerText = getStyle;
}
sortColor();

function resetGame() {
  addBallsColor();
  sortColor();
  answerText.innerText = 'Escolha uma cor!';
  score.innerText = 0;
  error.innerText = 0;
  counter = 0;
  counterError = 0;

}

resetGameButton.addEventListener('click', resetGame);

function check() {

}

function checkCorrectBall(e) {
  const bgColor = 'background-color';
  const checkClickedElement = window.getComputedStyle(e.target).getPropertyValue(bgColor);
  const checkRightColor = colorToGuess.innerText;
  if (checkClickedElement === checkRightColor) {
    counter += 3;
    score.innerText = counter;
    if (counter >= counterError) {
      answerText.innerText = 'Acertou! Ta indo bem!';
    }
    if (counter < counterError) {
      answerText.innerText = 'Acertou! Ainda dá para passar dos erros!';
    }
    addBallsColor();
    sortColor();
  } else if (checkClickedElement !== checkRightColor) {
    answerText.innerText = 'Errou! Tente novamente!';
    counterError += 1;
    error.innerText = counterError;
  }
}

function addEventToBalls() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', checkCorrectBall);
  }
}
addEventToBalls();

/* Referências:
Gerar cor aleatória:
https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
*/
