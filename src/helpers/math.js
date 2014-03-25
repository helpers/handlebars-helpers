
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



  Library.addHelper('add', function (value, addition) {
    return value + addition;
  });

  Library.addHelper('subtract', function (value, substraction) {
    return value - substraction;
  });

  Library.addHelper('divide', function (value, divisor) {
    return value / divisor;
  });

  Library.addHelper('multiply', function (value, multiplier) {
    return value * multiplier;
  });

  Library.addHelper('floor', function (value) {
    return Math.floor(value);
  });

  Library.addHelper('ceil', function (value) {
    return Math.ceil(value);
  });

  Library.addHelper('round', function (value) {
    return Math.round(value);
  });

  Library.addHelper('sum', function () {
    var args = _.flatten(arguments);
    var sum = 0;
    var i = args.length - 1;
    while (i--) {
      if ("number" === typeof args[i]) {
        sum += args[i];
      }
    }
    return Number(sum);
  });
