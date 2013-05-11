Handlebars = require('../helpers/helpers').Handlebars

fs    = require 'fs'
Utils = require '../utils/utils'
_     = require 'lodash'




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

# jsFiddle: Embed a jsFiddle, second parameter sets tabs
# Usage: {{ jsfiddle [id] [tabs] }}
module.exports.jsfiddle = jsfiddle = (id, tabs) ->
  tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
  result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
  Utils.safeString(result)

# Gist: Downloads and embeds public GitHub Gists by
# adding only the Id of the Gist.
# Usage: {{ gist [id] [file] }}
module.exports.gist = gist = (id, file) ->
  id = Handlebars.Utils.escapeExpression(id)
  file = ""  if Utils.isUndefined(file)
  result = '<script src="https://gist.github.com/' + id + '.js"></script>'
  Utils.safeString(result)

# Highlight: wraps the output in a span with the class "highlight". 
# Usage: {{highlight 'value' 'class'}}
module.exports.highlight = highlight = (text, modifier) ->
  modifier   = "highlight"  if Utils.isUndefined(modifier)
  result = '<span class="' + modifier + '">' + text + '</span>'
  Utils.safeString(result)



module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper 'property', property
  Handlebars.registerHelper 'value', value
  Handlebars.registerHelper 'stringify', stringify
  Handlebars.registerHelper "gist", gist
  Handlebars.registerHelper "highlight", highlight
  Handlebars.registerHelper "jsfiddle", jsfiddle

  @