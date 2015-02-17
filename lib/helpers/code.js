'use strict';

var path = require('path');
var parseAttributes = require('../utils/parseAttributes');
var languages = require('lang-map');
var concat = require('helper-concat');
var omit = require('object-omit');

/**
 * Embed code from an external file as preformatted text.
 *
 * ```js
 * {{embed 'path/to/file.js'}}
 *
 * // specify the language to use
 * {{embed 'path/to/file.hbs' 'html'}}
 * ```
 *
 * @param {String} `fp` filepath to the file to embed
 * @param {String} `lang` Optionally specify the language to use for syntax highlighting
 * @return {String}
 * @api public
 */

exports.embed = function(fp, language) {
  var ext = typeof language !== 'string'
    ? path.extname(fp).slice(1)
    : language;

  var str = concat.sync(fp);
  var lang = languages.lang(ext);

  if (lang === 'markdown') {
    str = str.replace(/^(```)/gm, '&#x60;&#x60;&#x60;');
  }

  if (lang === 'handlebars') {
    str = str.replace(/^(---)/gm, '---');
  }

  return '```' + lang + '\n' + str + '\n```\n';
};

/**
 * Embed a jsFiddle with the given `params`
 *
 * ```js
 * {{jsfiddle id="0dfk10ks" tabs="true"}}
 * ```
 *
 * @param {Object} `params`
 * @return {String}
 * @api public
 */

exports.jsfiddle = function(params) {
  var hash = params.hash || {};
  hash.id = 'http://jsfiddle.net/' + (hash.id || '');
  hash.width = hash.width || '100%';
  hash.height = hash.height || '300';
  hash.skin = hash.skin || '/presentation/';
  hash.tabs = (hash.tabs || 'result,js,html,css') + hash.skin;
  hash.src = hash.id + '/embedded/' + hash.tabs;
  hash.allowfullscreen = hash.allowfullscreen || 'allowfullscreen';
  hash.frameborder = hash.frameborder || '0';

  hash = omit(hash, ['id', 'tabs', 'skin']);
  return '<iframe ' + parseAttributes(hash) + '></iframe>';
};

/**
 * Embed a GitHub Gist with the given `id`.
 *
 * ```js
 * {{ gist "5854601"}}
 * ```
 *
 * @param {String} `id`
 * @return {String}
 * @api public
 */

exports.gist = function(id) {
  return '<script src="https://gist.github.com/' + id + '.js"></script>';
};
