###! number helpers ###

Utils = require '../utils/utils'

module.exports =

  # to fixed
  toFixed: toFixed = (number, digits) ->
    digits = 0 if Utils.isUndefined(digits)
    number.toFixed digits

  # to precision
  toPrecision: toPrecision = (number, precision) ->
    precision = 1 if Utils.isUndefined(precision)
    number.toPrecision precision

  # to exponential
  toExponential: toExponential = (number, fractions) ->
    fractions = 0 if Utils.isUndefined(fractions)
    number.toExponential fractions

  # to integer
  toInt: toInt = (number) ->
    parseInt number, 10

  # to float
  toFloat: toFloat = (number) ->
    parseFloat number

  # to abbreviate numbers
  toAbbr: toAbbr = (number, digits) ->
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
  addCommas: addCommas = (number) ->
    number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"

  # converts bytes into a nice representation with unit. e.g. 13661855 -> 13.7 MB, 825399 -> 825 KB, 1396 -> 1 KB
  fileSize: fileSize = (value) ->
    bytes = parseInt(value, 10)
    if isNaN(bytes) 
      console.error "Handlebars helper fileSize couldn't parse '#{value}'"
      return value # graceful degradation
    metric = ['byte', 'bytes', 'KB', 'MB', 'GB'] # KB is technically a Kilobit, but it seems more readable. YOLO

    if bytes is 0
      resInt = resValue = 0
    else
      resInt = Math.floor(Math.log(bytes) / Math.log(1000)) # base 1000 (rather than 1024) matches Mac OS X
      resValue = (bytes / Math.pow(1000, Math.floor(resInt))).toFixed(if resInt < 2 then 0 else 1) # no decimals for anything smaller than 1 MB 
      resInt = -1 if bytes is 1 # special case: 1 byte (singular)
      
    return Utils.safeString( resValue+' '+metric[resInt+1] )


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "toFixed", toFixed
  Handlebars.registerHelper "toPrecision", toPrecision
  Handlebars.registerHelper "toExponential", toExponential
  Handlebars.registerHelper "toInt", toInt
  Handlebars.registerHelper "toFloat", toFloat
  Handlebars.registerHelper "toAbbr", toAbbr
  Handlebars.registerHelper "addCommas", addCommas
  Handlebars.registerHelper "fileSize", fileSize

  @
