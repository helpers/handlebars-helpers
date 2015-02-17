/* global window */
var Handlebars;

if (typeof window !== "undefined" && window !== null) {
  Handlebars = window.Handlebars;
}

if (typeof module !== "undefined" && module !== null) {
  Handlebars = module.exports.Handlebars = require('handlebars');
}

module.exports.helpers = {
  code        : require(__dirname + '/code.js'),
  collections : require(__dirname + '/collections.js'),
  comparisons : require(__dirname + '/comparisons.js'),
  data        : require(__dirname + '/data.js'),
  dates       : require(__dirname + '/dates.js'),
  fs          : require(__dirname + '/fs.js'),
  html        : require(__dirname + '/html.js'),
  i18n        : require(__dirname + '/i18n.js'),
  index       : require(__dirname + '/index.js'),
  inflections : require(__dirname + '/inflections.js'),
  logging     : require(__dirname + '/logging.js'),
  markdown    : require(__dirname + '/markdown.js'),
  math        : require(__dirname + '/math.js'),
  misc        : require(__dirname + '/misc.js'),
  numbers     : require(__dirname + '/numbers.js'),
  path        : require(__dirname + '/path.js'),
  string      : require(__dirname + '/string.js'),
  url         : require(__dirname + '/url.js')
};
