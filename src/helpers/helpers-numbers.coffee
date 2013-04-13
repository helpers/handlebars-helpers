module.exports.register = (Handlebars, options) ->

  # Local deps
  Utils = require '../utils/utils'
  



  # to fixed
  Handlebars.registerHelper 'toFixed', (number, digits) ->
      digits = 0 if Utils.isUndefined(digits)
      number.toFixed digits

  # to precision
  Handlebars.registerHelper 'toPrecision', (number, precision) ->
      precision = 1 if Utils.isUndefined(precision)
      number.toPrecision precision

  # to exponential
  Handlebars.registerHelper 'toExponential', (number, fractions) ->
      fractions = 0 if Utils.isUndefined(fractions)
      number.toExponential fractions

  # to integer
  Handlebars.registerHelper 'toInt', (number) ->
      parseInt number, 10

  # to float
  Handlebars.registerHelper 'toFloat', (number) ->
      parseFloat number

  # add commas to numbers
  Handlebars.registerHelper 'addCommas', (number) ->
      number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"

  @
