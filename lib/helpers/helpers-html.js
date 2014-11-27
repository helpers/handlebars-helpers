'use strict';

var Handlebars = require('handlebars');
var Utils = require('../utils/utils');
var HTML = require('../utils/html');

module.exports = function(opts) {
  opts = opts || {};

  /**
   * Expose `helpers`
   */

  var helpers = {};

  /**
   * Add an array of <link></link> tags. Automatically resolves
   * relative paths to `opts.assets` in the Assemble task.
   * @param  {[type]} context
   * @return {[type]}
   */

  helpers.css = function(context) {
    if (!Array.isArray(context)) {
      context = [context];
    }
    return new Handlebars.SafeString(context.map(function(item) {
      var ext = Utils.getExt(item);
      var css = '<link rel="stylesheet" href="' + opts.assets + '/css/' + item + '">';
      var less = '<link rel="stylesheet/less" href="' + opts.assets + '/less/' + item + '">';
      switch (ext) {
        case "less":
          return less;
        case "css":
          return css;
        default:
          return css;
      }
    }).join("\n"));
  };

  /**
   * @param  {[type]} context
   * @return {[type]}
   */

  helpers.js = function(context) {
    if (!Array.isArray(context)) {
      context = [context];
    }
    return new Handlebars.SafeString(context.map(function(item) {
      var ext = Utils.getExt(item);
      var js = '<script src="' + opts.assets + '/js/' + item + '"></script>';
      var coffee = '<script type="text/coffeescript" src="' + opts.assets + '/js/' + item + '"></script>';
      switch (ext) {
        case "js":
          return js;
        case "coffee":
          return coffee;
        default:
          return js;
      }
    }).join("\n"));
  };

  /**
   *   <li></li>
   * Block helper for creating unordered lists.
   * @param  {[type]} context
   * @param  {[type]} options
   * @return {[type]}
   */

  helpers.ul = function(context, options) {
    return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join("\n") + "</ul>";
  };

  /**
   *   <li></li>
   * Block helper for creating ordered lists.
   * @param  {[type]} context
   * @param  {[type]} options
   * @return {[type]}
   */

  helpers.ol = function(context, options) {
    return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join("\n") + "</ol>";
  };

  return helpers;
};
