var _ = require('lodash');

/**
 * Expose Lo-Dash as Handlebars helpers
 */

module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in _) {
    if (_.hasOwnProperty(helper)) {
      Handlebars.registerHelper('_' + helper, _[helper]);
    }
  }
};
