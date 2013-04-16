module.exports.register = (Handlebars, options) ->

  # Node deps
  fs   = require 'fs'
  path = require 'path'

  # npm deps
  _    = require 'lodash'
  yaml = require 'js-yaml'
  glob = require 'globule'

  # Local deps
  Utils = require '../utils/utils'


  opts = (
    gfm: true
    tables: true
    breaks: false
    highlight: null
    pedantic: false
    sanitize: true
    silent: false
    smartLists: true
    langPrefix: "lang-"
    highlight: (code, lang) ->
      res = undefined
      return code  unless lang
      switch lang
        when "js"
          lang = "javascript"
      try
        res = hljs.highlight(lang, code).value
      finally
        return res or code
  )

  opts     = _.extend opts, options
  markdown = require('../utils/markdown').Markdown opts
  isServer = (typeof process isnt 'undefined')


  ###
  Authors: reads in data from an "AUTHORS" file to generate markdown formtted
  author or list of authors for a README.md. Accepts a second optional
  parameter to a different file than the default.
  Usage: {{authors}} or {{ authors [file] }}
  ###
  Handlebars.registerHelper 'authors', (authors) ->
    if Utils.isUndefined(authors)
      authors = Utils.read("./AUTHORS")
    else
      authors = Utils.read(authors)
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '[$1]' + '($2)') or []
    Utils.safeString(matches)


  ###
  Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
  changelog or list of changelog entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  Syntax: {{changelog [src]}}
  ###
  Handlebars.registerHelper "changelog", (changelog) ->
    if Utils.isUndefined(changelog)
      changelog = Utils.readYAML('./CHANGELOG')
    else
      changelog = Utils.readYAML(changelog)
    source = "{{#each .}}* {{date}}    {{{@key}}}    {{#each changes}}{{{.}}}{{/each}}\n{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(changelog))


  ###
  Section: reads in data from a markdown file, and uses the first heading
  as a section heading, and then copies the rest of the content inline.
  Usage: {{ section [file] }}
  ###
  Handlebars.registerHelper 'section', (file) ->
    file = Utils.read(file)
    content = file.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') or []
    Utils.safeString(content)

  Handlebars.registerHelper 'defineSection', (section, options) ->
    if Handlebars.sections
      Handlebars.sections[section] = options.fn(this)
    Utils.safeString ''

  Handlebars.registerHelper 'renderSection', (section, options) ->
    if Handlebars.sections and Handlebars.sections[section]
      content = Handlebars.sections[section]
    else
      content = options.fn this
    Utils.safeString content

  ###
  Glob: reads in data from a markdown file, and uses the first heading
  as a section heading, and then copies the rest of the content inline.
  Usage: {{{ glob [file] }}
  ###
  Handlebars.registerHelper 'glob', (file) ->
    file    = glob.find(file)
    content = Utils.read(file)
    content = content.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') or []
    Utils.safeString(content)

  ###
  Markdown: Markdown helper used to write markdown inside and
  rendered the markdown inline with the HTML
  Usage: {{#markdown}} # This is a title. {{/markdown}}
  Renders to: <h1>This is a title </h1>
  ###
  Handlebars.registerHelper "markdown", (options) ->
    content = options.fn(this)
    markdown.convert content

  if isServer

    ###
    Markdown helper used to read in a file and inject
    the rendered markdown into the HTML.
    Usage: {{md ../path/to/file.md}}
    ###
    Handlebars.registerHelper "md", (path) ->
      content = Utils.read path
      tmpl = Handlebars.compile content
      md = tmpl this
      html = markdown.convert md
      Utils.safeString html

  @
