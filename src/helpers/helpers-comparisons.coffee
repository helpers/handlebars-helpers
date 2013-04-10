module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper 'is', (value, test, options) ->
      if value is test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'isnt', (value, test, options) ->
      if value isnt test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'gt', (value, test, options) ->
      if value > test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'gte', (value, test, options) ->
      if value >= test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'lt', (value, test, options) ->
      if value < test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'lte', (value, test, options) ->
      if value <= test then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'or', (testA, testB, options) ->
      if testA or testB then options.fn(@) else options.inverse(@)

  Handlebars.registerHelper 'and', (testA, testB, options) ->
      if testA and testB then options.fn(@) else options.inverse(@)

  # Handlebars Helpers - Dan Harper (http://github.com/danharper)
  # *
  # * This program is free software. It comes without any warranty, to
  # * the extent permitted by applicable law. You can redistribute it
  # * and/or modify it under the terms of the Do What The Fuck You Want
  # * To Public License, Version 2, as published by Sam Hocevar. See
  # * http://sam.zoy.org/wtfpl/COPYING for more details.

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

  @
