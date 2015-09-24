'use strict';

var path = require('path');
var block = require('to-gfm-code-block');
var utils = require('./utils');
var obj = require('./object');

/**
 * Embed code from an external file as preformatted text.
 *
 * ```js
 * {{embed 'path/to/file.js'}}
 *
 * // specify the language to use
 * {{embed 'path/to/file.hbs' 'html')}}
 * ```
 *
 * @param {String} `fp` filepath to the file to embed.
 * @param {String} `language` Optionally specify the language to use for syntax highlighting.
 * @return {String}
 * @api public
 */

exports.embed = function embed(fp, ext) {
  ext = typeof ext !== 'string'
    ? path.extname(fp).slice(1)
    : ext;

  var code = fs.readFileSync(fp, 'utf8');
  if (ext === 'markdown' || ext === 'md') {
    // if the string is markdown, escape backticks
    code = code.split('`').join('&#x60');
  }
  return block(code, ext) + '\n';
};

/**
 * Generate the HTML for a jsFiddle link with the given `params`
 *
 * ```js
 * {{jsfiddle id="0dfk10ks" tabs="true"}}
 * ```
 *
 * @param {Object} `params`
 * @return {String}
 * @api public
 */

exports.jsfiddle = function jsFiddle(attr) {
  attr = obj.merge({}, obj, obj.hash);

  if (!attr || !obj.isPlainObject(attr)) return '';
  attr.id = 'http://jsfiddle.net/' + (attr.id || '');
  attr.width = attr.width || '100%';
  attr.height = attr.height || '300';
  attr.skin = attr.skin || '/presentation/';
  attr.tabs = (attr.tabs || 'result,js,html,css') + attr.skin;
  attr.src = attr.id + '/embedded/' + attr.tabs;
  attr.allowfullscreen = attr.allowfullscreen || 'allowfullscreen';
  attr.frameborder = attr.frameborder || '0';

  attr = obj.omit(attr, ['id', 'tabs', 'skin']);
  return '<iframe ' + utils.toAttributes(attr) + '></iframe>';
};
