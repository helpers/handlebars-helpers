module.exports.register = (Handlebars, options) ->
  Utils      = require '../utils/utils'
  fs         = require 'fs'
  _          = require 'lodash'



  ###
  jsFiddle: Embed a jsFiddle, second parameter sets tabs
  Usage: {{ jsfiddle [id] [tabs] }}
  ### 
  Handlebars.registerHelper 'jsfiddle', (id, tabs) ->
    tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    new Handlebars.SafeString(result)


  ### 
  Gist: Downloads and embeds public GitHub Gists by
  adding only the Id of the Gist.
  Usage: {{ gist [id] [file] }}
  ### 
  Handlebars.registerHelper 'gist', (id, file) ->
    id = Handlebars.Utils.escapeExpression(id)
    file = ""  if Utils.isUndefined(file)
    result = '<script src="https://gist.github.com/' + id + '.js"></script>'
    new Handlebars.SafeString(result)


  ###
  Embed: Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There is a second optional
  parameter to specify (force) syntax highlighting for a specific language.
  Syntax:  {{ embed [file] [lang] }}
  Usage:   {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
  ###
  Handlebars.registerHelper 'embed', (file, language) ->
    file = fs.readFileSync(file, "utf8")
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + file + '\n```'
    new Handlebars.SafeString(result)


  @
