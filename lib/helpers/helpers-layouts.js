/**
 * Handlebars Helpers: Layout Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

/**
 * These helpers are inspired by handlebars-layouts.
 * https://github.com/shannonmoeller/handlebars-layouts * 
 */


// Export helpers
module.exports.register = function (Handlebars, opts) {
  opts = opts || {};


  var helpers = {

    /**
     * Extend a layout that contains block definitions
     * @param  {String} layout  name of the layout to extend
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered layout
     */
    extend: function (layout, options) {
      var output = null;
      var context = Object.create(this);
      var template = Handlebars.partials[layout];

      if (typeof template === 'undefined') {
        throw new Error("Missing layout: '" + layout + "'");
      }

      options.fn(context);

      return Handlebars.compile(template)(context);

    },


    /**
     * Used within layouts to define block sections
     * @param  {String} name    name of block to be referenced later
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered block section
     */
    block: function (name, options) {
      var block = null;

      this.blocks = this.blocks || {};
      block = this.blocks[name];

      if(block && block.fn) {
        return block.fn(this);
      }
      return options.fn(this);
    },


    /**
     * Used within templates that extend a layout to define
     * content that will replace block sections
     * @param  {String} name    name of the block to replace
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered content section
     */
    content: function (name, options) {
      this.blocks = this.blocks || {};
      this.blocks[name] = {
        fn: options.fn
      };
    }

  };


  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
