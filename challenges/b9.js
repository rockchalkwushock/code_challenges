// constraints
// 3 ≤ experience ≤ 250
// 5 ≤ threshold ≤ 300
// 2 ≤ reward ≤ 65

function reachNextLevel(experience, threshold, reward) {
  const validate = checkConstraints(experience, threshold, reward);
  const result = validate ? processData(experience, threshold, reward) : 'Failed constraints';
  console.log(`v: ${validate}, r: ${result}`);
  return result;
}

function checkConstraints(experience, threshold, reward) {
  switch (true) {
    case (experience < 3 || experience > 250): return false;
    case (threshold < 5 || threshold > 300): return false;
    case (reward < 2 || reward > 65): return false;
    default: return true;
  }
}

function processData(experience, threshold, reward) {
  var nextLevel = experience + reward;
  return (nextLevel >= threshold) ? true : false;
}

module.exports = reachNextLevel;