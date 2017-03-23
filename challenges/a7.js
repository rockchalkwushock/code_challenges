function almostIncreasingSequence(sequence) {
  var validate = constraintCheck(sequence);
  var result = validate ? processData(sequence) : 'Failed Validation';
  console.log(result);
  return result;
}

function constraintCheck(array) {
  var len = array.length,
  check = true;
  console.log(len);
  if (len < 2 || len > 105) {
    check = false;
  } else {
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      console.log(element);
      if (element < -105 || element > 105) {
        check = false;
      }
    }
  }
  console.log(check);
  return check;
}

function processData(array) {
  var check = false;
  if (condition) {
    check = true;
  }
  return check;
}

module.exports = almostIncreasingSequence;

/**
 * Constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

sequence = array
output = boolean
 */