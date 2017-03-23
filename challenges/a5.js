function shapeArea(n) {
  if (n > 0 && n < 10000) {
    var totalArea = Math.pow((n * 2 - 1), 2);
    var emptyArea = (n * 2) * (n - 1);
    return totalArea - emptyArea;
  } else {
    return 'Failed constraint.'
  }
}

module.exports = shapeArea;

// 1 = 1/0/1
// 2 = 9/4/5
// 3 = 25/12/13
// 4 = 49/24/25
// 5 = 81/40/41
// 100 = 39601/19800/19801
