function makeArrayConsecutive2(statues) {
  var validate = constraintCheck(statues);
  var result = validate ? processData(statues) : 'Failed Validation';
  return result;
}

function constraintCheck(array) {
  var check = true,
  len = array.length;
  if (len < 1 || len > 10) {
    check = false;
  } else {
    for (var i = 0; i < array.length; i++) {
      var element = array[i],
      sign = Math.sign(element);
      // Validate all values are positive:
      if (sign === -1) {
        check = false;
      // Validate all values within bounds:
      } else if (element < 0 || element > 20) {
        check = false;
      }
    }
  }
  return check;
}

function processData(array) {
  // find min value in the array.
  var min = Math.min.apply(null, array),
  // find max value in the array.
  max = Math.max.apply(null, array);
  // Math!
  return max - min - array.length + 1;
}

module.exports = makeArrayConsecutive2;