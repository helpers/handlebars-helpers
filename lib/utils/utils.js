(function() {
  var Handlebars, Utils, fs, grunt, mout, path,
    __slice = [].slice;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

  grunt = require("grunt");

  mout = require('mout');

  Utils = module.exports = {};

  Utils.toString = Object.prototype.toString;

  Utils.isUndefined = function(value) {
    return value === 'undefined' || Utils.toString.call(value) === '[object Function]' || (value.hash != null);
  };

  Utils.safeString = function(str) {
    return new Handlebars.SafeString(str);
  };

  Utils.trim = function(str) {
    var trim;

    trim = /\S/.test("\xA0") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
    return str.toString().replace(trim, '');
  };

  Utils.pluck = mout.collection.pluck;

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

  /*
  # Detect and return the indentation.
  #
  # @param  {String} string
  #
  # @return {Mixed} Indentation used, or undefined.
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

  /*
  node.path utils
  */


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
    var relativePath;

    return relativePath = Utils.urlNormalize(path.relative(from, to));
  };

  Utils.getPropString = function(prop) {
    return prop = grunt.config.getPropString(prop);
  };

  /*
  Globbing
  */


  Utils.glob = function(pattern, config) {
    var options, results;

    options = {};
    if (config.dir) {
      options.cwd = path.normalize(config.dir);
    }
    results = glob.sync(pattern, options);
    if (!config.exclude) {
      return results;
    }
    results = results.filter(function(path) {
      return !config.exclude.test(path);
    });
    return results;
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

  Utils.readBasedOnType = function(ext) {
    var reader;

    ext = options.ext;
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

  Utils.exists = function(file) {
    var src;

    return src = grunt.file.exists(file);
  };

  Utils.read = function(filepath, options) {
    var src;

    return src = grunt.file.read(filepath, options);
  };

  Utils.expand = function(filepath, options) {
    var src;

    return src = grunt.file.expand(filepath, options);
  };

  Utils.expandMapping = function(patterns, destBase, options) {
    var src;

    return src = grunt.file.expandMapping(patterns, destBase, options);
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

  Utils.urlNormalize = function(filepath) {
    var win32;

    win32 = process.platform === "win32";
    if (win32) {
      return filepath.replace(/\\/g, "/");
    } else {
      return filepath;
    }
  };

}).call(this);
