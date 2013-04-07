(function() {
  var Handlebars, Utils, fs, path;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

  Utils = module.exports = {};

  Utils.toString = Object.prototype.toString;

  Utils.read = function(source, callback) {
    return fs.exists(source, function(exist) {
      if (exist) {
        return fs.readFile(source, "utf8", function(err, result) {
          if (err) {
            return callback(err);
          }
          return callback(null, textProcess(result));
        });
      } else {
        return callback(null);
      }
    });
  };

  Utils.readSync = function(source) {
    var result;

    result = fs.readFileSync(source, "utf8");
    if (result) {
      return textProcess(result);
    }
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

  Utils.urlNormalize = function(urlString) {
    return urlString.replace(/\\/g, '/');
  };

}).call(this);
