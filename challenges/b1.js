// Constraints
// Must be positive integer.
// 10 ≤ n ≤ 99


function addTwoDigits(n) {
  var validate = checkConstraints(n);
  var result = validate ? processData(n) : 'Failed constraints.';
  console.log(result);
  return result;
}

function checkConstraints(num) {
  switch (true) {
    case (Math.sign(num) === -1): return false;
    case (num < 10 || num > 99): return false;
    default: return true;
  }
}

function processData(num) {
  var result,
  array = num.toString().split('');
  for (var i = 0; i < array.length - 1; i++) {
    result = parseInt(array[i]) + parseInt(array[i + 1]);
  }
  return result;
}

module.exports = addTwoDigits;