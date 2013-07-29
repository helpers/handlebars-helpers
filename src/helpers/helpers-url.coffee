###! URL helpers ###

url = require 'url'
Utils = require '../utils/utils'

module.exports =

  stripQuerystring: stripQuerystring = (url) ->
    url.split("?")[0]

  # encode URI: Encodes a Uniform Resource Identifier (URI)
  # component by replacing each instance of certain characters
  # by one, two, three, or four escape sequences representing
  # the UTF-8 encoding of the character
  encodeURI: _encodeURI = (uri) ->
    encodeURIComponent(uri)

  # Decode URI: Decodes a Uniform Resource Identifier (URI)
  # component previously created by encodeURIComponent or by a
  # similar routine.
  decodeURI: _decodeURI = (encodedURI) ->
    decodeURIComponent(encodedURI)

  # Take a base URL, and a href URL, and resolve them as a
  # browser would for an anchor tag.
  urlresolve: urlresolve = (base, href) ->
    url.resolve(base, href)

  # Take a URL string, and return an object.
  # Pass true as the second argument to also parse the query
  # string using the querystring module. Defaults to false.
  urlparse: urlparse = (uri, type, query) ->
    uri = url.parse(uri)
    result = Utils.stringifyObj(uri, type, query)
    Utils.safeString(result)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "urlparse", urlparse
  Handlebars.registerHelper "urlresolve", urlresolve
  Handlebars.registerHelper "stripQuerystring", stripQuerystring
  Handlebars.registerHelper "encodeURI", _encodeURI
  Handlebars.registerHelper "decodeURI", _decodeURI

  @
