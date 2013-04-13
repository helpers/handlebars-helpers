require 'should'
path = require 'path'
Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-markdown').register Handlebars, { gfm: true }

simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}"
simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n"


describe 'markdown', ->
    describe "should convert a block of markdown to HTML", ->

        it "{{#markdown}}", (done) ->
          template = Handlebars.compile(simple)
          template().should.equal simpleExpected
          done()

describe 'md', ->
    describe "should convert an imported markdown file to HTML", ->
        it "{{md simple1.md}}", (done) ->
          filename = path.join __dirname, '../files/simple1.md'
          source = "{{md filename}}"
          template = Handlebars.compile(source)
          template({filename: filename}).should.equal simpleExpected
          done()

authorsExpected = '[Brian Woodward](http://github.com/doowb)\n[Jon Schlinkert](http://github.com/jonschlinkert)'

describe 'authors', ->
    describe '{{authors string}}', ->
        # This first test will only work if you have this file in the root of your project
        # it 'should return a list of authors in markdown format', ->
        #     source   = '{{authors}}'
        #     template = Handlebars.compile(source)
        #     template(context).should.equal authorsExpected

        it 'should return a list of authors in markdown format, from a user-defined data source', ->
            source   = '{{authors "test/files/AUTHORS"}}'
            template = Handlebars.compile(source)
            template(context).should.equal authorsExpected

changelogExpected = '* 2013-04-07    v0.1.21    Add markdown helpers back, add more tests.\n* 2013-04-06    v0.1.20    Generalized helpers structure, externalized utilities.\n* 2013-04-05    v0.1.11    New authors and gist helpers, general cleanup and new tests.\n* 2013-04-04    v0.1.10    Externalized utility javascript from helpers.js\n* 2013-03-28    v0.1.8    Gruntfile updated with mocha tests for 71 helpers, bug fixes.\n* 2013-03-18    v0.1.7    New path helper "relative", for resolving relative path from one absolute path to another.\n* 2013-03-16    v0.1.3    New helpers, "formatPhoneNumber" and "eachProperty"\n* 2013-03-15    v0.1.2    Update README.md with documentation, examples.\n* 2013-03-06    v0.1.0    First commit.\n'

describe 'changelog', ->
    describe '{{changelog [optional]}}', ->
        # This first test will only work if you have this file in the root of your project
        # it 'should return a list of authors in markdown format', ->
        #     source   = '{{changelog}}'
        #     template = Handlebars.compile(source)
        #     template(context).should.equal changelogExpected

        it 'should return a list of authors in markdown format, from a user-defined data source', ->
            source   = '{{changelog "test/files/CHANGELOG"}}'
            template = Handlebars.compile(source)
            template(context).should.equal changelogExpected

