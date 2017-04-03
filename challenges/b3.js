// constraints
// 1 ≤ n ≤ 10
// 2 ≤ m ≤ 100

function candies(n, m) {
  const validate = checkConstraints(n, m);
  const result = validate ? processData(n, m) : 'Failed constraints';
  return result;
}

function checkConstraints(n, m) {
  switch (true) {
    case (n < 1 || n > 10): return false;
    case (m < 2 || m > 100): return false;
    default: return true;
  }
}

function processData(n, m) {
  return m - (m % n);
}

module.exports = candies;
