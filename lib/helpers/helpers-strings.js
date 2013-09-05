/*! string helpers*/


(function() {
  var Utils, capitalizeEach, capitalizeFirst, center, dashify, ellipsis, formatPhoneNumber, hyphenate, lowercase, occurrences, replace, reverse, safeString, sentence, startsWith, titleize, truncate, uppercase;

  Utils = require('../utils/utils');

  module.exports = {
    capitalizeFirst: capitalizeFirst = function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    capitalizeEach: capitalizeEach = function(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      });
    },
    center: center = function(str, spaces) {
      var i, space;
      space = '';
      i = 0;
      while (i < spaces) {
        space += '&nbsp;';
        i++;
      }
      return "" + space + str + space;
    },
    formatPhoneNumber: formatPhoneNumber = function(phoneNumber) {
      phoneNumber = phoneNumber.toString();
      return "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4);
    },
    dashify: dashify = function(str) {
      return str.split(".").join("-");
    },
    hyphenate: hyphenate = function(str) {
      return str.split(" ").join("-");
    },
    lowercase: lowercase = function(str) {
      return str.toLowerCase();
    },
    safeString: safeString = function(value) {
      return Utils.safeString(value);
    },
    sentence: sentence = function(str) {
      return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    titleize: titleize = function(str) {
      var capitalize, title, word, words;
      title = str.replace(/[ \-_]+/g, ' ');
      words = title.match(/\w+/g);
      capitalize = function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      };
      return ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = words.length; _i < _len; _i++) {
          word = words[_i];
          _results.push(capitalize(word));
        }
        return _results;
      })()).join(' ');
    },
    uppercase: uppercase = function(str) {
      return str.toUpperCase();
    },
    reverse: reverse = function(str) {
      return str.split('').reverse().join('');
    },
    occurrences: occurrences = function(string, substring) {
      var l, n, pos;
      n = 0;
      pos = 0;
      l = substring.length;
      while (true) {
        pos = string.indexOf(substring, pos);
        if (pos > -1) {
          n++;
          pos += l;
        } else {
          break;
        }
      }
      return n;
    },
    dashify: replace = function(str, a, b) {
      return str.split(a).join(b);
    },
    ellipsis: ellipsis = function(text, length) {
      var textStripped;
      textStripped = text.replace(/(<([^>]+)>)/g, "");
      if (textStripped.length < length) {
        return textStripped;
      } else {
        return textStripped.substr(0, length - 3) + "...";
      }
    },
    truncate: truncate = function(str, length, omission) {
      if (Utils.isUndefined(omission)) {
        omission = '';
      }
      if (str.length > length) {
        return str.substring(0, length - omission.length) + omission;
      } else {
        return str;
      }
    },
    startsWith: startsWith = function(prefix, testString, options) {
      if ((testString != null ? testString.indexOf(prefix) : void 0) === 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("capitalizeEach", capitalizeEach);
    Handlebars.registerHelper("capitalizeFirst", capitalizeFirst);
    Handlebars.registerHelper("center", center);
    Handlebars.registerHelper("dashify", dashify);
    Handlebars.registerHelper("ellipsis", ellipsis);
    Handlebars.registerHelper("formatPhoneNumber", formatPhoneNumber);
    Handlebars.registerHelper("hyphenate", hyphenate);
    Handlebars.registerHelper("lowercase", lowercase);
    Handlebars.registerHelper("occurrences", occurrences);
    Handlebars.registerHelper("replace", replace);
    Handlebars.registerHelper("reverse", reverse);
    Handlebars.registerHelper("safeString", safeString);
    Handlebars.registerHelper("sentence", sentence);
    Handlebars.registerHelper("titleize", titleize);
    Handlebars.registerHelper("truncate", truncate);
    Handlebars.registerHelper("uppercase", uppercase);
    Handlebars.registerHelper("startsWith", startsWith);
    return this;
  };

}).call(this);
