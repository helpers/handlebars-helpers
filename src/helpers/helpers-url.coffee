module.exports.register = (Handlebars, options) ->





  Handlebars.registerHelper "stripQuerystring", (url) ->
    url.split("?")[0]


  ###
  encode URI
  Encodes a Uniform Resource Identifier (URI) component by replacing each instance of 
  certain characters by one, two, three, or four escape sequences representing the 
  UTF-8 encoding of the character 
  ###
  Handlebars.registerHelper "encodeURI", (uri) ->
    encodeURIComponent(uri)

  ###
  Decode URI
  Decodes a Uniform Resource Identifier (URI) component previously created 
  by encodeURIComponent or by a similar routine.
  ###
  Handlebars.registerHelper "decodeURI", (encodedURI) ->
    decodeURIComponent(encodedURI)

