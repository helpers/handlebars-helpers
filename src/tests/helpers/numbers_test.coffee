require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-numbers').register Handlebars, {}



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

describe 'toAbbr', ->
  describe '{{toAbbr value}}', ->
    it 'should formats (and approximates) a number into abbreviation based on a value.', ->
      source   = '{{toAbbr value}}'
      template = Handlebars.compile(source)
      context  = value: 123456789

      template(context).should.equal '123.46m'
  
  describe '{{toAbbr value 3}}', ->
    it 'should formats (and approximates) a number into abbreviation based on a value and include decimal.', ->
      source   = '{{toAbbr value 3}}'
      template = Handlebars.compile(source)
      context  = value: 123456789

      template(context).should.equal '123.457m'
  
describe 'fileSize', ->
  describe '{{fileSize bigValue}}', ->
    it 'should add MB and display a decimal point (matches file size strings in Mac OS X)', ->
      source   = '{{fileSize bigValue}}'
      template = Handlebars.compile(source)
      context  = bigValue: 13661855

      template(context).should.equal '13.7 MB'

  describe '{{fileSize mValue}}', ->
    it 'should add KB and display only three digits (matches file size strings in Mac OS X)', ->
      source   = '{{fileSize mValue}}'
      template = Handlebars.compile(source)
      context  = mValue: 825399

      template(context).should.equal '825 KB'

  describe '{{fileSize tinyValue}}', ->
    it 'should add KB and display only one digit (matches file size strings in Mac OS X)', ->
      source   = '{{fileSize tinyValue}}'
      template = Handlebars.compile(source)
      context  = tinyValue: 1396

      template(context).should.equal '1 KB'
