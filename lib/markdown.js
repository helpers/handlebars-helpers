'use strict';

/**
 * Expose markdown `helpers` (for performance we're using getters so
 * that the helpers are only loaded if called)
 */

var helpers = module.exports;
var markdown;

/**
 * Block helper that converts a string of inline markdown to HTML.
 *
 * ```handlebars
 * {{#markdown}}
 * # Foo
 * {{/markdown}}
 * <!-- results in: <h1>Foo</h1> -->
 * ```
 * @name .markdown
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

Object.defineProperty(helpers, 'markdown', {
  configurable: true,
  enumerable: true,
  set: function(val) {
    markdown = val;
  },
  get: function() {
    // this is defined as a getter to avoid calling this function
    // unless the helper is actually used
    return markdown || (markdown = require('helper-markdown')());
  }
});

/**
 * Read a markdown file from the file system and inject its contents after
 * converting it to HTML.
 *
 * ```handlebars
 * {{md "foo/bar.md"}}
 * ```
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.md = require('helper-md');
