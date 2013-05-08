Utils = require '../utils/utils'


# Copy: copies src file from A to B. USE WITH CAUTION!!! Usage: {{copy [a] [b]}}
module.exports.copy = copy = (a, b) ->
  Utils.copyFile(a, b)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "copy", copy

  @