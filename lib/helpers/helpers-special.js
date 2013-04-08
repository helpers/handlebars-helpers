(function() {
  var Handlebars, Utils, fs, path;

  Handlebars = require('./helpers').Handlebars;

  Utils = require('../utils/utils');

  fs = require('fs');

  path = require('path');

  Handlebars.registerHelper('jsfiddle', function(id, tabs) {
    var result;

    if (Utils.isUndefined(tabs)) {
      tabs = "result,js,html,css";
    }
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper('gist', function(id, file) {
    var result;

    id = Handlebars.Utils.escapeExpression(id);
    if (Utils.isUndefined(file)) {
      file = "";
    }
    result = '<script src="https://gist.github.com/' + id + '.js"></script>';
    return new Handlebars.SafeString(result);
  });

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

  Handlebars.registerHelper('basename', function(base, ext) {
    var fullName;

    fullName = path.basename(base, ext);
    base = path.basename(base, path.extname(fullName));
    return base;
  });

  /*
  Embed
  
  Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There is a second optional
  parameter to specify (force) syntax highlighting for a specific language.
  
  Pattern:
  {{ embed [file] [lang] }}
  
  Usage:
  
  {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
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
    result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null) + '\n```';
    return new Handlebars.SafeString(result);
  });

  /*
  Changelog
  
  Reads in data from an "CHANGELOG" file to generate markdown formatted
  changelog or list of changelog entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  
  Syntax: {{changelog [src]}}
  */


  Handlebars.registerHelper("changelog", function(src) {
    var context, source, template;

    src = void 0;
    if (Utils.isUndefined(src)) {
      src = fs.readFileSync("./CHANGELOG.yml", "utf8");
    } else {
      src = fs.readFileSync(src, "utf8");
    }
    context = YAML.load(src);
    source = "{{#if changelog}}{{#each changelog}}* {{{ date }}}    {{{ @key }}}    {{#each changes}}{{{.}}} {{/each}}\n{{/each}}{{else}}_(Nothing yet)_{{/if}}";
    template = Handlebars.compile(source);
    return new Handlebars.SafeString(template(context));
  });

}).call(this);
