Utils = require '../utils/utils'


module.exports.safeString = safeString = (value) ->
  Utils.safeString(value)

# Make all letters lowercase
module.exports.lowercase = lowercase = (str) ->
  str.toLowerCase()

# Make all letters uppercase
module.exports.uppercase = uppercase = (str) ->
  str.toUpperCase()

# Capitalize first word in a sentence
module.exports.capitalizeFirst = capitalizeFirst = (str) ->
  str.charAt(0).toUpperCase() + str.slice(1)

# Capitalize each word
module.exports.capitalizeEach = capitalizeEach = (str) ->
  str.replace /\w\S*/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1)

# Titlelize
module.exports.titleize = titleize = (str) ->
  title = str.replace /[ \-_]+/g, ' '
  words = title.match(/\w+/g)
  capitalize = (word) -> word.charAt(0).toUpperCase() + word.slice(1)
  (capitalize word for word in words).join ' '

# Sentence case
module.exports.sentence = sentence = (str) ->
  str.replace /((?:\S[^\.\?\!]*)[\.\?\!]*)/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()

# Reverses a string
module.exports.reverse = reverse = (str) ->
  str.split('').reverse().join('')

# Truncates a string given a specified `length`,
# providing a custom string to denote an `omission`.
module.exports.truncate = truncate = (str, length, omission) ->
  omission = '' if Utils.isUndefined omission
  if str.length > length then str.substring(0, length - omission.length) + omission else str

# Centers a string using non-breaking spaces
module.exports.center = center = (str, spaces) ->
  space = ''
  i = 0
  while i < spaces
      space += '&nbsp;'
      i++
  "#{space}#{str}#{space}"

# Hyphenate
# Replace spaces in string with hyphens.
module.exports.hyphenate = hyphenate = (str) ->
  str.split(" ").join "-"

# Dashify
# Replace periods in string with hyphens.
module.exports.dashify = dashify = (str) ->
  str.split(".").join "-"

# Join
# Replace periods in string with hyphens.
module.exports.dashify = replace = (str, a, b) ->
  str.split(a).join b


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "safeString", safeString
  Handlebars.registerHelper "lowercase", lowercase
  Handlebars.registerHelper "uppercase", uppercase
  Handlebars.registerHelper "capitalizeFirst", capitalizeFirst
  Handlebars.registerHelper "capitalizeEach", capitalizeEach
  Handlebars.registerHelper "titleize", titleize
  Handlebars.registerHelper "sentence", sentence
  Handlebars.registerHelper "reverse", reverse
  Handlebars.registerHelper "truncate", truncate
  Handlebars.registerHelper "center", center
  Handlebars.registerHelper "hyphenate", hyphenate
  Handlebars.registerHelper "dashify", dashify
  Handlebars.registerHelper "replace", replace

  @