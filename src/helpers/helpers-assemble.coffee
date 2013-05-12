module.exports.register = (Handlebars, options) ->

  # Internal libs.
  Utils    = require '../utils/utils'
  HTML     = require '../utils/html'
  
  fs       = require 'fs'
  path     = require 'path'
  grunt    = require 'grunt'
  _        = require 'lodash'

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
  Switch (proof of concept), not intended for use in production code.
  This helper demonstrates a simple example of how to switch the output
  format based on the extension of the destination file(s) in the
  'assemble' grunt task.
  ###
  Handlebars.registerHelper "switch", (src) ->
    md = '# ' + src
    html = '<h1>' + src + '</h1>'
    output = Utils.switchOutput(options.ext, md, html)
    Utils.safeString(output)

  # href helper: This will escape the passed in parameters, but mark the response as safe,
  # so Handlebars will not try to escape it even if the "triple-stash" is not used.
  # Usage: {{href 'href' 'title' 'class'}}
  Handlebars.registerHelper "href", (url, text, linkClass) ->
    url  = Handlebars.Utils.escapeExpression(url)
    text = Handlebars.Utils.escapeExpression(text)
    linkClass = ""  if Utils.isUndefined(linkClass)
    md   = '[' + text + '](' + url + ')'
    html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>'
    result = Utils.switchOutput(options.ext, md, html)
    Utils.safeString(result)
    
  # temporary 
  Handlebars.registerHelper "link", (url, text, linkClass) ->
    url  = Handlebars.Utils.escapeExpression(url)
    text = Handlebars.Utils.escapeExpression(text)
    linkClass = ""  if Utils.isUndefined(linkClass)
    md   = '[' + text + '](' + url + ')'
    html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>'
    result = Utils.switchOutput(options.ext, md, html)
    Utils.safeString(result)

  # css: proof of concept. add <link></link> tags, automatically resolves relative path to options.assets
  Handlebars.registerHelper "css", (context) ->
    context = [context] unless Array.isArray context
    Utils.safeString(context.map((item) ->
      ext  = Utils.getExt(item)
      css  = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">'
      less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">'
             #'<script src="' + options.assets + 'js/less.js" type="text/javascript"></script>\n')
      switch ext
        when "less"
          return less
        when "css"
          return css
        else css
    ).join("\n"))

  # js: proof of concept. add <script></script> tags, automatically resolves relative path to options.assets
  Handlebars.registerHelper "js", (context) ->
    context = [context] unless Array.isArray context
    Utils.safeString(context.map((item) ->
      ext    = Utils.getExt(item)
      js     = '<script src="' + options.assets + '/js/' + item + '"></script>'
      coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>'
      switch ext
        when "js"
          return js
        when "coffee"
          return coffee
        else js
    ).join("\n"))

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

# Markdown = require('../utils/markdown').Markdown opts


# opts = (
#   gfm: true
#   tables: true
#   breaks: false
#   highlight: null
#   pedantic: false
#   sanitize: true
#   silent: false
#   smartLists: true
#   langPrefix: "lang-"
#   highlight: (code, lang) ->
#     res = undefined
#     return code  unless lang
#     switch lang
#       when "js"
#         lang = "javascript"
#     try
#       res = hljs.highlight(lang, code).value
#     finally
#       return res or code
# )
# opts     = _.extend opts, options

# isServer = (typeof process isnt 'undefined')

# ###
# Travis CI: Generates a title and Travis CI badge for a README.md.
# Syntax: {{travis [src]}}
# ###
# module.exports.travis_badge = travis_badge = (branch) ->
#   pkg       = Utils.readJSON("./package.json")
#   travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
#   # pass in data from assemble task options
#   travis    = options.travis || {}
#   curBranch = ''
#   if Utils.isUndefined(branch)
#     curBranch = ''
#   else if travis.branch
#     curBranch = '?branch=' + travis.branch
#   else 
#     curBranch = '?branch=' + branch
#   if travis.name
#     pkg.name = travis.name
#   else
#     pkg.name
#   source   = '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
#   template = Handlebars.compile(source)
#   Utils.safeString(template(pkg))

# ###
# Travis CI: Generates a title and Travis CI badge for a README.md.
# Syntax: {{travis [src]}}
# ###
# module.exports.travis = travis = (branch) ->
#   pkg       = Utils.readJSON("./package.json")
#   repo      = Utils.repoUrl('https://github.com/$1')
#   travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
#   # pass in data from assemble task options
#   travis    = options.travis || {}
#   curBranch = ''
#   if Utils.isUndefined(branch)
#     curBranch = ''
#   else if travis.branch
#     curBranch = '?branch=' + travis.branch
#   else 
#     curBranch = '?branch=' + branch
#   if travis.name
#     pkg.name = travis.name
#   else
#     pkg.name

#   unless travis.title is false
#     title = '# [' + pkg.name + ' v' + pkg.version + '](' + repo + ')'
#   source   = title + '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
#   template = Handlebars.compile(source)
#   Utils.safeString(template(pkg))


###
Markdown: markdown helper enables writing markdown inside HTML 
and then renders the markdown as HTML inline with the rest of the page.
Usage: {{#markdown}} # This is a title. {{/markdown}}
Renders to: <h1>This is a title </h1>
###
# module.exports.markdown = markdown = (options) ->
#   content = options.fn(this)
#   markdown.convert(content)

# if isServer

#   ###
#   Markdown helper used to read in a file and inject
#   the rendered markdown into the HTML.
#   Usage: {{md ../path/to/file.md}}
#   ###
#   module.exports.md = md = (path) ->
#     content = Utils.read(path)
#     tmpl = Handlebars.compile(content)
#     md = tmpl(this)
#     html = markdown.convert(md)
#     Utils.safeString(html)


# # Switch (proof of concept), not intended for use in production code.
# # This helper demonstrates a simple example of how to switch the output
# # format based on the extension of the destination file(s) in the
# # 'assemble' grunt task.
# _switch = (src) ->
#   md = '# ' + src
#   html = '<h1>' + src + '</h1>'
#   output = Utils.switchOutput(options.ext, md, html)
#   Utils.safeString(output)

# # href helper: This will escape the passed in parameters, but mark the response as safe,
# # so Handlebars will not try to escape it even if the "triple-stash" is not used.
# # Usage: {{href 'href' 'title' 'class'}}
# href = (url, text, linkClass) ->
#   url  = Handlebars.Utils.escapeExpression(url)
#   text = Handlebars.Utils.escapeExpression(text)
#   linkClass = ""  if Utils.isUndefined(linkClass)
#   md   = '[' + text + '](' + url + ')'
#   html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>'
#   result = Utils.switchOutput(options.ext, md, html)
#   Utils.safeString(result)

# # css: proof of concept. add <link></link> tags, automatically resolves relative path to options.assets
# css = (context, options) ->
#   context = [context] unless Array.isArray context
#   Utils.safeString(context.map((item) ->
#     ext  = Utils.getExt(item)
#     css  = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">'
#     less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">'
#            #'<script src="' + options.assets + 'js/less.js" type="text/javascript"></script>\n')
#     switch ext
#       when "less"
#         return less
#       when "css"
#         return css
#       else css
#   ).join("\n"))

# # js: proof of concept. add <script></script> tags, automatically resolves relative path to options.assets
# js = (context) ->
#   context = [context] unless Array.isArray context
#   Utils.safeString(context.map((item) ->
#     ext    = Utils.getExt(item)
#     js     = '<script src="' + options.assets + '/js/' + item + '"></script>'
#     coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>'
#     switch ext
#       when "js"
#         return js
#       when "coffee"
#         return coffee
#       else js
#   ).join("\n"))

# module.exports.register = (Handlebars, options) ->

  # Handlebars.registerHelper "switch", _switch
  # Handlebars.registerHelper "css", css
  # Handlebars.registerHelper "js", js

  # Handlebars.registerHelper "href", href
  # Handlebars.registerHelper "link", href
  # Handlebars.registerHelper "travis-badge", travis_badge
  # Handlebars.registerHelper "travis", travis
  
  # Handlebars.registerHelper "markdown", markdown
  # Handlebars.registerHelper "md", md

  # @