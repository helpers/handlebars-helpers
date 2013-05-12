(function() {
  module.exports.register = function(Handlebars, options) {
    var Markdown, Utils, fs, isServer, opts, path, _;

    fs = require('fs');
    path = require('path');
    _ = require('lodash');
    Utils = require('../utils/utils');
    Markdown = require('../utils/markdown').Markdown(opts);
    opts = {
      gfm: true,
      tables: true,
      breaks: false,
      highlight: null,
      pedantic: false,
      sanitize: true,
      silent: false,
      smartLists: true,
      langPrefix: "lang-",
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
    opts = _.extend(opts, options);
    isServer = typeof process !== 'undefined';
    /*
    Markdown: markdown helper enables writing markdown inside HTML 
    and then renders the markdown as HTML inline with the rest of the page.
    Usage: {{#markdown}} # This is a title. {{/markdown}}
    Renders to: <h1>This is a title </h1>
    */

    Handlebars.registerHelper("markdown", function(options) {
      var content;

      content = options.fn(this);
      return Markdown.convert(content);
    });
    if (isServer) {
      /*
      Markdown helper used to read in a file and inject
      the rendered markdown into the HTML.
      Usage: {{md ../path/to/file.md}}
      */

      Handlebars.registerHelper("md", function(path) {
        var content, html, md, tmpl;

        content = Utils.globFiles(path);
        tmpl = Handlebars.compile(content);
        md = tmpl(this);
        html = Markdown.convert(md);
        return Utils.safeString(html);
      });
    }
    return this;
  };

}).call(this);
