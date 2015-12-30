'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * @name .inflect
 * @param {Number} `count`
 * @param {String} `singular` The singular form
 * @param {String} `plural` The plural form
 * @param {String} `include`
 * @return {String}
 * @api public
 */

helpers.inflect = function(count, singular, plural, include) {
  var word = (count > 1 || count === 0) ? plural : singular;

  if (utils.isUndefined(include) || include === false) {
    return word;
  } else {
    return String(count) + ' ' + word;
  }
};

/**
 * Returns an ordinalized number (as a string).
 *
 * ```handlebars
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
 * @return {String} The ordinalized number
 * @api public
 */

helpers.ordinalize = function(val) {
  var num = Math.abs(Math.round(val));
  var res = num % 100;

  if (utils.indexOf([11, 12, 13], res) >= 0) {
    return '' + val + 'th';
  }

  switch (num % 10) {
    case 1:
      return '' + val + 'st';
    case 2:
      return '' + val + 'nd';
    case 3:
      return '' + val + 'rd';
    default: {
      return '' + val + 'th';
    }
  }
};
