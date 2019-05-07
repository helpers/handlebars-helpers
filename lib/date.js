const utils = require('./utils');
const moment = require('moment');

/**
 * @exports date
 */
const helpers = module.exports;

/**
 * Get the current year.
 *
 * ```handlebars
 * {{year}}
 * <!-- 2017 -->
 * {{year "YY"}}
 * <!-- 17 -->
 * ```
 *
 * @param {String} `pattern`
 * @return {String}
 * @block
 * @api public
 */
helpers.year = function(pattern) {
  const year = new Date().getUTCFullYear().toString();

  if (typeof pattern === 'string') {
    if (/[Yy]{4}/.test(pattern)) {
      return year;
    }

    if (/[Yy]{2}/.test(pattern)) {
      return year.substr(2, 2);
    }
  }
  return year;
};

/**
 * Formats a date (now, or a specific date) with a format
 *
 * ```handlebars
 * {{date}}
 * <!-- December 31, 2018 -->
 * {{date "YYYY"}}
 * <!-- 2017 -->
 * {{date "2018-12-31" "MMMM DD, YYYY"}}
 * <!-- December 31, 2018 -->
 * ```
 * @param {String} `str` [optional] The stringified date to format
 * @param {String} `pattern` [optional] The pattern to use when formatting the date
 * @block
 * @api public
 */
helpers.moment = function dateHelper(str, pattern) {
  if (utils.isOptions(pattern)) {
    pattern = null;
  }

  if (utils.isOptions(str)) {
    pattern = null;
    str = null;
  }

  // if no args are passed, return a formatted date
  if (str == null && pattern == null) {
    moment.locale('en');
    return moment().format('MMMM DD, YYYY');
  }

  // if both args are strings, format the first (date) using the second (format)
  if (typeof str === 'string' && typeof pattern === 'string') {
    return moment(str).format(pattern);
  }

  // if only a string is passed, assume it's a date pattern ('YYYY')
  if (typeof str === 'string' && !pattern) {
    return moment().format(str);
  }

  return moment(str).format(pattern);
};

/**
 * @type function
 * @see {@link moment}
 */
helpers.date = (...args) => helpers.moment(...args);

/**
 * Formats a specific date with a format (or ISO8601 if no format specified)
 *
 * ```handlebars
 * {{formatDate myDate}}
 * <!-- '2017-01-18T10:54:00' -->
 * {{formatDate date 'dddd'}}
 * <!-- 'Wednesday' -->
 * ```
 * @param {String} date - The date to format
 * @param {String} pattern - [optional] The pattern to use when formatting the date
 * @api public
 */
helpers.formatDate = function(date, _format) {
  let format = _format;
  if (!format || !utils.isString(format)) format = undefined;
  return date ? moment(date).utc().format(format).replace('Z', '') : '';
};

/**
 * Formats a specific date as a more readable date
 *
 * ```handlebars
 * {{niceDate myDate}}
 * <!-- 'Wed 18 01 2017' -->
 * ```
 * @param {String} date - The date to format
 * @api public
 */
helpers.niceDate = function(date) {
  return date ? moment(date).format('ddd DD MM YYYY') : '';
};

/**
 * Formats a specific date as just the time component
 *
 * ```handlebars
 * {{getTime myDate}}
 * <!-- '10:54' -->
 * ```
 * @param {String} date - The date to format
 * @api public
 */
helpers.getTime = function(date) {
  return date ? moment(date).format('HH:mm') : '';
};

