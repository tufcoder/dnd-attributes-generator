let scores = [];

for (let i = 0; i < 6; i++) {
  setScores();
  scores = [];
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

function getAbilityScore() {
  const values = [];

  for (let i = 0; i < 4; i++) {
    values.push(rollD6());
  }

  values.sort((a, b) => b - a);
  values.pop();

  return values.reduce((total, value) => total += value);
}

function setScores() {
  for (let i = 0; i < 6; i++) {
    let score = getAbilityScore();

    while (score < 12) {
      score = getAbilityScore();
    }

    scores.push(score);
  }

  console.log(scores.sort((a,b) => b - a));
}
