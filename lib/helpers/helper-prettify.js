/**
 * {{ foo|prettify }}
 * http://github.com/assemble/swig-extensions
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var HTML = require('../utils/html');
var _ = require('lodash');

// Export helpers
// module.exports.register = function (Handlebars, options) {
//   options = options || {};

//   var opts = {
//     indent_size: 2,
//     indent_inner_html: true,
//     unformatted: ['code', 'pre', 'em', 'strong']
//   };

//   // Reduce multiple newlines to a single newline
//   if(opts.condense === true) {
//     content = HTML.condense(content);
//   }

//   // Add a single newline above code comments.
//   if(opts.padcomments === true) {
//     content = HTML.padcomments(content);
//   }

//   opts = _.extend(opts, options.prettify);
//   var prettify = require('js-beautify').html;

  /**
   * {{prettify}}
   *
   * Block helper for embedding prettify in HTML and
   * having it rendered to HTML at build time.
   *
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   * @example:
   *   {{#prettify}}
   *     # This is a title.
   *   {{/prettify}}
   * @result:
   *   <h1>This is a title </h1>
   */
//   Handlebars.registerHelper("prettify", function (options) {
//     var content = options.fn(this);
//     return prettify(content);
//   });

// };


/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

// var _ = require('lodash');

// module.exports.register = function(Handlebars, options) {
//   var prettify = require('js-beautify').html;

//   var condense = function(str) {
//     return str.replace(/(\n|\r){2,}/g, '\n');
//   };

//   var padcomments = function(str) {
//     return str.replace(/(\s*<!--)/g, '\n$1');
//   };

//   var fixspaces = function(str) {
//     return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
//   };

//   /**
//    * Default options passed to js-beautify.
//    * @param {hash arguments} [Options received as hash arguments will override defaults.]
//    * @param {task options}   [Options defined in the task/target override hash arguments.]
//    */
//   var defaults = {};
//   var opts = options;
//   defaults = _.extend(opts.prettify, defaults);
//   defaults.indent_size = defaults.indent;

//   /**
//    * Prettify HTML output
//    * @example:
//    *   {{#prettify indent="2"}}
//    *     {{> body }}
//    *   {{/prettify}}
//    */
//   Handlebars.registerHelper('prettify', function (options) {
//     var hash = _.extend(options.hash, opts.prettify);
//     var content = prettifyHTML(options.fn(this), hash);

//     // Reduce multiple newlines to a single newline
//     if(opts.prettify.condense === true) {
//       content = condense(content);
//     }
//     // Add a single newline above code comments.
//     if(opts.prettify.padcomments === true) {
//       content = padcomments(content);
//     }

//     return fixspaces(content);
//   });

//   /**
//    * Format HTML with js-beautify, pass in options.
//    * @param   {String} source  [The un-prettified HTML.]
//    * @param   {Object} options [Object of options passed to js-beautify.]
//    * @returns {String}         [Stunning HTML.]
//    */
//   var prettifyHTML = function(source, options) {
//     try {
//       return prettify(source, {
//       indent_size: 2,
//       indent_inner_html: true,
//       unformatted: ['code', 'pre', 'em', 'strong']
//     });
//     } catch (e) {
//       console.error(e);
//       console.warn('HTML beautification failed.');
//     }
//   };
// };
