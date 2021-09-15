function getRandomNumber(min, max) {
  // ! [min, max[
  let getRandom = Math.floor(Math.random() * (max - min) + min);
  return getRandom;
}

let firstCard = getRandomNumber(2, 12);
let secondCard = getRandomNumber(2, 12);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = '';

const startBtn = document.getElementById('start-btn');
const messageEl = document.querySelector('#message-el');

startBtn.addEventListener('click', startGame)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;   
}

