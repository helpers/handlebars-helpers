module.exports.register = (Handlebars, options) ->
  Utils      = require '../utils/utils'
  fs         = require 'fs'
  path       = require 'path'
  yaml       = require 'js-yaml'
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
  Authors: reads in data from an "AUTHORS" file to generate markdown formtted
  author or list of authors for a README.md. Accepts a second optional
  parameter to a different file than the default.
  Usage: {{authors}} or {{ authors [file] }}
  ###
  Handlebars.registerHelper 'authors', (authors) ->
    if Utils.isUndefined(authors)
      authors = fs.readFileSync("./AUTHORS", "utf8")
    else
      authors = fs.readFileSync(authors, "utf8")
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '[$1]' + '($2)') or []
    new Handlebars.SafeString(matches)


  ###
  Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
  changelog or list of changelog entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  Syntax: {{changelog [src]}}
  ###
  Handlebars.registerHelper "changelog", (changelog) ->
    if Utils.isUndefined(changelog)
      changelog = yaml.load fs.readFileSync('./CHANGELOG', 'utf8').toString()
    else
      changelog = yaml.load fs.readFileSync(changelog, 'utf8').toString()
    source = "{{#each .}}* {{date}}    {{{@key}}}    {{#each changes}}{{{.}}}{{/each}}\n{{/each}}"
    template = Handlebars.compile(source)
    new Handlebars.SafeString(template(changelog))


  ###
  directory
  Returns the absolute path to the current directory.

  Usage:
  {{directory [path]}}

  Returns:
  C:\path\to\the\current\current\directory
  ###
  Handlebars.registerHelper "directory", (file) ->
    file = path.dirname()
    


  ###
  absolute
  Returns the absolute path to the current directory.

  Usage:
  {{absolute [to]}}

  Returns:
  C:\path\to\the\current\current\directory
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


  # Inspect
  Handlebars.registerHelper 'inspect', (obj, language) ->
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```'
    new Handlebars.SafeString(result)



  @
