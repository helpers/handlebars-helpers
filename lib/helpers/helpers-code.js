'use strict';

var path = require('path');
var Handlebars = require('../helpers/helpers').Handlebars;
var utils = require('../utils/utils');
var html = require('../utils/html');
var Glob = require('../utils/glob');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

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

helpers.embed = function(fp, lang) {
  var content = Glob.globFiles(fp);
  var ext = path.extname(fp).replace(/^(\.)/gm, '');
  var output;

  lang = lang || ext;

  if (utils.isUndefined(lang)) {
    lang = ext;
  } else {
    lang = lang;
  }
  switch (ext) {
    case 'md':
    case 'markdown':
    case 'mdown':
      output = content.replace(/^(```)/gm, '&#x60;&#x60;&#x60;');
      ext = 'md';
      break;
    case 'txt':
      output = content;
      ext = 'text';
      break;
    case 'hbs':
    case 'hbars':
      output = content.replace(/^(---)/gm, '---');
      ext = 'html';
      break;
    case 'less':
      output = content;
      ext = 'scss';
      break;
    case void 0:
      output = content;
      ext = '';
      break;
    default:
      output = content;
      ext = '';
  }
  var result = '```' + lang + '\n' + output + '\n```\n';
  return new utils.safeString(result);
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

helpers.jsfiddle = function(params) {
  var hash = params.hash || {};
  hash.id = 'http://jsfiddle.net/' + (hash.id || '');
  hash.width = hash.width || '100%';
  hash.height = hash.height || '300';
  hash.skin = hash.skin || '/presentation/';
  hash.tabs = (hash.tabs || 'result,js,html,css') + hash.skin;
  hash.src = hash.id + '/embedded/' + hash.tabs;
  hash.allowfullscreen = hash.allowfullscreen || 'allowfullscreen';
  hash.frameborder = hash.frameborder || '0';

  delete hash.id;
  delete hash.tabs;
  delete hash.skin;

  var attrs = html.parseAttributes(hash);
  return new Handlebars.SafeString('<iframe ' + attrs + '></iframe>');
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

helpers.gist = function(id) {
  var script = '<script src="https://gist.github.com/' + id + '.js"></script>';
  return new Handlebars.SafeString(script);
};
