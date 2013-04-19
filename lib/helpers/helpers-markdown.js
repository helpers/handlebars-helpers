(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, glob, isServer, markdown, opts, path, yaml, _;

    fs = require('fs');
    path = require('path');
    _ = require('lodash');
    yaml = require('js-yaml');
    glob = require('globule');
    Utils = require('../utils/utils');
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
        authors = Utils.read("./AUTHORS");
      } else {
        authors = Utils.read(authors);
      }
      matches = authors.replace(/(.*?)\s*\((.*)\)/g, '[$1]' + '($2)') || [];
      return Utils.safeString(matches);
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
        changelog = Utils.readYAML('./CHANGELOG');
      } else {
        changelog = Utils.readYAML(changelog);
      }
      source = "{{#each .}}* {{date}}    {{{@key}}}    {{#each changes}}{{{.}}}{{/each}}\n{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(changelog));
    });
    /*
    Roadmap: Reads in data from an "ROADMAP" file to generate markdown formatted
    roadmap or list of roadmap entries for a README.md. Accepts a
    second optional parameter to change to a different file than the default.
    Syntax: {{roadmap [src]}}
    */

    Handlebars.registerHelper("roadmap", function(roadmap) {
      var source, template;

      if (Utils.isUndefined(roadmap)) {
        roadmap = Utils.readYAML('./ROADMAP');
      } else {
        roadmap = Utils.readYAML(roadmap);
      }
      source = "{{#each .}}* {{eta}}    {{{@key}}}    {{#each goals}}{{{.}}}{{/each}}\n{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(roadmap));
    });
    /*
    Section: reads in data from a markdown file, and uses the first heading
    as a section heading, and then copies the rest of the content inline.
    Usage: {{ section [file] }}
    */

    Handlebars.registerHelper('section', function(file) {
      var content;

      file = Utils.read(file);
      content = file.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') || [];
      return Utils.safeString(content);
    });
    Handlebars.registerHelper('defineSection', function(section, options) {
      if (Handlebars.sections) {
        Handlebars.sections[section] = options.fn(this);
      }
      return Utils.safeString('');
    });
    Handlebars.registerHelper('renderSection', function(section, options) {
      var content;

      if (Handlebars.sections && Handlebars.sections[section]) {
        content = Handlebars.sections[section];
      } else {
        content = options.fn(this);
      }
      return Utils.safeString(content);
    });
    /*
    Glob: reads in data from a markdown file, and uses the first heading
    as a section heading, and then copies the rest of the content inline.
    Usage: {{{ glob [file] }}
    */

    Handlebars.registerHelper('glob', function(file) {
      var content;

      file = glob.find(file);
      content = Utils.read(file);
      content = content.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') || [];
      return Utils.safeString(content);
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
        var content, html, md, tmpl;

        content = Utils.read(path);
        tmpl = Handlebars.compile(content);
        md = tmpl(this);
        html = markdown.convert(md);
        return Utils.safeString(html);
      });
    }
    return this;
  };

}).call(this);
