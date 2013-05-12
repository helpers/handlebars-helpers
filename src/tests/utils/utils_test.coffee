require 'should'

Utils = require '../../lib/utils/utils'



describe 'trim', ->
  it 'should trim off white space', ->
    before = "  test  "
    expected = "test"
    actual = Utils.trim before
    actual.should.equal expected

describe 'lowercase', ->
  it 'should convert a string to lowercase', ->
    before = "This IS a TEST StRiNg"
    expected = "this is a test string"
    actual = Utils.lowerCase before
    actual.should.equal expected


describe 'object globbing', ->
  describe 'buildObjectPaths', ->
    it 'should return an array of paths that look like file paths but with object keys', ->
      input =
        foo: 'bar'
        baz:
          foo2: 'bar2'

      expected = ['foo', 'baz/foo2']

      actual = Utils.buildObjectPaths input
      console.log actual
      # actual.should.deepEqual expected

  describe 'globObject', ->
    it 'should return a new object only containing keys that match the given pattern', ->
      input =
        foo: 'bar'
        baz:
          foo2: 'bar2'

      expected = ['baz/foo2']

      actual = Utils.globObject input, '**'
      console.log actual
