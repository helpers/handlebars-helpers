'use strict';

const htmlTag = require('html-tag');

const helpers = module.exports;

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
  return htmlTag('script', {src: 'https://gist.github.com/' + id + '.js'});
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
  const attr = Object.assign({}, options && options.hash);

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
  return htmlTag('iframe', attr);
};
