'use strict';

var fs   = require('fs-utils');
var path = require('path');
var minimatch = require('minimatch');
var iconv     = require('iconv-lite');
var _         = require('lodash');

var to   = require('to');
var YAML = to.format.yaml;
var Handlebars = require('../helpers/helpers').Handlebars;
var config = fs.readJSONSync('./package.json');
var utils = module.exports;


/**
 * String byte order marks from source string
 * @param  {String} str
 * @return {String}
 * @api public
 */

utils.stripBom = function (str) {
  str = iconv.decode(str, 'utf8');
  // Strip any BOM that might exist.
  if (str.charCodeAt(0) === 0xFEFF) {
    str = str.substring(1);
  }
};

utils.isBoolean = function (obj) {
  var undef = void 0;
  var type = typeof obj;
  return obj !== undef && type === 'boolean' || type === 'Boolean';
};

utils.isNumber = function (obj) {
  var undef = void 0;
  return obj !== undef && obj !== null && (typeof obj === 'number' || obj instanceof Number);
};

utils.isObject = function (obj) {
  var undef = void 0;
  return obj !== null && obj !== undef && typeof obj === 'object';
};

utils.isRegExp = function (obj) {
  var undef = void 0;
  return obj !== undef && obj !== null && (obj instanceof RegExp);
};

utils.isFunction = function (obj) {
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
utils.detectType = function (value) {
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

utils.safeString = function (str) {
  return new Handlebars.SafeString(str);
};

var toString = function (val) {
  if (val == null) {
    return '';
  } else {
    return val.toString();
  }
};
utils.toString = Object.prototype.toString;

utils.lowerCase = function (str) {
  str = toString(str);
  return str.toLowerCase();
};

utils.isUndefined = function (value) {
  return typeof value === 'undefined' || utils.toString.call(value) === '[object Function]' || (value.hash != null);
};

utils.trim = function (str) {
  var trim = /\S/.test('\xA0') ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
  return str.toString().replace(trim, '');
};

/**
 * Trim space on left and right of a string
 * @param {String} myString source string
 * @return {String} trimmed string
 * @api public
 */

utils.trimWhitspace = function (str) {
  return str.replace(/^s+/g, '').replace(/\s+$/g, '');
};

utils.escapeString = function (str, except) {
  return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+\^])/g, function (ch) {
    if (except && except.indexOf(ch) !== -1) {
      return ch;
    }
    return '\\' + ch;
  });
};

utils.escapeExpression = function (str) {
  return Handlebars.utils.escapeExpression(str);
};

utils.stringifyYAML = function (src) {
  return YAML.stringify(src);
};

utils.stringifyObj = function (src, type) {
  var output;
  switch (type) {
  case 'json':
    output = JSON.stringify(src, null, 2);
    break;
  case 'yml':
  case 'yaml':
    output = YAML.stringify(src);
  }
  return output;
};

/*
  # Object utils
  */
u
tils.eachProperty = function (context, options) {
  var ret = '';
  for (var prop in context) {
    ret = ret + options.fn({
      property: prop,
      value: context[prop]
    });
  }
  return ret;
};

utils.prop = function (name) {
  return function (obj) {
    return obj[name];
  };
};

utils.showProps = function (obj, objName) {
  var result = '';
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
};

utils.listAllProperties = function (obj) {
  var objectToInspect = void 0;
  var result = [];
  objectToInspect = obj;
  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }
  return result;
};

utils.listProps = function (obj) {
  var value;
  var result = [];
  if (!obj) {return [];}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result.push(value);
    }
  }
  return result;
};
/**
 * Path utils
 */

utils.getBasename = function (filename) {
  return path.basename(filename, path.extname(filename));
};

utils.getRelativePath = function (from, to) {
  var relativePath = path.relative(path.dirname(from), path.dirname(to));
  return utils.urlNormalize(path.join(relativePath, path.basename(to)));
};


/**
 * Ensure that a URL path is returned, instead of a filesystem path.
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 * @api public
 */

utils.urlNormalize = function (filepath) {
  return filepath.replace(/\\/g, '/');
};
/**
 * fs utils
 */

/**
 * Read file synchronously. Based on grunt.file.read.
 * @param  {String} filepath
 * @return {String}
 * @api public
 */

utils.readFileSync = function(filepath, opts) {
  var contents;
  opts = opts || {};
  opts.defaultEncoding = 'utf8';
  try {
    contents = fs.readFileSync(String(filepath));
    // If encoding is not explicitly null, convert from encoded buffer to a
    // string. If no encoding was specified, use the default.
    if (opts.encoding !== null) {
      contents = iconv.decode(contents, opts.encoding || opts.defaultEncoding);
      // Strip any BOM that might exist.
      if (contents.charCodeAt(0) === 0xFEFF) {
        contents = contents.substring(1);
      }
    }
    return contents;
  } catch(e) {
    throw new Error('Unable to read "' + filepath + '" file (Error code: ' + e.code + ').', e);
  }
};

// Read a file, parse its contents, return an object.
utils.readJSON = function (filepath, indent) {
  indent = indent || 2;
  return JSON.parse(utils.readFileSync(filepath, null, indent));
};
/**
 * Read 'Optional' JSON
 * @author: 'Cowbow' Ben Alman <http://github.com/cowboy>
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 * @api public
 */

utils.readOptionalJSON = function (filepath) {
  var data = {};
  try {
    data = fs.readJSONSync(filepath);
  } catch (_error) {}
  return data;
};

/**
 * Read 'Optional' YAML
 * @author: 'Cowbow' Ben Alman <http://github.com/cowboy>
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 * @api public
 */

utils.readOptionalYAML = function (filepath) {
  var data = {};
  try {
    data = fs.readYAMLSync(filepath);
  } catch (_error) {}
  return data;
};

utils.readPackageJSON = function (filepath) {
  var data = {};
  try {
    data = fs.readJSONSync(filepath);
  } catch (_error) {}
  try {
    data = fs.readJSONSync('package.json');
  } catch (_error) {}
  return data;
};


/**
 * Conditional output
 */

utils.getExt = function (str) {
  var extname = path.extname(str);
  if (extname) {
    str = extname;
  }
  if (str[0] === '.') {
    str = str.substring(1);
  }
  return str;
};

utils.toggleOutput = function (ext, md, html) {
  if (ext === '') {
    return md;
  } else {
    return html;
  }
};

/**
 * Generate HTML or markdown based on extension defined.
 * @param  {String} ext      The extension defined.
 * @param  {String} markdown The content to use for markdown
 * @param  {String} html     The content to use for HTML
 * @return {String}
 * @api public
 */

utils.switchOutput = function (ext, markdown, html) {
  var output;
  switch (ext) {

  // return markdown
  case '.markdown':
  case '.md':
    output = markdown;
    break;

  // return HTML
  case '.html':
  case '.htm':
    output = html;
    break;

  default:
    output = html;
  }
  return output;
};

utils.switchType = function (ext) {
  var reader = fs.readJSONSync;
  utils.getExt(ext);
  switch (ext) {
  case '.json':
    reader = fs.readJSONSync;
    break;
  case '.yml':
  case '.yaml':
    reader = fs.readYAMLSync;
  }
  return reader;
};


/**
 * Conveniene utils
 */


/**
 * Extract the homepage from package.json
 * @return {[type]} [description]
 * @api public
 */

utils.homepage = function () {
  if(config.homepage) {
    return config.homepage;
  } else {
    return config.repository.url.replace(/^git@([^:]+):(.+)(?:.git)/, 'https://$1/$2');
  }
};

utils.contributors = function (sep) {
  sep = sep || '';
  if(config.contributors) {
    return _.pluck(config.contributors, 'name').join('\n') + sep;
  } else {return; }
};


/**
 * _.safename("helper-foo")
 * @param  {[type]} name The name to be modified
 * @return {[type]}      The "safe" short version of the name
 * @example: "grunt-readme" => "readme"
 * @example: "helper-foo" => "foo"
 */

utils.safename = function (name, patterns) {
  var prefixes = ['grunt', 'helper', 'mixin'];
  prefixes = _.unique(_.flatten(_.union([], prefixes, patterns || [])));
  var re = new RegExp('^(?:' + prefixes.join('|') + ')[-_]?');
  return name.replace(re, '').replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
};
utils.shortname = function (name, patterns) {
  return _.safename(name, patterns);
};


/**
 * Detect and return the indentation of a string.
 * @param   {String} str [description]
 * @returns {[type]}     Actual indentation, or undefined.
 * @api public
 */

utils.detectIndentation = function (str) {
  var tabs        = str.match(/^[\t]+/g) || [];
  var spaces      = str.match(/^[ ]+/g)  || [];
  var prevalent   = (tabs.length >= spaces.length ? tabs : spaces);
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


utils.detectDestType = function (dest) {
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

// Grunt.file.exists True if the file path exists.
utils.exists = function (file) {
  return fs.existsSync(file);
};

// Read a file, return its contents.
utils.read = function (filepath, options) {
  return fs.readFileSync(filepath, options);
};

// Read a YAML file, parse its contents, return an object.
utils.readYAML = function (filepath, options) {
  return fs.readYAMLSync(filepath, options);
};

// Write a file.
utils.write = function (filepath, contents, options) {
  return fs.writeSync(filepath, contents, options);
};

// Copy file from A to B
utils.copyFile = function (filepath, options) {
  return fs.copyFileSync(filepath, options);
};

// Create a directory along with any intermediate directories.
utils.mkDir = function (dirpath, mode) {
  return fs.mkdirSync(dirpath, mode);
};

// Normalize linefeeds in a string.
utils.normalizelf = function (str) {
  return fs.normalize(str);
};

/**
 * Return all matches in the given string.
 * @param  {String} string [the input string]
 * @param  {RegEx}  regex  [regular expression pattern]
 * @param  {[type]} index  [description]
 * @return {[type]}        [description]
 * @api public
 */

utils.getMatches = function (string, regex, index) {
  // default to the first capturing group
  index = index || (index = 1);
  var matches = [];
  var match = void 0;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
};

