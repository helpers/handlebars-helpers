'use strict';

var util = require('handlebars-utils');
var helpers = module.exports;
const getValue = require('get-value');

/**
 * i18n helper. See [button-i18n](https://github.com/assemble/buttons)
 * for a working example.
 *
 * @contributor Laurent Goderre <https://github.com/LaurentGoderrre>
 * @param {String} `key`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.i18n = function(prop, locals, options) {
  if (util.isOptions(locals)) {
    options = locals;
    locals = {};
  }

  if (!util.isString(prop)) {
    throw new Error('{{i18n}} helper expected "key" to be a string');
  }

  var opts = util.options(this, locals, options);
  var context = Object.assign({}, this, opts);

  var lang = context.language || context.lang;

  if (typeof(lang) !== 'string') {
    throw new TypeError('{{i18n}} helper expected "language" to be a string');
  }

  var cache = context[lang];
  if (typeof cache === 'undefined') {
    throw new Error('{{i18n}} helper cannot find language "' + lang + '"');
  }

  var result = getValue(cache, prop);
  if (typeof result === 'undefined') {
    throw new Error('{{i18n}} helper cannot find property "' + prop + '" for language "' + lang + '"');
  }

  return result;
};
