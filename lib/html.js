'use strict';

var path = require('path');
var tag = require('html-tag');
var typeOf = require('kind-of');
var merge = require('mixin-deep');
var html = require('./utils/html');
var utils = require('./utils');
var parseAttr = html.parseAttributes;

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Add an array of `<link>` tags. Automatically resolves
 * relative paths to `options.assets` if passed on the context.
 *
 * @param  {Object} `context`
 * @return {String}
 * @api public
 */

helpers.css = function(array, options) {
  if (arguments.length < 2) {
    options = array;
    array = undefined;
  }

  var styles = utils.arrayify(array || []);
  var assets = '';

  if (this && this.options) {
    assets = this.options.assets || '';
  }

  if (options.hash.href) {
    styles = utils.arrayify(options.hash.href);
  }

  return styles.map(function(item) {
    var ext = path.extname(item);
    var fp = path.join(assets, item);

    if (ext === '.less') {
      return '<link type="text/css" rel="stylesheet/less" href="' + fp + '">';
    }
    return '<link type="text/css" rel="stylesheet" href="' + fp + '">';
  }).join('\n');
};

/**
 * Generate one or more `<script></script>` tags with paths/urls to
 * javascript or coffeescript files.
 *
 * ```handlebars
 * {{js scripts}}
 * ```
 *
 * @param  {Object} `context`
 * @return {String}
 * @api public
 */

helpers.js = function(context) {
  if (typeOf(context) === 'object') {
    var attr = html.toAttributes(context.hash);
    return '<script' + attr + '></script>';
  }

  if (typeOf(context) === 'string') {
    return '<script src="' + context + '"></script>';
  }

  context = utils.arrayify(context);
  return context.map(function(fp) {
    return (path.extname(fp) === '.coffee')
      ? tag('script', {type: 'text/coffeescript', src: fp})
      : tag('script', {src: fp}, true);
  }).join('\n');
};

/**
 * Block helper for creating unordered lists (`<ul></ul>`)
 *
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {String}
 * @block
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
 * @block
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
