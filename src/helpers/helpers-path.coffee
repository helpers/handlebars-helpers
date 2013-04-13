module.exports.register = (Handlebars, options) ->

  # Node deps
  path  = require 'path'

  # Local deps
  Utils = require '../utils/utils'



  ###
  WARNING!!! WARNING!!! WARNING!!!
  These are not stable, do not use them 
  in production yet!!!
  ###








  ###
  directory: Returns the absolute path to the current directory.
  Usage: {{directory [path]}}
  Returns: C:\path\to\the\current\current\directory
  ###
  Handlebars.registerHelper "directory", (file) ->
    file = path.dirname()
    

  ###
  absolute: Returns the absolute path to the current directory.
  Usage: {{absolute [to]}}
  Returns: C:\path\to\the\current\current\directory
  ###
  Handlebars.registerHelper "absolute", (to) ->
    absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()))
    absolutePath


  ###
  Relative: {{relative [from] [to]}}
  Returns the derived relative path from one to the other.
  ###
  Handlebars.registerHelper "relative", (from, to) ->
    relativePath = Utils.urlNormalize(path.relative(from, to))
    relativePath

  ###
  filename: Returns the full-name of a given file.
  Usage:    {{filename "docs/toc.md"}}
  Returns:  toc.md
  ###
  Handlebars.registerHelper 'filename', (base, ext) ->
    fullName = path.basename(base, ext)
    fullName

  ###
  Basename: Returns the basename of a given file.
  Usage:    {{base "docs/toc.md"}}
  Returns:  toc
  ###
  Handlebars.registerHelper 'basename', (base, ext) ->
    fullName = path.basename(base, ext)
    base = path.basename(base, path.extname(fullName))
    base

  ###
  Extension: Returns the extension of a given file.
  Usage:    {{ext "docs/toc.md"}}
  Returns:  .md
  ###
  Handlebars.registerHelper "extension", (ext) ->
    extension = path.extname(ext)
    extension


  @
