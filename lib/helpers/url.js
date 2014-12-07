'use strict';

var url = require('url');
var utils = require('../utils/utils');

/**
 * Encodes a Uniform Resource Identifier (URI) component
 * by replacing each instance of certain characters by
 * one, two, three, or four escape sequences representing
 * the UTF-8 encoding of the character.
 *
 * @param  {String} `str` The un-encoded string
 * @return {String} The endcoded string
 */

exports.encodeURI = function(str) {
  return encodeURIComponent(str);
};

/**
 * Decode a Uniform Resource Identifier (URI) component.
 *
 * @param  {String} `str`
 * @return {String}
 */

exports.decodeURI = function(str) {
  return decodeURIComponent(str);
};

/**
 * Take a base URL, and a href URL, and resolve them as a
 * browser would for an anchor tag.
 *
 * @param  {String} `base`
 * @param  {String} `href`
 * @return {String}
 */

exports.urlResolve = function(base, href) {
  return url.resolve(base, href);
};

/**
 * Take a URL string, and return an object. Pass true as the
 * second argument to also parse the query string using the
 * querystring module. Defaults to false.
 *
 * @param  {String} `path`
 * @param  {String} `type`
 * @param  {String} `query`
 * @return {String}
 */

exports.urlParse = function(path, type, query) {
  return utils.stringify(url.parse(path), type, query);
};


exports.stripQuerystring = function(url) {
  return url.split("?")[0];
};
