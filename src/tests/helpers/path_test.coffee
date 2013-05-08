require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-special').register Handlebars, {}

## TODO
# relative using {{assets}} variable
# relative using {{page}}/{{currentPage}} variable
# directory
# absolute

describe 'basename', ->
  describe '{{basename id}}', ->
    it 'should return the basename of a given file', ->
      source   = '{{basename "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'toc'

describe 'filename', ->
  describe '{{filename id}}', ->
    it 'should return the filename of a given file', ->
      source   = '{{filename "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'toc.md'

describe 'extname', ->
  describe '{{extname id}}', ->
    it 'should return the extname of a given file', ->
      source   = '{{extname "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'md'

describe 'relative', ->
  describe '{{relative a b}}', ->
    it 'should return the relative path from file A to file B', ->
      source   = '{{relative "examples/result/md/path.md" "examples/assets"}}'
      template = Handlebars.compile(source)
      template().should.equal '../../assets'

