(function() {
  var dir, endsWith, file, fs, loadFile, path, _i, _len, _ref;

  fs = require('fs');

  path = require('path');

  dir = path.join(__dirname, 'helpers');

  endsWith = function(str, search) {
    var result;

    result = str.indexOf(search, str.length - search.length);
    return result !== -1;
  };

  loadFile = function(file) {
    if (!endsWith(file, 'helpers.js')) {
      return require(file);
    }
  };

  _ref = fs.readdirSync(dir);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    file = _ref[_i];
    loadFile(path.join(dir, file));
  }

}).call(this);
