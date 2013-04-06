(function() {
  var Utils;

  require('should');

  Utils = require('../../../lib/new/utils/utils');

  describe('trim', function() {
    return it('should trim off white space', function() {
      var actual, before, expected;

      before = "  test  ";
      expected = "test";
      actual = Utils.trim(before);
      return actual.should.equal(expected);
    });
  });

}).call(this);
