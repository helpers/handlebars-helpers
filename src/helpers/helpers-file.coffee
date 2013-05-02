module.exports.register = (Handlebars, options) ->
  Utils = require '../utils/utils'



  ###
  Copy: copies src file from A to B. USE WITH CAUTION!!!
  Usage: {{copy [a] [b]}}
  ###
  Handlebars.registerHelper 'copy', (a, b) ->
    Utils.copyFile(a, b)

