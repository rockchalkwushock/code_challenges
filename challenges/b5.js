// constraints
// 2 ≤ divisor ≤ 10
// 5 ≤ bound ≤ 100

function maxMultiple(divisor, bound) {
  const validate = checkConstraints(divisor, bound);
  const result = validate ? processData(divisor, bound) : 'Failed constraints';
  return result;
}

function checkConstraints(divisor, bound) {
  switch (true) {
    case (divisor < 2 || divisor > 10): return false;
    case (bound < 5 || bound > 100): return false;
    default: return true;
  }
}

function processData(divisor, bound) {
  return divisor * parseInt(bound / divisor);
}

module.exports = maxMultiple;