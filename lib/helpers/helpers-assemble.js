(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Markdown, Utils, fs, grunt, isServer, opts, path, _;

    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    fs = require('fs');
    path = require('path');
    grunt = require('grunt');
    _ = require('lodash');
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
    Switch (proof of concept), not intended for use in production code.
    This helper demonstrates a simple example of how to switch the output
    format based on the extension of the destination file(s) in the
    'assemble' grunt task.
    */

    Handlebars.registerHelper("switch", function(src) {
      var html, md, output;

      md = '# ' + src;
      html = '<h1>' + src + '</h1>';
      output = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(output);
    });
    Handlebars.registerHelper("href", function(url, text, linkClass) {
      var html, md, result;

      url = Handlebars.Utils.escapeExpression(url);
      text = Handlebars.Utils.escapeExpression(text);
      if (Utils.isUndefined(linkClass)) {
        linkClass = "";
      }
      md = '[' + text + '](' + url + ')';
      html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>';
      result = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(result);
    });
    Handlebars.registerHelper("link", function(url, text, linkClass) {
      var html, md, result;

      url = Handlebars.Utils.escapeExpression(url);
      text = Handlebars.Utils.escapeExpression(text);
      if (Utils.isUndefined(linkClass)) {
        linkClass = "";
      }
      md = '[' + text + '](' + url + ')';
      html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>';
      result = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(result);
    });
    Handlebars.registerHelper("css", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return Utils.safeString(context.map(function(item) {
        var css, ext, less;

        ext = Utils.getExt(item);
        css = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">';
        less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">';
        switch (ext) {
          case "less":
            return less;
          case "css":
            return css;
          default:
            return css;
        }
      }).join("\n"));
    });
    Handlebars.registerHelper("js", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return Utils.safeString(context.map(function(item) {
        var coffee, ext, js;

        ext = Utils.getExt(item);
        js = '<script src="' + options.assets + '/js/' + item + '"></script>';
        coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
        switch (ext) {
          case "js":
            return js;
          case "coffee":
            return coffee;
          default:
            return js;
        }
      }).join("\n"));
    });
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

  /*
  Markdown: markdown helper enables writing markdown inside HTML 
  and then renders the markdown as HTML inline with the rest of the page.
  Usage: {{#markdown}} # This is a title. {{/markdown}}
  Renders to: <h1>This is a title </h1>
  */


}).call(this);
