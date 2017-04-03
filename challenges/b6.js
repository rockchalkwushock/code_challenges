// constraints
// A positive even integer.
// 4 ≤ n ≤ 20.
// 0 ≤ firstNumber ≤ n - 1

function circleOfNumbers(n, firstNumber) {
  const validate = checkConstraints(n, firstNumber);
  const result = validate ? processData(n, firstNumber) : 'Failed constraints';
  return result;
}

function checkConstraints(n, firstNumber) {
  switch (true) {
    case ((n < 4 || n > 20) || (n % 2 !== 0)): return false;
    case (firstNumber < 0 || firstNumber > (n - 1)): return false;
    default: return true;
  }
}

function processData(n, firstNumber) {
  // http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  // ES6: [...Array(10).keys()] so sleek & sexy!
  const array = Array.from(Array(n).keys());
  const mid = Math.floor(array.length / 2);
  if(firstNumber < mid) {
    return array[firstNumber + mid];
  } else {
    return array[firstNumber - mid];
  }
}

module.exports = circleOfNumbers;