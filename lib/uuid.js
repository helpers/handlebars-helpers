const uuid = require('uuid');
const helpers = module.exports;

function baseUUID() {
  return uuid.v4();
}

/**
 * Generates a UUID, using the V4 method (identical to the browser crypto.randomUUID function).
 *
 * @return {String} A newly generated UUID.
 * @api public
 * @example {{ UUID }} ->
 */
helpers.uuid = function() {
  return baseUUID();
};

// upper case coverage just incase
helpers.UUID = function() {
  return baseUUID();
};