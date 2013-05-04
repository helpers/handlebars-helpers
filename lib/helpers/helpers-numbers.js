(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils;

    Utils = require('../utils/utils');
    Handlebars.registerHelper('toFixed', function(number, digits) {
      if (Utils.isUndefined(digits)) {
        digits = 0;
      }
      return number.toFixed(digits);
    });
    Handlebars.registerHelper('toPrecision', function(number, precision) {
      if (Utils.isUndefined(precision)) {
        precision = 1;
      }
      return number.toPrecision(precision);
    });
    Handlebars.registerHelper('toExponential', function(number, fractions) {
      if (Utils.isUndefined(fractions)) {
        fractions = 0;
      }
      return number.toExponential(fractions);
    });
    Handlebars.registerHelper('toInt', function(number) {
      return parseInt(number, 10);
    });
    Handlebars.registerHelper('toFloat', function(number) {
      return parseFloat(number);
    });
    Handlebars.registerHelper('addCommas', function(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    });
    Handlebars.registerHelper('toAbbr', function(number, digits) {
      var abbr, i, size;

      if (Utils.isUndefined(digits)) {
        digits = 2;
      }
      digits = Math.pow(10, digits);
      abbr = ["k", "m", "b", "t"];
      i = abbr.length - 1;
      while (i >= 0) {
        size = Math.pow(10, (i + 1) * 3);
        if (size <= number) {
          number = Math.round(number * digits / size) / digits;
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
    return this;
  };

}).call(this);
