/*! URL helpers
*/


(function() {
  var Utils, stripQuerystring, _decodeURI, _encodeURI;

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

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("stripQuerystring", stripQuerystring);
    Handlebars.registerHelper("encodeURI", _encodeURI);
    Handlebars.registerHelper("decodeURI", _decodeURI);
    return this;
  };

}).call(this);
