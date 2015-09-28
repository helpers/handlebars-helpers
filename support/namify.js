'use strict';

var chalk = require('chalk');
var through = require('through2');
var relative = require('relative');
var path = require('path');

/**
 * Ensure that method names are properly defined.
 * Also warns if code comments are missing.
 */

module.exports = function names(options) {
  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();

    if (str.indexOf('@name') === -1 && file.path.indexOf('index.js') === -1) {
      var i = str.indexOf('@param');
      if (i !== -1) {
        str = str.substr(0, i) + namify(file.path) + '\n * ' + str.substr(i);
      } else {
        console.log(chalk.red('code comments missing in: '), relative(file.path));
      }
    }
    // file.contents = new Buffer(str);
    this.push(file);
    cb();
  });
};


function namify(fp) {
  return '@name .'+ basename(fp);
}

function basename(fp) {
  return path.basename(fp, path.extname(fp));
}
