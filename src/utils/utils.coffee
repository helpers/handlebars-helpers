Handlebars = require('../helpers/helpers').Handlebars

# Node deps
fs         = require 'fs'
path       = require 'path'




Utils          = module.exports = {}
Utils.toString = Object.prototype.toString

Utils.getExtname = (str) ->
    extname = path.extname(str)
    str = extname  if extname
    str = str.substring(1)  if str[0] is "."
    str

Utils.read = (source) ->
    source = path.normalize(source)
    result = fs.readFileSync(source, "utf8")

Utils.readFile = (source) ->
    source = path.normalize(source)
    result = fs.readFileSync(source, "utf8")

Utils.readSync = (source) ->
    result = fs.readFileSync(source, "utf8")

Utils.readStream = (source) ->
    result = fs.createReadStream(source, "utf8")

Utils.isUndefined = (value) ->
    value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
    new Handlebars.SafeString str

Utils.trim = (str) ->
    trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
    str.toString().replace trim, ''

Utils.resolvePath = (from, to) ->
    from = path.resolve(__dirname, from)
    to = path.resolve(__dirname, to)
    path.result(from, to)
  

Utils.urlNormalize = (urlString) ->
    urlString.replace /\\/g, '/'

