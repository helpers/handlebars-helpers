/*! content helpers
*/


(function() {
  var Handlebars, Utils, copy, defineSection, glob, grunt, include, partial, renderSection, toc, _;

  Handlebars = require('../helpers/helpers').Handlebars;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  _ = require('lodash');

  module.exports.copy = copy = function(a, b) {
    return Utils.copyFile(a, b);
  };

  module.exports.glob = glob = function(src, compare_fn) {
    var content;

    content = Utils.globFiles(src, compare_fn);
    return Utils.safeString(content);
  };

  module.exports.toc = toc = function(src) {
    var content;

    content = grunt.file.expand(src).map(grunt.file.read).join('').match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('').replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2](#' + '$2' + ')\n');
    return Utils.safeString(content);
  };

  module.exports.defineSection = defineSection = function(section, options) {
    if (Handlebars.sections) {
      Handlebars.sections[section] = options.fn(this);
    }
    return Utils.safeString('');
  };

  module.exports.renderSection = renderSection = function(section, options) {
    var content;

    if (Handlebars.sections && Handlebars.sections[section]) {
      content = Handlebars.sections[section];
    } else {
      content = options.fn(this);
    }
    return Utils.safeString(content);
  };

  module.exports.include = include = function(template, options) {
    var context, partial;

    partial = Handlebars.partials[template];
    if (typeof partial === "string") {
      partial = Handlebars.compile(partial);
      Handlebars.partials[template] = partial;
    }
    if (!partial) {
      return Utils.safeString('Partial **' + template + '** not found.');
    }
    context = _.extend({}, this, options.hash);
    return Utils.safeString(partial(context));
  };

  module.exports.partial = partial = function(template) {
    var context, done, opts, value, values;

    values = Array.prototype.slice.call(arguments, 1);
    opts = values.pop();
    while (!done) {
      value = values.pop();
      if (value) {
        template = template.replace(/:[^\.]+/, value);
      } else {
        done = true;
      }
    }
    partial = Handlebars.partials[template];
    if (typeof partial === "string") {
      partial = Handlebars.compile(partial);
      Handlebars.partials[template] = partial;
    }
    if (!partial) {
      return Utils.safeString('Partial **' + template + '** not found.');
    }
    context = _.extend({}, opts.context || this, _.omit(opts, "context", "fn", "inverse"));
    return Utils.safeString(partial(context));
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("copy", copy);
    Handlebars.registerHelper("glob", glob);
    Handlebars.registerHelper("toc", toc);
    Handlebars.registerHelper("defineSection", defineSection);
    Handlebars.registerHelper("renderSection", renderSection);
    Handlebars.registerHelper("include", include);
    Handlebars.registerHelper("partial", partial);
    return this;
  };

}).call(this);
