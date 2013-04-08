require 'should'
path = require 'path'
expect = require('chai').expect

markdown = require('../../lib/utils/markdown').Markdown(
  gfm: true
  highlight: "auto"
)

describe "Converting Markdown Files", ->

  simple = "## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)"
  simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n"

  it "convert markdown string", (done) ->
    data = markdown.convert(simple)

    #expect(data).to.equal(simpleExpected);
    done()

  it "read markdown file", (done) ->
    filename = path.join __dirname, '../files/simple1.md'
    data = markdown.read(filename)
    #console.log data
    expect(data).to.equal simpleExpected
    done()

  it "convert markdown file with code highlighting", (done) ->
    filename = path.join __dirname, '../files/complex1.md'
    data = markdown.read(filename)
    #console.log data
    #expect(complexExpected).to.deep.equal(data);
    done()
