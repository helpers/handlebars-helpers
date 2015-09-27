'use strict';

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

helpers.i18n = function(key, options) {
  var lang;

  if (typeof key !== 'string') {
    throw 'Key must be of type "string"';
  }

  lang = typeof options.hash.language === 'string'
      ? options.hash.language
      : this.language;

  if (typeof lang === 'undefined') {
    throw 'The "language" parameter is not defined';
  }

  if (typeof this[lang] === 'undefined') {
    throw 'No strings found for language "' + lang + '"';
  }

  if (typeof this[lang][key] === 'undefined') {
    throw 'No string for key "' + key + '" for language "' + lang + '"';
  }

  return this[lang][key];
};
