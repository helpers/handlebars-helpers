require 'should'

Handlebars = require 'handlebars'
Assemble = require '../lib/helpers-lib'

context =
    collection: [
        'Amy Wong'
        'Bender'
        'Dr. Zoidberg'
        'Fry'
        'Hermes Conrad'
        'Leela'
        'Professor Farnsworth'
        'Scruffy'
    ]

describe 'first', ->
    describe '{{first collection}}', ->
        it 'should return the first item in a collection.', ->
            source   = '{{first collection}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'Amy Wong'

    describe '{{first collection 2}}', ->
        it 'should return an array with the first two items in a collection.', ->
            source   = '{{first collection 2}}'
            template = Handlebars.compile(source)

            template(context).should.eql ['Amy Wong', 'Bender']

describe 'withFirst', ->
    describe '{{#withFirst collection}} \n
        <p>{{this}} is smart.</p> \n
    {{/withFirst}}', ->
        it 'should use the first item in a collection inside a block.', ->
            source   = '{{#withFirst collection}}<p>{{this}} is smart.</p>{{/withFirst}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<p>Amy Wong is smart.</p>'

    describe '{{#withFirst collection 2}} \n
        <p>{{this}} is smart.</p> \n
    {{/withFirst}}', ->
        it 'should use the first two items in a collection inside a block.', ->
            source   = '{{#withFirst collection 2}}<p>{{this}} is smart.</p>{{/withFirst}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<p>Amy Wong is smart.</p><p>Bender is smart.</p>'


describe 'last', ->
    describe '{{last collection}}', ->
        it 'should return the last item in a collection.', ->
            source   = '{{last collection}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'Scruffy'

    describe '{{last collection 2}}', ->
        it 'should return an array with the last two items in a collection.', ->
            source   = '{{last collection 2}}'
            template = Handlebars.compile(source)

            template(context).should.eql ['Professor Farnsworth', 'Scruffy']

describe 'withLast', ->
    describe '{{#withLast collection}} \n
        <p>{{this}} is dumb.</p> \n
    {{/withLast}}', ->
        it 'should use the last item in a collection inside a block.', ->
            source   = '{{#withLast collection}}<p>{{this}} is dumb.</p>{{/withLast}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<p>Scruffy is dumb.</p>'

    describe '{{#withLast collection 2}} \n
        <p>{{this}} is dumb.</p> \n
    {{/withLast}}', ->
        it 'should use the last two items in a collection inside a block.', ->
            source   = '{{#withLast collection 2}}<p>{{this}} is dumb.</p>{{/withLast}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<p>Professor Farnsworth is dumb.</p><p>Scruffy is dumb.</p>'

describe 'after', ->
    describe '{{after collection 5}}', ->
        it 'should return all of the items in a collection after the specified count.', ->
            source   = '{{after collection 5}}'
            template = Handlebars.compile(source)

            template(context).should.eql ['Leela', 'Professor Farnsworth', 'Scruffy']

describe 'withAfter', ->
    describe '{{#withAfter collection 5}} \n
        <{{this}}> \n
    {{/withAfter}}', ->
        it 'should use all of the items in a collection after the specified count inside a block.', ->
            source   = '{{#withAfter collection 5}}<{{this}}>{{/withAfter}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<Leela><Professor Farnsworth><Scruffy>'

describe 'before', ->
    describe '{{before collection 5}}', ->
        it 'should return all of the items in a collection before the specified count.', ->
            source   = '{{before collection 5}}'
            template = Handlebars.compile(source)

            template(context).should.eql ['Amy Wong', 'Bender', 'Dr. Zoidberg']

describe 'withBefore', ->
    describe '{{#withBefore collection 5}} \n
        <{{this}}> \n
    {{/withBefore}}', ->
        it 'should use all of the items in a collection before the specified count inside a block.', ->
            source   = '{{#withBefore collection 5}}<{{this}}>{{/withBefore}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<Amy Wong><Bender><Dr. Zoidberg>'

describe 'join', ->
    describe '{{join collection " | "}}', ->
        it 'should return all items in a collection joined by a separator if specified.', ->
            source   = '{{join collection " | "}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'Amy Wong | Bender | Dr. Zoidberg | Fry | Hermes Conrad | Leela | Professor Farnsworth | Scruffy'

describe 'sort', ->
    describe '{{sort collection}}', ->
        it 'should return all items in a collection sorted in lexicographical order.', ->
            source   = '{{sort collection}}'
            template = Handlebars.compile(source)

            template(context).should.eql ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

    describe '{{sort collection "name"}}', ->
        it 'should return all items in a collection sorted in by name.', ->
            source   = '{{sort collection "name"}}'
            template = Handlebars.compile(source)
            _context =
                collection: [
                    name: 'Leela'
                    deliveries: 8021
                ,
                    name: 'Bender'
                    deliveries: 239
                ,
                    name: 'Fry'
                    deliveries: -12
                ]

            template(_context).should.eql [{name: 'Bender', deliveries: 239}, {name: 'Fry', deliveries: -12}, {name: 'Leela', deliveries: 8021}]

describe 'withSort', ->
    describe '{{#withSort collection}} \n
        <p>{{this}}</p> \n
    {{/withSort}}', ->
        it 'should sort the collection in lexicographical order and use it in a block.', ->
            source   = '{{#withSort collection}}<p>{{this}}</p>{{/withSort}}'
            template = Handlebars.compile(source)

            template(context).should.equal '<p>Amy Wong</p><p>Bender</p><p>Dr. Zoidberg</p><p>Fry</p><p>Hermes Conrad</p><p>Leela</p><p>Professor Farnsworth</p><p>Scruffy</p>'

    describe '{{#withSort collection "deliveries"}} \n
        {{name}}: {{deliveries}} <br> \n
    {{/withSort}}', ->
        it 'should sort the collection by deliveries and use it in a block.', ->
            source   = '{{#withSort collection "deliveries"}}{{name}}: {{deliveries}} <br>{{/withSort}}'
            template = Handlebars.compile(source)
            _context =
                collection: [
                    name: 'Leela'
                    deliveries: 8021
                ,
                    name: 'Bender'
                    deliveries: 239
                ,
                    name: 'Fry'
                    deliveries: -12
                ]

            template(_context).should.equal 'Fry: -12 <br>Bender: 239 <br>Leela: 8021 <br>'

describe 'length', ->
    describe '{{length collection}}', ->
        it 'should return the length of the collection', ->
            source   = '{{length collection}}'
            template = Handlebars.compile(source)

            template(context).should.equal 8

describe 'lengthEqual', ->
    describe '{{#lengthEqual collection 3}} \n
        There are 3 people in Planet Express. \n
    {{else}} \n
        This is not Planet Express. \n
    {{/lengthEqual}}', ->
        it 'should conditionally render a block based on the length of a collection.', ->
            source   = '{{#lengthEqual collection 3}}There are 3 people in Planet Express.{{else}}This is not Planet Express.{{/lengthEqual}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'This is not Planet Express.'

describe 'empty', ->
    describe '{{#empty collection}} \n
        Bad news everyone! \n
    {{else}} \n
        Good news everyone! \n
    {{/empty}}', ->
        it 'should conditionally render a block the collection is empty.', ->
            source   = '{{#empty collection}}Bad news everyone!{{else}}Good news everyone!{{/empty}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'Good news everyone!'

describe 'any', ->
    describe '{{#any collection}} \n
        Bad news everyone! \n
    {{else}} \n
        Good news everyone! \n
    {{/any}}', ->
        it 'should conditionally render a block the collection isn\'t empty.', ->
            source   = '{{#any collection}}Bad news everyone!{{else}}Good news everyone!{{/any}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'Bad news everyone!'

describe 'inArray', ->
    describe '{{#inArray collection "Fry"}} \n
        I\'m walking on sunshine! \n
    {{else}} \n
        I\'m walking in darkness. \n
    {{/inArray}}', ->
        it 'should conditionally render a block if a specified value is in the collection.', ->
            source   = '{{#inArray collection "Fry"}}I\'m walking on sunshine!{{else}}I\'m walking in darkness.{{/inArray}}'
            template = Handlebars.compile(source)

            template(context).should.equal 'I\'m walking on sunshine!'

describe 'eachIndex', ->
    describe '{{#eachIndex collection}} \n
        {{item}} is {{index}} \n
    {{/eachIndex}}', ->
        it 'should render the block using the array and each item\'s index.', ->
            source = '{{#eachIndex collection}} {{item}} is {{index}} {{/eachIndex}}'
            template = Handlebars.compile(source)

            template(context).should.equal ' Amy Wong is 0  Bender is 1  Dr. Zoidberg is 2  Fry is 3  Hermes Conrad is 4  Leela is 5  Professor Farnsworth is 6  Scruffy is 7 '

describe 'eachProperty', ->
    describe '{{#eachProperty collection}} \n
        {{key}}: {{value}} \n
    {{/eachProperty}}', ->
        it 'should use the key and value of each property in an object inside a block.', ->
            source = '{{#eachProperty collection}}{{key}}: {{value}} {{/eachProperty}}'
            template = Handlebars.compile(source)
            _context = collection: fry: 3, bender: 120

            template(_context).should.equal 'fry: 3 bender: 120 '
