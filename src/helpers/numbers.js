
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('toFixed', function (number, digits) {
  if (!Utils.isUndefined(number)) {
    number = parseFloat(Utils.result(number));
    digits = Utils.isUndefined(digits) ? 0 : Utils.result(digits);
    return number.toFixed(digits);
  } else {
    return Utils.err('{{toFixed}} takes at least one argument (number).');
  }
});

Library.addHelper('toPrecision', function (number, precision) {
  if (!Utils.isUndefined(number)) {
    number = parseFloat(Utils.result(number));
    precision = Utils.isUndefined(precision) ? 1 : Utils.result(precision);
    return number.toPrecision(precision);
  } else {
    return Utils.err('{{toPrecision}} takes at least one argument (number).');
  }
});

Library.addHelper('toExponential', function (number, fractions) {
  if (!Utils.isUndefined(number)) {
    number = parseFloat(Utils.result(number));
    fractions = Utils.isUndefined(fractions) ? 0 : Utils.result(fractions);
    return number.toExponential(fractions);
  } else {
    return Utils.err('{{toExponential}} takes at least one argument (number).');
  }
});

Library.addHelper('toInt', function (number) {
  if (!Utils.isUndefined(number)) {
    number = Utils.result(number);
    return parseInt(number, 10);
  } else {
    return Utils.err('{{toInt}} takes one argument (number).');
  }
});

Library.addHelper('toFloat', function (number) {
  if (!Utils.isUndefined(number)) {
    number = Utils.result(number);
    return parseFloat(number);
  } else {
    return Utils.err('{{toFloat}} takes one argument (number).');
  }
});

Library.addHelper('digitGrouping', function (number, separator) {
  if (!Utils.isUndefined(number)) {
    number = parseFloat(Utils.result(number));
    separator = Utils.isUndefined(separator) ? ',' : Utils.result(separator);
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + separator);
  } else {
    return Utils.err('{{digitGrouping}} takes at least one argument (number).');
  }
});
