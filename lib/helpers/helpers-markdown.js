(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, isServer, markdown, opts, _;

    Utils = require('../utils/utils');
    _ = require('lodash');
    opts = {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
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
    markdown = require('../utils/markdown').Markdown(opts);
    isServer = typeof process !== 'undefined';
    /*
    Markdown
    
    Markdown helper used to write markdown inside and
    rendered the markdown inline with the HTML
    
    Usage:
    
    {{#markdown}}
    # This is a title.
    {{/markdown}}
    
    Renders to:
    <h1>This is a title </h1>
    */

    Handlebars.registerHelper("markdown", function(options) {
      var content;

      content = options.fn(this);
      return markdown.convert(content);
    });
    if (isServer) {
      /*
      Markdown helper used to read in a file and inject
      the rendered markdown into the HTML.
      
      Usage:
      
      {{md ../path/to/file.md}}
      */

      Handlebars.registerHelper("md", function(path) {
        var content;

        content = markdown.read(path);
        return content;
      });
    }
    return this;
  };

}).call(this);
