(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, path, yaml, _;

    Utils = require('../utils/utils');
    fs = require('fs');
    path = require('path');
    yaml = require('js-yaml');
    _ = require('lodash');
    /*
    jsFiddle: Embed a jsFiddle, second parameter sets tabs
    Usage: {{ jsfiddle [id] [tabs] }}
    */

    Handlebars.registerHelper('jsfiddle', function(id, tabs) {
      var result;

      if (Utils.isUndefined(tabs)) {
        tabs = "result,js,html,css";
      }
      result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
      return new Handlebars.SafeString(result);
    });
    /* 
    Gist: Downloads and embeds public GitHub Gists by
    adding only the Id of the Gist.
    Usage: {{ gist [id] [file] }}
    */

    Handlebars.registerHelper('gist', function(id, file) {
      var result;

      id = Handlebars.Utils.escapeExpression(id);
      if (Utils.isUndefined(file)) {
        file = "";
      }
      result = '<script src="https://gist.github.com/' + id + '.js"></script>';
      return new Handlebars.SafeString(result);
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
    directory
    Returns the absolute path to the current directory.
    
    Usage:
    {{directory [path]}}
    
    Returns:
    C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("directory", function(file) {
      return file = path.dirname();
    });
    /*
    absolute
    Returns the absolute path to the current directory.
    
    Usage:
    {{absolute [to]}}
    
    Returns:
    C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("absolute", function(to) {
      var absolutePath;

      absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()));
      return absolutePath;
    });
    /*
    Relative: {{relative [from] [to]}}
    Returns the derived relative path from one to the other.
    */

    Handlebars.registerHelper("relative", function(from, to) {
      var relativePath;

      relativePath = Utils.urlNormalize(path.relative(from, to));
      return relativePath;
    });
    /*
    filename: Returns the full-name of a given file.
    Usage:    {{filename "docs/toc.md"}}
    Returns:  toc.md
    */

    Handlebars.registerHelper('filename', function(base, ext) {
      var fullName;

      fullName = path.basename(base, ext);
      return fullName;
    });
    /*
    Basename: Returns the basename of a given file.
    Usage:    {{base "docs/toc.md"}}
    Returns:  toc
    */

    Handlebars.registerHelper('basename', function(base, ext) {
      var fullName;

      fullName = path.basename(base, ext);
      base = path.basename(base, path.extname(fullName));
      return base;
    });
    /*
    Extension: Returns the extension of a given file.
    Usage:    {{ext "docs/toc.md"}}
    Returns:  .md
    */

    Handlebars.registerHelper("extension", function(ext) {
      var extension;

      extension = path.extname(ext);
      return extension;
    });
    /*
    Embed: Embeds code from an external file as preformatted text. The first parameter
    requires a path to the file you want to embed. There is a second optional
    parameter to specify (force) syntax highlighting for a specific language.
    Syntax:  {{ embed [file] [lang] }}
    Usage:   {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
    */

    Handlebars.registerHelper('embed', function(file, language) {
      var result;

      file = fs.readFileSync(file, "utf8");
      if (Utils.isUndefined(language)) {
        language = "";
      }
      result = '``` ' + language + '\n' + file + '\n```';
      return new Handlebars.SafeString(result);
    });
    Handlebars.registerHelper('inspect', function(obj, language) {
      var result;

      if (Utils.isUndefined(language)) {
        language = "";
      }
      result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```';
      return new Handlebars.SafeString(result);
    });
    return this;
  };

}).call(this);
