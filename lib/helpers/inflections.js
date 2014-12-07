'use strict';

var utils = require('../utils/utils');
var indexOf = require('../utils/indexOf');

exports.inflect = function(count, singular, plural, include) {
  var word = count > 1 || count === 0
    ? plural
    : singular;

  if (utils.isUndefined(include) || include === false) {
    return word;
  } else {
    return ''
      + count
      + ' '
      + word;
  }
};

/**
 * Returns an ordinalized string.
 *
 * **Example**
 *
 * ```js
 * {{ordinalize 1}}
 * //=> '1st'
 * {{ordinalize 21}}
 * //=> '21st'
 * {{ordinalize 29}}
 * //=> '29th'
 * {{ordinalize 22}}
 * //=> '22nd'
 * ```
 *
 * @param {String} `val` The value to ordinalize.
 * @return {String}
 * @api public
 */

exports.ordinalize = function(val) {
  var num = Math.abs(Math.round(val));
  var res;

  if (res = num % 100, indexOf.call([11, 12, 13], res) >= 0) {
    return '' + val + 'th';
  } else {
    switch (num % 10) {
      case 1:
        return '' + val + 'st';
      case 2:
        return '' + val + 'nd';
      case 3:
        return '' + val + 'rd';
      default:
        return '' + val + 'th';
    }
  }
};
