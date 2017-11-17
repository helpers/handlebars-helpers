'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var helpers = module.exports;

/**
 * Embed code from an external file as preformatted text.
 *
 * ```handlebars
 * {{embed 'path/to/file.js'}}
 * <!-- optionally specify the language to use -->
 * {{embed 'path/to/file.hbs' 'html')}}
 * ```
 *
 * @param {String} `filepath` filepath to the file to embed.
 * @param {String} `language` Optionally specify the language to use for syntax highlighting.
 * @return {String}
 * @api public
 */

helpers.embed = function embed(filepath, ext) {
  ext = typeof ext !== 'string' ? path.extname(filepath).slice(1) : ext;
  var code = fs.readFileSync(filepath, 'utf8');
  if (ext === 'markdown' || ext === 'md') {
    ext = 'markdown';
    // if the string is markdown, escape backticks
    code = code.split('`').join('&#x60');
  }
  return utils.block(code, ext).trim() + '\n';
};

/**
 * Embed a GitHub Gist using only the id of the Gist
 *
 * ```handlebars
 * {{gist "12345"}}
 * ```
 * @param {String} `id`
 * @return {String}
 * @api public
 */

helpers.gist = function(id) {
  return utils.tag('script', {src: 'https://gist.github.com/' + id + '.js'});
};

/**
 * Generate the HTML for a jsFiddle link with the given `params`
 *
 * ```handlebars
 * {{jsfiddle id="0dfk10ks" tabs="true"}}
 * ```
 * @param {Object} `params`
 * @return {String}
 * @api public
 */

helpers.jsfiddle = function jsFiddle(options) {
  var attr = Object.assign({}, options && options.hash);

  if (typeof attr.id === 'undefined') {
    throw new Error('jsfiddle helper expects an `id`');
  }

  attr.id = 'http://jsfiddle.net/' + attr.id;
  attr.width = attr.width || '100%';
  attr.height = attr.height || '300';
  attr.skin = attr.skin || '/presentation/';
  attr.tabs = (attr.tabs || 'result,js,html,css') + attr.skin;
  attr.src = attr.id + '/embedded/' + attr.tabs;
  attr.allowfullscreen = attr.allowfullscreen || 'allowfullscreen';
  attr.frameborder = attr.frameborder || '0';

  delete attr.tabs;
  delete attr.skin;
  delete attr.id;
  return utils.tag('iframe', attr);
};
