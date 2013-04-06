require 'should'

Dates = require '../../lib/utils/dates'

describe 'pad number', ->
  describe 'default padCharacter', ->
    it 'should return a number with 0s', ->
      num = 123
      expected = '000123'
      actual = Dates.padNumber num, 6
      actual.should.equal expected
