'use strict';

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * @name .default
 * @param {type} `value`
 * @param {type} `defaultValue`
 * @return {String}
 * @api public
 */

helpers.default = function(value, defaultValue) {
  return value == null
    ? defaultValue
    : value;
};

/**
 * @name .noop
 * @param {type} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.noop = function(options) {
  return options.fn(this);
};

/**
 * Block helper that builds the context for the block
 * from the options hash.
 *
 * @param {Object} `options` Handlebars provided options object.
 * @contributor Vladimir Kuznetsov <https://github.com/mistakster>
 * @block
 * @api public
 */

helpers.withHash = function(options) {
  if (options.hash && Object.keys(options.hash).length) {
    return options.fn(options.hash);
  } else {
    return options.inverse(this);
  }
};
