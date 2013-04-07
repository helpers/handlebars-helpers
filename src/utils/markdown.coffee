# ==========================================================
# * markdown.js
# *
# * Assemble
# * http://assemble.io
# *
# * Copyright (c) 2012 Upstage
# * Licensed under the MIT license.
# * https://github.com/assemble/assemble/blob/master/LICENSE-MIT
# * ==========================================================

fs     = require("fs")
_      = require("lodash")
marked = require("marked")
hljs   = require("highlight.js")



###
Some of the following code is from grunt-markdown
https://github.com/treasonx/grunt-markdown
###
Markdown = (options) ->
  @init options

Markdown::init = (options) ->
  defaults = fromFile: true
  @options = _.extend(defaults, options)
  this

Markdown::read = (src) ->

  # read in a file and convert it to html using marked
  unless fs.existsSync(src)
    console.log "File " + src + " not found."
    return ""
  md = fs.readFileSync(src, "utf8")
  @convert md

Markdown::convert = (src) ->

  # wrapLines function from grunt-markdown
  codeLines = @options.codeLines
  shouldWrap = false
  shouldWrap = true  if codeLines and codeLines.before and codeLines.after
  wrapLines = (code) ->
    out = []
    before = codeLines.before
    after = codeLines.after
    code = code.split("\n")
    code.forEach (line) ->
      out.push before + line + after

    out.join "\n"


  # highlighting function setup from grunt-markdown
  if typeof @options.highlight is "string"
    if @options.highlight is "auto"
      @options.highlight = (code) ->
        out = hljs.highlightAuto(code).value
        out = wrapLines(out)  if shouldWrap
        out
    else if @options.highlight is "manual"
      @options.highlight = (code, lang) ->
        out = code
        try
          code = hljs.highlight(lang, code).value
        catch e
          out = hljs.highlightAuto(code).value
        out = wrapLines(out)  if shouldWrap
        out
  marked.setOptions @options
  html = marked(src)
  html

module.exports.Markdown = (options) ->
  new Markdown(options)
