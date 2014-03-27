var _ = require('lodash');
var path = require('path');
var file = require('fs-utils');
var matter = require('gray-matter');
var sort = require('sort-object');
var marked = require('marked');
var extras = require('marked-extras');
var url = require('url');
var helpersUtils = require('helpers-utils');

var Utils = helpersUtils.Utils;
var Library = helpersUtils.Library;
var Dates = helpersUtils.Dates;
var HTML = helpersUtils.Html;

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

var handlebarsHelpers = function (config) {
  Utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
