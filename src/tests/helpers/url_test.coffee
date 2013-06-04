require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-url').register Handlebars, {}



describe 'url_resolve', ->
  describe '{{url_resolve base href}}', ->
    it 'should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', ->
      source   = '{{url_resolve "/one/two/three" "four"}}'
      template = Handlebars.compile(source)
      template().should.equal "/one/two/four"

    it 'should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', ->
      source   = '{{url_resolve "http://example.com/" "/one"}}'
      template = Handlebars.compile(source)
      template().should.equal "http://example.com/one"

    it 'should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', ->
      source   = '{{url_resolve "http://example.com/one" "/two"}}'
      template = Handlebars.compile(source)
      template().should.equal "http://example.com/two"

# describe 'url_parse', ->
#   describe '{{url_parse base href}}', ->
#     it 'should take a URL string, and return an object.', ->
#       source   = '{{url_parse "/one/two/three"}}'
#       template = Handlebars.compile(source)
#       template().should.equal "/one/two/four"

#     it 'should take a URL string, and return an object.', ->
#       source   = '{{url_parse "http://example.com/"}}'
#       template = Handlebars.compile(source)
#       template().should.equal "http://example.com/one"

#     it 'should take a URL string, and return an object.', ->
#       source   = '{{url_parse "http://example.com/one"}}'
#       template = Handlebars.compile(source)
#       template().should.equal "http://example.com/two"
