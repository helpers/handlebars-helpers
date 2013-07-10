require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-dates').register Handlebars, {}



describe 'formatDate', ->
  describe '{{formatDate date format}}', ->
    it 'should return the date formated into a string given a specified format.', ->
      source   = '{{formatDate date "%F"}}'
      template = Handlebars.compile(source)
      context  = date: new Date('2/21/1992')

      template(context).should.equal '1992-02-21'

describe 'now', ->
  describe '{{now}}', ->
    it 'should return the current date.', ->
      date     = new Date().getTime()
      source   = '{{now}}'
      template = Handlebars.compile(source)

      new Date(template()).getTime().should.be.within date - 1000, date + 1000

describe 'timeago', ->
  describe '{{timeago date}}', ->
    it 'should return a human-readable time phrase from the given a date', ->
      source   = '{{timeago date}}'
      template = Handlebars.compile(source)
      context  = date: new Date()

      template(context).should.equal 'Just now'
