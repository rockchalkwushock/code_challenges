// Medium Article http://bit.ly/2nI6jfZ

function checkPalindrome(inputString) {
  if (inputString.length >= 1 && inputString.length <= 10) {
    const str = inputString.split('').reverse().join('');
    const check = (inputString === str) ? true : false;
    return check;
  } else {
    return "String length not met or exceeded."
  }
}

module.exports = checkPalindrome;