/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/jonschlinkert
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

var _ = require('lodash');
var prettify = require('js-beautify').html;

// The module to be exported
var helpers = module.exports = {};

/**
 * Prettify HTML output
 * @example:
 *   {{#prettify indent="2"}}
 *     {{> body }}
 *   {{/prettify}}
 */
module.exports.register = function (Handlebars, options) {

  var assembleOptions = options || {};

  /**
   * Default options passed to js-beautify.
   * @param {hash arguments} [Options received as hash arguments will override defaults.]
   * @param {task options}   [Options defined in the task/target override hash arguments.]
   */
  var defaults = {
    indent: 2,
    indent_size: 2,
    indent_inner_html: true,
    unformatted: ['code', 'pre']
  };

  defaults.indent = defaults.indent_size;
  defaults = _.extend(assembleOptions.prettify, defaults);

  helpers.prettify = function (options) {
    var hash = _.extend({}, assembleOptions.prettify, options.hash);
    var content = prettifyHTML(options.fn(this), hash);

    // Reduce multiple newlines to a single newline
    if (options.prettify.condense === true) {
      content = content.replace(/(\n|\r){2,}/g, '\n');
    }
    // Add a single newline above code comments.
    if (options.prettify.newlines === true) {
      content = content.replace(/(\s*<!--)/g, '\n$1');
    }

    return content;
  };

  /**
   * Format HTML with js-beautify, pass in options.
   * @param   {String} source  [The un-prettified HTML.]
   * @param   {Object} options [Object of options passed to js-beautify.]
   * @returns {String}         [Stunning HTML.]
   */
  var prettifyHTML = function (source, options) {
    try {
      return prettify(source, options);
    } catch (e) {
      console.error(e);
      console.warn('HTML beautification failed.');
    }
  };

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};