###! logging helpers ###

Utils = require '../utils/utils'


# Inspect
module.exports.inspect = inspect = (obj, language) ->
  language = ""  if Utils.isUndefined(language)
  result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```'
  Utils.safeString(result)

# Log
module.exports.log = log = (value) ->
  console.log value

# Debug
module.exports.debug = debug = (value) ->
  console.log 'Context: ', @
  console.log('Value: ', value) unless Utils.isUndefined value
  console.log '-----------------------------------------------'


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "inspect", inspect
  Handlebars.registerHelper "log", log
  Handlebars.registerHelper "debug", debug

  @