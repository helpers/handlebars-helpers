


module.exports.default = _default = (value, defaultValue) ->
  value ? defaultValue


# http://handlebarsjs.com/block_helpers.html
module.exports.noop = noop = (options) ->
  options.fn this


###
Handlebars.registerHelper 'partial', (name, data) ->
  partial = Assemble.Config.partialsPath + name
  data = if Utils.isUndefined(data) then {} else data
  Handlebars.registerPartial(name, require partial) unless Handlebars.partials[name]?
  Utils.safeString Handlebars.partials[name](data)
###


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "default", _default
  Handlebars.registerHelper "noop", noop

  @