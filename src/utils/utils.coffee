Handlebars = require('../helpers/helpers').Handlebars
fs         = require 'fs'
path       = require 'path'


Utils          = module.exports = {}
Utils.toString = Object.prototype.toString


Utils.read = (source, callback) ->
  fs.exists source, (exist) ->
    if exist
      fs.readFile source, "utf8", (err, result) ->
        return callback(err)  if err
        callback null, textProcess(result)
    else
      callback null

Utils.readSync = (source) ->
    result = fs.readFileSync(source, "utf8")
    textProcess result  if result

Utils.isUndefined = (value) ->
    value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
    new Handlebars.SafeString str

Utils.trim = (str) ->
    trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
    str.toString().replace trim, ''

Utils.urlNormalize = (urlString) ->
  urlString.replace /\\/g, '/'
