Utils = require '../utils/utils'
grunt = require 'grunt'
_     = require 'lodash'

pkg = grunt.file.readJSON('package.json')

module.exports.listprops = listprops = (obj) ->
  file = Utils.readJSON(obj)
  Utils.listAllProperties(file)

# Value: extracts a value from a specific property
module.exports.value = value = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  prop = _.pluck(prop)
  Utils.safeString(prop)

# Property: extracts a specific property
module.exports.property = property = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  Utils.safeString(JSON.stringify(prop, null, 2))

# Stringify: stringifies to JSON
module.exports.stringify = stringify = (file, props) ->
  file = Utils.readJSON(file)
  Utils.safeString(JSON.stringify(file, null, 2))


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "listprops", listprops
  Handlebars.registerHelper 'property', property
  Handlebars.registerHelper 'value', value
  Handlebars.registerHelper 'stringify', stringify

  @