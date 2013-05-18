###! number helpers ###

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

# to abbreviate numbers
module.exports.toAbbr = toAbbr = (number, digits) ->
  # Default = 2 decimal places => 100, 3 => 1000, etc. 
  digits = 2  if Utils.isUndefined(digits)
  digits = Math.pow(10, digits)
  abbr = ["k", "m", "b", "t"]
  i = abbr.length - 1
  while i >= 0
    size = Math.pow(10, (i + 1) * 3)
    if size <= number
      number = Math.round(number * digits / size) / digits        
      # Handle special case where we round up to the next abbreviation
      if (number is 1000) and (i < abbr.length - 1)
        number = 1
        i++
      number += abbr[i]
      break
    i--
  number

# add commas to numbers
module.exports.addCommas = addCommas = (number) ->
  number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "toFixed", toFixed
  Handlebars.registerHelper "toPrecision", toPrecision
  Handlebars.registerHelper "toExponential", toExponential
  Handlebars.registerHelper "toInt", toInt
  Handlebars.registerHelper "toFloat", toFloat  
  Handlebars.registerHelper "toAbbr", toAbbr
  Handlebars.registerHelper "addCommas", addCommas

  @
