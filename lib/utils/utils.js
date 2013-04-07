(function() {
  var Handlebars, Utils, fs, path;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  path = require('path');

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

  Utils.urlNormalize = function(urlString) {
    return urlString.replace(/\\/g, '/');
  };

}).call(this);
