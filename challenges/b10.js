// constraints
// 2 ≤ value1 ≤ 20
// 2 ≤ weight1 ≤ 10
// 2 ≤ value2 ≤ 20
// 2 ≤ weight2 ≤ 10
// 1 ≤ maxW ≤ 20

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  const validate = checkConstraints(value1, weight1, value2, weight2, maxW);
  const result = validate ? processData(value1, weight1, value2, weight2, maxW) : 'Failed constraints';
  console.log(`v: ${validate}, r: ${result}`);
  return result;
}

function checkConstraints(value1, weight1, value2, weight2, maxW) {
  switch (true) {
    case (value1 < 2 || value1 > 20): return false;
    case (weight1 < 2 || weight1 > 10): return false;
    case (value2 < 2 || value2 > 20): return false;
    case (weight2 < 2 || weight2 > 10): return false;
    case (maxW < 1 || maxW > 20): return false;
    default: return true;
  }
}

function processData(value1, weight1, value2, weight2, maxW) {
  switch (true) {
    case (weight1 > maxW && weight2 > maxW):
      return 0;
    case (weight1 > maxW || weight2 > maxW):
      return (weight1 > maxW) ? value2 : value1;
    case ((weight1 + weight2) > maxW):
      return (value1 > value2) ? value1 : value2;
    default: return value1 + value2;
  }
}

module.exports = knapsackLight;