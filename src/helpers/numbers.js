
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{addCommas}}
   *
   * Add commas to numbers
   * @param {[type]} number [description]
   */
  Library.addHelper('addCommas', function (number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  });

 /**
  * {{formatPhoneNumber number}}
  * Output a formatted phone number
  * @author: http://bit.ly/QlPmPr
  * @param  {Number} phoneNumber [8005551212]
  * @return {Number}             [(800) 555-1212]
  */
  Library.addHelper('formatPhoneNumber', function (num) {
    num = num.toString();
    return "(" + num.substr(0, 3) + ") " + num.substr(3, 3) + "-" + num.substr(6, 4);
  });

  /**
   * {{random}}
   * Generate a random number between two values
   * @author Tim Douglas <https://github.com/timdouglas>
   * @param  {[type]} min [description]
   * @param  {[type]} max [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('random', function (min, max) {
    return _.random(min, max);
  });

  /**
   * {{toAbbr}}
   *
   * Abbreviate numbers
   * @param  {[type]} number [description]
   * @param  {[type]} digits [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('toAbbr', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 2;
    }
    // @default: 2 decimal places => 100, 3 => 1000, etc.
    digits = Math.pow(10, digits);
    var abbr = ["k", "m", "b", "t"];
    var i = abbr.length - 1;
    while (i >= 0) {
      var size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round(number * digits / size) / digits;
        // Special case where we round up to the next abbreviation
        if ((number === 1000) && (i < abbr.length - 1)) {
          number = 1;
          i++;
        }
        number += abbr[i];
        break;
      }
      i--;
    }
    return number;
  });

  Library.addHelper('toExponential', function (number, fractions) {
    if (Utils.isUndefined(fractions)) {
      fractions = 0;
    }
    return number.toExponential(fractions);
  });

  Library.addHelper('toFixed', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 0;
    }
    return number.toFixed(digits);
  });

  Library.addHelper('toFloat', function (number) {
    return parseFloat(number);
  });

  Library.addHelper('toInt', function (number) {
    return parseInt(number, 10);
  });

  Library.addHelper('toPrecision', function (number, precision) {
    if (Utils.isUndefined(precision)) {
      precision = 1;
    }
    return number.toPrecision(precision);
  });
