/**
 * Handlebars Helpers Tests: Math Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-math').register(Handlebars, {});

var context = {
  value: 5
};

describe('add', function() {
  describe('{{add value 5}}', function() {
    it('should return the sum of two numbers.', function() {
      var source = '{{add value 5}}';
      var template = Handlebars.compile(source);
      template(context).should.equal(10);
    });
  });
});

describe('subtract', function() {
  describe('{{subtract value 5}}', function() {
    it('should return the difference of two numbers.', function() {
      var source = '{{subtract value 5}}';
      var template = Handlebars.compile(source);
      template(context).should.equal(0);
    });
  });
});

describe('divide', function() {
  describe('{{divide value 5}}', function() {
    it('should return the division of two numbers.', function() {
      var source = '{{divide value 5}}';
      var template = Handlebars.compile(source);
      template(context).should.equal(1);
    });
  });
});

describe('multiply', function() {
  describe('{{multiply value 5}}', function() {
    it('should return the multiplication of two numbers.', function() {
      var source = '{{multiply value 5}}';
      var template = Handlebars.compile(source);
      template(context).should.equal(25);
    });
  });
});

describe('floor', function() {
  describe('{{floor 5}}', function() {
    it('should return the value rounded down to the nearest integer.', function() {
      var source = '{{floor value}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: 5.6
      }).should.equal(5);
    });
  });
});

describe('ceil', function() {
  describe('{{ceil 5}}', function() {
    it('should return the value rounded up to the nearest integer.', function() {
      var source = '{{ceil value}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: 5.6
      }).should.equal(6);
    });
  });
});

describe('round', function() {
  describe('{{round 5}}', function() {
    it('should return the value rounded to the nearest integer.', function() {
      var source = '{{round value}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: 5.69
      }).should.equal(6);
    });
  });
});

describe('sum', function() {
  describe('{{sum value 67 80}}', function() {
    it('should return the sum of multiple numbers.', function() {
      var source = '{{sum value 67 80}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: 20
      }).should.equal(167);
    });
  });
});

describe('sum', function() {
  describe('{{sum 1 2 3}}', function() {
    it('should return the sum of multiple numbers.', function() {
      var source = '{{sum 1 2 3}}';
      var template = Handlebars.compile(source);
      template().should.equal(6);
    });
  });
});

describe('sum', function() {
  describe('{{sum value}}', function() {
    it('should return the total sum of array.', function() {
      var source = '{{sum value}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: [1, 2, 3]
      }).should.equal(6);
    });
  });
});

describe('sum', function() {
  describe('{{sum value 5}}', function() {
    it('should return the total sum of array and numbers.', function() {
      var source = '{{sum value 5}}';
      var template = Handlebars.compile(source);
      template(context = {
        value: [1, 2, 3]
      }).should.equal(11);
    });
  });
});
