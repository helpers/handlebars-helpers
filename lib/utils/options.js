'use strict';

const isObject = require('./isObject');
const isOptions = require('./isOptions');

/**
 * This code was taken directly from handlebars-helpers,
 * https://github.com/helpers/handlebars-utils/blob/master/index.js#L398
 * 
 * that was taken directly from handlebars.
 * https://github.com/wycats/handlebars.js/blob/b55a120e8222785db3dc00096f6afbf91b656e8a/LICENSE
 * Released under the MIT License
 * Copyright (C) 2011-2016 by Yehuda Katz
 */

/**
 * Creates an options object from the `context`, `locals` and `options.`
 * Handlebars' `options.hash` is merged onto the options, and if the context
 * is created by [templates][], `this.options` will be merged onto the
 * options as well.
 *
 * @param {Object} `context`
 * @param {Object} `locals` Options or locals
 * @param {Object} `options`
 * @return {Boolean}
 * @api public
 */

const _options = function(thisArg, locals, options) {
  if (isOptions(thisArg)) {
    return _options({}, locals, thisArg);
  }
  if (isOptions(locals)) {
    return _options(thisArg, options, locals);
  }
  options = options || {};
  if (!isOptions(options)) {
    locals = Object.assign({}, locals, options);
  }
  var opts = Object.assign({}, locals, options.hash);
  if (isObject(thisArg)) {
    opts = Object.assign({}, thisArg.options, opts);
  }
  if (opts[options.name]) {
    opts = Object.assign({}, opts[options.name], opts);
  }
  return opts;
};

module.exports = _options;
