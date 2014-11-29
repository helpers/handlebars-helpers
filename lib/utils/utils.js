'use strict';

var iconv = require('iconv-lite');
var _ = require('lodash');

var yaml = require('js-yaml');
var Handlebars = require('../helpers/').Handlebars;
var utils = module.exports;


/**
 * String byte order marks from source string
 * @param  {String} str
 * @return {String}
 * @api public
 */

utils.stripBom = function(str) {
  str = iconv.decode(str, 'utf8');
  // Strip any BOM that might exist.
  if (str.charCodeAt(0) === 0xFEFF) {
    str = str.substring(1);
  }
};

utils.isBoolean = function(obj) {
  var undef = void 0;
  var type = typeof obj;
  return obj !== undef && type === 'boolean' || type === 'Boolean';
};

utils.isNumber = function(obj) {
  var undef = void 0;
  return obj !== undef && obj !== null && (typeof obj === 'number' || obj instanceof Number);
};

utils.isObject = function(obj) {
  var undef = void 0;
  return obj !== null && obj !== undef && typeof obj === 'object';
};

utils.isRegExp = function(obj) {
  var undef = void 0;
  return obj !== undef && obj !== null && (obj instanceof RegExp);
};

utils.isFunction = function(obj) {
  return typeof obj === 'function';
};

utils.result = function(value) {
  if (utils.isFunction(value)) {
    return value();
  } else {
    return value;
  }
};

utils.err = function(msg) {
  throw new Error(msg);
};
utils.detectType = function(value) {
  switch (typeof value) {
    case 'string':
      return 'str';
    case 'number':
      return 'num';
    case 'object':
      return 'obj';
    default:
      return 'other';
  }
};

/**
 * String utils
 */

utils.safeString = function(str) {
  return new Handlebars.SafeString(str);
};

var toString = function(val) {
  if (val == null) {
    return '';
  } else {
    return val.toString();
  }
};
utils.toString = Object.prototype.toString;

utils.lowerCase = function(str) {
  str = toString(str);
  return str.toLowerCase();
};

utils.isUndefined = function(value) {
  return typeof value === 'undefined' || utils.toString.call(value) === '[object Function]' || (value.hash != null);
};

utils.trim = function(str) {
  var trim = /\S/.test('\xA0') ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
  return str.toString().replace(trim, '');
};

/**
 * Trim space on left and right of a string
 * @param {String} myString source string
 * @return {String} trimmed string
 * @api public
 */

utils.trimWhitspace = function(str) {
  return str.replace(/^s+/g, '').replace(/\s+$/g, '');
};

utils.escapeString = function(str, except) {
  return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+\^])/g, function(ch) {
    if (except && except.indexOf(ch) !== -1) {
      return ch;
    }
    return '\\' + ch;
  });
};

utils.stringifyYAML = function(src) {
  return yaml.safeDump(src);
};

utils.stringify = function(o, type) {
  switch (type) {
    case 'json':
      return JSON.stringify(o, null, 2);
    case 'yml':
    case 'yaml':
      return yaml.safeDump(o);
  }
  return null;
};

/*
  # Object utils
  */
utils.eachProperty = function(context, options) {
  var ret = '';
  for (var prop in context) {
    ret = ret + options.fn({
      property: prop,
      value: context[prop]
    });
  }
  return ret;
};

utils.prop = function(name) {
  return function(obj) {
    return obj[name];
  };
};

utils.showProps = function(obj, objName) {
  var result = '';
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
};

utils.listAllProperties = function(obj) {
  var objectToInspect = void 0;
  var result = [];
  objectToInspect = obj;
  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }
  return result;
};

utils.listProps = function(obj) {
  var value;
  var result = [];
  if (!obj) {
    return [];
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result.push(value);
    }
  }
  return result;
};

utils.toggleOutput = function(ext, md, html) {
  if (ext === '') {
    return md;
  } else {
    return html;
  }
};

/**
 * Generate HTML or markdown based on extension defined.
 *
 * @param {String} `ext` The extension defined.
 * @param {String} `markdown` The content to use for markdown
 * @param {String} `html` The content to use for HTML
 * @return {String}
 * @api public
 */

utils.switchOutput = function(ext, markdown, html) {
  switch (ext) {
    // return markdown
    case '.markdown':
    case '.md':
      return markdown;
      // return HTML
    case '.html':
    case '.htm':
      return html;
    default:
      return html;
  }
};

// utils.switchType = function(ext) {
//   var reader = fs.readJSONSync;
//   utils.getExt(ext);
//   switch (ext) {
//     case '.json':
//       reader = fs.readJSONSync;
//       break;
//     case '.yml':
//     case '.yaml':
//       reader = fs.readYAMLSync;
//   }
//   return reader;
// };


/**
 * _.safename("helper-foo")
 * @param  {[type]} name The name to be modified
 * @return {[type]}      The "safe" short version of the name
 * @example: "grunt-readme" => "readme"
 * @example: "helper-foo" => "foo"
 */

utils.safename = function(name, patterns) {
  var prefixes = ['grunt', 'helper', 'mixin'];
  prefixes = _.unique(_.flatten(_.union([], prefixes, patterns || [])));
  var re = new RegExp('^(?:' + prefixes.join('|') + ')[-_]?');
  return name.replace(re, '').replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
};
utils.shortname = function(name, patterns) {
  return _.safename(name, patterns);
};


/**
 * Detect and return the indentation of a string.
 * @param   {String} str [description]
 * @returns {[type]}     Actual indentation, or undefined.
 * @api public
 */

utils.detectIndentation = function(str) {
  var tabs = str.match(/^[\t]+/g) || [];
  var spaces = str.match(/^[ ]+/g) || [];
  var prevalent = (tabs.length >= spaces.length ? tabs : spaces);
  var indentation = void 0;

  var i = 0;
  var il = prevalent.length;

  while (i < il) {
    if (!indentation || prevalent[i].length < indentation.length) {
      indentation = prevalent[i];
    }
    i++;
  }
  return indentation;
};


/**
 * Grunt convenience utils.
 */


utils.detectDestType = function(dest) {
  if (_.endsWith(dest, '/')) {
    return 'directory';
  } else {
    return 'file';
  }
};

utils.endsWith = function(str, search) {
  var result = str.indexOf(search, str.length - search.length);
  return result !== -1;
};

/**
 * Return all matches in the given string.
 * @param  {String} string [the input string]
 * @param  {RegEx}  regex  [regular expression pattern]
 * @param  {[type]} index  [description]
 * @return {[type]}        [description]
 * @api public
 */

utils.getMatches = function(string, regex, index) {
  // default to the first capturing group
  index = index || (index = 1);
  var matches = [];
  var match = void 0;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
};
