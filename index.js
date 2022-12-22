const MAX_ATTRIBUTES = 6;
const MINIMAL_SCORE = 12;

function getScores(totalOfAttributes) {
  const scores = new Array(totalOfAttributes);

  for (let i = 0; i < totalOfAttributes; i++) {
    scores[i] = (setMinimalScore(roll4D6()));
  }

  return scores;
}

function setMinimalScore(score) {
  while (score < MINIMAL_SCORE) {
    score = roll4D6();
  }

  return score;
}

function roll4D6() {
  const values = rollDice(4, 6);
  values.sort((a, b) => b - a);
  values.pop();

  let total = values.reduce((total, value) => total += value);

  return total;
}

function rollDice(number, dice) {
  const numbers = new Array(number);

  for (let i = 0; i < number; i++) {
    numbers[i] = getRandomNumber(dice);
  }

  return numbers;
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

console.log(getScores(MAX_ATTRIBUTES));
