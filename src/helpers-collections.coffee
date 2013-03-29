Handlebars.registerHelper 'first', (array, count) ->
    if Utils.isUndefined(count) then array[0] else array.slice 0, count

Handlebars.registerHelper 'withFirst', (array, count, options) ->
    if Utils.isUndefined count
        options = count
        options.fn array[0]
    else
        array = array.slice 0, count
        result = ''
        for item of array then result += options.fn array[item]
        result

Handlebars.registerHelper 'last', (array, count) ->
    if Utils.isUndefined(count) then array[array.length - 1] else array.slice -count

Handlebars.registerHelper 'withLast', (array, count, options) ->
    if Utils.isUndefined count
        options = count
        options.fn array[array.length - 1]
    else
        array = array.slice -count
        result = ''
        for item of array then result += options.fn array[item]
        result

Handlebars.registerHelper 'after', (array, count) ->
    array.slice count

Handlebars.registerHelper 'withAfter', (array, count, options) ->
    array = array.slice count
    result = ''
    for item of array then result += options.fn array[item]
    result

Handlebars.registerHelper 'before', (array, count) ->
    array.slice 0, -count

Handlebars.registerHelper 'withBefore', (array, count, options) ->
    array = array.slice 0, -count
    result = ''
    for item of array then result += options.fn array[item]
    result

Handlebars.registerHelper 'join', (array, separator) ->
    array.join if Utils.isUndefined(separator) then ' ' else separator

Handlebars.registerHelper 'sort', (array, field) ->
    if Utils.isUndefined field
        array.sort()
    else
        array.sort (a, b) -> a[field] > b[field]

Handlebars.registerHelper 'withSort', (array, field, options) ->
    result = ''

    if Utils.isUndefined field
        options = field
        array = array.sort()
        result += options.fn(item) for item in array
    else
        array = array.sort (a, b) -> a[field] > b[field]
        result += options.fn(array[item]) for item of array

    result

Handlebars.registerHelper 'length', (array) ->
    array.length

Handlebars.registerHelper 'lengthEqual', (array, length, options) ->
    if array.length is length then options.fn(@) else options.inverse(@)

Handlebars.registerHelper 'empty', (array, options) ->
    if array.length <= 0 then options.fn(@) else options.inverse(@)

Handlebars.registerHelper 'any', (array, options) ->
    if array.length > 0 then options.fn(@) else options.inverse(@)

Handlebars.registerHelper 'inArray', (array, value, options) ->
    if array.indexOf(value) isnt -1  then options.fn(@) else options.inverse(@)

Handlebars.registerHelper 'eachIndex', (array, options) ->
    result = ''

    for value, index in array
        result += options.fn item: value, index: index

    result

Handlebars.registerHelper 'eachProperty', (obj, options) ->
    result = ''

    for key, value of obj
        result += options.fn key: key, value: value

    result
