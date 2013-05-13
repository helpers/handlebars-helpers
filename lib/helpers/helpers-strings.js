(function() {
  var Utils, capitalizeEach, capitalizeFirst, center, dashify, formatPhoneNumber, hyphenate, lowercase, occurrences, replace, reverse, safeString, sentence, titleize, truncate, uppercase;

  Utils = require('../utils/utils');

  module.exports.occurrences = occurrences = function(string, substring) {
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
  };

  module.exports.safeString = safeString = function(value) {
    return Utils.safeString(value);
  };

  module.exports.lowercase = lowercase = function(str) {
    return str.toLowerCase();
  };

  module.exports.uppercase = uppercase = function(str) {
    return str.toUpperCase();
  };

  module.exports.capitalizeFirst = capitalizeFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  module.exports.capitalizeEach = capitalizeEach = function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  };

  module.exports.titleize = titleize = function(str) {
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
  };

  module.exports.sentence = sentence = function(str) {
    return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  module.exports.reverse = reverse = function(str) {
    return str.split('').reverse().join('');
  };

  module.exports.truncate = truncate = function(str, length, omission) {
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > length) {
      return str.substring(0, length - omission.length) + omission;
    } else {
      return str;
    }
  };

  module.exports.center = center = function(str, spaces) {
    var i, space;

    space = '';
    i = 0;
    while (i < spaces) {
      space += '&nbsp;';
      i++;
    }
    return "" + space + str + space;
  };

  module.exports.formatPhoneNumber = formatPhoneNumber = function(phoneNumber) {
    phoneNumber = phoneNumber.toString();
    return "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4);
  };

  module.exports.hyphenate = hyphenate = function(str) {
    return str.split(" ").join("-");
  };

  module.exports.dashify = dashify = function(str) {
    return str.split(".").join("-");
  };

  module.exports.dashify = replace = function(str, a, b) {
    return str.split(a).join(b);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("occurrences", occurrences);
    Handlebars.registerHelper("safeString", safeString);
    Handlebars.registerHelper("lowercase", lowercase);
    Handlebars.registerHelper("uppercase", uppercase);
    Handlebars.registerHelper("capitalizeFirst", capitalizeFirst);
    Handlebars.registerHelper("capitalizeEach", capitalizeEach);
    Handlebars.registerHelper("titleize", titleize);
    Handlebars.registerHelper("sentence", sentence);
    Handlebars.registerHelper("reverse", reverse);
    Handlebars.registerHelper("truncate", truncate);
    Handlebars.registerHelper("center", center);
    Handlebars.registerHelper("hyphenate", hyphenate);
    Handlebars.registerHelper("dashify", dashify);
    Handlebars.registerHelper("replace", replace);
    Handlebars.registerHelper("formatPhoneNumber", formatPhoneNumber);
    return this;
  };

}).call(this);
