/*! math helpers*/


(function() {
  var add, ceil, divide, floor, multiply, round, subtract, sum, _;

  _ = require('lodash');

  module.exports = {
    add: add = function(value, addition) {
      return value + addition;
    },
    subtract: subtract = function(value, substraction) {
      return value - substraction;
    },
    divide: divide = function(value, divisor) {
      return value / divisor;
    },
    multiply: multiply = function(value, multiplier) {
      return value * multiplier;
    },
    floor: floor = function(value) {
      return Math.floor(value);
    },
    ceil: ceil = function(value) {
      return Math.ceil(value);
    },
    round: round = function(value) {
      return Math.round(value);
    },
    sum: sum = function() {
      var args, i;
      args = _.flatten(arguments);
      sum = 0;
      i = args.length - 1;
      while (i--) {
        if ("number" === typeof args[i]) {
          sum += args[i];
        }
      }
      return sum;
    }
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
