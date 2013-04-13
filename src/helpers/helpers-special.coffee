module.exports.register = (Handlebars, options) ->

  # Nodejs libs.
  fs = require 'fs'
  
  # npm deps
  _ = require 'lodash'

  # Local deps
  Utils = require '../utils/utils'



  ###
  jsFiddle: Embed a jsFiddle, second parameter sets tabs
  Usage: {{ jsfiddle [id] [tabs] }}
  ### 
  Handlebars.registerHelper 'jsfiddle', (id, tabs) ->
    tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    Utils.safeString(result)


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
  Embed: Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There is a second optional
  parameter to specify (force) syntax highlighting for a specific language.
  Syntax:  {{ embed [file] [lang] }}
  Usage:   {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
  ###
  Handlebars.registerHelper 'embed', (file, language) ->
    file = Utils.readSync(file)
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + file + '\n```'
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
