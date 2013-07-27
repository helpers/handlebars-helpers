###! comparison helpers ###

module.exports =

  and: _and = (testA, testB, options) ->
    if testA and testB then options.fn(@) else options.inverse(@)

  gt: gt = (value, test, options) ->
    if value > test then options.fn(@) else options.inverse(@)

  gte: gte = (value, test, options) ->
    if value >= test then options.fn(@) else options.inverse(@)

  is: _is = (value, test, options) ->
    if value is test then options.fn(@) else options.inverse(@)

  isnt: _isnt = (value, test, options) ->
    if value isnt test then options.fn(@) else options.inverse(@)

  lt: lt = (value, test, options) ->
    if value < test then options.fn(@) else options.inverse(@)

  lte: lte = (value, test, options) ->
    if value <= test then options.fn(@) else options.inverse(@)

  or: _or = (testA, testB, options) ->
    if testA or testB then options.fn(@) else options.inverse(@)


  # Credit: Dan Harper (http://github.com/danharper)
  # If Equals: if_eq this compare=that
  if_eq: if_eq = (context, options) ->
    return options.fn(this)  if context is options.hash.compare
    options.inverse this

  # Credit: Dan Harper (http://github.com/danharper)
  # Unless Equals: unless_eq this compare=that
  unless_eq: unless_eq = (context, options) ->
    return options.inverse(this)  if context is options.hash.compare
    options.fn this

  # Credit: Dan Harper (http://github.com/danharper)
  # If Greater Than: if_gt this compare=that
  if_gt: if_gt = (context, options) ->
    return options.fn(this)  if context > options.hash.compare
    options.inverse this

  # Credit: Dan Harper (http://github.com/danharper)
  # Unless Greater Than: unless_gt this compare=that
  unless_gt: unless_gt = (context, options) ->
    return options.inverse(this)  if context > options.hash.compare
    options.fn this

  # Credit: Dan Harper (http://github.com/danharper)
  # If Less Than: if_lt this compare=that
  if_lt: if_lt = (context, options) ->
    return options.fn(this)  if context < options.hash.compare
    options.inverse this

  # Credit: Dan Harper (http://github.com/danharper)
  # Unless Less Than: unless_lt this compare=that
  unless_lt: unless_lt = (context, options) ->
    return options.inverse(this)  if context < options.hash.compare
    options.fn this

  # Credit: Dan Harper (http://github.com/danharper)
  # If Greater Than or Equal To: if_gteq this compare=that
  if_gteq: if_gteq = (context, options) ->
    return options.fn(this)  if context >= options.hash.compare
    options.inverse this

  # Credit: Dan Harper (http://github.com/danharper)
  # Unless Greater Than or Equal To: unless_gteq this compare=that
  unless_gteq: unless_gteq = (context, options) ->
    return options.inverse(this)  if context >= options.hash.compare
    options.fn this

  # Credit: Dan Harper (http://github.com/danharper)
  # If Less Than or Equal To: if_lteq this compare=that
  if_lteq: if_lteq = (context, options) ->
    return options.fn(this)  if context <= options.hash.compare
    options.inverse this

  # Credit: Dan Harper (http://github.com/danharper)
  # Unless Less Than or Equal To: unless_lteq this compare=that
  unless_lteq: unless_lteq = (context, options) ->
    return options.inverse(this)  if context <= options.hash.compare
    options.fn this

  # Credit: Dan Harper (http://github.com/danharper)
  # Similar to {{#if}} block helper but accepts multiple arguments.
  ifAny: ifAny = ->
    argLength = arguments.length - 2
    content = arguments[argLength + 1]
    success = true
    i = 0
    while i < argLength
      unless arguments[i]
        success = false
        break
      i += 1
    (if success then content(this) else content.inverse(this))


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "and", _and
  Handlebars.registerHelper "gt", gt
  Handlebars.registerHelper "gte", gte
  Handlebars.registerHelper "if_eq", if_eq
  Handlebars.registerHelper "if_gt", if_gt
  Handlebars.registerHelper "if_gteq", if_gteq
  Handlebars.registerHelper "if_lt", if_lt
  Handlebars.registerHelper "if_lteq", if_lteq
  Handlebars.registerHelper "ifAny", ifAny
  Handlebars.registerHelper "is", _is
  Handlebars.registerHelper "isnt", _isnt
  Handlebars.registerHelper "lt", lt
  Handlebars.registerHelper "lte", lte
  Handlebars.registerHelper "or", _or
  Handlebars.registerHelper "unless_eq", unless_eq
  Handlebars.registerHelper "unless_gt", unless_gt
  Handlebars.registerHelper "unless_gteq", unless_gteq
  Handlebars.registerHelper "unless_lt", unless_lt
  Handlebars.registerHelper "unless_lteq", unless_lteq

  @
