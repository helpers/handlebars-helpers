(function() {
  var Handlebars, Utils, fs, grunt, minimatch, path, _,
    __slice = [].slice;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

  grunt = require("grunt");

  _ = require("lodash");

  minimatch = require("minimatch");

  Utils = module.exports = {};

  Utils.toString = Object.prototype.toString;

  Utils.isUndefined = function(value) {
    return value === 'undefined' || Utils.toString.call(value) === '[object Function]' || (value.hash != null);
  };

  Utils.safeString = function(str) {
    return new Handlebars.SafeString(str);
  };

  Utils.escapeString = function(str, except) {
    return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+\^])/g, function(ch) {
      if (except && except.indexOf(ch) !== -1) {
        return ch;
      }
      return "\\" + ch;
    });
  };

  Utils.escapeExpression = function(str) {
    return Handlebars.Utils.escapeExpression;
  };

  Utils.trim = function(str) {
    var trim;

    trim = /\S/.test("\xA0") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
    return str.toString().replace(trim, '');
  };

  Utils.propagate = function(callback, func) {
    return function() {
      var args, err;

      err = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (err) {
        return callback(err);
      }
      return func.apply(this, args);
    };
  };

  Utils.isFunction = function(obj) {
    return typeof obj === "function";
  };

  Utils.isBoolean = function(obj) {
    var type, undef;

    undef = void 0;
    type = typeof obj;
    return obj !== undef && type === "boolean" || type === "Boolean";
  };

  Utils.isNumber = function(obj) {
    var undef;

    undef = void 0;
    return obj !== undef && obj !== null && (typeof obj === "number" || obj instanceof Number);
  };

  Utils.isObject = function(obj) {
    var undef;

    undef = void 0;
    return obj !== null && obj !== undef && typeof obj === "object";
  };

  Utils.isRegExp = function(obj) {
    var undef;

    undef = void 0;
    return obj !== undef && obj !== null && (obj instanceof RegExp);
  };

  Utils.repoUrl = function(str) {
    var pkg, url;

    pkg = grunt.file.readJSON("./package.json");
    url = pkg.repository.url;
    return str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str);
  };

  /*
  # Detect and return the indentation.
  # param  {String} string
  # return {Mixed} Indentation used, or undefined.
  */


  Utils.detectIndentation = function(string) {
    var i, il, indentation, prevalent, spaces, tabs;

    tabs = string.match(/^[\t]+/g) || [];
    spaces = string.match(/^[ ]+/g) || [];
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

  Utils.getExt = function(str) {
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

  Utils.getBasename = function(base, ext) {
    var fullName;

    fullName = path.basename(base, ext);
    return base = path.basename(base, path.extname(fullName));
  };

  Utils.getRelativePath = function(from, to) {
    var fromDirname, relativePath, toBasename, toDirname;

    fromDirname = path.normalize(path.dirname(from));
    toDirname = path.normalize(path.dirname(to));
    toBasename = path.basename(to);
    relativePath = path.relative(fromDirname, toDirname);
    return Utils.urlNormalize(path.join(relativePath, toBasename));
  };

  Utils.getPropString = function(prop) {
    return prop = grunt.config.getPropString(prop);
  };

  Utils.detectType = function(value) {
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

  Utils.toggleOutput = function(ext, md, html) {
    var output;

    if (ext === '') {
      return output = md;
    } else {
      return output = html;
    }
  };

  Utils.switchOutput = function(ext, md, html) {
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

  Utils.switchType = function(ext) {
    var reader;

    reader = grunt.file.readJSON;
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

  Utils.readOptionalJSON = function(filepath) {
    var data;

    data = {};
    try {
      data = grunt.file.readJSON(filepath);
      grunt.verbose.write("Reading " + filepath + "...").ok();
    } catch (_error) {}
    return data;
  };

  Utils.readOptionalYAML = function(filepath) {
    var data;

    data = {};
    try {
      data = grunt.file.readYAML(filepath);
      grunt.verbose.write("Reading " + filepath + "...").ok();
    } catch (_error) {}
    return data;
  };

  Utils.detectDestType = function(dest) {
    if (grunt.util._.endsWith(dest, "/")) {
      return "directory";
    } else {
      return "file";
    }
  };

  Utils.globFiles = function(src) {
    var content;

    return content = grunt.file.expand(src).map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed));
  };

  Utils.exists = function(file) {
    var src;

    return src = grunt.file.exists(file);
  };

  Utils.read = function(filepath, options) {
    var src;

    return src = grunt.file.read(filepath, options);
  };

  Utils.readJSON = function(filepath, options) {
    var src;

    return src = grunt.file.readJSON(filepath, options);
  };

  Utils.readYAML = function(filepath, options) {
    var src;

    return src = grunt.file.readYAML(filepath, options);
  };

  Utils.write = function(filepath, contents, options) {
    var src;

    return src = grunt.file.write(filepath, contents, options);
  };

  Utils.copyFile = function(filepath, options) {
    var src;

    src = grunt.file.copy(filepath, options);
    return true;
  };

  Utils.mkDir = function(dirpath, mode) {
    var src;

    return src = grunt.file.mdDir(dirpath, mode);
  };

  Utils.normalizelf = function(str) {
    var src;

    return src = grunt.util.normalizelf(str);
  };

  /*
  Markdown Utils
  */


  Utils.lowerCase = function(str) {
    str = toString(str);
    return str.toLowerCase();
  };

  Utils.findHeadings = /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm;

  Utils.findh1 = /^(#{1} )\s*(.*?)\s*#*\s*(?:\n|$)/gm;

  Utils.findh2 = /^(#{2} )\s*(.*?)\s*#*\s*(?:\n|$)/gm;

  Utils.findParens = /\(([^)]+)\)/g;

  Utils.buildObjectPaths = function(obj) {
    var files;

    files = [];
    _.forOwn(obj, function(value, key) {
      var file, recurse;

      file = key;
      recurse = function(obj) {
        return _.forOwn(obj, function(value, key) {
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

  Utils.globObject = function(obj, pattern) {
    var files, getValue, matches, rtn, setValue;

    files = Utils.buildObjectPaths(obj);
    matches = files.filter(minimatch.filter(pattern));
    rtn = {};
    getValue = function(obj, path) {
      var keys, value;

      keys = path.split('/');
      value = _.cloneDeep(obj);
      _.forEach(keys, function(key) {
        if (_.has(value, key)) {
          return value = _.cloneDeep(value[key]);
        }
      });
      return value;
    };
    setValue = function(obj, path, value) {
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
    _.forEach(matches, function(match) {
      var value;

      value = getValue(obj, match);
      return rtn = setValue(rtn, match, value);
    });
    return rtn;
  };

  Utils.urlNormalize = function(filepath) {
    return filepath.replace(/\\/g, "/");
  };

}).call(this);
