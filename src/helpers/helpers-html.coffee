###! html helpers ###

module.exports.register = (Handlebars, options) ->
  grunt = require 'grunt'
  util  = require 'util'
  Utils = require '../utils/utils'
  HTML  = require '../utils/html'
  _     = require 'lodash'

  # css: proof of concept. add <link></link> tags,
  # automatically resolves relative path to
  # options.assets
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

  # js: proof of concept. will be updated to handle multiple scripts.
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

  # List: <ul>
  Handlebars.registerHelper "ul", (context, options) ->
      ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ul>"

  # List: <ol>: Same as the `ul` helper but creates ordered lists.
  Handlebars.registerHelper "ol", (context, options) ->
      ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ol>"


  @
