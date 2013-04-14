module.exports.register = (Handlebars, options) ->

  # Local deps
  Utils = require '../utils/utils'


  # First: Returns the first item in a collection.
  Handlebars.registerHelper 'first', (array, count) ->
      if Utils.isUndefined(count) then array[0] else array.slice 0, count


  # With first: Use the first item in a collection inside a block.
  Handlebars.registerHelper 'withFirst', (array, count, options) ->
      if Utils.isUndefined count
          options = count
          options.fn array[0]
      else
          array = array.slice 0, count
          result = ''
          for item of array then result += options.fn array[item]
          result


  # Last: Returns the last item in a collection. Opposite of `first`.
  Handlebars.registerHelper 'last', (array, count) ->
      if Utils.isUndefined(count) then array[array.length - 1] else array.slice -count


  # With Last: Use the last item in a collection inside a block. Opposite of `withFirst`.
  Handlebars.registerHelper 'withLast', (array, count, options) ->
      if Utils.isUndefined count
          options = count
          options.fn array[array.length - 1]
      else
          array = array.slice -count
          result = ''
          for item of array then result += options.fn array[item]
          result


  # After: Returns all of the items in the collection after the specified count.
  Handlebars.registerHelper 'after', (array, count) ->
      array.slice count


  # With After: Use all of the items in the collection after the specified
  # count inside a block.
  Handlebars.registerHelper 'withAfter', (array, count, options) ->
      array = array.slice count
      result = ''
      for item of array then result += options.fn array[item]
      result


  # Before: Returns all of the items in the collection before the specified count.
  # Opposite of `after`.
  Handlebars.registerHelper 'before', (array, count) ->
      array.slice 0, -count


  # With Before: Use all of the items in the collection before the specified
  # count inside a block. Opposite of `withAfter`.
  Handlebars.registerHelper 'withBefore', (array, count, options) ->
      array = array.slice 0, -count
      result = ''
      for item of array then result += options.fn array[item]
      result


  # Join: Joins all elements of a collection into a string using a separator if specified.
  Handlebars.registerHelper 'join', (array, separator) ->
      array.join if Utils.isUndefined(separator) then ' ' else separator


  #
  Handlebars.registerHelper 'sort', (array, field) ->
      if Utils.isUndefined field
          array.sort()
      else
          array.sort (a, b) -> a[field] > b[field]

  #
  # Handlebars "join" block helper that supports arrays of objects or strings.
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
  # Handlebars.registerHelper "join", (items, block) ->
  #   delimiter = block.hash.delimiter or ","
  #   start = start = block.hash.start or 0
  #   len = (if items then items.length else 0)
  #   end = block.hash.end or len
  #   out = ""
  #   end = len  if end > len
  #   if "function" is typeof block
  #     i = start
  #     while i < end
  #       out += delimiter  if i > start
  #       if "string" is typeof items[i]
  #         out += items[i]
  #       else
  #         out += block(items[i])
  #       i++
  #     out
  #   else
  #     [].concat(items).slice(start, end).join delimiter


  #
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


  ###
  Similar to #each helper, but treats array-like objects as arrays 
  (i.e. objects with a `.length` property which is a number)
  rather than objects. This lets us iterate over our Collection's.
  ###
  # Handlebars.registerHelper "iterate", (context, options) ->
  #     fn = options.fn
  #     inverse = options.inverse
  #     i = 0
  #     ret = ""
  #     data = undefined
  #     data = Handlebars.createFrame(options.data)  if options.data
  #     if context and typeof context is "object"
  #       if typeof context.length is "number"
  #         j = context.length

  #         while i < j
  #           data.index = i  if data
  #           ret = ret + fn(context[i],
  #             data: data
  #           )
  #           i++
  #       else
  #         for key of context
  #           if context.hasOwnProperty(key)
  #             data.key = key  if data
  #             ret = ret + fn(context[key],
  #               data: data
  #             )
  #             i++
  #     ret = inverse(this)  if i is 0
  #     ret



  # 
  Handlebars.registerHelper 'eachIndex', (array, options) ->
      result = ''
      for value, index in array
          result += options.fn item: value, index: index
      result


  # Handlebars block helper to enumerate properties in an object
  Handlebars.registerHelper 'eachProperty', (obj, options) ->
      result = ''
      for key, value of obj
          result += options.fn key: key, value: value
      result


  # Arrayify: data gets passed in from *.yml as a string, like "foo, bar, baz"
  # we need to convert this to an ES Array of strings to avoid reference errors
  # 
  # Credit: https://github.com/operasoftware/shinydemos/blob/master/lib/compiler.js
  Handlebars.registerHelper "arrayify", (data) ->
    result = data.split(",").map((tag) ->
      "\"" + tag + "\""
    )
    result



  @
