
Handlebars = require('./helpers').Handlebars
Dates = require '../utils/dates'
Utils = require '../utils/utils'

# Port of formatDate-js library - https://github.com/michaelbaldry/formatDate-js
Handlebars.registerHelper 'formatDate', (date, format) ->
    date = new Date date
    Dates.format date, format

Handlebars.registerHelper 'now', (format) ->
    date = new Date()
    if Utils.isUndefined(format) then date else Dates.format(date, format)

# Modified version of - http://stackoverflow.com/a/3177838
Handlebars.registerHelper 'timeago', (date) ->
    date = new Date date
    seconds = Math.floor((new Date() - date) / 1000)

    interval = Math.floor(seconds / 31536000)
    return "#{interval} years ago" if interval > 1

    interval = Math.floor(seconds / 2592000)
    return if interval > 1 then "#{interval} months ago"

    interval = Math.floor(seconds / 86400)
    return if interval > 1 then "#{interval} days ago"

    interval = Math.floor(seconds / 3600)
    return if interval > 1 then "#{interval} hours ago"

    interval = Math.floor(seconds / 60)
    return if interval > 1 then "#{interval} minutes ago"

    if Math.floor(seconds) is 0 then 'Just now' else Math.floor(seconds) + ' seconds ago'
