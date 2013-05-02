# Local deps
Utils = require '../utils/utils'
_     = require 'lodash'


# module.exports.value = value = (file, prop) ->
#   if Utils.isUndefined(file)
#     file = Utils.readJSON("./package.json")
#   else
#     file = Utils.readJSON(file)
#     prop = _.pick(file, prop)
#     prop = _.pluck(prop)
#   new Handlebars.SafeString(prop)

# Value: extracts a value from a specific property
module.exports.value = value = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  prop = _.pluck(prop)
  Utils.safeString(prop)

# Property: extracts a specific property
module.exports.property = property = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  Utils.safeString(JSON.stringify(prop, null, 2))

# Stringify: stringifies to JSON
module.exports.stringify = stringify = (file, props) ->
  file = Utils.readJSON(file)
  Utils.safeString(JSON.stringify(file, null, 2))


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

# Handlebars "joinAny" block helper that supports arrays of objects or strings.
# (implementation found here: https://github.com/wycats/handlebars.js/issues/133)
#
# If "delimiter" is not speficified, then it defaults to ",".
# You can use "start", and "end" to do a "slice" of the array.
#
# Use with objects:
# {{#join people delimiter=" and "}}{{name}}, {{age}}{{/join}}
#
# Use with arrays:
# {{join jobs delimiter=", " start="1" end="2"}}
# 
module.exports.joinAny = joinAny = (items, block) ->
  delimiter = block.hash.delimiter or ","
  start = start = block.hash.start or 0
  len = (if items then items.length else 0)
  end = block.hash.end or len
  out = ""
  end = len  if end > len
  if "function" is typeof block
    i = start
    while i < end
      out += delimiter  if i > start
      if "string" is typeof items[i]
        out += items[i]
      else
        out += block(items[i])
      i++
    out
  else
    [].concat(items).slice(start, end).join delimiter


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
# Credit: https://github.com/operasoftware/shinydemos/blob/master/lib/compiler.js
module.exports.arrayify = arrayify = (data) ->
  result = data.split(",").map((tag) ->
    "\"" + tag + "\""
  )
  result

module.exports.register = (Handlebars, options) ->

  # Handlebars.registerHelper "iterate", iterate
  Handlebars.registerHelper "arrayify", arrayify
  Handlebars.registerHelper 'after', after
  Handlebars.registerHelper 'any', any
  Handlebars.registerHelper 'before', before
  Handlebars.registerHelper 'eachIndex', eachIndex
  Handlebars.registerHelper 'eachProperty', eachProperty
  Handlebars.registerHelper 'empty', empty
  Handlebars.registerHelper 'first', first
  Handlebars.registerHelper 'inArray', inArray
  Handlebars.registerHelper 'join', join
  Handlebars.registerHelper 'joinAny', join
  Handlebars.registerHelper 'last', last
  Handlebars.registerHelper 'length', length
  Handlebars.registerHelper 'lengthEqual', lengthEqual
  Handlebars.registerHelper 'property', property
  Handlebars.registerHelper 'sort', sort
  Handlebars.registerHelper 'stringify', stringify
  Handlebars.registerHelper 'value', value
  Handlebars.registerHelper 'withAfter', withAfter
  Handlebars.registerHelper 'withBefore', withBefore
  Handlebars.registerHelper 'withFirst', withFirst
  Handlebars.registerHelper 'withLast', withLast
  Handlebars.registerHelper 'withSort', withSort

  @
