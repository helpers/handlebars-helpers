'use strict';

/**
 * Parse HTML tag attributes from the `options.hash`.
 *
 * @param {Object} `hash` Helper options hash, e.g. `{foo: 'bar'}`
 * @return {String} Stringified attributes, e.g. `foo="bar"`
 * @api public
 */

module.exports = function parseAttributes(hash) {
  return Object.keys(hash).map(function(key) {
    return "" + key + "=\"" + hash[key] + "\"";
  }).join(' ');
};
