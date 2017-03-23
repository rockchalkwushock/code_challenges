function add(param1, param2) {
  if(!(param1 < -100) && !(param2 < -100)) {
      if(!(param1 > 1000) && !(param2 > 1000)) {
          // return param1 + param2;
          console.log(param1 + param2);
      } else {
        return "Failed Positive Bound Check.";
      }
  } else {
    return "Failed Negative Bound Check.";
  }
}

module.exports = add;