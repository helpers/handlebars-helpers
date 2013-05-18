###! string helpers ###

Utils = require '../utils/utils'


# Capitalize first word in a sentence
module.exports.capitalizeFirst = capitalizeFirst = (str) ->
  str.charAt(0).toUpperCase() + str.slice(1)

# Capitalize each word
module.exports.capitalizeEach = capitalizeEach = (str) ->
  str.replace /\w\S*/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1)

# Centers a string using non-breaking spaces
module.exports.center = center = (str, spaces) ->
  space = ''
  i = 0
  while i < spaces
      space += '&nbsp;'
      i++
  "#{space}#{str}#{space}"

# Format Phone Number: from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
# Helper function to output a formatted phone number
# Usage: {{formatPhoneNumber phoneNumber}}
module.exports.formatPhoneNumber = formatPhoneNumber = (phoneNumber) ->
  phoneNumber = phoneNumber.toString()
  "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4)

# Dashify: Replace periods in string with hyphens.
module.exports.dashify = dashify = (str) ->
  str.split(".").join "-"

# Hyphenate: Replace spaces in string with hyphens.
module.exports.hyphenate = hyphenate = (str) ->
  str.split(" ").join "-"

# Make all letters lowercase
module.exports.lowercase = lowercase = (str) ->
  str.toLowerCase()

# Output a Handlebars safeString
module.exports.safeString = safeString = (value) ->
  Utils.safeString(value)

# Sentence case
module.exports.sentence = sentence = (str) ->
  str.replace /((?:\S[^\.\?\!]*)[\.\?\!]*)/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()

# Titlelize
module.exports.titleize = titleize = (str) ->
  title = str.replace /[ \-_]+/g, ' '
  words = title.match(/\w+/g)
  capitalize = (word) -> word.charAt(0).toUpperCase() + word.slice(1)
  (capitalize word for word in words).join ' '

# Make all letters uppercase
module.exports.uppercase = uppercase = (str) ->
  str.toUpperCase()

# Reverses a string
module.exports.reverse = reverse = (str) ->
  str.split('').reverse().join('')

# Count the occurrences of a string, within a string
module.exports.occurrences = occurrences = (string, substring) ->
  n = 0
  pos = 0
  l = substring.length
  loop
    pos = string.indexOf(substring, pos)
    if pos > -1
      n++
      pos += l
    else
      break
  n

# Replace string "A" with string "B"
module.exports.dashify = replace = (str, a, b) ->
  str.split(a).join b

# Truncates the text and removes all HTML tags
module.exports.ellipsis = ellipsis = (text, length) ->
  textStripped = text.replace(/(<([^>]+)>)/g, "")
  if textStripped.length < length
    textStripped
  else
    textStripped.substr(0, length - 3) + "..."

# Truncates a string given a specified `length`,
# providing a custom string to denote an `omission`.
module.exports.truncate = truncate = (str, length, omission) ->
  omission = '' if Utils.isUndefined omission
  if str.length > length then str.substring(0, length - omission.length) + omission else str



module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "capitalizeEach", capitalizeEach
  Handlebars.registerHelper "capitalizeFirst", capitalizeFirst
  Handlebars.registerHelper "center", center
  Handlebars.registerHelper "dashify", dashify
  Handlebars.registerHelper "ellipsis", ellipsis
  Handlebars.registerHelper "formatPhoneNumber", formatPhoneNumber
  Handlebars.registerHelper "hyphenate", hyphenate
  Handlebars.registerHelper "lowercase", lowercase
  Handlebars.registerHelper "occurrences", occurrences
  Handlebars.registerHelper "replace", replace
  Handlebars.registerHelper "reverse", reverse
  Handlebars.registerHelper "safeString", safeString
  Handlebars.registerHelper "sentence", sentence
  Handlebars.registerHelper "titleize", titleize
  Handlebars.registerHelper "truncate", truncate
  Handlebars.registerHelper "uppercase", uppercase

  @