require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-path').register Handlebars, {}

## TODO
# relative using {{assets}} variable
# relative using {{page}}/{{currentPage}} variable
# absolute

describe 'extname', ->
  describe '{{extname src}}', ->
    it 'should return the extname of a given file path', ->
      source   = '{{extname "package.json"}}'
      template = Handlebars.compile(source)
      template().should.equal 'json'
    it 'should return the extname of a given file path', ->
      source   = '{{extname "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'md'
    it 'should return the extname of a given file path', ->
      source   = '{{extname "AUTHORS"}}'
      template = Handlebars.compile(source)
      template().should.equal 'AUTHORS'


describe 'basename', ->
  describe '{{basename src}}', ->
    it 'should return the basename of a given file path', ->
      source   = '{{basename "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'toc'
    it 'should return the basename of a given file path', ->
      source   = '{{basename "docs/toc"}}'
      template = Handlebars.compile(source)
      template().should.equal 'toc'
    it 'should return the basename of a given file path', ->
      source   = '{{basename "package.json"}}'
      template = Handlebars.compile(source)
      template().should.equal 'package'


describe 'filename', ->
  describe '{{filename src}}', ->
    it 'should return the filename of a given file path', ->
      source   = '{{filename "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'toc.md'


describe 'dirname', ->
  describe '{{dirname src}}', ->
    it 'should return the directory name of the given file path', ->
      source   = '{{dirname "docs/toc.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'docs'
    it 'should return the directory name of the given file path', ->
      source   = '{{dirname "examples/result/md/path.md"}}'
      template = Handlebars.compile(source)
      template().should.equal 'examples/result/md'


describe 'relative', ->
  describe '{{relative a b}}', ->
    it 'should return the relative path from file A to file B', ->
      source   = '{{relative "dist/docs.html" "index.html"}}'
      template = Handlebars.compile(source)
      template().should.equal '../index.html'
    it 'should return the relative path from file A to file B', ->
      source   = '{{relative "examples/result/md/path.md" "examples/assets"}}'
      template = Handlebars.compile(source)
      template().should.equal '../../assets'

