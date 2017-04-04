// constraints
// 1 ≤ min1 ≤ 10
// 1 ≤ min2_10 ≤ 10
// 1 ≤ min11 ≤ 10
// 2 ≤ s ≤ 60

function phoneCall(min1, min2_10, min11, s) {
  const validate = checkConstraints(min1, min2_10, min11, s);
  const result = validate ? processData(min1, min2_10, min11, s) : 'Failed constraints';
  console.log(`v: ${validate}, r: ${result}`);
  return result;
}

function checkConstraints(min1, min2_10, min11, s) {
  switch (true) {
    case (min1 < 1 || min1 > 10): return false;
    case (min2_10 < 1 || min2_10 > 10): return false;
    case (min11 < 1 || min11 > 10): return false;
    case (s < 2 || s > 60): return false;
    default: return true;
  }
}

function processData(min1, min2_10, min11, s) {
  var money, minutes, result, a = 1, b;
  money = s - min1;
  b = parseInt(money / min2_10);
  if (s < min1) {
    return 0;
  } else if (money < min2_10) {
    return a;
  } else if (b > 9) {
    b = 9;
    money = money - (min2_10 * b);
    result = (money < min11) ? a + b : a + b + parseInt(money / min11);
    return result;
  } else {
    return a + b;
  }
}

module.exports = phoneCall;
