'use strict';

var flatten = require('arr-flatten');

exports.add = function(value, addition) {
  return value + addition;
};

exports.subtract = function(value, substraction) {
  return value - substraction;
};

exports.divide = function(value, divisor) {
  return value / divisor;
};

exports.multiply = function(value, multiplier) {
  return value * multiplier;
};

exports.floor = function(value) {
  return Math.floor(value);
};

exports.ceil = function(value) {
  return Math.ceil(value);
};

exports.round = function(value) {
  return Math.round(value);
};

exports.sum = function() {
  var args = flatten([].concat.apply([], arguments));
  var sum = 0;
  var i = args.length - 1;
  while (i--) {
    if ("number" === typeof args[i]) {
      sum += args[i];
    }
  }
  return +sum;
};
