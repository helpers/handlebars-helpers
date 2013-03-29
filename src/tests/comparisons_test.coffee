require 'should'

Handlebars = require 'handlebars'
Assemble = require '../lib/helpers-lib'

describe 'is', ->
    describe '{{#is bender "great"}} \n
        Kiss my shiny metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/is}}', ->
        it 'should render a block if the condition is true.', ->
            source   = '{{#is bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/is}}'
            template = Handlebars.compile(source)
            context  = bender: 'great'

            template(context).should.equal 'Kiss my shiny metal ass!'

describe 'isnt', ->
    describe '{{#isnt number 2}} \n
        Kiss my great metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/isnt}}', ->
        it 'should render a block if the condition is not true.', ->
            source   = '{{#isnt number 2}}Kiss my great metal ass!{{else}}Never mind :({{/isnt}}'
            template = Handlebars.compile(source)
            context  = number: 3

            template(context).should.equal 'Kiss my great metal ass!'

describe 'gt', ->
    describe '{{#gt number 8}} \n
        Kiss my glorious metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/gt}}', ->
        it 'should render a block if the value is greater than a given number.', ->
            source   = '{{#gt number 8}}Kiss my glorious metal ass!{{else}}Never mind :({{/gt}}'
            template = Handlebars.compile(source)
            context  = number: 9

            template(context).should.equal 'Kiss my glorious metal ass!'

describe 'gte', ->
    describe '{{#gte number 8}} \n
        Kiss my perfect metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/gte}}', ->
        it 'should render a block if the value is greater or equal than a given number.', ->
            source   = '{{#gte number 8}}Kiss my perfect metal ass!{{else}}Never mind :({{/gte}}'
            template = Handlebars.compile(source)
            context  = number: 8

            template(context).should.equal 'Kiss my perfect metal ass!'

describe 'lt', ->
    describe '{{#lt number 8}} \n
        Kiss my golden metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/lt}}', ->
        it 'should render a block if the value is less than a given number.', ->
            source   = '{{#lt number 8}}Kiss my golden metal ass!{{else}}Never mind :({{/lt}}'
            template = Handlebars.compile(source)
            context  = number: 2

            template(context).should.equal 'Kiss my golden metal ass!'

describe 'lte', ->
    describe '{{#lte number 8}} \n
        Kiss my big metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/lte}}', ->
        it 'should render a block if the value is less or equal than a given number.', ->
            source   = '{{#lte number 8}}Kiss my big metal ass!{{else}}Never mind :({{/lte}}'
            template = Handlebars.compile(source)
            context  = number: 8

            template(context).should.equal 'Kiss my big metal ass!'

describe 'or', ->
    describe '{{#or great magnificent}} \n
        Kiss my perfect metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/or}}', ->
        it 'should render a block if one of the values is truthy.', ->
            source   = '{{#or great magnificent}}Kiss my perfect metal ass!{{else}}Never mind :({{/or}}'
            template = Handlebars.compile(source)
            context  = great: no, magnificent: yes

            template(context).should.equal 'Kiss my perfect metal ass!'

describe 'and', ->
    describe '{{#and great magnificent}} \n
        Kiss my glorious metal ass! \n
    {{else}} \n
        Never mind :( \n
    {{/and}}', ->
        it 'should render a block if both values are truthy.', ->
            source   = '{{#and great magnificent}}Kiss my glorious metal ass!{{else}}Never mind :({{/and}}'
            template = Handlebars.compile(source)
            context  = great: yes, magnificent: yes

            template(context).should.equal 'Kiss my glorious metal ass!'
