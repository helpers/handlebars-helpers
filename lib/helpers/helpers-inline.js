/**
 * Markdown Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var glob      = require('glob');
var fs        = require('fs');
var yamlFront = require('yaml-front-matter');

module.exports.register = function(Handlebars, options) {

  /**
   * {{inline}}
   *
   * Block helper for inline embedding of Handlebars
   * templates. The block context has the following
   * data available.
   * 
   * <ul>
   *   <li>YAML front-matter</li>
   *   <li>body: The rendered content of the page.</li>
   *   <li>page: The unrendered content of the page.</li>
   *   <li>src: Source path of the page.</li>
   * </ul>
   *
   * @author: Marcus Stenbeck <https://github.com/marcusstenbeck>
   * @param  {String} path Glob expression
   * @return {String}     Rendered templates
   * @example
   *   {{#inline 'path/*.*'}}
   *     {{{body}}}
   *     Source path: {{src}}
   *   {{/inline}}
   */
  Handlebars.registerHelper('inline', function(path, options) {

    var files = glob.sync(path);
    var out = '';
    var context = {};
    var data = null;
    var template = null;

    var _i;
    for(_i = 0; _i < files.length; _i++) {
      data = yamlFront.loadFront(fs.readFileSync(files[_i]), 'page');
      data.src = files[_i];

      template = Handlebars.compile(data.page); // Compile the source

      context = data; // Copy front matter data to Handlebars context
      context.body = template(data); // render template

      out += options.fn(context);
    }

    return out;
  });

};

