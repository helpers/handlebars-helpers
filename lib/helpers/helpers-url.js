/*! URL helpers*/


(function() {
  var Utils, stripQuerystring, url, urlparse, urlresolve, _decodeURI, _encodeURI;

  url = require('url');

  Utils = require('../utils/utils');

  module.exports = {
    stripQuerystring: stripQuerystring = function(url) {
      return url.split("?")[0];
    },
    encodeURI: _encodeURI = function(uri) {
      return encodeURIComponent(uri);
    },
    decodeURI: _decodeURI = function(encodedURI) {
      return decodeURIComponent(encodedURI);
    },
    urlresolve: urlresolve = function(base, href) {
      return url.resolve(base, href);
    },
    urlparse: urlparse = function(uri, type, query) {
      var result;
      uri = url.parse(uri);
      result = Utils.stringifyObj(uri, type, query);
      return Utils.safeString(result);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("urlparse", urlparse);
    Handlebars.registerHelper("urlresolve", urlresolve);
    Handlebars.registerHelper("stripQuerystring", stripQuerystring);
    Handlebars.registerHelper("encodeURI", _encodeURI);
    Handlebars.registerHelper("decodeURI", _decodeURI);
    return this;
  };

}).call(this);
