/**
 * Handlebars Code Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';


// Node.js
var path = require('path');


// node_modules
var Handlebars = require('../helpers/helpers').Handlebars;


// Local utils
var Utils = require('../utils/utils');
var Glob = require('../utils/glob');


// The module to be exported
var helpers = {

  /**
   * {{embed}}
   *
   * Embeds code from an external file as preformatted
   * text. The first parameter requires a path to the file
   * you want to embed. There second second optional parameter
   * is for specifying (forcing) syntax highlighting for
   * language of choice.
   *
   * @syntax:
   *   {{ embed [file] [lang] }}
   * @usage:
   *   {{embed 'path/to/file.js'}} or
   *   {{embed 'path/to/file.hbs' 'html'}}
   */
  embed: function (src, lang) {
    var content = Glob.globFiles(src);
    var ext = path.extname(src).replace(/^(\.)/gm, '');

    var output;
    if (Utils.isUndefined(lang)) {
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
    var result = '``` ' + lang + '\n' + output + '\n```\n';
    return new Utils.safeString(result);
  },

  /**
   * {{jsFiddle}}
   * Embed a jsFiddle, second parameter sets tabs
   *
   * @type   {Object}
   * @usage: {{ jsfiddle [id] [tabs] }}
   */
  jsfiddle: function (id, tabs) {
    var result;
    if (Utils.isUndefined(tabs)) {
      tabs = 'result,js,html,css';
    }
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
    return new Utils.safeString(result);
  },

  /**
   * {{gist}}
   * Embed a GitHub Gist using only the id of the Gist
   *
   * @param  {String} id   [description]
   * @param  {String} file [description]
   * @usage: {{ gist [id] [file] }}
   */
  gist: function (id, file) {
    var result;
    id = Handlebars.Utils.escapeExpression(id);
    if (Utils.isUndefined(file)) {
      file = '';
    }
    result = '<script src="https://gist.github.com/' + id + '.js"></script>';
    return new Utils.safeString(result);

  }
};


// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
