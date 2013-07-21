/*! html helpers*/


(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils, grunt, util, _;
    grunt = require('grunt');
    util = require('util');
    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    _ = require('lodash');
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
    Handlebars.registerHelper("ul", function(context, options) {
      return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });
    Handlebars.registerHelper("ol", function(context, options) {
      return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ol>";
    });
    return this;
  };

}).call(this);
