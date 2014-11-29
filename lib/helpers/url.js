'use strict';

var Handlebars = require('handlebars');
var url = require('url');
var utils = require('../utils/utils');


exports.stripQuerystring = function(url) {
  return url.split("?")[0];
};

/**
 * Encodes a Uniform Resource Identifier (URI) component
 * by replacing each instance of certain characters by
 * one, two, three, or four escape sequences representing
 * the UTF-8 encoding of the character.
 *
 * @param  {String} `uri` The un-encoded string
 * @return {String} The endcoded string
 */

exports.encodeURI = function(uri) {
  return encodeURIComponent(uri);
};

/**
 * Decode a Uniform Resource Identifier (URI) component.
 *
 * @param  {String} `encodedURI`
 * @return {String}
 */

exports.decodeURI = function(encodedURI) {
  return decodeURIComponent(encodedURI);
};

/**
 * Take a base URL, and a href URL, and resolve them as a
 * browser would for an anchor tag.
 *
 * @param  {String} `base`
 * @param  {String} `href`
 * @return {String}
 */

exports.urlresolve = function(base, href) {
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

exports.urlparse = function(path, type, query) {
  var res = utils.stringify(url.parse(path), type, query);
  return new Handlebars.safeString(res);
};
