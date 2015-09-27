'use strict';

var path = require('path');
var tag = require('html-tag');
var typeOf = require('kind-of');
var html = require('./utils/html');
var parseAttr = html.parseAttributes;

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Add an array of <link></link> tags. Automatically resolves
 * relative paths to `opts.assets` in the Assemble task.
 *
 * @param  {Object} `context`
 * @return {String}
 * @api public
 */

helpers.css = function(context) {
  context = Array.isArray(context) ? context : [context];
  var opts = (this && this.app && this.app.options) || {};

  return context.map(function(item) {
    var ext = path.extname(item);
    if (ext.charAt(0) === '.') {
      ext = ext.slice(1);
    }

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
  }).join('\n');
};

/**
 * Generate one or more `<script></script>` tags with paths/urls to
 * javascript or coffeescript files.
 *
 * ```handlebars
 * {{js }}
 * ```
 *
 * @param  {Object} `context`
 * @return {String}
 * @api public
 */

helpers.js = function(context) {
  if (typeOf(context) === 'object') {
    var attr = context.hash ? html.toAttributes(context.hash) : '';
    return '<script' + attr + '></script>';
  }

  if (typeOf(context) === 'string') {
    return '<script src="' + context + '"></script>';
  }

  context = Array.isArray(context) ? context : [context];
  return context.map(function(fp) {
    if (fp && typeof fp === 'string') {
      var ext = path.extname(fp);
      if (ext.charAt(0) === '.') {
        ext = ext.slice(1);
      }
      return (ext === 'coffee')
        ? tag('script', {type: 'text/coffeescript', src: fp})
        : tag('script', {src: fp}, true);
    }
    return tag('script', {}, true);
  }).join('\n');
};

/**
 * Block helper for creating unordered lists (`<ul></ul>`)
 *
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {String}
 * @api public
 */

helpers.ul = function(context, options) {
  return ('<ul ' + (parseAttr(options.hash)) + '>') + context.map(function(item) {
    return '<li>' + (options.fn(item)) + '</li>';
  }).join('\n') + '</ul>';
};

/**
 * Block helper for creating ordered lists  (`<ol></ol>`)
 *
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {String}
 * @api public
 */

helpers.ol = function(context, options) {
  return ('<ol ' + (parseAttr(options.hash)) + '>') + context.map(function(item) {
    return '<li>' + (options.fn(item)) + '</li>';
  }).join('\n') + '</ol>';
};

/**
 * Returns a `<figure>` with a thumbnail linked to a full picture
 *
 * @param  {Object} `context` Object with values/attributes to add to the generated elements:
 * @param {String} `context.alt`
 * @param {String} `context.src`
 * @param {Number} `context.width`
 * @param {Number} `context.height`
 * @return {String} HTML `<figure>` element with image and optional caption/link.
 * @contributor: Marie Hogebrandt <https://github.com/Melindrea>
 * @api public
 */

helpers.thumbnailImage = function (context) {
  var figure = '';
  var image = '';

  var link = context.full || false;
  var imageAttributes = {
    alt: context.alt,
    src: context.thumbnail,
    width: context.size.width,
    height: context.size.height
  };

  var figureAttributes = { id: 'image-' + context.id };
  var linkAttributes = { href: link, rel: 'thumbnail' };

  if (context.classes) {
    if (context.classes.image) {
      imageAttributes.class = context.classes.image.join(' ');
    }
    if (context.classes.figure) {
      figureAttributes.class = context.classes.figure.join(' ');
    }
    if (context.classes.link) {
      linkAttributes.class = context.classes.link.join(' ');
    }
  }

  figure += '<figure ' + parseAttr(figureAttributes) + '>\n';
  image += '<img ' + parseAttr(imageAttributes) + '>\n';

  if (link) {
    figure += '<a ' + parseAttr(linkAttributes) + '>\n' + image + '</a>\n';
  } else {
    figure += image;
  }

  if (context.caption) {
    figure += '<figcaption>' + context.caption + '</figcaption>\n';
  }

  figure += '</figure>';
  return figure;
};
