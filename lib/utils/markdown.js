/**
 * Markdown Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var marked = require("marked");
var hljs = require("highlight.js");
var fs = require("fs");
var _ = require("lodash");



var Markdown = function (options) {
  return this.init(options);
};

Markdown.prototype.init = function (options) {
  var defaults = {
    fromFile: true
  };
  this.options = _.extend(defaults, options);
  return this;
};

Markdown.prototype.read = function (src) {
  if (!fs.existsSync(src)) {
    console.log("File " + src + " not found.");
    return "";
  }
  var md = fs.readFileSync(src, "utf8");
  return this.convert(md);
};

Markdown.prototype.convert = function (src) {
  if (typeof this.options.highlight === "string") {
    if (this.options.highlight === "auto") {
      this.options.highlight = function (code) {
        return hljs.highlightAuto(code).value;
      };
    } else if (this.options.highlight === "manual") {
      this.options.highlight = function (code, lang) {
        try {
          code = hljs.highlight(lang, code).value;
        } catch (e) {
          code = hljs.highlightAuto(code).value;
        }
        return code;
      };
    }
  }
  marked.setOptions(this.options);
  var html = marked(src);
  return html;
};


module.exports.Markdown = function (options) {
  return new Markdown(options);
};