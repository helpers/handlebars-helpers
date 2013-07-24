(function() {
  var Markdown, fs, hljs, marked, _;

  fs = require("fs");

  _ = require("lodash");

  marked = require("marked");

  hljs = require("highlight.js");

  /*
  Some of the following code is from grunt-markdown
  https://github.com/treasonx/grunt-markdown
  */


  Markdown = function(options) {
    return this.init(options);
  };

  Markdown.prototype.init = function(options) {
    var defaults;
    defaults = {
      fromFile: true
    };
    this.options = _.extend(defaults, options);
    return this;
  };

  Markdown.prototype.read = function(src) {
    var md;
    if (!fs.existsSync(src)) {
      console.log("File " + src + " not found.");
      return "";
    }
    md = fs.readFileSync(src, "utf8");
    return this.convert(md);
  };

  Markdown.prototype.convert = function(src) {
    var codeLines, html, shouldWrap, wrapLines;
    codeLines = this.options.codeLines;
    shouldWrap = false;
    if (codeLines && codeLines.before && codeLines.after) {
      shouldWrap = true;
    }
    wrapLines = function(code) {
      var after, before, out;
      out = [];
      before = codeLines.before;
      after = codeLines.after;
      code = code.split("\n");
      code.forEach(function(line) {
        return out.push(before + line + after);
      });
      return out.join("\n");
    };
    if (typeof this.options.highlight === "string") {
      if (this.options.highlight === "auto") {
        this.options.highlight = function(code) {
          var out;
          out = hljs.highlightAuto(code).value;
          if (shouldWrap) {
            out = wrapLines(out);
          }
          return out;
        };
      } else if (this.options.highlight === "manual") {
        this.options.highlight = function(code, lang) {
          var e, out;
          out = code;
          try {
            code = hljs.highlight(lang, code).value;
          } catch (_error) {
            e = _error;
            out = hljs.highlightAuto(code).value;
          }
          if (shouldWrap) {
            out = wrapLines(out);
          }
          return out;
        };
      }
    }
    marked.setOptions(this.options);
    html = marked(src);
    return html;
  };

  module.exports.Markdown = function(options) {
    return new Markdown(options);
  };

}).call(this);
