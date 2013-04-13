(function() {
  var Handlebars, Utils, fs, path;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

  Utils = module.exports = {};

  Utils.toString = Object.prototype.toString;

  Utils.getExtname = function(str) {
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

  Utils.read = function(source) {
    var result;

    source = path.normalize(source);
    return result = fs.readFileSync(source, "utf8");
  };

  Utils.readFile = function(source) {
    var result;

    source = path.normalize(source);
    return result = fs.readFileSync(source, "utf8");
  };

  Utils.readSync = function(source) {
    var result;

    return result = fs.readFileSync(source, "utf8");
  };

  Utils.readStream = function(source) {
    var result;

    return result = fs.createReadStream(source, "utf8");
  };

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

  Utils.resolvePath = function(from, to) {
    from = path.resolve(__dirname, from);
    to = path.resolve(__dirname, to);
    return path.result(from, to);
  };

  Utils.urlNormalize = function(urlString) {
    return urlString.replace(/\\/g, '/');
  };

}).call(this);
