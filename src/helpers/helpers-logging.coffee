module.exports.register = (Handlebars, options) ->
  Utils = require '../utils/utils'





  # Inspect
  Handlebars.registerHelper 'inspect', (obj, language) ->
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```'
    new Handlebars.SafeString(result)


  # Log
  Handlebars.registerHelper 'log', (value) ->
      console.log value


  # Debug
  Handlebars.registerHelper 'debug', (value) ->
      console.log 'Context: ', @
      console.log('Value: ', value) unless Utils.isUndefined value
      console.log '-----------------------------------------------'

  @
