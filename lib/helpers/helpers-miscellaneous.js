/*! miscellaneous helpers*/


(function() {
  var noop, _default;

  module.exports = {
    "default": _default = function(value, defaultValue) {
      return value != null ? value : defaultValue;
    },
    noop: noop = function(options) {
      return options.fn(this);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("default", _default);
    Handlebars.registerHelper("noop", noop);
    return this;
  };

}).call(this);
