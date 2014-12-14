'use strict';

var yaml = require('js-yaml');

exports.toString = Object.prototype.toString;

exports.isUndefined = function(value) {
  return typeof value === 'undefined'
    || exports.toString.call(value) === '[object Function]'
    || (value.hash != null);
};

exports.result = function(value) {
  if (typeof value === 'function') {
    return value();
  } else {
    return value;
  }
};

exports.stringify = function(o, type) {
  switch (type) {
    case 'json':
      return JSON.stringify(o, null, 2);
    case 'yml':
    case 'yaml':
      return yaml.safeDump(o);
  }
  return null;
};
