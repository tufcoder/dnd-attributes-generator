const MAX_ATTRIBUTES = 6;
const MINIMAL_SCORE = 12;
const RULE = ruleRoll4D6;

console.log(getScores(MAX_ATTRIBUTES));

function getScores(totalOfAttributes) {
  const scores = new Array(totalOfAttributes);

  for (let i = 0; i < totalOfAttributes; i++) {
    scores[i] = getRule();
  }

  return scores.sort((a, b) => b - a);
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
  const values = rollDice(4, 6);
  values.sort((a, b) => b - a);
  values.pop();

  const total = values.reduce((accumulator, value) =>
    accumulator += value, 0);

  return total;
}

function rule10Plus1D8() {
  const values = rollDice(1, 8);

  return 10 + values[0];
}

function rule8Plus1D10() {
  const values = rollDice(1, 10);

  return 8 + values[0];
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
