const utils = require('./utils');
/**
 * @exports collection
 */
const helpers = module.exports;

/**
 * Inline, subexpression, or block helper that returns true (or the block)
 * if the given collection is empty, or false (or the inverse block, if
 * supplied) if the colleciton is not empty.
 *
 * ```handlebars
 * <!-- array: [] -->
 * {{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}
 * <!-- results in: 'AAA' -->
 *
 * <!-- array: [] -->
 * {{isEmpty array}}
 * <!-- results in: true -->
 * ```
 * @param {Object} `collection`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.isEmpty = function(collection, options) {
  if (!utils.isOptions(options)) {
    options = collection;
    return utils.fn(true, this, options);
  }

  if (Array.isArray(collection) && !collection.length) {
    return utils.fn(true, this, options);
  }

  const keys = Object.keys(collection);
  const isEmpty = typeof collection === 'object' && !keys.length;
  return utils.value(isEmpty, this, options);
};
