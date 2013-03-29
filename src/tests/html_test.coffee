require 'should'

Handlebars = require 'handlebars'
Assemble = require '../lib/helpers-lib'

describe 'ul', ->
    describe '{{#ul list class="list"}} \n
        {{this}} \n
    {{/ul}}', ->
        it 'should create an unordered list.', ->
            source   = '{{#ul list class="list"}}{{this}}{{/ul}}'
            template = Handlebars.compile(source)
            context  = list: ['one']

            template(context).should.equal '<ul class="list"><li>one</li></ul>'

describe 'ol', ->
    describe '{{#ol list class="list"}} \n
        {{this}} \n
    {{/ol}}', ->
        it 'should create an ordered list.', ->
            source   = '{{#ol list class="list"}}{{this}}{{/ol}}'
            template = Handlebars.compile(source)
            context  = list: ['boom']

            template(context).should.equal '<ol class="list"><li>boom</li></ol>'

describe 'br', ->
    describe '{{br 4}}', ->
        it 'should return <br> tags based on a count.', ->
            source   = '{{br 4}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<br><br><br><br>'
