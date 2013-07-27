###! miscellaneous helpers ###

module.exports =

  default: _default = (value, defaultValue) ->
    value ? defaultValue

  # http://handlebarsjs.com/block_helpers.html
  noop: noop = (options) ->
    options.fn this


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "default", _default
  Handlebars.registerHelper "noop", noop

  @