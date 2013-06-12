###! markdown helpers ###

fs    = require 'fs'
path  = require 'path'
_     = require 'lodash'

module.exports.register = (Handlebars, options) ->

  # Internal libs.
  Utils    = require '../utils/utils'
  Markdown = require('../utils/markdown').Markdown opts
  
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
  isServer = (typeof process isnt 'undefined')

  # Markdown: markdown helper enables writing markdown inside HTML 
  # and then renders the markdown as HTML inline with the rest of the page.
  # Usage: {{#markdown}} # This is a title. {{/markdown}}
  # Renders to: <h1>This is a title </h1>
  Handlebars.registerHelper "markdown", (options) ->
    content = options.fn(this)
    Markdown.convert(content)

  if isServer

    # Markdown helper used to read in a file and inject
    # the rendered markdown into the HTML.
    # Usage: {{md ../path/to/file.md}}
    Handlebars.registerHelper "md", (path) ->
      content = Utils.globFiles(path)
      tmpl = Handlebars.compile(content)
      md = tmpl(this)
      html = Markdown.convert(md)
      Utils.safeString(html)


  @
