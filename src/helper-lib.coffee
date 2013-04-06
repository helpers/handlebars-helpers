fs = require 'fs'
path = require 'path'
dir = path.join __dirname, 'helpers'

endsWith = (str, search) ->
  result = str.indexOf search, str.length - search.length
  result isnt -1

loadFile = (file) ->
  require file unless endsWith file, 'helpers.js'

loadFile path.join(dir, file) for file in fs.readdirSync dir
