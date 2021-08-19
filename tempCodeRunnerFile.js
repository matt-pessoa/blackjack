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

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack!");
  hasBlackJack = true;
} else {
  console.log("You're out of the game!");
  isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);