require 'should'
Handlebars = require 'handlebars'

require('../../lib/helpers/helpers-logging').register Handlebars, {}


# Add History to console.log
_log = if console then console.log else ->
_log.history = []

console.log = ->
  _log.history.push.apply(_log.history, arguments)
  _log.apply(console, arguments)

describe 'log', ->
  describe '{{log "Log helper worked!"}}', ->
    it 'should log a message to the console.', ->
      source   = '{{log "Log helper worked!"}}'
      template = Handlebars.compile(source)

      template()
      _log.history.should.include 'Log helper worked!'

_log.history = []

describe 'debug', ->
  describe '{{debug value}}', ->
    it 'should log current context.', ->
      source   = '{{debug this}}'
      template = Handlebars.compile(source)
      context  = 'assemble'

      template(context)
      _log.history.should.include 'assemble'