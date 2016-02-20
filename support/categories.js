'use strict';

var fs = require('fs');
var path = require('path');

function categories(dir) {
  var files = fs.readdirSync(dir);
  var len = files.length, i = -1;
  var sections = [];

  while (++i < len) {
    var name = files[i];
    if (!/\.js$/.test(name) || name === 'index.js') {
      continue;
    }
    sections.push(toSection(name));
  }
  return sections.join('\n\n');
}

function toSection(name) {
  var section = '### ' + name;
  section += '\n';
  section += '{%= apidocs(\'lib/' + name + '\') %}';
  return section;
}

module.exports = categories(path.join(__dirname, '../lib'));
