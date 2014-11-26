'use strict';

/**
 * Expose `helpers`
 */

var helpers = module.exports;

helpers.default = function(value, defaultValue) {
  return value != null ? value : defaultValue;
};

/**
 * http://handlebarsjs.com/block_helpers.html
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 * @api public
 */

helpers.noop = function(options) {
  return options.fn(this);
};

/**
 * Build context from the attributes hash
 * @contributor Vladimir Kuznetsov <https://github.com/mistakster>
 */

helpers.withHash = function(options) {
  return options.fn(options.hash || {});
};
