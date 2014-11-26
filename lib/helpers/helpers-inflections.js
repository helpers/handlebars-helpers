'use strict';
var Utils = require('../utils/utils');
var _indexOf = require('../utils/lib/indexOf');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

helpers.inflect = function(count, singular, plural, include) {
  var word = count > 1 || count === 0 ? plural : singular;
  if (Utils.isUndefined(include) || include === false) {
    return word;
  } else {
    return "" + count + " " + word;
  }
};

helpers.ordinalize = function(value) {
  var _ref;
  var normal = Math.abs(Math.round(value));
  if (_ref = normal % 100, _indexOf.call([11, 12, 13], _ref) >= 0) {
    return "" + value + "th";
  } else {
    switch (normal % 10) {
      case 1:
        return "" + value + "st";
      case 2:
        return "" + value + "nd";
      case 3:
        return "" + value + "rd";
      default:
        return "" + value + "th";
    }
  }
};
