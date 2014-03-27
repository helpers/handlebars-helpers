/**
 * Handlebars Helpers Tests: Numbers Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

describe('toFixed', function() {
  describe('{{toFixed value}}', function() {
    it('should return the value rounded to the nearest integer.', function() {
      var source = '{{toFixed value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 5.53231
      };
      return template(context).should.equal('6');
    });
  });
  describe('{{toFixed value 3}}', function() {
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var source = '{{toFixed value 3}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 5.53231
      };
      return template(context).should.equal('5.532');
    });
  });
});

describe('toPrecision', function() {
  describe('{{toPrecision value}}', function() {
    it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var source = '{{toPrecision value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 555.322
      };
      return template(context).should.equal('6e+2');
    });
  });
  describe('{{toPrecision value 4}}', function() {
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var source = '{{toPrecision value 4}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 555.322
      };
      return template(context).should.equal('555.3');
    });
  });
});

describe('toExponential', function() {
  describe('{{toExponential value}}', function() {
    it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var source = '{{toExponential value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 5
      };
      return template(context).should.equal('5e+0');
    });
  });
  describe('{{toExponential value 5}}', function() {
    it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
      var source = '{{toExponential value 5}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 5
      };
      return template(context).should.equal('5.00000e+0');
    });
  });
});

describe('toInt', function() {
  describe('{{toInt value}}', function() {
    it('should return an integer.', function() {
      var source = '{{toInt value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: '3cc'
      };
      return template(context).should.equal('3');
    });
  });
});

describe('toFloat', function() {
  describe('{{toFloat value}}', function() {
    it('should return a floating point number.', function() {
      var source = '{{toFloat value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: '3.1cc'
      };
      return template(context).should.equal('3.1');
    });
  });
});

describe('digitGrouping', function() {
  describe('{{digitGrouping value}}', function() {
    it('should add commas to a number.', function() {
      var source = '{{digitGrouping value}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 2222222
      };
      return template(context).should.equal('2,222,222');
    });
  });
  describe('{{digitGrouping value separator}}', function() {
    it('should add custom separator to a number.', function() {
      var source = '{{digitGrouping value "-"}}';
      var template = Handlebars.compile(source);
      var context = {
        value: 2222222
      };
      return template(context).should.equal('2-222-222');
    });
  });
});
