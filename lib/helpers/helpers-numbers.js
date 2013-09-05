/*! number helpers*/


(function() {
  var Utils, addCommas, fileSize, toAbbr, toExponential, toFixed, toFloat, toInt, toPrecision;

  Utils = require('../utils/utils');

  module.exports = {
    toFixed: toFixed = function(number, digits) {
      if (Utils.isUndefined(digits)) {
        digits = 0;
      }
      return number.toFixed(digits);
    },
    toPrecision: toPrecision = function(number, precision) {
      if (Utils.isUndefined(precision)) {
        precision = 1;
      }
      return number.toPrecision(precision);
    },
    toExponential: toExponential = function(number, fractions) {
      if (Utils.isUndefined(fractions)) {
        fractions = 0;
      }
      return number.toExponential(fractions);
    },
    toInt: toInt = function(number) {
      return parseInt(number, 10);
    },
    toFloat: toFloat = function(number) {
      return parseFloat(number);
    },
    toAbbr: toAbbr = function(number, digits) {
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
    },
    addCommas: addCommas = function(number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    fileSize: fileSize = function(value) {
      var bytes, metric, resInt, resValue;
      bytes = parseInt(value, 10);
      if (isNaN(bytes)) {
        console.error("Handlebars helper fileSize couldn't parse '" + value + "'");
        return value;
      }
      metric = ['byte', 'bytes', 'KB', 'MB', 'GB'];
      if (bytes === 0) {
        resInt = resValue = 0;
      } else {
        resInt = Math.floor(Math.log(bytes) / Math.log(1000));
        resValue = (bytes / Math.pow(1000, Math.floor(resInt))).toFixed(resInt < 2 ? 0 : 1);
        if (bytes === 1) {
          resInt = -1;
        }
      }
      return Utils.safeString(resValue + ' ' + metric[resInt + 1]);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("toFixed", toFixed);
    Handlebars.registerHelper("toPrecision", toPrecision);
    Handlebars.registerHelper("toExponential", toExponential);
    Handlebars.registerHelper("toInt", toInt);
    Handlebars.registerHelper("toFloat", toFloat);
    Handlebars.registerHelper("toAbbr", toAbbr);
    Handlebars.registerHelper("addCommas", addCommas);
    Handlebars.registerHelper("fileSize", fileSize);
    return this;
  };

}).call(this);
