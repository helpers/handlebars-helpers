require 'should'

Handlebars = require 'handlebars'
Assemble = require '../lib/helpers-lib'

describe 'toFixed', ->
    describe '{{toFixed value}}', ->
        it 'should return the value rounded to the nearest integer.', ->
            source   = '{{toFixed value}}'
            template = Handlebars.compile(source)
            context  = value: 5.53231

            template(context).should.equal '6'

    describe '{{toFixed value 3}}', ->
        it 'should return the value rounded exactly n digits after the decimal place.', ->
            source   = '{{toFixed value 3}}'
            template = Handlebars.compile(source)
            context  = value: 5.53231

            template(context).should.equal '5.532'

describe 'toPrecision', ->
    describe '{{toPrecision value}}', ->
        it 'Returns the number in fixed-point or exponential notation rounded to n significant digits.', ->
            source   = '{{toPrecision value}}'
            template = Handlebars.compile(source)
            context  = value: 555.322

            template(context).should.equal '6e+2'

    describe '{{toPrecision value 4}}', ->
        it 'should return the value rounded exactly n digits after the decimal place.', ->
            source   = '{{toPrecision value 4}}'
            template = Handlebars.compile(source)
            context  = value: 555.322

            template(context).should.equal '555.3'

describe 'toExponential', ->
    describe '{{toExponential value}}', ->
        it 'should return the number in fixed-point or exponential notation rounded to n significant digits.', ->
            source   = '{{toExponential value}}'
            template = Handlebars.compile(source)
            context  = value: 5

            template(context).should.equal '5e+0'

    describe '{{toExponential value 5}}', ->
        it 'should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', ->
            source   = '{{toExponential value 5}}'
            template = Handlebars.compile(source)
            context  = value: 5

            template(context).should.equal '5.00000e+0'

describe 'toInt', ->
    describe '{{toInt value}}', ->
        it 'should return an integer.', ->
            source   = '{{toInt value}}'
            template = Handlebars.compile(source)
            context  = value: '3cc'

            template(context).should.equal 3

describe 'toFloat', ->
    describe '{{toFloat value}}', ->
        it 'should return a floating point number.', ->
            source   = '{{toFloat value}}'
            template = Handlebars.compile(source)
            context  = value: '3.1cc'

            template(context).should.equal 3.1

describe 'addCommas', ->
    describe '{{addCommas value}}', ->
        it 'should add commas to a number.', ->
            source   = '{{addCommas value}}'
            template = Handlebars.compile(source)
            context  = value: 2222222

            template(context).should.equal '2,222,222'
