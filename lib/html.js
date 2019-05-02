const utils = require('./utils');
const path = require('path');
/**
 * @exports html
 */
const helpers = module.exports;

/**
 * Parse HTML tag attributes from the `options.hash`.
 *
 * @param {Object} `hash` Helper options hash, e.g. `{foo: 'bar'}`
 * @return {String} Stringified attributes, e.g. `foo="bar"`
 * @api public
 */
const parseAttr = function parseAttributes(hash) {
  return Object.keys(hash).map(function(key) {
    const val = String(hash[key]).replace(/^['"]|["']$/g, '');
    return key + '="' + val + '"';
  }).join(' ');
};

/**
 * Stringify attributes on the options `hash`.
 *
 * ```handlebars
 * <!-- value = 'bar' -->
 * <div{{attr foo=value}}></div>
 * <!-- results in: <div foo="bar"></div>
 * ```
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.attr = function(options) {
  const val = parseAttr((options && options.hash) || {});
  return val.trim() ? ' ' + val : '';
};

/**
 * Add an array of `<link>` tags. Automatically resolves
 * relative paths to `options.assets` if passed on the context.
 *
 * ```handlebars
 * <!-- {stylesheets: ['foo.css', 'bar.css']} -->
 * {{css stylesheets}}
 *
 * <!-- results in: -->
 * <!-- <link type="text/css" rel="stylesheet" href="foo.css"> -->
 * <!-- <link type="text/css" rel="stylesheet" href="bar.css"> -->
 * ```
 * @param {String|Array} `list` One or more stylesheet urls.
 * @return {String}
 * @api public
 */

helpers.css = function(list, options) {
  if (arguments.length < 2) {
    options = list;
    list = [];
  }

  let styles = utils.arrayify(list);
  let assets = '';

  if (this && this.options) {
    assets = this.options.assets || '';
  }

  if (options.hash.href) {
    styles = utils.arrayify(options.hash.href);
  }

  return styles.map(function(item) {
    const ext = path.extname(item);
    let fp = item;

    if (!/(^\/\/)|(:\/\/)/.test(item)) {
      fp = path.posix.join(assets, item);
    }

    if (ext === '.less') {
      return '<link type="text/css" rel="stylesheet/less" href="' + fp + '">';
    }
    return '<link type="text/css" rel="stylesheet" href="' + fp + '">';
  }).join('\n');
};

/**
 * Block helper for creating unordered lists (`<ul></ul>`)
 *
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.ul = function(context, options) {
  return ('<ul ' + (parseAttr(options.hash)) + '>') + context.map(function(item) {
    if (typeof item !== 'string') {
      item = options.fn(item);
    }
    return '<li>' + item + '</li>';
  }).join('\n') + '</ul>';
};

/**
 * Block helper for creating ordered lists  (`<ol></ol>`)
 *
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.ol = function(context, options) {
  return ('<ol ' + (parseAttr(options.hash)) + '>') + context.map(function(item) {
    if (typeof item !== 'string') {
      item = options.fn(item);
    }
    return '<li>' + item + '</li>';
  }).join('\n') + '</ol>';
};

/**
 * Returns a `<figure>` with a thumbnail linked to a full picture
 *
 * @param {Object} `context` Object with values/attributes to add to the generated elements:
 * @param {String} `context.alt`
 * @param {String} `context.src`
 * @param {Number} `context.width`
 * @param {Number} `context.height`
 * @return {String} HTML `<figure>` element with image and optional caption/link.
 * @contributor: Marie Hogebrandt <https://github.com/Melindrea>
 * @api public
 */

helpers.thumbnailImage = function(context) {
  let figure = '';
  let image = '';

  const link = context.full || false;
  const imageAttributes = {
    alt: context.alt,
    src: context.thumbnail,
    width: context.size.width,
    height: context.size.height
  };

  const figureAttributes = { id: 'image-' + context.id };
  const linkAttributes = { href: link, rel: 'thumbnail' };

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
