function centuryFromYear(year) {
  if ((year > 0 && year < 2006)) {
    switch (true) {
      case year < 101: return 1;
      case (year >= 101 && year < 201): return 2;
      case (year >= 201 && year < 301): return 3;
      case (year >= 301 && year < 401): return 4;
      case (year >= 401 && year < 501): return 5;
      case (year >= 501 && year < 601): return 6;
      case (year >= 601 && year < 701): return 7;
      case (year >= 701 && year < 801): return 8;
      case (year >= 801 && year < 901): return 9;
      case (year >= 901 && year < 1001): return 10;
      case (year >= 1001 && year < 1101): return 11;
      case (year >= 1101 && year < 1201): return 12;
      case (year >= 1201 && year < 1301): return 13;
      case (year >= 1301 && year < 1401): return 14;
      case (year >= 1401 && year < 1501): return 15;
      case (year >= 1501 && year < 1601): return 16;
      case (year >= 1601 && year < 1701): return 17;
      case (year >= 1701 && year < 1801): return 18;
      case (year >= 1801 && year < 1901): return 19;
      case (year >= 1901 && year < 2001): return 20;
      case (year >= 2001 && year < 2006): return 21;
      default: return "No matching case found.";
    }
  } else {
      return "Input must be positive."
  }
}

module.exports = centuryFromYear;