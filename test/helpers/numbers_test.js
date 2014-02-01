/**
 * Handlebars Helpers Tests: Numbers Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-numbers').register(Handlebars, {});

var context, source, template;

describe('formatPhoneNumber', function() {
  describe('{{formatPhoneNumber value}}', function() {
    it('Format a phone number.', function() {
      source = '{{formatPhoneNumber value}}';
      template = Handlebars.compile(source);
      context = {
        value: '8005551212'
      };
      template(context).should.equal('(800) 555-1212');
    });
  });
});

describe('toFixed', function() {
  describe('{{toFixed value}}', function() {
    it('should return the value rounded to the nearest integer.', function() {
      source = '{{toFixed value}}';
      template = Handlebars.compile(source);
      context = {
        value: 5.53231
      };
      template(context).should.equal('6');
    });
  });
  describe('{{toFixed value 3}}', function() {
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      source = '{{toFixed value 3}}';
      template = Handlebars.compile(source);
      context = {
        value: 5.53231
      };
      template(context).should.equal('5.532');
    });
  });
});

describe('toPrecision', function() {
  describe('{{toPrecision value}}', function() {
    it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      source = '{{toPrecision value}}';
      template = Handlebars.compile(source);
      context = {
        value: 555.322
      };
      template(context).should.equal('6e+2');
    });
  });
  describe('{{toPrecision value 4}}', function() {
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      source = '{{toPrecision value 4}}';
      template = Handlebars.compile(source);
      context = {
        value: 555.322
      };
      template(context).should.equal('555.3');
    });
  });
});

describe('toExponential', function() {
  describe('{{toExponential value}}', function() {
    it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      source = '{{toExponential value}}';
      template = Handlebars.compile(source);
      context = {
        value: 5
      };
      template(context).should.equal('5e+0');
    });
  });
  describe('{{toExponential value 5}}', function() {
    it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
      source = '{{toExponential value 5}}';
      template = Handlebars.compile(source);
      context = {
        value: 5
      };
      template(context).should.equal('5.00000e+0');
    });
  });
});

describe('toInt', function() {
  describe('{{toInt value}}', function() {
    it('should return an integer.', function() {
      source = '{{toInt value}}';
      template = Handlebars.compile(source);
      context = {
        value: '3cc'
      };
      template(context).should.equal('3');
    });
  });
});

describe('toFloat', function() {
  describe('{{toFloat value}}', function() {
    it('should return a floating point number.', function() {
      source = '{{toFloat value}}';
      template = Handlebars.compile(source);
      context = {
        value: '3.1cc'
      };
      template(context).should.equal('3.1');
    });
  });
});

describe('addCommas', function() {
  describe('{{addCommas value}}', function() {
    it('should add commas to a number.', function() {
      source = '{{addCommas value}}';
      template = Handlebars.compile(source);
      context = {
        value: 2222222
      };
      template(context).should.equal('2,222,222');
    });
  });
});

describe('toAbbr', function() {
  describe('{{toAbbr value}}', function() {
    it('should formats (and approximates) a number into abbreviation based on a value.', function() {
      source = '{{toAbbr value}}';
      template = Handlebars.compile(source);
      context = {
        value: 123456789
      };
      template(context).should.equal('123.46m');
    });
  });
  describe('{{toAbbr value 3}}', function() {
    it('should formats (and approximates) a number into abbreviation based on a value and include decimal.', function() {
      source = '{{toAbbr value 3}}';
      template = Handlebars.compile(source);
      context = {
        value: 123456789
      };
      template(context).should.equal('123.457m');
    });
  });
});

describe('random', function() {
  describe('{{random min max}}', function() {
    it('should return a random number between two values.', function() {
      source = '{{random 5 10}}';
      template = Handlebars.compile(source);
      template().should.be.within(5,10);
    });
  });
});