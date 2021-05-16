'use strict';

var util = require('handlebars-utils');
var helpers = module.exports;

/**
 * Returns either the `singular` or `plural` inflection of a word based on
 * the given `count`.
 *
 * ```handlebars
 * {{inflect 0 'string' 'strings'}}
 * <!-- 'strings' -->
 * {{inflect 1 'string' 'strings'}}
 * <!-- 'string' -->
 * {{inflect 1 'string' 'strings' true}}
 * <!-- '1 string' -->
 * {{inflect 2 'string' 'strings'}}
 * <!-- 'strings' -->
 * {{inflect 2 'string' 'strings' true}}
 * <!-- '2 strings' -->
 * ```
 * @param {Number} `count`
 * @param {String} `singular` The singular form
 * @param {String} `plural` The plural form
 * @param {String} `includeCount`
 * @return {String}
 * @api public
 */

helpers.inflect = function(count, singular, plural, includeCount) {
  var word = (count > 1 || count === 0) ? plural : singular;
  if (includeCount === true) {
    return String(count) + ' ' + word;
  } else {
    return word;
  }
};

/**
 * Returns an ordinalized number as a string.
 *
 * ```handlebars
 * {{ordinalize 1}}
 * <!-- '1st' -->
 * {{ordinalize 21}}
 * <!-- '21st' -->
 * {{ordinalize 29}}
 * <!-- '29th' -->
 * {{ordinalize 22}}
 * <!-- '22nd' -->
 * ```
 *
 * @param {String} `val` The value to ordinalize.
 * @return {String} The ordinalized number
 * @api public
 */

helpers.ordinalize = function(val) {
  var num = Math.abs(Math.round(val));
  var str = String(val);
  var res = num % 100;

  if (util.indexOf([11, 12, 13], res) >= 0) {
    return str + 'th';
  }

  switch (num % 10) {
    case 1:
      return str + 'st';
    case 2:
      return str + 'nd';
    case 3:
      return str + 'rd';
    default: {
      return str + 'th';
    }
  }
};
