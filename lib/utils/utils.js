/**
 * Handlebars Helper Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var Handlebars = require('../helpers/helpers').Handlebars;
var minimatch  = require("minimatch");
var grunt      = require("grunt");
var path       = require('path');
var to         = require("to");
var _          = require("lodash");


var Utils = module.exports = exports = {};
Utils.toString = Object.prototype.toString;

Utils.isFunction = function (obj) {
  return typeof obj === "function";
};

Utils.isBoolean = function (obj) {
  var type, undef;
  undef = void 0;
  type = typeof obj;
  return obj !== undef && type === "boolean" || type === "Boolean";
};

Utils.isNumber = function (obj) {
  var undef;
  undef = void 0;
  return obj !== undef && obj !== null && (typeof obj === "number" || obj instanceof Number);
};

Utils.isObject = function (obj) {
  var undef;
  undef = void 0;
  return obj !== null && obj !== undef && typeof obj === "object";
};

Utils.isRegExp = function (obj) {
  var undef;
  undef = void 0;
  return obj !== undef && obj !== null && (obj instanceof RegExp);
};

Utils.detectType = function (value) {
  switch (typeof value) {
  case "string":
    return "str";
  case "number":
    return "num";
  case "object":
    return "obj";
  default:
    return "other";
  }
};

/*
  # String Utils
  */

var toString = function (val) {
  if (val == null) {
    return "";
  } else {
    return val.toString();
  }
};

Utils.lowerCase = function (str) {
  str = toString(str);
  return str.toLowerCase();
};

Utils.isUndefined = function (value) {
  return value === 'undefined' || Utils.toString.call(value) === '[object Function]' || (value.hash != null);
};

Utils.trim = function (str) {
  var trim;
  trim = /\S/.test("\xA0") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
  return str.toString().replace(trim, '');
};

Utils.safeString = function (str) {
  return new Handlebars.SafeString(str);
};

Utils.escapeString = function (str, except) {
  return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+\^])/g, function (ch) {
    if (except && except.indexOf(ch) !== -1) {
      return ch;
    }
    return "\\" + ch;
  });
};

Utils.escapeExpression = function (str) {
  str = Handlebars.Utils.escapeExpression(str);
  return str;
};

Utils.stringifyYAML = function (src) {
  var YAML, stringifyFile;
  YAML = to.format.yaml;
  return stringifyFile = YAML.stringify(src);
};

Utils.stringifyObj = function (src, type) {
  var YAML, output;
  YAML = to.format.yaml;
  output = JSON.stringify(src, null, 2);
  switch (type) {
  case "json":
    output = JSON.stringify(src);
    break;
  case "yml":
  case "yaml":
    output = YAML.stringify(src);
  }
  return output;
};

/*
  # Object Utils
  */

Utils.prop = function (name) {
  return function (obj) {
    return obj[name];
  };
};

Utils.showProps = function (obj, objName) {
  var i, result;
  result = "";
  for (i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
};

Utils.listAllProperties = function (obj) {
  var objectToInspect, result;
  objectToInspect = void 0;
  result = [];
  objectToInspect = obj;
  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }
  return result;
};

Utils.listProps = function (obj) {
  var key, result, value;
  key = void 0;
  value = void 0;
  result = [];
  if (!obj) {
    return [];
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result.push(value);
    }
  }
  return result;
};

/*
  # Node.js Path Utils
  */

Utils.getExt = function (str) {
  var extname;
  extname = path.extname(str);
  if (extname) {
    str = extname;
  }
  if (str[0] === ".") {
    str = str.substring(1);
  }
  return str;
};

Utils.getBasename = function (base, ext) {
  var fullName;
  fullName = path.basename(base, ext);
  return base = path.basename(base, path.extname(fullName));
};

Utils.getRelativePath = function (from, to) {
  var fromDirname, relativePath, toBasename, toDirname;
  fromDirname = path.normalize(path.dirname(from));
  toDirname = path.normalize(path.dirname(to));
  toBasename = path.basename(to);
  relativePath = path.relative(fromDirname, toDirname);
  return Utils.urlNormalize(path.join(relativePath, toBasename));
};

/*
  # File type
  */

Utils.toggleOutput = function (ext, md, html) {
  var output;
  if (ext === '') {
    return output = md;
  } else {
    return output = html;
  }
};

Utils.switchOutput = function (ext, md, html) {
  var output;
  switch (ext) {
  case "":
  case ".md":
    output = md;
    break;
  case ".html":
  case ".htm":
    output = html;
  }
  return output;
};

Utils.switchType = function (ext) {
  var reader;
  reader = grunt.file.readJSON;
  Utils.getExt(ext);
  switch (ext) {
  case ".json":
    reader = grunt.file.readJSON;
    break;
  case ".yml":
  case ".yaml":
    reader = grunt.file.readYAML;
  }
  return reader;
};

Utils.readOptionalJSON = function (filepath) {
  var data;
  data = {};
  try {
    data = grunt.file.readJSON(filepath);
    grunt.verbose.write("Reading " + filepath + "...").ok();
  } catch (_error) {}
  return data;
};

/**
 * Read 'Optional' YAML
 * @author: "Cowbow" Ben Alman <http://github.com/cowboy>
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
Utils.readOptionalYAML = function (filepath) {
  var data;
  data = {};
  try {
    data = grunt.file.readYAML(filepath);
    grunt.verbose.write("Reading " + filepath + "...").ok();
  } catch (_error) {}
  return data;
};

/**
 * Read 'Optional' JSON
 * @author: "Cowbow" Ben Alman <http://github.com/cowboy>
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
Utils.readPackageJSON = function (filepath) {
  var data;
  data = {};
  try {
    data = grunt.file.readJSON(filepath);
  } catch (_error) {}
  try {
    data = grunt.file.readJSON('package.json');
    grunt.verbose.write("Reading " + filepath + "...").ok();
  } catch (_error) {}
  return data;
};

/**
 * Extract GitHub repo URL from package.json
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
Utils.repoUrl = function (str) {
  var pkg, url;
  pkg = grunt.file.readJSON("./package.json");
  url = pkg.repository.url;
  return str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str);
};

/**
 * Detect and return the indentation of a string.
 * @param   {String} str [description]
 * @returns {[type]}     Actual indentation, or undefined.
 */
Utils.detectIndentation = function (str) {
  var i, il, indentation, prevalent, spaces, tabs;
  tabs = str.match(/^[\t]+/g) || [];
  spaces = str.match(/^[ ]+/g) || [];
  prevalent = (tabs.length >= spaces.length ? tabs : spaces);
  indentation = void 0;
  i = 0;
  il = prevalent.length;
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

Utils.detectDestType = function (dest) {
  if (grunt.util._.endsWith(dest, "/")) {
    return "directory";
  } else {
    return "file";
  }
};

// Grunt.file.exists True if the file path exists.
Utils.exists = function (file) {
  var src;
  return src = grunt.file.exists(file);
};

// Read a file, return its contents.
Utils.read = function (filepath, options) {
  var src;
  return src = grunt.file.read(filepath, options);
};

// Read a file, parse its contents, return an object.
Utils.readJSON = function (filepath, options) {
  var src;
  return src = grunt.file.readJSON(filepath, options);
};

// Read a YAML file, parse its contents, return an object.
Utils.readYAML = function (filepath, options) {
  var src;
  return src = grunt.file.readYAML(filepath, options);
};

// Write a file.
Utils.write = function (filepath, contents, options) {
  var src;
  return src = grunt.file.write(filepath, contents, options);
};

// Copy file from A to B
Utils.copyFile = function (filepath, options) {
  var src;
  src = grunt.file.copy(filepath, options);
  return true;
};

// Create a directory along with any intermediate directories.
Utils.mkDir = function (dirpath, mode) {
  var src;
  return src = grunt.file.mdDir(dirpath, mode);
};

// Normalize linefeeds in a string.
Utils.normalizelf = function (str) {
  var src;
  return src = grunt.util.normalizelf(str);
};

/**
 * Accepts two objects (a,b) and returning 1 if a >= b otherwise -1.
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
Utils.compareFn = function(val) {
  val = val || function (a, b) {
    if (a.index >= b.index) {
      return 1;
    } else {
      return -1;
    }
  };
};


//
// Globbing Utils
// ---------------------------------------------------



/**
 * Utils.globFiles
 *
 * Returns an array of all file paths that match
 * the given wildcard patterns, then read each file
 * and return its contents as a string, and last
 * normalize all line linefeeds in the string
 *
 * @author: Jon Schlinkert <http://ghtub.com/jonschlinkert>
 * @param {String|Array} src Globbing pattern(s).
 * @param {Function=} Accepts two objects (a,b) and returning 1 if a >= b otherwise -1.
 * Properties passed to compare_fn are:
 *   {
 *     index: original index of file strating with 1
 *     path: full file path
 *     content: content of file
 *   }
 */
Utils.globFiles = function (src, compare_fn) {
  compare_fn = Utils.compareFn(compare_fn);
  var content = void 0;
  var index = 0;
  return content = grunt.file.expand(src).map(function (path) {
    index += 1;
    return {
      index: index,
      path: path,
      content: grunt.file.read(path)
    };
  }).sort(compare_fn).map(function (obj) {
    return obj.content;
  }).join(grunt.util.normalizelf(grunt.util.linefeed));
};


Utils.buildObjectPaths = function (obj) {
  var files;
  files = [];
  _.forOwn(obj, function (value, key) {
    var file, recurse;
    file = key;
    recurse = function (obj) {
      return _.forOwn(obj, function (value, key) {
        if (file.length !== 0) {
          file += '/';
        }
        file += key;
        if (_.isObject(value)) {
          return recurse(value);
        }
      });
    };
    if (_.isObject(value)) {
      recurse(value);
    }
    return files.push(file);
  });
  return files;
};

Utils.globObject = function (obj, pattern) {
  var files, getValue, matches, rtn, setValue;
  files = Utils.buildObjectPaths(obj);
  matches = files.filter(minimatch.filter(pattern));
  rtn = {};
  getValue = function (obj, path) {
    var keys, value;
    keys = path.split('/');
    value = _.cloneDeep(obj);
    _.forEach(keys, function (key) {
      if (_.has(value, key)) {
        return value = _.cloneDeep(value[key]);
      }
    });
    return value;
  };
  setValue = function (obj, path, value) {
    var key, keys;
    keys = path.split('/');
    key = keys.shift();
    if (keys.length) {
      obj[key] = setValue({}, keys.join('/'), value);
    } else {
      obj[key] = value;
    }
    return obj;
  };
  _.forEach(matches, function (match) {
    var value;
    value = getValue(obj, match);
    return rtn = setValue(rtn, match, value);
  });
  return rtn;
};

/**
 * Return all matches in the given string.
 * @param  {String} string [the input string]
 * @param  {RegEx}  regex  [regular expression pattern]
 * @param  {[type]} index  [description]
 * @return {[type]}        [description]
 */
Utils.getMatches = function (string, regex, index) {
  // default to the first capturing group
  index = index || (index = 1);
  var matches = [];
  var match = void 0;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
};

/**
 * Ensure that a URL path is returned, instead of a filesystem path.
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
Utils.urlNormalize = function (filepath) {
  return filepath.replace(/\\/g, "/");
};