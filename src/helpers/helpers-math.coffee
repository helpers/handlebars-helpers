###! math helpers ###

_     = require 'lodash'

module.exports.add = add = (value, addition) ->
  value + addition

module.exports.subtract = subtract = (value, substraction) ->
  value - substraction

module.exports.divide = divide = (value, divisor) ->
  value / divisor

module.exports.multiply = multiply = (value, multiplier) ->
  value * multiplier

module.exports.floor = floor = (value) ->
  Math.floor value

module.exports.ceil = ceil = (value) ->
  Math.ceil value

module.exports.round = round = (value) ->
  Math.round value

module.exports.sum = sum = () ->
  args = _.flatten(arguments)
  sum = 0
  i = args.length - 1

  while i--
      if "number" is typeof args[i]
        sum += args[i]

  sum


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "add", add
  Handlebars.registerHelper "subtract", subtract
  Handlebars.registerHelper "divide", divide
  Handlebars.registerHelper "multiply", multiply
  Handlebars.registerHelper "floor", floor
  Handlebars.registerHelper "ceil", ceil
  Handlebars.registerHelper "round", round
  Handlebars.registerHelper "sum", sum

  @
