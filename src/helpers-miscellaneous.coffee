Handlebars.registerHelper 'default', (value, defaultValue) ->
    value ? defaultValue
###
Handlebars.registerHelper 'partial', (name, data) ->
    partial = Assemble.Config.partialsPath + name
    data = if Utils.isUndefined(data) then {} else data
    Handlebars.registerPartial(name, require partial) unless Handlebars.partials[name]?
    Utils.safeString Handlebars.partials[name](data)
###