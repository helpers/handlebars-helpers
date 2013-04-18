(function() {
  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("stripQuerystring", function(url) {
      return url.split("?")[0];
    });
    /*
    encode URI
    Encodes a Uniform Resource Identifier (URI) component by replacing each instance of 
    certain characters by one, two, three, or four escape sequences representing the 
    UTF-8 encoding of the character
    */

    Handlebars.registerHelper("encodeURI", function(uri) {
      return encodeURIComponent(uri);
    });
    /*
    Decode URI
    Decodes a Uniform Resource Identifier (URI) component previously created 
    by encodeURIComponent or by a similar routine.
    */

    return Handlebars.registerHelper("decodeURI", function(encodedURI) {
      return decodeURIComponent(encodedURI);
    });
  };

}).call(this);
