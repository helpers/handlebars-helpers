'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * i18n helper. See [button-i18n](https://github.com/assemble/buttons)
 * for a working example.
 *
 * @contributor Laurent Goderre <https://github.com/LaurentGoderrre>
 * @param  {String} `key`
 * @param  {Object} `options`
 * @return {String}
 * @api public
 */

helpers.i18n = function(prop, context, options) {
  if (utils.isOptions(context)) {
    options = context;
    context = {};
  }

  if (typeof prop !== 'string') {
    throw new Error('{{i18n}} helper expected "key" to be a string');
  }

  var opts = utils.merge({}, this, options.hash);

  // account for `options` being passed on the context
  if (opts.options) {
    opts = utils.merge({}, opts, opts.options);
    delete opts.options;
  }

  var lang = opts.language || opts.lang;

  if (typeof lang !== 'string') {
    throw new Error('{{i18n}} helper expected "language" parameter to be a string');
  }

  var value = utils.get(opts, lang);
  if (typeof value === 'undefined') {
    throw new Error('{{i18n}} helper cannot find language "' + lang + '"');
  }

  var result = utils.get(value, prop);
  if (typeof result === 'undefined') {
    throw new Error('{{i18n}} helper cannot find property "' + prop + '" for language "' + lang + '"');
  }

  return result;
};
