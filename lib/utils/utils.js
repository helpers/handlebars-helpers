(function() {
  var Handlebars, Utils, fs, glob, grunt, path;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

  grunt = require("grunt");

  glob = require('globule');

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

  /*
  Globbing
  */


  glob = function(pattern, config) {
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

    return src = grunt.file.write(file);
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

  Utils.urlNormalize = function(filepath) {
    return filepath.replace(/\\/g, "/");
  };

}).call(this);
