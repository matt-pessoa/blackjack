function getRandomCard() {
  // ! [min, max[ | includes min and does not includes max
  let getRandom = Math.floor(Math.random() * 13) + 1; // Math.floor removes the decimals

  if (getRandom === 1) {
    return 11;
  } else if (getRandom > 10) {
    return 10;
  } else {
    return getRandom;
  }
}

let cardsArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = '';

const startBtn = document.getElementById('start-btn');
const messageEl = document.querySelector('#message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.querySelector('#cards-el');
const newCardBtn = document.getElementById('new-card-btn');

startBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', newCard);

function displayCards() {
  for (let index = 0; index < cardsArray.length; index += 1) {
    cardsEl.textContent += `${cardsArray[index]} `;
  }
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: `;

  displayCards();

  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cardsArray = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    const newCard = getRandomCard();
    cardsArray.push(newCard);

    sum += newCard;

    renderGame();
  }
}
