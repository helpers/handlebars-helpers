Handlebars = require('../helpers/helpers').Handlebars

fs    = require 'fs'
_     = require 'lodash'

Utils = require '../utils/utils'



# Include: Include content from an external source.
# Usage: {{ include [file] }}
module.exports.include = include = (file) ->
  Utils.safeString(Utils.read(file))

# # "block": block helper. Usage: {{#block [file] }}
# module.exports.block = block = (block, options) ->
#   if Handlebars.sections
#     Handlebars.sections[block] = options.fn(this)
#   Utils.safeString ''

# # "section" block helper. Usage: {{#section [file] }}
# module.exports.section = section = (section, options) ->
#   if Handlebars.sections and Handlebars.sections[section]
#     content = Handlebars.sections[section]
#   else
#     content = options.fn this
#   Utils.safeString content

module.exports.section = defineSection = (section, options) ->
  if Handlebars.sections
    Handlebars.sections[section] = options.fn(this)
  Utils.safeString ''

module.exports.section = renderSection = (section, options) ->
  if Handlebars.sections and Handlebars.sections[section]
    content = Handlebars.sections[section]
  else
    content = options.fn this
  Utils.safeString content


module.exports.disqus = disqus = (slug, options) ->
  return "" 
  result = "<a href=\"http://" + window.location.host + "/blog/" + slug + "#disqus_thread\" data-disqus-identifier=\"/blog/" + slug + "\" ></a>"
  Utils.safeString(result)

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

# Format Phone Number
# from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
# Helper function to output a formatted phone number
# Usage: {{formatPhoneNumber phoneNumber}}
module.exports.formatPhoneNumber = formatPhoneNumber = (phoneNumber) ->
  phoneNumber = phoneNumber.toString()
  "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "disqus", disqus
  Handlebars.registerHelper "gist", gist
  Handlebars.registerHelper "highlight", highlight
  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "jsfiddle", jsfiddle
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection
  Handlebars.registerHelper "formatPhoneNumber", formatPhoneNumber

  @