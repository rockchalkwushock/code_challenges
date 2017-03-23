function adjacentElementsProduct(inputArray) {
  var array = [];
  if (inputArray.length > 1 && inputArray.length < 11) {
    for (var i = 0; i < inputArray.length - 1; i++) {
      var element = inputArray[i];
      var adjacent = inputArray[i + 1];
      var product;
      if (element > -1001 && element < 1001) {
        if (adjacent > -1001 && adjacent < 1001) {
          product = element * adjacent;
          array.push(product);
        } else {
          return 'Adjacent value failed value constraint.'
        }
      } else {
        return 'Element value failed value constraint.'
      }
    }
  } else {
    return 'Failed array length constraint.';
  }
  array.sort((a, b) => a - b).reverse();
  return array[0];
}


module.exports = adjacentElementsProduct;
