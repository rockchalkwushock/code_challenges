// constraints
// 1 ≤ nCols ≤ 1000
// 1 ≤ nRows ≤ 1000
// 1 ≤ col ≤ nCols
// 1 ≤ row ≤ nRows

function seatsInTheater(nCols, nRows, col, row) {
  const validate = checkConstraints(nCols, nRows, col, row);
  const result = validate ? processData(nCols, nRows, col, row) : 'Failed constraints';
  return result;
}

function checkConstraints(nCols, nRows, col, row) {
  switch (true) {
    case (nCols < 1 || nCols > 1000): return false;
    case (nRows < 1 || nRows > 1000): return false;
    case (col < 1 || col > nCols): return false;
    case (row < 1 || row > nRows): return false;
    default: return true;
  }
}

function processData(nCols, nRows, col, row) {
  return (nRows - row) * (nCols - (col - 1));
}

module.exports = seatsInTheater;