(function() {
  var Dates;

  require('should');

  Dates = require('../../lib/utils/dates');

  describe('pad number', function() {
    return describe('default padCharacter', function() {
      return it('should return a number with 0s', function() {
        var actual, expected, num;
        num = 123;
        expected = '000123';
        actual = Dates.padNumber(num, 6);
        return actual.should.equal(expected);
      });
    });
  });

}).call(this);
