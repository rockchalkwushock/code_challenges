// constraints
// 0 ≤ n < 60 · 24

function lateRide(n) {
  const validate = checkConstraints(n);
  const result = validate ? processData(n) : 'Failed constraints';
  console.log(`v: ${validate}, r: ${result}`);
  return result;
}

function checkConstraints(n) {
  if (n < 0 || n > (60 * 24)) {
    return false;
  }
  return true;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR
function processData(n) {
  var hours = n / 60 | 0,
      minutes = n % 60;
  return (hours / 10 | 0) + hours % 10 + (minutes / 10 | 0) + minutes % 10;
}

module.exports = lateRide;
