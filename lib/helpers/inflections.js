'use strict';
var Utils = require('../utils/utils');
var indexOf = require('../utils/lib/indexOf');


exports.inflect = function(count, singular, plural, include) {
  var word = count > 1 || count === 0 ? plural : singular;
  if (Utils.isUndefined(include) || include === false) {
    return word;
  } else {
    return '' + count + ' ' + word;
  }
};

exports.ordinalize = function(value) {
  var normal = Math.abs(Math.round(value));
  var ref;

  if (ref = normal % 100, indexOf.call([11, 12, 13], ref) >= 0) {
    return '' + value + 'th';
  } else {
    switch (normal % 10) {
      case 1:
        return '' + value + 'st';
      case 2:
        return '' + value + 'nd';
      case 3:
        return '' + value + 'rd';
      default:
        return '' + value + 'th';
    }
  }
};
