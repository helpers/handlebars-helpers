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
  return value != null ? value : defaultValue;
};

/**
 * @name .noop
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.noop = function(options) {
  return options.fn(this);
};

/**
 * Build context from the attributes hash
 * @source Vladimir Kuznetsov <https://github.com/mistakster>
 */

helpers.withHash = function(options) {
  return options.fn(options.hash || {});
};
