const MAX_ATTRIBUTES = 6;
const MINIMAL_SCORE = 12;
const RULE = ruleRoll4D6;

console.log(getScores(MAX_ATTRIBUTES));

function getScores(totalOfAttributes) {
  const scores = new Array(totalOfAttributes);

  for (let i = 0; i < totalOfAttributes; i++) {
    scores[i] = getRule();
  }

  return scores;
}

function getRule() {
  return (setMinimalScore(RULE));
}

function setMinimalScore(rule) {
  let score = rule();

  while (score < MINIMAL_SCORE) {
    score = rule();
  }

  return score;
}

function ruleRoll4D6() {
  const values = sortDESC(rollDice(4, 6));
  values.pop();

  const total = values.reduce((accumulator, value) =>
    accumulator += value, 0);

  return total;
}

function ruleRoll1D8Plus10() {
  const values = rollDice(1, 8);

  return values[0] + 10;
}

function ruleRoll1D10Plus8() {
  const values = rollDice(1, 10);

  return values[0] + 8;
}

function ruleRoll3D6() {
  let numbers = new Array(7);
  let values = new Array(3);
  let total = 0;

  for (let i = 0; i < 7; i++) {
    values = rollDice(3, 6);

    total = values.reduce((accumulator, value) =>
      accumulator += value, 0);

    numbers[i] = total;

    values = new Array(3);
    total = 0;
  }

  numbers = sortDESC(numbers);

  return numbers[0];
}

function rollDice(total, dice) {
  const numbers = new Array(total);

  for (let i = 0; i < total; i++) {
    numbers[i] = getRandomNumber(1, dice);
  }

  return numbers;
}

function getRandomNumber(min, total) {
  return Math.floor(Math.random() * total) + min;
}

function sortASC(array) {
  return array.sort((a, b) => a - b);
}

function sortDESC(array) {
  return array.sort((a, b) => b - a);
}
