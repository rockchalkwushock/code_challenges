// constraints
// 1 ≤ n ≤ 7

function largestNumber(n) {
  const validate = checkConstraints(n);
  const result = validate ? processData(n) : 'Failed constraints';
  return result;
}

function checkConstraints(n) {
  if (n < 1 || n > 7) return false;
  return true;
}

function processData(n) {
  const array = new Array(n);
  for (var i = 0; i < array.length; i++) {
    array[i] = 9;
  }
  return parseInt(array.join(''));
}

module.exports = largestNumber;