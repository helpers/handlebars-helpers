(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, glob, isServer, markdown, opts, path, yaml, _;

    Utils = require('../utils/utils');
    fs = require('fs');
    path = require('path');
    _ = require('lodash');
    yaml = require('js-yaml');
    glob = require('globule');
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
    markdown = require('../utils/markdown').Markdown(opts);
    isServer = typeof process !== 'undefined';
    /*
    Authors: reads in data from an "AUTHORS" file to generate markdown formtted
    author or list of authors for a README.md. Accepts a second optional
    parameter to a different file than the default.
    Usage: {{authors}} or {{ authors [file] }}
    */

    Handlebars.registerHelper('authors', function(authors) {
      var matches;

      if (Utils.isUndefined(authors)) {
        authors = fs.readFileSync("./AUTHORS", "utf8");
      } else {
        authors = fs.readFileSync(authors, "utf8");
      }
      matches = authors.replace(/(.*?)\s*\((.*)\)/g, '[$1]' + '($2)') || [];
      return new Handlebars.SafeString(matches);
    });
    /*
    Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
    changelog or list of changelog entries for a README.md. Accepts a
    second optional parameter to change to a different file than the default.
    Syntax: {{changelog [src]}}
    */

    Handlebars.registerHelper("changelog", function(changelog) {
      var source, template;

      if (Utils.isUndefined(changelog)) {
        changelog = yaml.load(fs.readFileSync('./CHANGELOG', 'utf8').toString());
      } else {
        changelog = yaml.load(fs.readFileSync(changelog, 'utf8').toString());
      }
      source = "{{#each .}}* {{date}}    {{{@key}}}    {{#each changes}}{{{.}}}{{/each}}\n{{/each}}";
      template = Handlebars.compile(source);
      return new Handlebars.SafeString(template(changelog));
    });
    /*
    Section: reads in data from a markdown file, and uses the first heading
    as a section heading, and then copies the rest of the content inline.
    Usage: {{{ section [file] }}
    */

    Handlebars.registerHelper('section', function(file) {
      var content;

      file = fs.readFileSync(file, "utf8");
      content = file.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') || [];
      return new Handlebars.SafeString(content);
    });
    /*
    Glob: reads in data from a markdown file, and uses the first heading
    as a section heading, and then copies the rest of the content inline.
    Usage: {{{ section [file] }}
    */

    Handlebars.registerHelper('glob', function(file) {
      var content;

      file = glob.find(file);
      content = path.normalize(file);
      content = fs.readFileSync(content, "utf8");
      content = content.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') || [];
      return new Handlebars.SafeString(content);
    });
    /*
    Markdown: Markdown helper used to write markdown inside and
    rendered the markdown inline with the HTML
    
    Usage: {{#markdown}} # This is a title. {{/markdown}}
    
    Renders to: <h1>This is a title </h1>
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
      Usage: {{md ../path/to/file.md}}
      */

      Handlebars.registerHelper("md", function(path) {
        var content;

        content = markdown.read(path);
        return new Handlebars.SafeString(content);
      });
    }
    return this;
  };

}).call(this);
