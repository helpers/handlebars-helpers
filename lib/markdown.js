'use strict';

const helperMarkdown = require('../helper-markdown');

const helpers = module.exports;

/**
 * Block helper that converts a string of inline markdown to HTML.
 *
 * ```handlebars
 * {{#markdownToHTML}}
 * # Foo
 * {{/markdownToHTML}}
 * <!-- results in: <h1>Foo</h1> -->
 * ```
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.markdownToHTML = function(markdown, context, options) {
  return helperMarkdown()(markdown, context, options);
};
