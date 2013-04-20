module.exports.register = (Handlebars, options) ->

  # Node libs
  fs   = require 'fs'
  path = require 'path'

  # NPM libs
  _    = require 'lodash'
  yaml = require 'js-yaml'
  glob = require 'globule'

  # Local libs
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
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '* [$1]' + '($2)  ') or []
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
  Roadmap: Reads in data from an "ROADMAP" file to generate markdown formatted
  roadmap or list of roadmap entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  Syntax: {{roadmap [src]}}
  ###
  Handlebars.registerHelper "roadmap", (roadmap) ->
    if Utils.isUndefined(roadmap)
      roadmap = Utils.readYAML('./ROADMAP')
    else
      roadmap = Utils.readYAML(roadmap)
    source = "{{#each .}}* {{eta}}    {{{@key}}}    {{#each goals}}{{{.}}}{{/each}}\n{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(roadmap))


  ###
  chapter: reads in data from a markdown file, and uses the first heading
  as a chapter heading, and then copies the rest of the content inline.
  Usage: {{ chapter [file] }}
  ###
  Handlebars.registerHelper 'chapter', (file) ->
    file = Utils.read(file)
    content = file.replace(/(^[^ ]*\s)(.+)([^#]+(?=.*)$)/gim, '$2\n' + '$3') or []
    Utils.safeString(content)


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
  Embed: Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There second second optional
  parameter is for specifying (forcing) syntax highlighting for language of choice.
  Syntax:  {{ embed [file] [lang] }}
  Usage: {{embed 'path/to/file.js'}} or {{embed 'path/to/file.hbs' 'html'}}
  ###
  Handlebars.registerHelper 'embed', (file, language) ->
    file = Utils.read(file)
    language = ""  if Utils.isUndefined(language)
    result = '``` ' + language + '\n' + file + '\n```'
    Utils.safeString(result)



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
