(function() {
  var dir, doWork, endsWith, file, fs, path, _i, _len, _ref;

  fs = require('fs');

  path = require('path');

  console.log(__dirname);

  dir = path.join(__dirname, 'helpers');

  console.log(dir);

  endsWith = function(str, search) {
    var result;

    result = str.indexOf(search, str.length - search.length);
    return result !== -1;
  };

  doWork = function(file) {
    console.log(file);
    console.log(endsWith(file, 'helpers.js'));
    if (!endsWith(file, 'helpers.js')) {
      return require(file);
    }
  };

  _ref = fs.readdirSync(dir);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    file = _ref[_i];
    doWork(path.join(dir, file));
  }

}).call(this);
