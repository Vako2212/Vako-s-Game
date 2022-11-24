'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const number = document.querySelector('.number');
  document.querySelector('.guess').style.border = '4px solid red';

  if (!guess) {
    message.textContent = '🚫 NO NUMBER!';
  } else if (guess === secretNumber) {
    message.textContent = '🥳 CORRECT NUMBER!';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').style.border = '4px solid green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 TOO HIGH!' : '📉 TOO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = '🤨';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').style.border = '4px solid #eee';
});
