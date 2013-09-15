/**
 * Handlebars String Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var Utils = require('../utils/utils');


// The module to be exported
var helpers = module.exports = {

  /**
   * {{capitalizeFirst}}
   * Capitalize first word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  capitalizeFirst: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * {{capitalizeEach}}
   * Capitalize each word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  capitalizeEach: function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  },

  /**
   * {{center}}
   * Center a string using non-breaking spaces
   * @param  {[type]} str    [description]
   * @param  {[type]} spaces [description]
   * @return {[type]}        [description]
   */
  center: function (str, spaces) {
    var space = '';
    var i = 0;
    while (i < spaces) {
      space += '&nbsp;';
      i++;
    }
    return "" + space + str + space;
  },

 /**
  * {{formatPhoneNumber number}}
  * Output a formatted phone number
  * @author: http://bit.ly/QlPmPr
  * @param  {Number} phoneNumber [8005551212]
  * @return {Number}             [(800) 555-1212]
  */
  formatPhoneNumber: function (num) {
    num = num.toString();
    return "(" + num.substr(0, 3) + ") " + num.substr(3, 3) + "-" + num.substr(6, 4);
  },

  /**
   * {{dashify}}
   * Replace periods in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  dashify: function (str) {
    return str.split(".").join("-");
  },

  /**
   * {{hyphenate}}
   * Replace spaces in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  hyphenate: function (str) {
    return str.split(" ").join("-");
  },

  /**
   * {{lowercase}}
   * Make all letters in the string lowercase
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  lowercase: function (str) {
    return str.toLowerCase();
  },

  /**
   * {{safeString}}
   * Output a Handlebars safeString
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  safeString: function (value) {
    return new Utils.safeString(value);
  },

  /**
   * {{sentence}}
   * Sentence case
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  sentence: function (str) {
    return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },

  /**
   * {{title}}
   * Title case. "This is Title Case"
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  titleize: function (str) {
    var title = str.replace(/[ \-_]+/g, ' ');
    var words = title.match(/\w+/g);
    var capitalize = function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return ((function () {
      var i, len, results;
      results = [];
      for (i = 0, len = words.length; i < len; i++) {
        var word = words[i];
        results.push(capitalize(word));
      }
      return results;
    })()).join(' ');
  },

  uppercase: function (str) {
    return str.toUpperCase();
  },

  reverse: function (str) {
    return str.split('').reverse().join('');
  },

  /**
   * {{occurrences}}
   * Return the nuumber of occurrences of a string, within a string
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} string    [description]
   * @param  {[type]} substring [description]
   * @return {[type]}           [description]
   */
  occurrences: function (string, substring) {
    var n = 0;
    var pos = 0;
    var l = substring.length;
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

  /**
   * {{replace}}
   * Replace occurrences of string "A" with string "B"
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} str [description]
   * @param  {[type]} a   [description]
   * @param  {[type]} b   [description]
   * @return {[type]}     [description]
   */
  replace: function (str, a, b) {
    return str.split(a).join(b);
  },

  /**
   * {{ellipsis}}
   * Truncate the input string and removes all HTML tags
   * @param  {[type]} str      [description]
   * @param  {[type]} length   [description]
   * @param  {[type]} omission [description]
   * @return {[type]}          [description]
   */
  ellipsis: function (text, length) {
    var textStripped;
    textStripped = text.replace(/(<([^>]+)>)/g, "");
    if (textStripped.length < length) {
      return textStripped;
    } else {
      return textStripped.substr(0, length - 3) + "...";
    }
  },

  /**
   * {{truncate}}
   * Truncates a string given a specified `length`,
   * providing a custom string to denote an `omission`.
   * @param  {[type]} str      [description]
   * @param  {[type]} length   [description]
   * @param  {[type]} omission [description]
   * @return {[type]}          [description]
   */
  truncate: function (str, length, omission) {
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > length) {
      return str.substring(0, length - omission.length) + omission;
    } else {
      return str;
    }
  },

  /**
   * {{startsWith}}
   * @author: Dan Fox <http://github.com/iamdanfox>
   *
   * Tests whether a testString begins with the given prefix.
   * Behaves sensibly if the testString is null.
   * @param  {[type]} prefix     [description]
   * @param  {[type]} testString [description]
   * @param  {[type]} options    [description]
   * @return {[type]}            [description]
   *
   * @example:
   *   {{#startsWith "Goodbye" "Hello, world!"}}
   *     Whoops
   *   {{else}}
   *     Bro, do you even hello world?
   *   {{/startsWith}}
   */
  startsWith: function (prefix, testString, options) {
    if ((testString != null ? testString.indexOf(prefix) : void 0) === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
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