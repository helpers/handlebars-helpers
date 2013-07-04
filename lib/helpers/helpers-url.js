/*! URL helpers
*/


(function() {
  var Utils, stripQuerystring, url, url_parse, url_resolve, _decodeURI, _encodeURI;

  url = require('url');

  Utils = require('../utils/utils');

  module.exports.stripQuerystring = stripQuerystring = function(url) {
    return url.split("?")[0];
  };

  module.exports.encodeURI = _encodeURI = function(uri) {
    return encodeURIComponent(uri);
  };

  module.exports.decodeURI = _decodeURI = function(encodedURI) {
    return decodeURIComponent(encodedURI);
  };

  module.exports.url_resolve = url_resolve = function(base, href) {
    return url.resolve(base, href);
  };

  module.exports.url_parse = url_parse = function(uri, type, query) {
    var result;

    uri = url.parse(uri);
    result = Utils.stringifyObj(uri, type);
    return Utils.safeString(result);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("url_parse", url_parse);
    Handlebars.registerHelper("url_resolve", url_resolve);
    Handlebars.registerHelper("stripQuerystring", stripQuerystring);
    Handlebars.registerHelper("encodeURI", _encodeURI);
    Handlebars.registerHelper("decodeURI", _decodeURI);
    return this;
  };

}).call(this);
