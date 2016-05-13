'use strict';

/**
 * Expose markdown `helpers` (for performance we're using getters so
 * that the helpers are only loaded if called)
 */

var helpers = module.exports;
var markdown;
var md;

/**
 * Block helper that converts a string of inline markdown to HTML.
 *
 * ```html
 * {{#markdown}}
 * # Foo
 * {{/markdown}}
 * //=> <h1>Foo</h1>
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
  set: function(val) {
    markdown = val;
  },
  get: function() {
    return markdown || (markdown = require('helper-markdown')());
  }
});

/**
 * Read a markdown file from the file system and inject its contents after
 * converting it to HTML.
 *
 * ```html
 * {{md "foo/bar.md"}}
 * ```
 * @name .md
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

Object.defineProperty(helpers, 'md', {
  configurable: true,
  set: function(val) {
    md = val;
  },
  get: function() {
    return md || (md = require('helper-md'));
  }
});
