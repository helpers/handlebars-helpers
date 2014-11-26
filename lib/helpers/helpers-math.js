'use strict';

var _ = require('lodash');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

helpers.add = function(value, addition) {
  return value + addition;
};

helpers.subtract = function(value, substraction) {
  return value - substraction;
};

helpers.divide = function(value, divisor) {
  return value / divisor;
};

helpers.multiply = function(value, multiplier) {
  return value * multiplier;
};

helpers.floor = function(value) {
  return Math.floor(value);
};

helpers.ceil = function(value) {
  return Math.ceil(value);
};

helpers.round = function(value) {
  return Math.round(value);
};

helpers.sum = function() {
  var args = _.flatten(arguments);
  var sum = 0;
  var i = args.length - 1;
  while (i--) {
    if ("number" === typeof args[i]) {
      sum += args[i];
    }
  }
  return Number(sum);
};
