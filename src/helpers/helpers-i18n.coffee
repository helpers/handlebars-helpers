###! i18n helpers ###

module.exports.register = (Handlebars, options) ->
  Handlebars.registerHelper "i18n", (context, options) ->
    language = undefined
    throw "Key must be of type 'string'"  if typeof context isnt "string"
    language = (if (typeof options.hash.language is "string") then options.hash.language else @language)
    throw "The 'language' parameter is not defined"  if typeof language is "undefined"
    throw "No strings found for language '" + language + "'"  if typeof this[language] is "undefined"
    throw "No string for key '" + context + "' for language '" + language + "'"  if typeof this[language][context] is "undefined"
    this[language][context]
  @