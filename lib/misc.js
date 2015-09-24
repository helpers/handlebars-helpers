'use strict';

exports.default = function(value, defaultValue) {
  return value != null ? value : defaultValue;
};

exports.noop = function(options) {
  return options.fn(this);
};

/**
 * Build context from the attributes hash
 * @source Vladimir Kuznetsov <https://github.com/mistakster>
 */

exports.withHash = function(options) {
  return options.fn(options.hash || {});
};
