#
# * helper-lib
# * https://github.com/assemble/helper-lib
# *
# * Copyright (c) 2013 Assemble, Jon Schlinkert, Brian Woodward, contributors.
# * Licensed under the MIT license.
# 
define = require("amdefine")(module)  if not define or typeof define isnt "function"

#
# * Add any handlebars helpers here and they'll
# * be loaded into templates.js so they can
# * be used inside your handlebars templates
# 
define [], ->
  
  # figure out if this is node or browser
  isServer = (typeof process isnt "undefined")
  register = (Handlebars) ->
    Dates = {}
    HTML = {}
    Utils = {}
    __indexOf_ = [].indexOf or (item) ->
      i = 0
      l = @length

      while i < l
        return i  if i of this and this[i] is item
        i++
      -1

    
    # if(isServer) {
    assemble = require("../../../assemble.js")
    fs = require("fs")
    util = require("util")
    path = require("path")
    dest = "./"
    markdown = assemble.Markdown(
      gfm: true
      highlight: "auto"
    )
    
    # }
    
    ###
    Utils
    ###
    Utils.toString = Object::toString
    Utils.isUndefined = (value) ->
      value is "undefined" or Utils.toString.call(value) is "[object Function]" or (value.hash?)

    Utils.safeString = (str) ->
      new Handlebars.SafeString(str)

    Utils.trim = (str) ->
      trim = undefined
      trim = (if /\S/.test(" ") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g)
      str.toString().replace trim, ""

    
    # Normalize slashes in URLs
    Utils.urlNormalize = (urlString) ->
      urlString.replace /\\/g, "/"

    
    ###
    HTML
    ###
    HTML.parseAttributes = (hash) ->
      Object.keys(hash).map((key) ->
        "" + key + "=\"" + hash[key] + "\""
      ).join " "

    
    ###
    Dates
    ###
    Dates.padNumber = (num, count, padCharacter) ->
      lenDiff = undefined
      padding = undefined
      padCharacter = "0"  if typeof padCharacter is "undefined"
      lenDiff = count - String(num).length
      padding = ""
      padding += padCharacter  while lenDiff--  if lenDiff > 0
      padding + num

    Dates.dayOfYear = (date) ->
      oneJan = undefined
      oneJan = new Date(date.getFullYear(), 0, 1)
      Math.ceil (date - oneJan) / 86400000

    Dates.weekOfYear = (date) ->
      oneJan = undefined
      oneJan = new Date(date.getFullYear(), 0, 1)
      Math.ceil (((date - oneJan) / 86400000) + oneJan.getDay() + 1) / 7

    Dates.isoWeekOfYear = (date) ->
      dayDiff = undefined
      dayNr = undefined
      jan4 = undefined
      target = undefined
      target = new Date(date.valueOf())
      dayNr = (date.getDay() + 6) % 7
      target.setDate target.getDate() - dayNr + 3
      jan4 = new Date(target.getFullYear(), 0, 4)
      dayDiff = (target - jan4) / 86400000
      1 + Math.ceil(dayDiff / 7)

    Dates.tweleveHour = (date) ->
      if date.getHours() > 12
        date.getHours() - 12
      else
        date.getHours()

    Dates.timeZoneOffset = (date) ->
      hoursDiff = undefined
      result = undefined
      hoursDiff = -date.getTimezoneOffset() / 60
      result = Dates.padNumber(Math.abs(hoursDiff), 4)
      ((if hoursDiff > 0 then "+" else "-")) + result

    Dates.format = (date, format) ->
      format.replace Dates.formats, (m, p) ->
        switch p
          when "a"
            Dates.abbreviatedWeekdays[date.getDay()]
          when "A"
            Dates.fullWeekdays[date.getDay()]
          when "b"
            Dates.abbreviatedMonths[date.getMonth()]
          when "B"
            Dates.fullMonths[date.getMonth()]
          when "c"
            date.toLocaleString()
          when "C"
            Math.round date.getFullYear() / 100
          when "d"
            Dates.padNumber date.getDate(), 2
          when "D"
            Dates.format date, "%m/%d/%y"
          when "e"
            Dates.padNumber date.getDate(), 2, " "
          when "F"
            Dates.format date, "%Y-%m-%d"
          when "h"
            Dates.format date, "%b"
          when "H"
            Dates.padNumber date.getHours(), 2
          when "I"
            Dates.padNumber Dates.tweleveHour(date), 2
          when "j"
            Dates.padNumber Dates.dayOfYear(date), 3
          when "k"
            Dates.padNumber date.getHours(), 2, " "
          when "l"
            Dates.padNumber Dates.tweleveHour(date), 2, " "
          when "L"
            Dates.padNumber date.getMilliseconds(), 3
          when "m"
            Dates.padNumber date.getMonth() + 1, 2
          when "M"
            Dates.padNumber date.getMinutes(), 2
          when "n"
            "\n"
          when "p"
            if date.getHours() > 11
              return "PM"
            else
              return "AM"
          when "P"
            Dates.format(date, "%p").toLowerCase()
          when "r"
            Dates.format date, "%I:%M:%S %p"
          when "R"
            Dates.format date, "%H:%M"
          when "s"
            date.getTime() / 1000
          when "S"
            Dates.padNumber date.getSeconds(), 2
          when "t"
            "\t"
          when "T"
            Dates.format date, "%H:%M:%S"
          when "u"
            if date.getDay() is 0
              return 7
            else
              return date.getDay()
          when "U"
            Dates.padNumber Dates.weekOfYear(date), 2
          when "v"
            Dates.format date, "%e-%b-%Y"
          when "V"
            Dates.padNumber Dates.isoWeekOfYear(date), 2
          when "W"
            Dates.padNumber Dates.weekOfYear(date), 2
          when "w"
            Dates.padNumber date.getDay(), 2
          when "x"
            date.toLocaleDateString()
          when "X"
            date.toLocaleTimeString()
          when "y"
            String(date.getFullYear()).substring 2
          when "Y"
            date.getFullYear()
          when "z"
            Dates.timeZoneOffset date
          else
            match


    Dates.formats = /%(a|A|b|B|c|C|d|D|e|F|h|H|I|j|k|l|L|m|M|n|p|P|r|R|s|S|t|T|u|U|v|V|W|w|x|X|y|Y|z)/g
    Dates.abbreviatedWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    Dates.fullWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    Dates.abbreviatedMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    Dates.fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    # Handlebars Helpers - Dan Harper (http://github.com/danharper) 
    
    # This program is free software. It comes without any warranty, to
    #     * the extent permitted by applicable law. You can redistribute it
    #     * and/or modify it under the terms of the Do What The Fuck You Want
    #     * To Public License, Version 2, as published by Sam Hocevar. See
    #     * http://sam.zoy.org/wtfpl/COPYING for more details. 
    
    ###
    If Equals
    if_eq this compare=that
    ###
    Handlebars.registerHelper "if_eq", (context, options) ->
      return options.fn(this)  if context is options.hash.compare
      options.inverse this

    
    ###
    Unless Equals
    unless_eq this compare=that
    ###
    Handlebars.registerHelper "unless_eq", (context, options) ->
      return options.inverse(this)  if context is options.hash.compare
      options.fn this

    
    ###
    If Greater Than
    if_gt this compare=that
    ###
    Handlebars.registerHelper "if_gt", (context, options) ->
      return options.fn(this)  if context > options.hash.compare
      options.inverse this

    
    ###
    Unless Greater Than
    unless_gt this compare=that
    ###
    Handlebars.registerHelper "unless_gt", (context, options) ->
      return options.inverse(this)  if context > options.hash.compare
      options.fn this

    
    ###
    If Less Than
    if_lt this compare=that
    ###
    Handlebars.registerHelper "if_lt", (context, options) ->
      return options.fn(this)  if context < options.hash.compare
      options.inverse this

    
    ###
    Unless Less Than
    unless_lt this compare=that
    ###
    Handlebars.registerHelper "unless_lt", (context, options) ->
      return options.inverse(this)  if context < options.hash.compare
      options.fn this

    
    ###
    If Greater Than or Equal To
    if_gteq this compare=that
    ###
    Handlebars.registerHelper "if_gteq", (context, options) ->
      return options.fn(this)  if context >= options.hash.compare
      options.inverse this

    
    ###
    Unless Greater Than or Equal To
    unless_gteq this compare=that
    ###
    Handlebars.registerHelper "unless_gteq", (context, options) ->
      return options.inverse(this)  if context >= options.hash.compare
      options.fn this

    
    ###
    If Less Than or Equal To
    if_lteq this compare=that
    ###
    Handlebars.registerHelper "if_lteq", (context, options) ->
      return options.fn(this)  if context <= options.hash.compare
      options.inverse this

    
    ###
    Unless Less Than or Equal To
    unless_lteq this compare=that
    ###
    Handlebars.registerHelper "unless_lteq", (context, options) ->
      return options.inverse(this)  if context <= options.hash.compare
      options.fn this

    
    ###
    Convert new line (\n) to <br>
    from http://phpjs.org/functions/nl2br:480
    ###
    Handlebars.registerHelper "nl2br", (text) ->
      nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2")
      new Handlebars.SafeString(nl2br)

    
    ###
    Hyphenate
    Replace spaces in string with hyphens.
    ###
    Handlebars.registerHelper "hyphenate", (tag) ->
      tag.split(" ").join "-"

    
    ###
    Dashify
    Replace periods in string with hyphens.
    ###
    Handlebars.registerHelper "dashify", (tag) ->
      tag.split(".").join "-"

    
    ###
    To Lower Case
    Turns a string to lowercase.
    ###
    Handlebars.registerHelper "lowercase", (str) ->
      str.toLowerCase()

    
    ###
    To Upper Case
    Turns a string to uppercase.
    ###
    Handlebars.registerHelper "uppercase", (str) ->
      str.toUpperCase()

    
    ###
    Capitalize First
    ###
    Handlebars.registerHelper "capitalizeFirst", (str) ->
      str.charAt(0).toUpperCase() + str.slice(1)

    
    ###
    Capitalize Each
    ###
    Handlebars.registerHelper "capitalizeEach", (str) ->
      str.replace /\w\S*/g, (txt) ->
        txt.charAt(0).toUpperCase() + txt.substr(1)


    
    ###
    Title Case
    ###
    Handlebars.registerHelper "titleize", (str) ->
      capitalize = undefined
      title = undefined
      word = undefined
      words = undefined
      title = str.replace(/[ \-_]+/g, " ")
      words = title.match(/\w+/g)
      capitalize = (word) ->
        word.charAt(0).toUpperCase() + word.slice(1)

      ((->
        _i = undefined
        _len = undefined
        _results = undefined
        _results = []
        _i = 0
        _len = words.length

        while _i < _len
          word = words[_i]
          _results.push capitalize(word)
          _i++
        _results
      )()).join " "

    
    ###
    Sentence
    ###
    Handlebars.registerHelper "sentence", (str) ->
      str.replace /((?:\S[^\.\?\!]*)[\.\?\!]*)/g, (txt) ->
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()


    
    ###
    Reverse
    Reverses a string.
    ###
    Handlebars.registerHelper "reverse", (str) ->
      str.split("").reverse().join ""

    
    ###
    Truncate
    Truncates a string given a specified `length`, providing a custom string to denote an `omission`.
    
    Parameters:
    
    length [int] - The number of characters to keep (Required)
    omission [string] - A string to denote an omission (Optional)
    
    Usage:
    {{truncate "Bender should not be allowed on tv." 31 "..."}}
    Bender should not be allowed...
    ###
    Handlebars.registerHelper "truncate", (str, length, omission) ->
      omission = ""  if Utils.isUndefined(omission)
      if str.length > length
        str.substring(0, length - omission.length) + omission
      else
        str

    
    ###
    Center
    Centers a string using non-breaking spaces.
    ###
    Handlebars.registerHelper "center", (str, spaces) ->
      i = undefined
      space = undefined
      space = ""
      i = 0
      while i < spaces
        space += "&nbsp;"
        i++
      "" + space + str + space

    
    # ==========================================================
    #
    # COLLECTIONS
    #
    # ==========================================================
    
    ###
    First
    Returns the first item in a collection.
    ###
    Handlebars.registerHelper "first", (array, count) ->
      if Utils.isUndefined(count)
        array[0]
      else
        array.slice 0, count

    
    ###
    withFirst
    Use the first item in a collection inside a block.
    ###
    Handlebars.registerHelper "withFirst", (array, count, options) ->
      item = undefined
      result = undefined
      if Utils.isUndefined(count)
        options = count
        options.fn array[0]
      else
        array = array.slice(0, count)
        result = ""
        for item of array
          result += options.fn(array[item])
        result

    
    ###
    Last
    Returns the last item in a collection. Opposite of `first`.
    ###
    Handlebars.registerHelper "last", (array, count) ->
      if Utils.isUndefined(count)
        array[array.length - 1]
      else
        array.slice -count

    
    ###
    With Last
    Use the last item in a collection inside a block. Opposite of `withFirst`.
    ###
    Handlebars.registerHelper "withLast", (array, count, options) ->
      item = undefined
      result = undefined
      if Utils.isUndefined(count)
        options = count
        options.fn array[array.length - 1]
      else
        array = array.slice(-count)
        result = ""
        for item of array
          result += options.fn(array[item])
        result

    
    ###
    After
    Returns all of the items in the collection after the specified count.
    ###
    Handlebars.registerHelper "after", (array, count) ->
      array.slice count

    
    ###
    With After
    Use all of the items in the collection after the specified count inside a block.
    ###
    Handlebars.registerHelper "withAfter", (array, count, options) ->
      item = undefined
      result = undefined
      array = array.slice(count)
      result = ""
      for item of array
        result += options.fn(array[item])
      result

    
    ###
    Before
    Returns all of the items in the collection before the specified count. Opposite of `after`.
    ###
    Handlebars.registerHelper "before", (array, count) ->
      array.slice 0, -count

    
    ###
    With Before
    Use all of the items in the collection before the specified count inside a block. Opposite of `withAfter`.
    ###
    Handlebars.registerHelper "withBefore", (array, count, options) ->
      item = undefined
      result = undefined
      array = array.slice(0, -count)
      result = ""
      for item of array
        result += options.fn(array[item])
      result

    
    ###
    Join
    Joins all elements of a collection into a string using a separator if specified.
    ###
    Handlebars.registerHelper "join", (array, separator) ->
      array.join (if Utils.isUndefined(separator) then " " else separator)

    
    ###
    Sort
    Returns the collection sorted.
    ###
    Handlebars.registerHelper "sort", (array, field) ->
      if Utils.isUndefined(field)
        array.sort()
      else
        array.sort (a, b) ->
          a[field] > b[field]


    
    ###
    With Sort
    Uses the sorted collection inside the block.
    ###
    Handlebars.registerHelper "withSort", (array, field, options) ->
      item = undefined
      result = undefined
      _i = undefined
      _len = undefined
      result = ""
      if Utils.isUndefined(field)
        options = field
        array = array.sort()
        _i = 0
        _len = array.length

        while _i < _len
          item = array[_i]
          result += options.fn(item)
          _i++
      else
        array = array.sort((a, b) ->
          a[field] > b[field]
        )
        for item of array
          result += options.fn(array[item])
      result

    
    ###
    Length
    Returns the length of the collection.
    ###
    Handlebars.registerHelper "length", (array) ->
      array.length

    
    ###
    Length Equal
    Conditionally render a block based on the length of a collection.
    ###
    Handlebars.registerHelper "lengthEqual", (array, length, options) ->
      if array.length is length
        options.fn this
      else
        options.inverse this

    
    ###
    Empty
    Conditionally render a block if the collection is empty.
    ###
    Handlebars.registerHelper "empty", (array, options) ->
      if array.length <= 0
        options.fn this
      else
        options.inverse this

    
    ###
    Any
    Conditionally render a block if the collection isn't empty. Opposite of `empty`
    ###
    Handlebars.registerHelper "any", (array, options) ->
      if array.length > 0
        options.fn this
      else
        options.inverse this

    
    ###
    inArray
    Conditionally render a block if a specified value is in the collection.
    ###
    Handlebars.registerHelper "inArray", (array, value, options) ->
      if array.indexOf(value) isnt -1
        options.fn this
      else
        options.inverse this

    
    ###
    eachIndex
    Current implementation of the default Handlebars loop
    helper {{#each}} adding index (0-based index) to the loop context.
    ###
    Handlebars.registerHelper "eachIndex", (context, options) ->
      data = undefined
      i = undefined
      j = undefined
      ret = undefined
      ret = ""
      data = Handlebars.createFrame(options.data)  if options.data?
      if context and context.length > 0
        i = 0
        j = context.length
        while i < j
          data.index = i  if data
          context[i].index = i
          ret = ret + options.fn(context[i])
          i++
      else
        ret = options.inverse(this)
      ret

    
    ###
    keyValue
    Iterate over an object, setting 'key' and 'value' for each property in the object.
    
    Credit: [@strathmeyer](https://gist.github.com/strathmeyer)
    
    Example:
    {{#keyValue obj}}
    Key: {{key}}
    Value: {{value}}
    {{/keyValue}}
    ###
    Handlebars.registerHelper "keyValue", (obj, fn) ->
      buffer = ""
      key = undefined
      for key of obj
        if obj.hasOwnProperty(key)
          buffer += fn(
            key: key
            value: obj[key]
          )
      buffer

    
    ###
    Relative path
    Returns the derived relative path from one to the other.
    ###
    Handlebars.registerHelper "relative", (from, to) ->
      relativePath = path.relative(from, to)
      relativePath = dest  if relativePath is "." or relativePath.length is 0
      relativePath = Utils.urlNormalize(path.relative(path.resolve(path.join(dest, relative)), path.resolve(relativePath)))
      relativePath

    
    ###
    absolute
    Returns the absolute path to the current directory.
    
    Usage:
    {{absolute}}
    
    Returns:
    C:\path\to\the\current\current\directory
    ###
    Handlebars.registerHelper "absolute", (absolute) ->
      absolute = __filename
      absolute

    
    ###
    Basename
    Returns the basename of a given file.
    
    Usage:
    {{base "docs/toc.md"}}
    
    Returns:
    toc
    ###
    Handlebars.registerHelper "basename", (base, ext) ->
      fullName = path.basename(base, ext)
      base = path.basename(base, path.extname(fullName))
      base

    
    ###
    Filename
    Returns the filename of a given file.
    
    Usage:
    {{filename "docs/toc.md"}}
    
    Returns:
    toc.md
    ###
    Handlebars.registerHelper "filename", (base, ext) ->
      filename = path.basename(base, ext)
      filename

    
    ###
    Extension
    Returns the extension of a given file.
    
    Usage:
    {{ext "docs/toc.md"}}
    
    Returns:
    .md
    ###
    Handlebars.registerHelper "ext", (ext) ->
      extension = path.extname(ext)
      extension

    Handlebars.registerHelper "file", (pathname, host, url) ->
      pathname = url.parse(host).pathname
      pathname = pathname.substring(0, pathname.lastIndexOf("/"))
      pathname

    
    ###
    Add
    Returns the sum of two numbers.
    ###
    Handlebars.registerHelper "add", (value, addition) ->
      value + addition

    
    ###
    Subtract
    Returns the difference of two numbers. Opposite of `add`
    ###
    Handlebars.registerHelper "subtract", (value, substraction) ->
      value - substraction

    
    ###
    Divide
    Returns the division of two numbers.
    ###
    Handlebars.registerHelper "divide", (value, divisor) ->
      value / divisor

    
    ###
    Multiply
    Returns the multiplication of two numbers.
    ###
    Handlebars.registerHelper "multiply", (value, multiplier) ->
      value * multiplier

    
    ###
    Floor
    Returns the value rounded down to the nearest integer.
    ###
    Handlebars.registerHelper "floor", (value) ->
      Math.floor value

    
    ###
    Ceil
    Returns the value rounded up to the nearest integer.
    ###
    Handlebars.registerHelper "ceil", (value) ->
      Math.ceil value

    
    ###
    Round
    Returns the value rounded to the nearest integer.
    ###
    Handlebars.registerHelper "round", (value) ->
      Math.round value

    
    ###
    To Fixed
    Returns exactly `digits` after the decimal place.
    The number is rounded if necessary, and the fractional
    part is padded with zeros if necessary so that it has the specified length.
    ###
    Handlebars.registerHelper "toFixed", (number, digits) ->
      digits = 0  if Utils.isUndefined(digits)
      number.toFixed digits

    
    ###
    To Precision
    Returns the number in fixed-point or exponential
    notation rounded to `precision` significant digits.
    ###
    Handlebars.registerHelper "toPrecision", (number, precision) ->
      precision = 1  if Utils.isUndefined(precision)
      number.toPrecision precision

    
    ###
    To Exponential
    Returns the number in exponential notation with one
    digit before the decimal point, rounded to `fractions`
    digits after the decimal point.
    ###
    Handlebars.registerHelper "toExponential", (number, fractions) ->
      fractions = 0  if Utils.isUndefined(fractions)
      number.toExponential fractions

    
    ###
    To Int
    Returns an integer.
    ###
    Handlebars.registerHelper "toInt", (number) ->
      parseInt number, 10

    
    ###
    To Float
    Returns a floating point number.
    ###
    Handlebars.registerHelper "toFloat", (number) ->
      parseFloat number

    
    ###
    Add Commas
    Adds commas to a number.
    ###
    Handlebars.registerHelper "addCommas", (number) ->
      number.toString().replace /(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"

    
    ###
    Is
    Conditionally render a block if the condition is true.
    ###
    Handlebars.registerHelper "is", (value, test, options) ->
      if value is test
        options.fn this
      else
        options.inverse this

    
    ###
    Isn't
    Conditionally render a block if the condition is false. Opposite of `is`.
    ###
    Handlebars.registerHelper "isnt", (value, test, options) ->
      if value isnt test
        options.fn this
      else
        options.inverse this

    
    ###
    Greater Than
    Conditionally render a block if the value is greater than a given number.
    ###
    Handlebars.registerHelper "gt", (value, test, options) ->
      if value > test
        options.fn this
      else
        options.inverse this

    
    ###
    Greater than or equal to
    Conditionally render a block if the value is greater than
    or equal to a given number.
    ###
    Handlebars.registerHelper "gte", (value, test, options) ->
      if value >= test
        options.fn this
      else
        options.inverse this

    
    ###
    Less Than
    Conditionally render a block if the value is less than
    a given number. Opposite of `gt`.
    ###
    Handlebars.registerHelper "lt", (value, test, options) ->
      if value < test
        options.fn this
      else
        options.inverse this

    
    ###
    Conditionally render a block if the value is less than or
    equal to a given number. Opposite of `gte`.
    ###
    Handlebars.registerHelper "lte", (value, test, options) ->
      if value <= test
        options.fn this
      else
        options.inverse this

    
    ###
    Or
    Conditionally render a block if one of the values is truthy.
    ###
    Handlebars.registerHelper "or", (testA, testB, options) ->
      if testA or testB
        options.fn this
      else
        options.inverse this

    
    ###
    And
    Conditionally render a block if both values are truthy.
    ###
    Handlebars.registerHelper "and", (testA, testB, options) ->
      if testA and testB
        options.fn this
      else
        options.inverse this

    
    ###
    Format Phone Number
    from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
    Helper function to output a formatted phone number
    
    Usage:
    
    {{formatPhoneNumber phoneNumber}}
    ###
    Handlebars.registerHelper "formatPhoneNumber", (phoneNumber) ->
      phoneNumber = phoneNumber.toString()
      "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4)

    
    ###
    Format Date
    Formats a date into a string given a format. Accepts any
    value that can be passed to `new Date()`. This helper is a port of
    [formatDate-js](http://https://github.com/michaelbaldry/formatDate-js)
    by [Michael Baldry](https://github.com/michaelbaldry).
    ###
    Handlebars.registerHelper "formatDate", (date, format) ->
      date = new Date(date)
      Dates.format date, format

    
    ###
    Now
    Returns the current date.
    ###
    Handlebars.registerHelper "now", (format) ->
      date = undefined
      date = new Date()
      if Utils.isUndefined(format)
        date
      else
        Dates.format date, format

    
    ###
    Time Ago
    Returns a human-readable time phrase from the given date.
    ###
    Handlebars.registerHelper "timeago", (date) ->
      interval = undefined
      seconds = undefined
      date = new Date(date)
      seconds = Math.floor((new Date() - date) / 1000)
      interval = Math.floor(seconds / 31536000)
      return "" + interval + " years ago"  if interval > 1
      interval = Math.floor(seconds / 2592000)
      return "" + interval + " months ago"  if interval > 1
      interval = Math.floor(seconds / 86400)
      return "" + interval + " days ago"  if interval > 1
      interval = Math.floor(seconds / 3600)
      return "" + interval + " hours ago"  if interval > 1
      interval = Math.floor(seconds / 60)
      return "" + interval + " minutes ago"  if interval > 1
      if Math.floor(seconds) is 0
        "Just now"
      else
        Math.floor(seconds) + " seconds ago"

    
    # ==========================================================
    #
    # INFLECTIONS
    #
    # ==========================================================
    
    ###
    Inflect
    Returns the plural or singular form of a word based on a count.
    
    Parameters:
    
    singular [string] - The singular form of the word. (Required)
    plural [string] - The plural form of the word. (Required)
    include [boolean] - whether or not to include the count before the word. (Optional)
    
    Usage:
    
    enemies = 0
    friends = 1
    
    {{inflect enemies "enemy" "enemies"}}
    {{inflect friends "friend" "friends" true}}
    
    enemies
    1 friend
    ###
    Handlebars.registerHelper "inflect", (count, singular, plural, include) ->
      word = undefined
      word = (if count > 1 or count is 0 then plural else singular)
      if Utils.isUndefined(include) or include is false
        word
      else
        "" + count + " " + word

    
    ###
    Ordinalize
    Turns a number into an ordinal string.
    Taken from the templating library
    [Walrus](https://github.com/jeremyruppel/walrus)
    by [Jeremy Ruppel](https://github.com/jeremyruppel).
    
    Usage:
    
    {{ordinalize 3}}
    {{ordinalize 1}}
    {{ordinalize 22}}
    
    3rd
    1st
    22nd
    ###
    Handlebars.registerHelper "ordinalize", (value) ->
      normal = undefined
      _ref = undefined
      normal = Math.abs(Math.round(value))
      _ref = normal % 100
      if __indexOf_.call([11, 12, 13], _ref) >= 0
        "" + value + "th"
      else
        switch normal % 10
          when 1
            "" + value + "st"
          when 2
            "" + value + "nd"
          when 3
            "" + value + "rd"
          else
            "" + value + "th"

    
    ###
    <ul>
    Creates an unordered list.
    Parameters:
    
    hash [html attributes] - HTML attributes to use on the ul element. (Optional)
    
    Usage:
    
    collection = [
    name: 'Leela'
    deliveries: 8021
    ,
    name: 'Bender'
    deliveries: 239
    ,
    name: 'Fry'
    deliveries: 1
    ]
    
    {{#ul collection class="deliveries-list"}}
    {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
    {{/ul}}
    
    <ul class="deliveries-list">
    <li>
    Leela - 8021 deliveries
    </li>
    <li>
    Bender - 239 deliveries
    </li>
    <li>
    Fry - 1 delivery
    </li>
    </ul>
    ###
    Handlebars.registerHelper "ul", (context, options) ->
      ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ul>"

    
    ###
    <ol>
    Same as the `ul` helper but creates and ordered list.
    ###
    Handlebars.registerHelper "ol", (context, options) ->
      ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ol>"

    
    ###
    Stripes block helper
    
    Credit: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
    Block helper that iterates through an array, letting the contents know whether
    it’s an even or odd row. The helper takes the array to iterate over, the css
    class name for even rows, and the css class name for odd rows as arguments.
    
    Usage:
    
    {{#stripes myArray "even" "odd"}}
    <div class="{{stripeClass}}">
    ... code for the row ...
    </div>
    {{else}}
    <em>There aren't any people.</em>
    {{/stripes}}
    ###
    Handlebars.registerHelper "stripes", (array, even, odd, fn) ->
      if array and array.length > 0
        buffer = ""
        i = 0
        j = array.length

        while i < j
          item = array[i]
          
          # we'll just put the appropriate stripe class name onto the item for now
          item.stripeClass = ((if i % 2 is 0 then even else odd))
          
          # show the inside of the block
          buffer += fn(item)
          i++
        
        # return the finished buffer
        buffer

    
    ###
    Timeline helper
    
    Credit: http://github.com/jonschlinkert
    Block helper that iterates through an array, letting the contents know whether
    it’s an left or right column. The helper takes the array to iterate over, the css
    class name for left columns, and the css class name for right columns as arguments.
    
    Usage:
    
    <div class="timeline">
    {{#timeline myArray "left" "right"}}
    <div class="{{columnClass}}">
    {{> entry}}
    </div>
    {{else}}
    <em>There aren't any entries.</em>
    {{/timeline}}
    </div>
    ###
    Handlebars.registerHelper "timeline", (array, left, right, fn) ->
      if array and array.length > 0
        buffer = ""
        i = 0
        j = array.length

        while i < j
          item = array[i]
          
          # we'll just put the appropriate timeline class name onto the item for now
          item.columnClass = ((if i % 2 is 0 then left else right))
          
          # show the inside of the block
          buffer += fn(item)
          i++
        
        # return the finished buffer
        buffer

    
    ###
    <br>
    Returns `<br>` tags based on a count.
    Usage:
    
    {{br 5}}
    
    <br><br><br><br><br>
    ###
    Handlebars.registerHelper "br", (count, options) ->
      br = undefined
      i = undefined
      br = "<br>"
      unless Utils.isUndefined(count)
        i = 0
        while i < count - 1
          br += "<br>"
          i++
      Utils.safeString br

    
    ###
    Each Property
    Loop through an objects properties
    Usage:
    
    {{#eachProperty object}}
    {{property}}: {{value}}<br/>
    {{/eachProperty }}
    ###
    Handlebars.registerHelper "eachProperty", (context, options) ->
      ret = ""
      for prop of context
        ret = ret + options.fn(
          property: prop
          value: context[prop]
        )
      ret

    
    ###
    Inline Partials
    Loop through an objects properties
    Usage:
    
    {{{include "scripts"}}}
    
    and then:
    
    {{#extend "scripts"}}
    <script>
    document.write('foo bar!');
    </script>
    {{/extend}}
    ###
    inlinePartials = {}
    Handlebars.registerHelper "extend", (name, context) ->
      include = inlinePartials[name]
      include = inlinePartials[name] = []  unless include
      include.push context.fn(this)

    Handlebars.registerHelper "include", (name) ->
      val = (inlinePartials[name] or []).join("\n")
      
      # clear the include
      inlinePartials[name] = []
      val

    
    # ==========================================================
    #
    # LOGGING
    #
    # ==========================================================
    
    ###
    Log
    Simple console.log()
    
    Parameters: none.
    
    Usage:
    
    {{log "Hi console :)"}}
    
    Hi console :)
    ###
    Handlebars.registerHelper "log", (value) ->
      console.log value

    
    ###
    Debug
    Simple console.debug() that shows the current context.
    
    Parameters: none.
    
    Usage:
    
    collection = [
    name: 'Leela'
    deliveries: 8021
    ,
    name: 'Bender'
    deliveries: 239
    ,
    name: 'Fry'
    deliveries: 1
    ]
    
    {{#withFirst collection}}
    {{debug name}}
    {{/withFirst}}
    
    Context: { deliveries: 8021, name: "Leela" }
    Value: Leela
    ###
    Handlebars.registerHelper "debug", (value) ->
      console.log "Context: ", this
      console.log "Value: ", value  unless Utils.isUndefined(value)
      console.log "-----------------------------------------------"

    
    # ==========================================================
    #
    # MISCELLANEOUS
    #
    # ==========================================================
    
    ###
    Default
    Provides a default or fallback value if a value doesn't exist.
    
    Usage:
    
    title = ''
    
    {{default title "Not title available."}}
    
    Not title available.
    ###
    Handlebars.registerHelper "default", (value, defaultValue) ->
      (if value? then value else defaultValue)

    
    ###
    Markdown
    
    Markdown helper used to write markdown inside and
    rendered the markdown inline with the HTML
    
    Usage:
    
    {{#markdown}}
    # This is a title.
    {{/markdown}}
    
    Renders to:
    <h1>This is a title </h1>
    ###
    Handlebars.registerHelper "markdown", (options) ->
      content = options.fn(this)
      markdown.convert content

    if isServer
      
      ###
      Markdown helper used to read in a file and inject
      the rendered markdown into the HTML.
      
      Usage:
      
      {{md ../path/to/file.md}}
      ###
      Handlebars.registerHelper "md", (path) ->
        content = markdown.read(path)
        content


  register: register
