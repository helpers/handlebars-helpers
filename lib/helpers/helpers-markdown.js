'use strict';

var Handlebars = require('handlebars');
var hljs  = require('highlight.js');
var _     = require('lodash');
var Utils = require('../utils/utils');
var Glob  = require('../utils/glob');


module.exports = function (options) {
  options = options || {};
  var opts = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    silent: false,
    smartLists: true,
    langPrefix: "language-",
    highlight: function(code, lang) {
      var res;
      res = void 0;
      if (!lang) {
        return code;
      }
      switch (lang) {
      case "js":
        lang = "javascript";
      }
      try {
        return res = hljs.highlight(lang, code).value;
      } finally {
        return res || code;
      }
    }
  };
  opts = _.extend(opts, options.marked);

  var Markdown = require('../utils/markdown').Markdown(opts);

  var helpers = {};

  /**
   * Block helper for embedding markdown in HTML and
   * having it rendered to HTML at build time.
   *
   * @param  {[type]} options
   * @return {[type]}
   * @example:
   *   {{#markdown}}
   *     # This is a title.
   *   {{/markdown}}
   * @result:
   *   <h1>This is a title </h1>
   */
  helpers.markdown = function (options) {
    return Markdown.convert(options.fn(this));
  };

  if (typeof process !== 'undefined') {

    /**
     * Include markdown content from the specified path,
     * and render it to HTML.
     *
     * @param  {[type]} path
     * @return {[type]}
     * @example:
     *   {{md ../path/to/file.md}}
     */

    helpers.md = function (path) {
      var content = Glob.globFiles(path);
      var tmpl = Handlebars.compile(content);
      var md = tmpl(this);
      var html = Markdown.convert(md);
      return new Utils.safeString(html);
    };
  }

  return helpers;
};
