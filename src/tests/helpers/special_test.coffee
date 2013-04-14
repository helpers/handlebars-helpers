require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-special').register Handlebars, {}

## TODO
# formatPhonenumber
# embed


context = AUTHORS: 'Brian Woodward (http://github.com/doowb)\nJon Schlinkert (http://github.com/jonschlinkert)'

describe 'jsfiddle', ->
    describe '{{jsfiddle id}}', ->
        it 'should return a jsfiddle embed link, with default tabs assigned', ->
            source   = '{{jsfiddle "UXbas"}}'
            template = Handlebars.compile(source)

            template().should.equal '<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'

    describe '{{jsfiddle id tabs}}', ->
        it 'should return a jsfiddle embed link, with custom tabs assigned', ->
            source   = '{{jsfiddle "UXbas" "html,css"}}'
            template = Handlebars.compile(source)

            template().should.equal '<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'

describe 'gist', ->
    describe '{{gist id}}', ->
        it 'should return a gist script tag', ->
            source   = '{{gist "abcdefg"}}'
            template = Handlebars.compile(source)

            template().should.equal '<script src="https://gist.github.com/abcdefg.js"></script>'
