/**
 * Handlebars Helpers: i18n, for localizing templates in multiple languages.
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';


// The module to be exported
var helpers = {

  /**
   * {{i18n}}
   * @author: Laurent Goderre <https://github.com/LaurentGoderrre>
   * @param  {String} context
   * @param  {Object} options
   * @return {String}
   * @example: <https://github.com/assemble/buttons> (See the "button-i18n" example)
   */
  i18n: function (context, options) {
    var language = void 0;
    if (typeof context !== "string") {
      throw "Key must be of type 'string'";
    }
    language = (typeof options.hash.language === "string" ? options.hash.language : this.language);
    if (typeof language === "undefined") {
      throw "The 'language' parameter is not defined";
    }
    if (typeof this[language] === "undefined") {
      throw "No strings found for language '" + language + "'";
    }

    var findTranslation = function(translation, parts) {
      var length = parts.length;
      var firstElement = parts.shift();
      if (length === 1) {
        if (translation[firstElement]) {
          return translation[firstElement];
        }
        else {
          return null;
        }
      }
      else {
        if (translation[firstElement]) {
          return this(translation[firstElement], parts);
        }
        else {
          return null;
        }
      }
    };
    var idParts = context.split('.');
    return findTranslation(this[language], idParts);
  }
};

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
