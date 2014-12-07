'use strict';

var path = require('path');
var Handlebars = require('handlebars');
var parseAttributes = require('../utils/parseAttributes');

/**
 * Add an array of <link></link> tags. Automatically resolves
 * relative paths to `opts.assets` in the Assemble task.
 * @param  {[type]} context
 * @return {[type]}
 */

exports.css = function(context) {
  context = Array.isArray(context) ? context : [context];
  var opts = (this && this.app && this.app.options) || {};

  return new Handlebars.SafeString(context.map(function(item) {
    var ext = path.extname(item).slice(1);
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

exports.js = function(context) {
  context = Array.isArray(context) ? context : [context];
  var opts = (this && this.app && this.app.options) || {};

  return new Handlebars.SafeString(context.map(function(item) {
    var ext = path.extname(item).slice(1);
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

exports.ul = function(context, options) {
  return ("<ul " + (parseAttributes(options.hash)) + ">") + context.map(function(item) {
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

exports.ol = function(context, options) {
  return ("<ol " + (parseAttributes(options.hash)) + ">") + context.map(function(item) {
    return "<li>" + (options.fn(item)) + "</li>";
  }).join("\n") + "</ol>";
};
