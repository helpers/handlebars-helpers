/*! inflection helpers*/


(function() {
  var Utils, inflect, ordinalize,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Utils = require('../utils/utils');

  module.exports = {
    inflect: inflect = function(count, singular, plural, include) {
      var word;
      word = count > 1 || count === 0 ? plural : singular;
      if (Utils.isUndefined(include) || include === false) {
        return word;
      } else {
        return "" + count + " " + word;
      }
    },
    ordinalize: ordinalize = function(value) {
      var normal, _ref;
      normal = Math.abs(Math.round(value));
      if (_ref = normal % 100, __indexOf.call([11, 12, 13], _ref) >= 0) {
        return "" + value + "th";
      } else {
        switch (normal % 10) {
          case 1:
            return "" + value + "st";
          case 2:
            return "" + value + "nd";
          case 3:
            return "" + value + "rd";
          default:
            return "" + value + "th";
        }
      }
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("inflect", inflect);
    Handlebars.registerHelper("ordinalize", ordinalize);
    return this;
  };

}).call(this);
