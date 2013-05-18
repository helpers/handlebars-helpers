###! inflection helpers ###

Utils = require '../utils/utils'

module.exports.inflect = inflect = (count, singular, plural, include) ->
  word = if count > 1 or count is 0 then plural else singular
  if Utils.isUndefined(include) or include is false then word else "#{count} #{word}"

module.exports.ordinalize = ordinalize = (value) ->
  normal = Math.abs Math.round value
  if (normal % 100) in [11..13]
    "#{value}th"
  else
    switch normal % 10
      when 1 then "#{value}st"
      when 2 then "#{value}nd"
      when 3 then "#{value}rd"
      else "#{value}th"


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "inflect", inflect
  Handlebars.registerHelper "ordinalize", ordinalize

  @