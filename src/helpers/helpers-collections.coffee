# Local deps
Utils = require '../utils/utils'

# First: Returns the first item in a collection.
module.exports.first = first = (array, count) ->
  if Utils.isUndefined(count) then array[0] else array.slice 0, count

# With first: Use the first item in a collection inside a block.
module.exports.withFirst = withFirst = (array, count, options) ->
  if Utils.isUndefined count
    options = count
    options.fn array[0]
  else
    array = array.slice 0, count
    result = ''
    for item of array then result += options.fn array[item]
    result

# Last: Returns the last item in a collection. Opposite of `first`.
module.exports.last = last = (array, count) ->
  if Utils.isUndefined(count) then array[array.length - 1] else array.slice -count

# With Last: Use the last item in a collection inside a block. Opposite of `withFirst`.
module.exports.withLast = withLast = (array, count, options) ->
  if Utils.isUndefined count
    options = count
    options.fn array[array.length - 1]
  else
    array = array.slice -count
    result = ''
    for item of array then result += options.fn array[item]
    result

# After: Returns all of the items in the collection after the specified count.
module.exports.after = after = (array, count) ->
  array.slice count

# With After: Use all of the items in the collection after the specified
# count inside a block.
module.exports.withAfter = withAfter = (array, count, options) ->
  array = array.slice count
  result = ''
  for item of array then result += options.fn array[item]
  result

# Before: Returns all of the items in the collection before the specified count.
# Opposite of `after`.
module.exports.before = before = (array, count) ->
  array.slice 0, -count

# With Before: Use all of the items in the collection before the specified
# count inside a block. Opposite of `withAfter`.
module.exports.withBefore = withBefore = (array, count, options) ->
  array = array.slice 0, -count
  result = ''
  for item of array then result += options.fn array[item]
  result

# Join: Joins all elements of a collection into a string using a separator if specified.
module.exports.join = join = (array, separator) ->
  array.join if Utils.isUndefined(separator) then ' ' else separator

module.exports.sort = sort = (array, field) ->
  if Utils.isUndefined field
    array.sort()
  else
    array.sort (a, b) -> a[field] > b[field]

module.exports.withSort = withSort = (array, field, options) ->
  result = ''
  if Utils.isUndefined field
    options = field
    array = array.sort()
    result += options.fn(item) for item in array
  else
    array = array.sort (a, b) -> a[field] > b[field]
    result += options.fn(array[item]) for item of array
  result

module.exports.length = length = (array) ->
  array.length

module.exports.lengthEqual = lengthEqual = (array, length, options) ->
  if array.length is length then options.fn(@) else options.inverse(@)

module.exports.empty = empty = (array, options) ->
  if array.length <= 0 then options.fn(@) else options.inverse(@)

module.exports.any = any = (array, options) ->
  if array.length > 0 then options.fn(@) else options.inverse(@)

module.exports.inArray = inArray = (array, value, options) ->
  if array.indexOf(value) isnt -1  then options.fn(@) else options.inverse(@)

###
Similar to #each helper, but treats array-like objects as arrays
(i.e. objects with a `.length` property which is a number)
rather than objects. This lets us iterate over our Collection's.
###
# module.exports.iterate = iterate = (context, options) ->
#   fn = options.fn
#   inverse = options.inverse
#   i = 0
#   ret = ""
#   data = undefined
#   data = Handlebars.createFrame(options.data)  if options.data
#   if context and typeof context is "object"
#     if typeof context.length is "number"
#       j = context.length

#       while i < j
#         data.index = i  if data
#         ret = ret + fn(context[i],
#           data: data
#         )
#         i++
#     else
#       for key of context
#         if context.hasOwnProperty(key)
#           data.key = key  if data
#           ret = ret + fn(context[key],
#             data: data
#           )
#           i++
#   ret = inverse(this)  if i is 0
#   ret

module.exports.eachIndex = eachIndex = (array, options) ->
  result = ''
  for value, index in array
    result += options.fn item: value, index: index
  result

# Handlebars block helper to enumerate properties in an object
module.exports.eachProperty = eachProperty = (obj, options) ->
  result = ''
  for key, value of obj
    result += options.fn key: key, value: value
  result

# Arrayify: data gets passed in from *.yml as a string, like "foo, bar, baz"
# we need to convert this to an ES Array of strings to avoid reference errors
#
# Credit: https://github.com/operasoftware/shinydemos/blob/master/lib/compiler.js
module.exports.arrayify = arrayify = (data) ->
  result = data.split(",").map((tag) ->
    "\"" + tag + "\""
  )
  result

module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper 'first', first
  Handlebars.registerHelper 'withFirst', withFirst
  Handlebars.registerHelper 'last', last
  Handlebars.registerHelper 'withLast', withLast
  Handlebars.registerHelper 'after', after
  Handlebars.registerHelper 'withAfter', withAfter
  Handlebars.registerHelper 'before', before
  Handlebars.registerHelper 'withBefore', withBefore
  Handlebars.registerHelper 'join', join
  Handlebars.registerHelper 'sort', sort
  Handlebars.registerHelper 'withSort', withSort
  Handlebars.registerHelper 'length', length
  Handlebars.registerHelper 'lengthEqual', lengthEqual
  Handlebars.registerHelper 'empty', empty
  Handlebars.registerHelper 'any', any
  Handlebars.registerHelper 'inArray', inArray
  # Handlebars.registerHelper "iterate", iterate
  Handlebars.registerHelper 'eachIndex', eachIndex
  Handlebars.registerHelper 'eachProperty', eachProperty
  Handlebars.registerHelper "arrayify", arrayify

  @
