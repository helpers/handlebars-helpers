'use strict';

var Handlebars = require('handlebars');
var url = require('url');
var Utils = require('../utils/utils');


module.exports = function(options) {

  /**
   * Expose `helpers`
   */

  var helpers = {};

  helpers.stripQuerystring = function(url) {
    return url.split("?")[0];
  };

  /**
   * Encodes a Uniform Resource Identifier (URI) component
   * by replacing each instance of certain characters by
   * one, two, three, or four escape sequences representing
   * the UTF-8 encoding of the character.
   *
   * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {String} uri: The un-encoded string
   * @return {String}      The endcoded string.
   */

  helpers.encodeURI = function(uri) {
    return encodeURIComponent(uri);
  };

  /**
   * Decodes a Uniform Resource Identifier (URI) component
   * previously created by encodeURIComponent or by a
   * similar routine.
   *
   * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} encodedURI
   * @return {[type]}
   */

  helpers.decodeURI = function(encodedURI) {
    return decodeURIComponent(encodedURI);
  };

  /**
   * Take a base URL, and a href URL, and resolve them as a
   * browser would for an anchor tag.
   *
   * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} base
   * @param  {[type]} href
   * @return {[type]}
   */

  helpers.urlresolve = function(base, href) {
    return url.resolve(base, href);
  };

  /**
   * Take a URL string, and return an object. Pass true as the
   * second argument to also parse the query string using the
   * querystring module. Defaults to false.
   *
   * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} path
   * @param  {[type]} type
   * @param  {[type]} query
   * @return {[type]}
   */

  helpers.urlparse = function(path, type, query) {
    var result = Utils.stringifyObj(url.parse(path), type, query);
    return new Handlebars.safeString(result);
  }

  return helpers;
};
