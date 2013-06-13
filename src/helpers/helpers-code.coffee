###! special helpers ###

Handlebars = require('../helpers/helpers').Handlebars

Utils = require '../utils/utils'
grunt = require 'grunt'
path  = require 'path'
_     = require 'lodash'


module.exports = 
  # Embed: Embeds code from an external file as preformatted text. The first parameter
  # requires a path to the file you want to embed. There second second optional
  # parameter is for specifying (forcing) syntax highlighting for language of choice.
  # Syntax:  {{ embed [file] [lang] }}
  # Usage: {{embed 'path/to/file.js'}} or {{embed 'path/to/file.hbs' 'html'}}
  embed: embed = (src, lang) ->
    content = Utils.globFiles(src)
    ext = path.extname(src).replace(/^(\.)/gm, '');
    if Utils.isUndefined(lang)
      lang = ext
    else 
      lang = lang
    switch ext
      when "md", "markdown", "mdown"
        output = content.replace(/^(```)/gm, '&#x60;&#x60;&#x60;')
        ext = "md"
      when "txt"
        output = content
        ext = "text"
      when "hbs", "hbars"
        output = content.replace(/^(---)/gm, '---')
        ext = "html"
      when "less"
        output = content
        ext = "scss"
      when undefined
        output = content
        ext = ""
      else
        output = content
        ext = ""
    result = '``` ' + lang + '\n' + output + '\n```\n'
    Utils.safeString(result)

  # jsFiddle: Embed a jsFiddle, first param sets the id of the 
  # fiddle, second param defines tabs to be shown...
  # Usage: {{ jsfiddle [id] [tabs] [skin] [height] [width] }}
  jsfiddle: jsfiddle = (id, tabs, skin, height, width) ->
    tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
    skin   = "light"  if Utils.isUndefined(skin)
    width  = "210px"  if Utils.isUndefined(width)
    height = "100%"  if Utils.isUndefined(height)

    result = "<iframe width=" + width + " height=" + height + " src=\"http://jsfiddle.net/" + id + "/embedded/" + tabs + "/" + skin + "/\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>"
    Utils.safeString result

  # Gist: Downloads and embeds public GitHub Gists by
  # adding only the Id of the Gist.
  # Usage: {{ gist [id] [file] }}
  gist: gist = (id, file) ->
    id = Handlebars.Utils.escapeExpression(id)
    file = ""  if Utils.isUndefined(file)
    result = "<script src=\"https://gist.github.com/" + id + ".js\"></script>"
    Utils.safeString result

module.exports.register = (Handlebars, options) ->
  Handlebars.registerHelper "embed", embed
  Handlebars.registerHelper "jsfiddle", jsfiddle
  Handlebars.registerHelper "gist", gist

  @