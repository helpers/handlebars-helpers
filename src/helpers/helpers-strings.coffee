module.exports.register = (Handlebars, options) ->

  Utils      = require '../utils/utils'


  # Make all letters lowercase
  Handlebars.registerHelper 'lowercase', (str) ->
          str.toLowerCase()

  # Make all letters uppercase
  Handlebars.registerHelper 'uppercase', (str) ->
      str.toUpperCase()

  # Capitalize first word in a sentence
  Handlebars.registerHelper 'capitalizeFirst', (str) ->
      str.charAt(0).toUpperCase() + str.slice(1)

  # Capitalize each word
  Handlebars.registerHelper 'capitalizeEach', (str) ->
      str.replace /\w\S*/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1)

  # Titlelize
  Handlebars.registerHelper 'titleize', (str) ->
      title = str.replace /[ \-_]+/g, ' '
      words = title.match(/\w+/g)
      capitalize = (word) -> word.charAt(0).toUpperCase() + word.slice(1)
      (capitalize word for word in words).join ' '

  # Sentence case
  Handlebars.registerHelper 'sentence', (str) ->
      str.replace /((?:\S[^\.\?\!]*)[\.\?\!]*)/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()

  # Reverses a string
  Handlebars.registerHelper 'reverse', (str) ->
      str.split('').reverse().join('')

  # Truncates a string given a specified `length`,
  # providing a custom string to denote an `omission`.
  Handlebars.registerHelper 'truncate', (str, length, omission) ->
      omission = '' if Utils.isUndefined omission
      if str.length > length then str.substring(0, length - omission.length) + omission else str

  # Centers a string using non-breaking spaces
  Handlebars.registerHelper 'center', (str, spaces) ->
      space = ''
      i = 0

      while i < spaces
          space += '&nbsp;'
          i++

      "#{space}#{str}#{space}"

  # Newline to break
  Handlebars.registerHelper 'newLineToBr', (str) ->
      str.replace /\r?\n|\r/g, '<br>'

  # Hyphenate
  # Replace spaces in string with hyphens.
  Handlebars.registerHelper "hyphenate", (tag) ->
      tag.split(" ").join "-"

  # Dashify
  # Replace periods in string with hyphens.
  Handlebars.registerHelper "dashify", (tag) ->
      tag.split(".").join "-"


