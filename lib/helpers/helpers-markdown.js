(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, file, fs, grunt, isServer, markdown, opts, path, yaml, _;

    fs = require('fs');
    path = require('path');
    yaml = require('js-yaml');
    grunt = require('grunt');
    file = grunt.file;
    _ = require('lodash');
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
    readme-title: Generates a title and Travis CI badge for a README.md.
    Syntax: {{travis [src]}}
    */

    Handlebars.registerHelper("readme-title", function(branch) {
      var name, pkg, repo, source, template, version;

      pkg = Utils.readJSON("./package.json");
      repo = Utils.repoUrl('https://github.com/$1');
      name = pkg.name;
      version = pkg.version;
      source = '[' + name + ' v' + version + '](' + repo + ')';
      template = Handlebars.compile(source);
      return Utils.safeString(template(pkg));
    });
    /*
    Travis CI: Generates a title and Travis CI badge for a README.md.
    Syntax: {{travis [src]}}
    */

    Handlebars.registerHelper("travis-badge", function(branch) {
      var curBranch, pkg, source, template, travis, travisUrl;

      pkg = Utils.readJSON("./package.json");
      travisUrl = Utils.repoUrl('https://travis-ci.org/$1');
      travis = options.travis || {};
      curBranch = '';
      if (Utils.isUndefined(branch)) {
        curBranch = '';
      } else if (travis.branch) {
        curBranch = '?branch=' + travis.branch;
      } else {
        curBranch = '?branch=' + branch;
      }
      if (travis.name) {
        pkg.name = travis.name;
      } else {
        pkg.name;
      }
      source = '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')';
      template = Handlebars.compile(source);
      return Utils.safeString(template(pkg));
    });
    /*
    Travis CI: Generates a title and Travis CI badge for a README.md.
    Syntax: {{travis [src]}}
    */

    Handlebars.registerHelper("travis", function(branch) {
      var curBranch, pkg, repo, source, template, title, travis, travisUrl;

      pkg = Utils.readJSON("./package.json");
      repo = Utils.repoUrl('https://github.com/$1');
      travisUrl = Utils.repoUrl('https://travis-ci.org/$1');
      travis = options.travis || {};
      curBranch = '';
      if (Utils.isUndefined(branch)) {
        curBranch = '';
      } else if (travis.branch) {
        curBranch = '?branch=' + travis.branch;
      } else {
        curBranch = '?branch=' + branch;
      }
      if (travis.name) {
        pkg.name = travis.name;
      } else {
        pkg.name;
      }
      if (travis.title !== false) {
        title = '# [' + pkg.name + ' v' + pkg.version + '](' + repo + ')';
      }
      source = title + ' [![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')';
      template = Handlebars.compile(source);
      return Utils.safeString(template(pkg));
    });
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
      matches = authors.replace(/(.*?)\s*\((.*)\)/g, '* [$1]($2)  ') || [];
      return Utils.safeString(matches);
    });
    /*
    AUTHORS: (case senstitive) Same as `{{authors}}`, but outputs a different format.
    */

    Handlebars.registerHelper('AUTHORS', function(authors) {
      var matches;

      if (Utils.isUndefined(authors)) {
        authors = Utils.read("./AUTHORS");
      } else {
        authors = Utils.read(authors);
      }
      matches = authors.replace(/(.*?)\s*\((.*)\)/g, '\n**[$1]**\n  \n+ [$2]($2)  ') || [];
      return Utils.safeString(matches);
    });
    /*
    Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
    changelog or list of changelog entries for a README.md. Accepts a
    second optional parameter to change to a different file than the default.
    Usage: {{changelog}} or {{changelog [src]}}
    */

    Handlebars.registerHelper("changelog", function(changelog) {
      var source, template;

      if (Utils.isUndefined(changelog)) {
        changelog = Utils.readYAML('./CHANGELOG');
      } else {
        changelog = Utils.readYAML(changelog);
      }
      source = "{{#each .}}* {{date}}\t\t\t{{{@key}}}\t\t\t{{#each changes}}{{{.}}}{{/each}}\n{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(changelog));
    });
    /*
    Roadmap: Reads in data from an "ROADMAP" file to generate markdown formatted
    roadmap or list of roadmap entries for a README.md. Accepts a
    second optional parameter to change to a different file than the default.
    Usage: {{roadmap}} or {{roadmap [src]}}
    */

    Handlebars.registerHelper("roadmap", function(roadmap) {
      var source, template;

      if (Utils.isUndefined(roadmap)) {
        roadmap = Utils.readYAML('./ROADMAP');
      } else {
        roadmap = Utils.readYAML(roadmap);
      }
      source = "{{#each .}}* {{eta}}\t\t\t{{{@key}}}\t\t\t{{#each goals}}{{{.}}}{{/each}}\n{{else}}_(Big plans in the works)_{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(roadmap));
    });
    /*
    Embed: Embeds code from an external file as preformatted text. The first parameter
    requires a path to the file you want to embed. There second second optional
    parameter is for specifying (forcing) syntax highlighting for language of choice.
    Syntax:  {{ embed [file] [lang] }}
    Usage: {{embed 'path/to/file.js'}} or {{embed 'path/to/file.hbs' 'html'}}
    */

    Handlebars.registerHelper('embed', function(file, language) {
      var content;

      file = grunt.file.read(file);
      if (Utils.isUndefined(language)) {
        language = "";
      }
      content = '``` ' + language + '\n' + file + '\n```';
      return Utils.safeString(content);
    });
    /*
    Markdown: markdown helper enables writing markdown inside HTML 
    and then renders the markdown as HTML inline with the rest of the page.
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

        content = Utils.globFiles(path);
        tmpl = Handlebars.compile(content);
        md = tmpl(this);
        html = markdown.convert(md);
        return Utils.safeString(html);
      });
    }
    return this;
  };

}).call(this);
