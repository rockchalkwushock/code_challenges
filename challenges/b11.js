// constraints
// 1 ≤ a ≤ 10^9
// 1 ≤ b ≤ 10^9
// 1 ≤ c ≤ 10^9

function extraNumber(a, b, c) {
  const validate = checkConstraints(a, b, c);
  const result = validate ? processData(a, b, c) : 'Failed constraints';
  console.log(`v: ${validate}, r: ${result}`);
  return result;
}

function checkConstraints(a, b, c) {
  var bound = Math.pow(10, 9);
  switch (true) {
    case (a < 1 || a > bound): return false;
    case (b < 1 || b > bound): return false;
    case (c < 1 || c > bound): return false;
    default: return true;
  }
}

function processData(a, b, c) {
  return (a === b) ? c : (a === c) ? b : a;
}

module.exports = extraNumber;