'use strict';

var indexOf = require('index-of');
var isNumber = require('is-number');
var iterator = require('make-iterator');

module.exports = function contains(val, obj, start) {
  var len = val ? val.length : 0;
  var idx = start < 0
    ? Math.max(0, len + start)
    : start;

  var res = false;
  var i = 0;

  start = idx || 0;

  if (Array.isArray(val)) {
    res = indexOf(val, obj, start) > -1;

  } else if (isNumber(len)) {
    res = (isString(val)
      ? val.indexOf(obj, start)
      : indexOf(val, obj, start)) > -1;

  } else {
    iterator(val, function (ele) {
      if (start < i++) {
        return !(res = (ele === obj));
      }
    });
  }
  return res;
};

function isString(val) {
  return typeof val === 'string';
}
