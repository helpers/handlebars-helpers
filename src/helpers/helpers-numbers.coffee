Utils = require '../utils/utils'


# to fixed
module.exports.toFixed = toFixed = (number, digits) ->
  digits = 0 if Utils.isUndefined(digits)
  number.toFixed digits

# to precision
module.exports.toPrecision = toPrecision = (number, precision) ->
  precision = 1 if Utils.isUndefined(precision)
  number.toPrecision precision

# to exponential
module.exports.toExponential = toExponential = (number, fractions) ->
  fractions = 0 if Utils.isUndefined(fractions)
  number.toExponential fractions

# to integer
module.exports.toInt = toInt = (number) ->
  parseInt number, 10

# to float
module.exports.toFloat = toFloat = (number) ->
  parseFloat number

# add commas to numbers
module.exports.addCommas = addCommas = (number) ->
  number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "toFixed", toFixed
  Handlebars.registerHelper "toPrecision", toPrecision
  Handlebars.registerHelper "toExponential", toExponential
  Handlebars.registerHelper "toInt", toInt
  Handlebars.registerHelper "toFloat", toFloat
  Handlebars.registerHelper "addCommas", addCommas

  @