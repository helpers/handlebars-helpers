###! object helpers ###

Utils = require '../utils/utils'
grunt = require 'grunt'
_     = require 'lodash'

pkg = grunt.file.readJSON('package.json')


# Value: extracts a value from a specific property
module.exports.value = value = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  prop = _.pluck(prop)
  Utils.safeString(prop)

# Property: extracts a specific property
module.exports.prop = prop = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  Utils.safeString("\n" + JSON.stringify(prop, null, 2))

# Stringify: stringifies to JSON
module.exports.stringify = stringify = (file, props) ->
  file = Utils.readJSON(file)
  Utils.safeString(JSON.stringify(file, null, 2))


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper 'stringify', stringify
  Handlebars.registerHelper 'value', value
  Handlebars.registerHelper 'prop', prop

  @