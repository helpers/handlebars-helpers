###! logging helpers ###

Utils = require '../utils/utils'
grunt = require 'grunt'
to    = require 'to'


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

module.exports.dir = expandYAML = (src) ->
  list = grunt.file.expand(src)
  yml = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.dir = expandJSON = (src) ->
  list = grunt.file.expand(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "expandYAML", expandYAML
  Handlebars.registerHelper "expandJSON", expandJSON
  Handlebars.registerHelper "inspect", inspect
  Handlebars.registerHelper "log", log
  Handlebars.registerHelper "debug", debug

  @