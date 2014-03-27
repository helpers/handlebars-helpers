
// ensure lodash / underscore is included
if (typeof _ === 'undefined') {
  console.log('Error: lodash must be included before handlebars-helpers');
}

// ensure helpers-utils are included
if (typeof helpersUtils === 'undefined') {
  console.log('Error: helpers-utils must be included before handlebars-helpers');
}

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

var HandlebarsHelpers = function (config) {
  Utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
