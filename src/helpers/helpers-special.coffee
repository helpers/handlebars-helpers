module.exports.register = (Handlebars, options) ->

  Utils      = require '../utils/utils'
  fs         = require 'fs'
  path       = require 'path'



  # Fiddle
  # Usage: {{ jsfiddle [id] [tabs] }}
  Handlebars.registerHelper 'jsfiddle', (id, tabs) ->
    tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    new Handlebars.SafeString(result)


  # Gist
  # Downloads and embeds public GitHub Gists by
  # adding only the Id of the Gist.
  #
  # Usage: {{ gist [id] [file] }}
  Handlebars.registerHelper 'gist', (id, file) ->
    id = Handlebars.Utils.escapeExpression(id)
    file = ""  if Utils.isUndefined(file)
    result = '<script src="https://gist.github.com/' + id + '.js"></script>'
    new Handlebars.SafeString(result)


  # Authors
  # Reads in data from an "AUTHORS" file to generate markdown formtted
  # author or list of authors for a README.md. Accepts a second optional
  # parameter to a different file than the default.
  #
  # Usage: {{authors [file]}}
  # Handlebars.registerHelper 'authors', (authors) ->
  #   if Utils.isUndefined(authors)
  #     authors = fs.readFileSync("./AUTHORS", "utf8")
  #   else
  #     authors = fs.readFileSync(authors, "utf8")
  #   matches = authors.replace(/(.*?)\s*\((.*)\)/g, '[$1]' + '($2)') or []
  #   new Handlebars.SafeString(matches)


  # Basename: Returns the basename of a given file.
  #
  # Usage: {{base "docs/toc.md"}}
  # Returns: toc
  Handlebars.registerHelper 'basename', (base, ext) ->
    fullName = path.basename(base, ext)
    base = path.basename(base, path.extname(fullName))
    base


  ###
  Embed

  Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There is a second optional
  parameter to specify (force) syntax highlighting for a specific language.

  Pattern:
  {{ embed [file] [lang] }}

  Usage:

  {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
  ###
  Handlebars.registerHelper 'embed', (file, language) ->
    file = fs.readFileSync(file, "utf8")
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + file + '\n```'
    new Handlebars.SafeString(result)


  # Inspect
  Handlebars.registerHelper 'inspect', (obj, language) ->
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null) + '\n```'
    new Handlebars.SafeString(result)


  ###
  Changelog

  Reads in data from an "CHANGELOG" file to generate markdown formatted
  changelog or list of changelog entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.

  Syntax: {{changelog [src]}}
  ###
  Handlebars.registerHelper "changelog", (src) ->
    src = undefined
    if Utils.isUndefined(src)
      src = fs.readFileSync("./CHANGELOG.yml", "utf8")
    else
      src = fs.readFileSync(src, "utf8")
    context = YAML.load(src)
    source = "{{#if changelog}}{{#each changelog}}* {{{ date }}}    {{{ @key }}}    {{#each changes}}{{{.}}} {{/each}}\n{{/each}}{{else}}_(Nothing yet)_{{/if}}"
    template = Handlebars.compile(source)

    # var matches = src.replace(/(v.*)(\:)(\s.*date:\s)\"(.*)(\")(\s.*)(changes:\s)(.+-)(.+)/gm) || [];
    new Handlebars.SafeString(template(context))

  @
