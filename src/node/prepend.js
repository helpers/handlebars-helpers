
var _ = require('lodash');
var path = require('path');
var file = require('fs-utils');
var matter = require('gray-matter');
var sort = require('sort-object');
var marked = require('marked');
var extras = require('marked-extras');
var url = require('url');

var utils = require('helpers-utils');
var Library = utils.Library;

var Utils = require('../src/utils/utils');
var Glob = require('../src/utils/glob');
var Dates = require('../src/utils/dates');
var HTML = require('../src/utils/html');
var _indexOf = require('../src/utils/lib/indexOf');

var specs = {
  context: function () { return {}; },
  options: { },
  registerHelper: function () { },
  registerFunction: function () { },
  registerHelpers: function () { },
  registerFunctions: function () { },
  Handlebars: {
    safeString: function (str) {
      return utils.safeString(str);
    }
  }
};

module.exports = function (config) {
  utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
