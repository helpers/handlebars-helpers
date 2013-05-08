(function() {
  var add, ceil, divide, floor, multiply, round, subtract, sum;

  module.exports.add = add = function(value, addition) {
    return value + addition;
  };

  module.exports.subtract = subtract = function(value, substraction) {
    return value - substraction;
  };

  module.exports.divide = divide = function(value, divisor) {
    return value / divisor;
  };

  module.exports.multiply = multiply = function(value, multiplier) {
    return value * multiplier;
  };

  module.exports.floor = floor = function(value) {
    return Math.floor(value);
  };

  module.exports.ceil = ceil = function(value) {
    return Math.ceil(value);
  };

  module.exports.round = round = function(value) {
    return Math.round(value);
  };

  module.exports.sum = sum = function() {
    var argLength, i, v;

    argLength = arguments.length - 1;
    sum = 0;
    i = 0;
    while (i < argLength) {
      v = parseFloat(arguments[i]);
      if (!isNaN(v)) {
        sum += v;
      }
      i++;
    }
    return sum;
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("add", add);
    Handlebars.registerHelper("subtract", subtract);
    Handlebars.registerHelper("divide", divide);
    Handlebars.registerHelper("multiply", multiply);
    Handlebars.registerHelper("floor", floor);
    Handlebars.registerHelper("ceil", ceil);
    Handlebars.registerHelper("round", round);
    Handlebars.registerHelper("sum", sum);
    return this;
  };

}).call(this);
