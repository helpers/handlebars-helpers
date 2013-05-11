module.exports.register = (Handlebars, options) ->
  fs    = require 'fs'
  path  = require 'path'
  grunt = require 'grunt'
  file  = grunt.file
  _     = require 'lodash'
  yaml  = require 'js-yaml'

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

  ###
  readme-title: Generates a title and Travis CI badge for a README.md.
  Syntax: {{travis [src]}}
  ###
  Handlebars.registerHelper "readme-title", (branch) ->
    pkg     = Utils.readJSON("./package.json")
    repo    = Utils.repoUrl('https://github.com/$1')
    name    = pkg.name
    version = pkg.version
    source   = '[' + name + ' v' + version + '](' + repo + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))

  ###
  Travis CI: Generates a title and Travis CI badge for a README.md.
  Syntax: {{travis [src]}}
  ###
  Handlebars.registerHelper "travis-badge", (branch) ->
    pkg       = Utils.readJSON("./package.json")
    travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
    # pass in data from assemble task options
    travis    = options.travis || {}
    curBranch = ''
    if Utils.isUndefined(branch)
      curBranch = ''
    else if travis.branch
      curBranch = '?branch=' + travis.branch
    else 
      curBranch = '?branch=' + branch
    if travis.name
      pkg.name = travis.name
    else
      pkg.name
    source   = '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))

  ###
  Travis CI: Generates a title and Travis CI badge for a README.md.
  Syntax: {{travis [src]}}
  ###
  Handlebars.registerHelper "travis", (branch) ->
    pkg       = Utils.readJSON("./package.json")
    repo      = Utils.repoUrl('https://github.com/$1')
    travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
    # pass in data from assemble task options
    travis    = options.travis || {}
    curBranch = ''
    if Utils.isUndefined(branch)
      curBranch = ''
    else if travis.branch
      curBranch = '?branch=' + travis.branch
    else 
      curBranch = '?branch=' + branch
    if travis.name
      pkg.name = travis.name
    else
      pkg.name

    unless travis.title is false
      title = '# [' + pkg.name + ' v' + pkg.version + '](' + repo + ')'
    source   = title + ' [![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))

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
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '* [$1]($2)  ') or []
    Utils.safeString(matches)

  ###
  AUTHORS: (case senstitive) Same as `{{authors}}`, but outputs a different format.
  ###
  Handlebars.registerHelper 'AUTHORS', (authors) ->
    if Utils.isUndefined(authors)
      authors = Utils.read("./AUTHORS")
    else
      authors = Utils.read(authors)
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '\n**[$1]**\n  \n+ [$2]($2)  ') or [] 
    Utils.safeString(matches)


  ###
  Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
  changelog or list of changelog entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  Usage: {{changelog}} or {{changelog [src]}}
  ###
  Handlebars.registerHelper "changelog", (changelog) ->
    if Utils.isUndefined(changelog)
      changelog = Utils.readYAML('./CHANGELOG')
    else
      changelog = Utils.readYAML(changelog)
    source = "{{#each .}}* {{date}}\t\t\t{{{@key}}}\t\t\t{{#each changes}}{{{.}}}{{/each}}\n{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(changelog))

  ###
  Roadmap: Reads in data from an "ROADMAP" file to generate markdown formatted
  roadmap or list of roadmap entries for a README.md. Accepts a
  second optional parameter to change to a different file than the default.
  Usage: {{roadmap}} or {{roadmap [src]}}
  ###
  Handlebars.registerHelper "roadmap", (roadmap) ->
    if Utils.isUndefined(roadmap)
      roadmap = Utils.readYAML('./ROADMAP')
    else
      roadmap = Utils.readYAML(roadmap)
    source = "{{#each .}}* {{eta}}\t\t\t{{{@key}}}\t\t\t{{#each goals}}{{{.}}}{{/each}}\n{{else}}_(Big plans in the works)_{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(roadmap))


  ###
  Embed: Embeds code from an external file as preformatted text. The first parameter
  requires a path to the file you want to embed. There second second optional
  parameter is for specifying (forcing) syntax highlighting for language of choice.
  Syntax:  {{ embed [file] [lang] }}
  Usage: {{embed 'path/to/file.js'}} or {{embed 'path/to/file.hbs' 'html'}}
  ###
  Handlebars.registerHelper 'embed', (file, language) ->
    file = grunt.file.read(file)
    language = ""  if Utils.isUndefined(language)
    content = '``` ' + language + '\n' + file + '\n```'
    Utils.safeString(content)

  ###
  Markdown: markdown helper enables writing markdown inside HTML 
  and then renders the markdown as HTML inline with the rest of the page.
  Usage: {{#markdown}} # This is a title. {{/markdown}}
  Renders to: <h1>This is a title </h1>
  ###
  Handlebars.registerHelper "markdown", (options) ->
    content = options.fn(this)
    # https://gist.github.com/paulirish/1343518
    # This works, but only for the first expression.
    # RegEx needs to be tweaked.
    # text = content.replace(/\n\s*\n/g, "\n")
    # # set indentation level so your markdown can be indented within your HTML
    # leadingws = text.match(/^\n?(\s*)/)[1].length
    # regex     = new RegExp("\\n?\\s{" + leadingws + "}", "g")
    # md        = text.replace(regex, "\n")
    Markdown.convert(content)

  if isServer

    ###
    Markdown helper used to read in a file and inject
    the rendered markdown into the HTML.
    Usage: {{md ../path/to/file.md}}
    ###
    Handlebars.registerHelper "md", (path) ->
      content = Utils.globFiles(path)
      tmpl = Handlebars.compile(content)
      md = tmpl(this)
      html = Markdown.convert(md)
      Utils.safeString(html)

  @
