require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-miscellaneous').register Handlebars, {}


describe 'default', ->
  describe '{{default title "Not title available."}}', ->
    it 'should provide a default or fallback value if a value doesn\'t exist.', ->
      source = '{{default title "No title available."}}'
      template = Handlebars.compile(source)
      context = title: null
      template(context).should.equal 'No title available.'
