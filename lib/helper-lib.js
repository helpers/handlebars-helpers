(function() {
  var dir, fs, path;

  fs = require('fs');

  path = require('path');

  dir = path.join(__dirname, 'helpers');

  module.exports.register = function(Handlebars, options) {
    var endsWith, file, loadFile, _i, _len, _ref, _results;
    endsWith = function(str, search) {
      var result;
      result = str.indexOf(search, str.length - search.length);
      return result !== -1;
    };
    loadFile = function(file) {
      var helper;
      if (!endsWith(file, 'helpers.js')) {
        helper = require(file);
      }
      if (!(typeof helper === 'undefined' || typeof helper.register === 'undefined')) {
        return helper.register(Handlebars, options);
      }
    };
    _ref = fs.readdirSync(dir);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      file = _ref[_i];
      _results.push(loadFile(path.join(dir, file)));
    }
    return _results;
  };

}).call(this);
