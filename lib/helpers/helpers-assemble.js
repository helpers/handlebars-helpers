/*! assemble helpers
*/


(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils, fs, grunt, path, _;

    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    fs = require('fs');
    path = require('path');
    grunt = require('grunt');
    _ = require('lodash');
    Handlebars.registerHelper("switch", function(src) {
      var html, md, output;

      md = '# ' + src;
      html = '<h1>' + src + '</h1>';
      output = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(output);
    });
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
    Handlebars.registerHelper("changelog", function(changelog) {
      var source, template;

      if (Utils.isUndefined(changelog)) {
        changelog = Utils.readYAML('./CHANGELOG');
      } else {
        changelog = Utils.readYAML(changelog);
      }
      source = "{{#each .}}* {{date}}\t\t\t{{{@key}}}\t\t\t{{#each changes}}{{{.}}}  {{/each}}\n{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(changelog));
    });
    Handlebars.registerHelper("roadmap", function(roadmap) {
      var source, template;

      if (Utils.isUndefined(roadmap)) {
        roadmap = Utils.readYAML('./ROADMAP');
      } else {
        roadmap = Utils.readYAML(roadmap);
      }
      source = "{{#each .}}* {{eta}}\t\t\t{{{@key}}}\t\t\t{{#each goals}}{{{.}}}  {{/each}}\n{{else}}_(Big plans in the works)_{{/each}}";
      template = Handlebars.compile(source);
      return Utils.safeString(template(roadmap));
    });
    return this;
  };

}).call(this);
