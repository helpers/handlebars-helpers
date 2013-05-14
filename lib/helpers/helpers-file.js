(function() {
  var Handlebars, Utils, chapter, copy, defineSection, dir, dirJSON, expMappingJSON, expMappingYAML, extract, glob, grunt, include, path, renderSection, to, toc, _;

  Handlebars = require('../helpers/helpers').Handlebars;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  path = require('path');

  to = require('to');

  _ = require('lodash');

  module.exports.copy = copy = function(a, b) {
    return Utils.copyFile(a, b);
  };

  module.exports.section = defineSection = function(section, options) {
    if (Handlebars.sections) {
      Handlebars.sections[section] = options.fn(this);
    }
    return Utils.safeString('');
  };

  module.exports.section = renderSection = function(section, options) {
    var content;

    if (Handlebars.sections && Handlebars.sections[section]) {
      content = Handlebars.sections[section];
    } else {
      content = options.fn(this);
    }
    return Utils.safeString(content);
  };

  module.exports.include = include = function(src) {
    return Utils.safeString(Utils.read(src));
  };

  /*
  Glob: reads in data from a markdown file, and uses the first heading
  as a section heading, and then copies the rest of the content inline.
  Usage: {{{ glob [file] }}
  */

  module.exports.glob = glob = function(src, compare_fn) {
    var content;

    content = Utils.globFiles(src, compare_fn);
    return Utils.safeString(content);
  };

  module.exports.chapter = chapter = function(src) {
    var content;

    content = Utils.globFiles(src);
    return Utils.safeString(content);
  };

  module.exports.extract = extract = function(str) {
    var content;

    content = Utils.globFiles(src);
    return Utils.safeString(content);
  };

  module.exports.dir = dir = function(src) {
    var list, yml;

    list = grunt.file.expandMapping(src);
    yml = to.format.yaml.stringify(list);
    return Utils.safeString(yml);
  };

  module.exports.expMappingYAML = expMappingYAML = function(src) {
    var list, yml;

    list = grunt.file.expandMapping(src);
    yml = to.format.yaml.stringify(list);
    return Utils.safeString(yml);
  };

  module.exports.expMappingJSON = expMappingJSON = function(src) {
    var json, list;

    list = grunt.file.expandMapping(src);
    json = JSON.stringify(list, null, 2);
    return Utils.safeString(json);
  };

  module.exports.dir = dirJSON = function(src) {
    var json, list;

    list = grunt.file.expand(src);
    json = JSON.stringify(list, null, 2);
    return Utils.safeString(json);
  };

  module.exports.toc = toc = function(src) {
    var content, headings, output;

    content = grunt.file.expand(src).map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed));
    headings = content.match(Utils.findHeadings).join('');
    output = headings.replace(Utils.findHeadings, '$1 [$2](#' + '$2' + ')\n');
    return output = Utils.safeString(output);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("copy", copy);
    Handlebars.registerHelper("dir", dir);
    Handlebars.registerHelper("include", include);
    Handlebars.registerHelper("expMappingYAML", expMappingYAML);
    Handlebars.registerHelper("expMappingJSON", expMappingJSON);
    Handlebars.registerHelper("glob", glob);
    Handlebars.registerHelper("extract", extract);
    Handlebars.registerHelper("chapter", chapter);
    Handlebars.registerHelper("toc", toc);
    Handlebars.registerHelper("defineSection", defineSection);
    Handlebars.registerHelper("renderSection", renderSection);
    return this;
  };

}).call(this);
