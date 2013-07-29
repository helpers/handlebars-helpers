require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-url').register Handlebars, {}



describe 'urlresolve', ->
  describe '{{urlresolve base href}}', ->
    it 'should take a base URL, and a href URL,' +
       'and resolve them as a browser would for an anchor tag', ->
      source   = '{{urlresolve "/one/two/three" "four"}}'
      template = Handlebars.compile(source)
      template().should.equal "/one/two/four"

    it 'should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', ->
      source   = '{{urlresolve "http://example.com/" "/one"}}'
      template = Handlebars.compile(source)
      template().should.equal "http://example.com/one"

    it 'should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', ->
      source   = '{{urlresolve "http://example.com/one" "/two"}}'
      template = Handlebars.compile(source)
      template().should.equal "http://example.com/two"

# describe 'urlparse', ->
#   describe '{{urlparse base href}}', ->
#     it 'should take a URL string, and return an object stringified to JSON.', ->
#       source   = '{{urlparse "http://foo.com/bar/baz?key=value" "json"}}'
#       template = Handlebars.compile(source)
#       template().should.equal "{\"protocol\":\"http:\",\"slashes\":true,\"auth\":null,\"host\":\"foo.com\",\"port\":null,\"hostname\":\"foo.com\",\"hash\":null,\"search\":\"?key=value\",\"query\":\"key=value\",\"pathname\":\"/bar/baz\",\"path\":\"/bar/baz?key=value\",\"href\":\"http://foo.com/bar/baz?key=value\"}"
