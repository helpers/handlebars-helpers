fs   = require 'fs'
path = require 'path'

dir  = path.join __dirname, 'helpers'

module.exports.register = (Handlebars, options) ->

  endsWith = (str, search) ->
    result = str.indexOf search, str.length - search.length
    result isnt -1

  loadFile = (file) ->
    helper = require file unless endsWith file, 'helpers.js'
    helper.register Handlebars, options unless typeof helpers.register is 'undefined'

  loadFile path.join(dir, file) for file in fs.readdirSync dir
