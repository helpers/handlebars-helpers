/*! i18n helpers*/


(function() {
  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("i18n", function(context, options) {
      var language;
      language = void 0;
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
      if (typeof this[language][context] === "undefined") {
        throw "No string for key '" + context + "' for language '" + language + "'";
      }
      return this[language][context];
    });
    return this;
  };

}).call(this);
