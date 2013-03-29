Handlebars.registerHelper 'toFixed', (number, digits) ->
    digits = 0 if Utils.isUndefined(digits)
    number.toFixed digits

Handlebars.registerHelper 'toPrecision', (number, precision) ->
    precision = 1 if Utils.isUndefined(precision)
    number.toPrecision precision

Handlebars.registerHelper 'toExponential', (number, fractions) ->
    fractions = 0 if Utils.isUndefined(fractions)
    number.toExponential fractions

Handlebars.registerHelper 'toInt', (number) ->
    parseInt number, 10

Handlebars.registerHelper 'toFloat', (number) ->
    parseFloat number

Handlebars.registerHelper 'addCommas', (number) ->
    number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"
