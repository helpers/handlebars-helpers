Handlebars.registerHelper 'lowercase', (str) ->
        str.toLowerCase()

Handlebars.registerHelper 'uppercase', (str) ->
    str.toUpperCase()

Handlebars.registerHelper 'capitalizeFirst', (str) ->
    str.charAt(0).toUpperCase() + str.slice(1)

Handlebars.registerHelper 'capitalizeEach', (str) ->
    str.replace /\w\S*/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1)

Handlebars.registerHelper 'titleize', (str) ->
    title = str.replace /[ \-_]+/g, ' '
    words = title.match(/\w+/g)
    capitalize = (word) -> word.charAt(0).toUpperCase() + word.slice(1)
    (capitalize word for word in words).join ' '

Handlebars.registerHelper 'sentence', (str) ->
    str.replace /((?:\S[^\.\?\!]*)[\.\?\!]*)/g, (txt) -> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()

Handlebars.registerHelper 'reverse', (str) ->
    str.split('').reverse().join('')

Handlebars.registerHelper 'truncate', (str, length, omission) ->
    omission = '' if Utils.isUndefined omission
    if str.length > length then str.substring(0, length - omission.length) + omission else str

Handlebars.registerHelper 'center', (str, spaces) ->
    space = ''
    i = 0

    while i < spaces
        space += '&nbsp;'
        i++

    "#{space}#{str}#{space}"

Handlebars.registerHelper 'newLineToBr', (str) ->
    str.replace /\r?\n|\r/g, '<br>'
