require 'should'

Handlebars = require 'handlebars'
Assemble = require '../lib/helpers-lib'

describe 'inflect', ->
    describe '{{inflect enemies "enemy" "enemies"}}', ->
        it 'should return the plural or singular form of a word based on a value.', ->
            source   = '{{inflect enemies "enemy" "enemies"}}'
            template = Handlebars.compile(source)
            context  = enemies: 3

            template(context).should.equal 'enemies'

    describe '{{inflect friends "friend" "friends" true}}', ->
        it 'should return the plural or singular form of a word based on a value and include the count.', ->
            source   = '{{inflect friends "friend" "friends" true}}'
            template = Handlebars.compile(source)
            context  = friends: 1

            template(context).should.equal '1 friend'

describe 'ordinalize', ->
    describe '{{ordinalize 22}}', ->
        it 'should return the number converted into an ordinal string.', ->
            source   = '{{ordinalize 22}}'
            template = Handlebars.compile(source)

            template().should.equal '22nd'
