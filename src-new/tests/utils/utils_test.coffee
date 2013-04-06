require 'should'

Utils = require '../../../lib/new/utils/utils'

describe 'trim', ->
  it 'should trim off white space', ->
    before = "  test  "
    expected = "test"
    actual = Utils.trim before
    actual.should.equal expected
