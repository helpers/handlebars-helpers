const utils = require('./utils');
const url = require('url');
const querystring = require('querystring');
/**
 * @exports url
 */
const helpers = module.exports;

/**
 * Encodes a Uniform Resource Identifier (URI) component
 * by replacing each instance of certain characters by
 * one, two, three, or four escape sequences representing
 * the UTF-8 encoding of the character.
 *
 * @param {String} `str` The un-encoded string
 * @return {String} The endcoded string
 * @api public
 */

helpers.encodeURI = function(str) {
  if (!utils.isString(str)) return '';
  return encodeURIComponent(str);
};

/**
 * Escape the given string by replacing characters with escape sequences.
 * Useful for allowing the string to be used in a URL, etc.
 *
 * @param {String} `str`
 * @return {String} Escaped string.
 * @api public
 */

helpers.escape = function(str) {
  if (!utils.isString(str)) return '';
  return querystring.escape(str);
};

/**
 * Decode a Uniform Resource Identifier (URI) component.
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.decodeURI = function(str) {
  if (!utils.isString(str)) return '';
  return decodeURIComponent(str);
};

/**
 * Alias for [encodeURI](#encodeuri).
 * @api public
 */

helpers.url_encode = helpers.encodeURI;

/**
 * Alias for [decodeURI](#decodeuri).
 * @api public
 */

helpers.url_decode = helpers.decodeURI;

/**
 * Take a base URL, and a href URL, and resolve them as a
 * browser would for an anchor tag.
 *
 * @param {String} `base`
 * @param {String} `href`
 * @return {String}
 * @api public
 */

helpers.urlResolve = function(base, href) {
  if (!utils.isString(base)) return '';
  return url.resolve(base, href);
};

/**
 * Parses a `url` string into an object.
 *
 * @param {String} `str` URL string
 * @return {String} Returns stringified JSON
 * @api public
 */

helpers.urlParse = function(str) {
  if (!utils.isString(str)) return '';
  return url.parse(str);
};

/**
 * Strip the query string from the given `url`.
 *
 * @param {String} `url`
 * @return {String} the url without the queryString
 * @api public
 */

helpers.stripQuerystring = function(str) {
  if (!utils.isString(str)) return '';
  return str.split('?')[0];
};

/**
 * Strip protocol from a `url`. Useful for displaying media that
 * may have an 'http' protocol on secure connections.
 *
 * ```handlebars
 * <!-- url = 'http://foo.bar' -->
 * {{stripProtocol url}}
 * <!-- results in: '//foo.bar' -->
 * ```
 * @param {String} `str`
 * @return {String} the url with http protocol stripped
 * @api public
 */

helpers.stripProtocol = function(str) {
  if (!utils.isString(str)) return '';
  const parsed = url.parse(str);
  parsed.protocol = '';
  return parsed.format();
};
