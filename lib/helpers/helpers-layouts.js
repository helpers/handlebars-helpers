'use strict';

var Handlebars = require('handlebars');

/**
 * These helpers are inspired by handlebars-layouts.
 * https://github.com/shannonmoeller/handlebars-layouts *
 */

module.exports = function(opts) {
  opts = opts || {};

  var helpers = {};

  /**
   * Extend a layout that contains block definitions
   * @param  {String} layout  name of the layout to extend
   * @param  {Object} options normal handlebars options
   * @return {String}         rendered layout
   */

  helpers.extend = function(layout, options) {
    var output = null;
    var context = Object.create(this || null);
    var template = Handlebars.partials[layout];

    if (typeof template === 'undefined') {
      throw new Error("Missing layout: '" + layout + "'");
    }

    if (typeof template === 'string') {
      template = Handlebars.compile(template);
    }

    if (typeof options.fn === 'function') {
      options.fn(context);
    }

    return template(context);
  };


  /**
   * Used within layouts to define block sections
   * @param  {String} name    name of block to be referenced later
   * @param  {Object} options normal handlebars options
   * @return {String}         rendered block section
   */

  helpers.block = function(name, options) {
    var block = null;

    this.blocks = this.blocks || {};
    block = this.blocks[name];

    var optionsFn = options.fn || function() {
      return '';
    };

    switch (block && block.fn && block.mode.toLowerCase()) {
      case 'append':
        return optionsFn(this) + block.fn(this);

      case 'prepend':
        return block.fn(this) + optionsFn(this);

      case 'replace':
        return block.fn(this);

      default:
        return optionsFn(this);
    }
  };

  /**
   * Used within templates that extend a layout to define
   * content that will replace block sections
   * @param  {String} name    name of the block to replace
   * @param  {Object} options normal handlebars options
   * @return {String}         rendered content section
   */

  helpers.content = function(name, options) {
    options = options || {};
    options.hash = options.hash || {};
    var mode = options.hash['mode'] || 'replace';

    this.blocks = this.blocks || {};
    this.blocks[name] = {
      mode: mode.toLowerCase(),
      fn: options.fn
    };
  };

  return helpers;
};
