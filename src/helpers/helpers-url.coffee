###! URL helpers ###

Utils = require '../utils/utils'


module.exports.stripQuerystring = stripQuerystring = (url) ->
  url.split("?")[0]

# encode URI: Encodes a Uniform Resource Identifier (URI) component by replacing each instance of 
# certain characters by one, two, three, or four escape sequences representing the 
# UTF-8 encoding of the character 
module.exports.encodeURI = _encodeURI = (uri) ->
  encodeURIComponent(uri)

# Decode URI: Decodes a Uniform Resource Identifier (URI) component previously created 
# by encodeURIComponent or by a similar routine.
module.exports.decodeURI = _decodeURI = (encodedURI) ->
  decodeURIComponent(encodedURI)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "stripQuerystring", stripQuerystring
  Handlebars.registerHelper "encodeURI", _encodeURI
  Handlebars.registerHelper "decodeURI", _decodeURI

  @