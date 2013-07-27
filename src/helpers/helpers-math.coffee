###! math helpers ###

_     = require 'lodash'

module.exports =

  add: add = (value, addition) ->
    value + addition

  subtract: subtract = (value, substraction) ->
    value - substraction

  divide: divide = (value, divisor) ->
    value / divisor

  multiply: multiply = (value, multiplier) ->
    value * multiplier

  floor: floor = (value) ->
    Math.floor value

  ceil: ceil = (value) ->
    Math.ceil value

  round: round = (value) ->
    Math.round value

  sum: sum = () ->
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
