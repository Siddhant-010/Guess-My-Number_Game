'use strict';
// console.log(document.querySelector('.message').textContent);

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no number
  if (!guess) {
    displayMsg('⛔ No Number!');

    // When Player wins
  } else if (guess === secretNum) {
    displayMsg('Correct Number🏆');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    //When number is Wrong
  } else {
    if (score > 1) {
      displayMsg(guess > secretNum ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMsg('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
