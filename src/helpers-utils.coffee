Utils = {}

Utils.toString = Object.prototype.toString

Utils.isUndefined = (value) ->
    value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
    new Handlebars.SafeString str

Utils.trim = (str) ->
    trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
    str.toString().replace trim, ''
