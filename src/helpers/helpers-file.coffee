module.exports.register = (Handlebars, options) ->
  
  # Local deps
  Utils = require '../utils/utils'
  path  = require 'path'
  _     = require 'lodash'





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
  Package.json: get the current version from package.json
  Usage: {{ pkg-name [pkg] }}
  ### 
  Handlebars.registerHelper "pkg-name", (pkg) ->
    if Utils.isUndefined(pkg)
      pkg = Utils.readJSON("package.json")
    else
      pkg = Utils.readJSON(pkg)
    name = pkg.name

  ###
  Version: get the current version from package.json
  Usage: {{ pkg-version [pkg] }}
  ### 
  Handlebars.registerHelper "pkg-version", (pkg) ->
    if Utils.isUndefined(pkg)
      pkg = Utils.readJSON("package.json")
    else
      pkg = Utils.readJSON(pkg)
    version = pkg.version

  ###
  Version: get the current version from package.json
  Usage: {{ pkg-description [pkg] }}
  ### 
  Handlebars.registerHelper "pkg-description", (pkg) ->
    if Utils.isUndefined(pkg)
      pkg = Utils.readJSON("package.json")
    else
      pkg = Utils.readJSON(pkg)
    description = pkg.description


  ###
  Copy: copies src file from A to B. USE WITH CAUTION!!!
  Usage: {{copy [a] [b]}}
  ###
  Handlebars.registerHelper 'copy', (a, b) ->
    Utils.copyFile(a, b)


