
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



Library.addHelper('add', function (value, addition) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(addition)))) {
    value = parseFloat(Utils.result(value));
    addition = parseFloat(Utils.result(addition));
    return value + addition;
  } else {
    return Utils.err('{{add}} takes two arguments (number, number).');
  }
});

Library.addHelper('subtract', function (value, substraction) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(substraction)))) {
    value = parseFloat(Utils.result(value));
    substraction = parseFloat(Utils.result(substraction));
    return value - substraction;
  } else {
    return Utils.err('{{subtract}} takes two arguments (number, number).');
  }
});

Library.addHelper('divide', function (value, divisor) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(divisor)))) {
    value = parseFloat(Utils.result(value));
    divisor = parseFloat(Utils.result(divisor));
    return value / divisor;
  } else {
    return Utils.err('{{divide}} takes two arguments (number, number).');
  }
});

/**
 * {{mod}}
 * Returns the modulus of two numbers
 * @author: Liam Moat <https://github.com/liammoat>
 */
Library.addHelper('mod', function (value, divisor) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(divisor)))) {
    value = parseFloat(Utils.result(value));
    divisor = parseFloat(Utils.result(divisor));
    return value % divisor;
  } else {
    return Utils.err('{{mod}} takes two arguments (number, number).');
  }
});

Library.addHelper('multiply', function (value, multiplier) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(multiplier)))) {
    value = parseFloat(Utils.result(value));
    multiplier = parseFloat(Utils.result(multiplier));
    return value * multiplier;
  } else {
    return Utils.err('{{multiply}} takes two arguments (number, number).');
  }
});

Library.addHelper('floor', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.floor(value);
  } else {
    return Utils.err('{{floor}} takes one argument (number).');
  }
});

Library.addHelper('ceil', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.ceil(value);
  } else {
    return Utils.err('{{ceil}} takes one argument (number).');
  }
});

Library.addHelper('round', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.round(value);
  } else {
    return Utils.err('{{round}} takes one argument (number).');
  }
});

Library.addHelper('remainder', function (first, second) {
  if (!((Utils.isUndefined(first)) && (Utils.isUndefined(second)))) {
    first = parseFloat(Utils.result(first));
    second = parseFloat(Utils.result(second));
    return first % second;
  } else {
    return Utils.err('{{remainder}} takes two arguments (number, number).');
  }
});

Library.addHelper('sum', function () {
  var sum = 0;
  var args = _.flatten(arguments);
  for (var i = 0; i < args.length - 1; i++) {
      if ("number" === typeof args[i]) {
        sum += args[i];
      }
  }
  return Number(sum);
});
