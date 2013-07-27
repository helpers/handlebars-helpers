###! collection helpers ###

Handlebars = require('../helpers/helpers').Handlebars

# Local deps
Utils = require '../utils/utils'
_     = require 'lodash'


module.exports =

  # First: Returns the first item in a collection.
  first: first = (array, count) ->
    if Utils.isUndefined(count) then array[0] else array.slice 0, count

  # With first: Use the first item in a collection inside a block.
  withFirst: withFirst = (array, count, options) ->
    if Utils.isUndefined count
      options = count
      options.fn array[0]
    else
      array = array.slice 0, count
      result = ''
      for item of array then result += options.fn array[item]
      result

  # Last: Returns the last item in a collection. Opposite of `first`.
  last: last = (array, count) ->
    if Utils.isUndefined(count) then array[array.length - 1] else array.slice -count

  # With Last: Use the last item in a collection inside a block.
  # Opposite of `withFirst`.
  withLast: withLast = (array, count, options) ->
    if Utils.isUndefined count
      options = count
      options.fn array[array.length - 1]
    else
      array = array.slice -count
      result = ''
      for item of array then result += options.fn array[item]
      result

  # After: Returns all of the items in the collection
  # after the specified count.
  after: after = (array, count) ->
    array.slice count

  # With After: Use all of the items in the collection
  # after the specified
  # count inside a block.
  withAfter: withAfter = (array, count, options) ->
    array = array.slice count
    result = ''
    for item of array then result += options.fn array[item]
    result

  # Before: Returns all of the items in the collection
  # before the specified count. Opposite of `after`.
  before: before = (array, count) ->
    array.slice 0, -count

  # With Before: Use all of the items in the collection
  # before the specified count inside a block. Opposite of `withAfter`.
  withBefore: withBefore = (array, count, options) ->
    array = array.slice 0, -count
    result = ''
    for item of array then result += options.fn array[item]
    result

  # Join: Joins all elements of a collection into a
  # string using a separator if specified.
  join: join = (array, separator) ->
    array.join if Utils.isUndefined(separator) then ' ' else separator

  # Handlebars "joinAny" block helper that supports
  # arrays of objects or strings. implementation found here:
  # https://github.com/wycats/handlebars.js/issues/133
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
  joinAny: joinAny = (items, block) ->
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


  sort: sort = (array, field) ->
    if Utils.isUndefined field
      array.sort()
    else
      array.sort (a, b) -> a[field] > b[field]

  withSort: withSort = (array, field, options) ->
    result = ''
    if Utils.isUndefined field
      options = field
      array = array.sort()
      result += options.fn(item) for item in array
    else
      array = array.sort (a, b) ->
        if a[field] > b[field]
          return 1
        else return -1  if a[field] < b[field]
        0
      result += options.fn(array[item]) for item of array
    result

  length: length = (array) ->
    array.length

  lengthEqual: lengthEqual = (array, length, options) ->
    if array.length is length then options.fn(@) else options.inverse(@)

  empty: empty = (array, options) ->
    if array.length <= 0 then options.fn(@) else options.inverse(@)

  any: any = (array, options) ->
    if array.length > 0 then options.fn(@) else options.inverse(@)

  inArray: inArray = (array, value, options) ->
    if value in array then options.fn(@) else options.inverse(@)


  # Similar to #each helper, but treats array-like objects as arrays
  # (i.e. objects with a `.length` property which is a number)
  # rather than objects. This lets us iterate over our Collection's.
  iterate: iterate = (context, options) ->
    fn = options.fn
    inverse = options.inverse
    i = 0
    ret = ""
    data = undefined
    data = Handlebars.createFrame(options.data)  if options.data
    if context and typeof context is "object"
      if typeof context.length is "number"
        j = context.length

        while i < j
          data.index = i  if data
          ret = ret + fn(context[i],
            data: data
          )
          i++
      else
        for key of context
          if context.hasOwnProperty(key)
            data.key = key  if data
            ret = ret + fn(context[key],
              data: data
            )
            i++
    ret = inverse(this)  if i is 0
    ret


  # forEach:
  # http://stackoverflow.com/questions/13861007/
  #   loop-over-and-array-and-add-a-separator-except-for-the-last
  # Usage:
  # Data:
  #     accounts = [
  #        {'name': 'John', 'email': 'john@example.com'},
  #        {'name': 'Malcolm', 'email': 'malcolm@example.com'},
  #        {'name': 'David', 'email': 'david@example.com'}
  #     ]
  # Templates:
  #     {{#forEach accounts}}
  #         <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
  #           {{ name }}
  #         </a>
  #         {{#unless _isLast}}, {{/unless}}
  #     {{/forEach}}
  forEach: forEach = (array, fn) ->
    total = array.length
    buffer = ""
    #Better performance: http://jsperf.com/for-vs-forEach/2
    i = 0
    j = total
    while i < j
      item = array[i]
      # stick an index property onto the item,
      # starting with 1, may make configurable later
      item["_index"] = i + 1
      item["_total"] = total
      item["_isFirst"] = (i is 0)
      item["_isLast"] = (i is (total - 1))
      # show the inside of the block
      buffer += fn.fn(item)
      i++
    # return the finished buffer
    buffer


  # adds an a bunch of item prefixed logic to the object
  # Credit: https://gist.github.com/icodeforlove/1429324
  #
  #   {{#eachWithClasses records prefix="record"}}
  #     <li class="record_{{itemIndex}} {{itemPosition}} {{itemAlt}}">
  #       {{itemIndex}}
  #      </li>
  #   {{/eachWithClasses}}
  #
  # Result:
  #     <li class="record_0 record_first">0</li>
  #     <li class="record_1 record_alt">1</li>
  #     <li class="record_2">2</li>
  #     <li class="record_3 record_last record_alt">3</li>
  eachWithClasses: eachWithClasses = (array, fn) ->
    buffer = ""
    i = 0
    j = array.length
    while i < j
      item = array[i]
      # position related information
      item.itemPosition = ""
      item.itemPosition = " " + fn.hash.prefix + "-first"  if i is 0
      item.itemPosition += " " + fn.hash.prefix + "-last"  if i is (array.length - 1)
      # add alt if needed
      item.itemAlt = (if i % 2 then fn.hash.prefix + "-alt" else "")
      # stick an index property onto the item, starting with 1,
      # may make configurable later
      item.itemIndex = i
      # show the inside of the block
      buffer += fn(item)
      i++
    # return the finished buffer
    buffer

  # eachIndex
  #  {{#eachIndex collection}}
  #    {{item}} is {{index}}
  #  {{/eachIndex}}
  eachIndex: eachIndex = (array, options) ->
    result = ''
    for value, index in array
      result += options.fn item: value, index: index
    result

  # Arrayify: data gets passed in from *.yml as a string,
  # like "foo, bar, baz" we need to convert this to an ES
  # Array of strings to avoid reference errors. Credit:
  # https://github.com/operasoftware/shinydemos/blob/master/lib/compiler.js
  arrayify: arrayify = (data) ->
    result = data.split(",").map((tag) ->
      "\"" + tag + "\""
    )
    result

module.exports.register = (Handlebars, options) ->
  Handlebars.registerHelper 'after', after
  Handlebars.registerHelper 'any', any
  Handlebars.registerHelper 'arrayify', arrayify
  Handlebars.registerHelper 'before', before
  Handlebars.registerHelper 'eachWithClasses', eachWithClasses
  Handlebars.registerHelper 'eachIndex', eachIndex
  Handlebars.registerHelper 'empty', empty
  Handlebars.registerHelper 'first', first
  Handlebars.registerHelper 'forEach', forEach
  Handlebars.registerHelper 'inArray', inArray
  Handlebars.registerHelper 'iterate', iterate
  Handlebars.registerHelper 'join', join
  Handlebars.registerHelper 'joinAny', join
  Handlebars.registerHelper 'last', last
  Handlebars.registerHelper 'length', length
  Handlebars.registerHelper 'lengthEqual', lengthEqual
  Handlebars.registerHelper 'sort', sort
  Handlebars.registerHelper 'withAfter', withAfter
  Handlebars.registerHelper 'withBefore', withBefore
  Handlebars.registerHelper 'withFirst', withFirst
  Handlebars.registerHelper 'withLast', withLast
  Handlebars.registerHelper 'withSort', withSort

  @
