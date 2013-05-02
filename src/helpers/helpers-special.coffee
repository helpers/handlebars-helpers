module.exports.register = (Handlebars, options) ->
  fs    = require 'fs'
  _     = require 'lodash'
  Utils = require '../utils/utils'



  ###
  Include: Include content from an external source.
  Usage: {{ include [file] }}
  ###
  Handlebars.registerHelper 'include', (file) ->
    file = Utils.read(file)
    Utils.safeString(file)

  ###
  "section": block helper.
  Usage: {{#section [file] }}
  ###
  Handlebars.registerHelper 'section', (section, options) ->
    if Handlebars.sections
      Handlebars.sections[section] = options.fn(this)
    Utils.safeString ''

  ###
  "override" block helper.
  Usage: {{#override [file] }}
  ###
  Handlebars.registerHelper 'override', (section, options) ->
    if Handlebars.sections and Handlebars.sections[section]
      content = Handlebars.sections[section]
    else
      content = options.fn this
    Utils.safeString content

  ###
  jsFiddle: Embed a jsFiddle, second parameter sets tabs
  Usage: {{ jsfiddle [id] [tabs] }}
  ### 
  Handlebars.registerHelper 'jsfiddle', (id, tabs) ->
    tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    Utils.safeString(result)

  ### 
  Gist: Downloads and embeds public GitHub Gists by
  adding only the Id of the Gist.
  Usage: {{ gist [id] [file] }}
  ### 
  Handlebars.registerHelper 'gist', (id, file) ->
    id = Handlebars.Utils.escapeExpression(id)
    file = ""  if Utils.isUndefined(file)
    result = '<script src="https://gist.github.com/' + id + '.js"></script>'
    Utils.safeString(result)

  ###
  Highlight: wraps the output in a span with the class "highlight". 
  Usage: {{highlight 'value' 'class'}}
  ###
  Handlebars.registerHelper 'highlight', (text, modifier) ->
    modifier   = "highlight"  if Utils.isUndefined(modifier)
    result = '<span class="' + modifier + '">' + text + '</span>'
    Utils.safeString(result)

  ###
  Format Phone Number
  from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
  Helper function to output a formatted phone number
  Usage: {{formatPhoneNumber phoneNumber}}
  ###
  Handlebars.registerHelper "formatPhoneNumber", (phoneNumber) ->
    phoneNumber = phoneNumber.toString()
    "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4)


  @
