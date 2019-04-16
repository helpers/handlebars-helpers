const utils = require('./utils');
/**
 * @exports i18n
 */
const helpers = module.exports;

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
  if (utils.isOptions(locals)) {
    options = locals;
    locals = {};
  }

  if (!utils.isString(prop)) {
    throw new Error('{{i18n}} helper expected "key" to be a string');
  }

  const opts = utils.options(this, locals, options);
  const context = Object.assign({}, this, opts);

  const lang = context.language || context.lang;

  if (!utils.isString(lang)) {
    throw new TypeError('{{i18n}} helper expected "language" to be a string');
  }

  const cache = context[lang];
  if (typeof cache === 'undefined') {
    throw new Error('{{i18n}} helper cannot find language "' + lang + '"');
  }

  const result = utils.get(cache, prop);
  if (typeof result === 'undefined') {
    throw new Error('{{i18n}} helper cannot find property "' + prop + '" for language "' + lang + '"');
  }

  return result;
};
