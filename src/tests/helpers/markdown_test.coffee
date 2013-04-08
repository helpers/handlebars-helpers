require 'should'
path = require 'path'
Handlebars = require 'handlebars'
require '../../lib/helpers/helpers-markdown'

simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}"
simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n"

describe "Converting Markdown Files in Handlebars", ->

  it "{{#markdown}}", (done) ->
    template = Handlebars.compile(simple)
    template().should.equal simpleExpected
    done()

  it "{{#md simple1.md}}", (done) ->
    filename = path.join __dirname, '../files/simple1.md'
    source = "{{{md filename}}}"
    template = Handlebars.compile(source)
    template({filename: filename}).should.equal simpleExpected
    done()
