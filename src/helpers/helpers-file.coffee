module.exports.register = (Handlebars, options) ->
  
  # Local deps
  Utils = require '../utils/utils'
  path  = require 'path'
  _     = require 'lodash'



  # Handlebars.registerHelper "value", (file, prop) ->
  #   if Utils.isUndefined(file)
  #     file = Utils.readJSON("./package.json")
  #   else
  #     file = Utils.readJSON(file)
  #     prop = _.pick(file, prop)
  #     prop = _.pluck(prop)
  #   new Handlebars.SafeString(prop)


  Handlebars.registerHelper "value", (file, prop) ->
    file = Utils.readJSON(file)
    prop = _.pick(file, prop)
    prop = _.pluck(prop)
    new Handlebars.SafeString(prop)


  Handlebars.registerHelper "property", (file, prop) ->
    file = Utils.readJSON(file)
    prop = _.pick(file, prop)
    new Handlebars.SafeString(JSON.stringify(prop, null, 2))


  Handlebars.registerHelper "stringify", (file, props) ->
    file = Utils.readJSON(file)
    new Handlebars.SafeString(JSON.stringify(file, null, 2))


  ###
  Copy: copies src file from A to B. USE WITH CAUTION!!!
  Usage: {{copy [a] [b]}}
  ###
  Handlebars.registerHelper 'copy', (a, b) ->
    Utils.copyFile(a, b)

