(function() {
  var Assemble, Handlebars, context;

  require('should');

  Handlebars = require('handlebars');

  Assemble = require('../lib/helpers-lib');

  context = {
    value: 5
  };

  describe('add', function() {
    return describe('{{add value 5}}', function() {
      return it('should return the sum of two numbers.', function() {
        var source, template;

        source = '{{add value 5}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(10);
      });
    });
  });

  describe('subtract', function() {
    return describe('{{subtract value 5}}', function() {
      return it('should return the difference of two numbers.', function() {
        var source, template;

        source = '{{subtract value 5}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(0);
      });
    });
  });

  describe('divide', function() {
    return describe('{{divide value 5}}', function() {
      return it('should return the division of two numbers.', function() {
        var source, template;

        source = '{{divide value 5}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(1);
      });
    });
  });

  describe('multiply', function() {
    return describe('{{multiply value 5}}', function() {
      return it('should return the multiplication of two numbers.', function() {
        var source, template;

        source = '{{multiply value 5}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(25);
      });
    });
  });

  describe('floor', function() {
    return describe('{{floor 5}}', function() {
      return it('should return the value rounded down to the nearest integer.', function() {
        var source, template;

        source = '{{floor value}}';
        template = Handlebars.compile(source);
        return template(context = {
          value: 5.6
        }).should.equal(5);
      });
    });
  });

  describe('ceil', function() {
    return describe('{{ceil 5}}', function() {
      return it('should return the value rounded up to the nearest integer.', function() {
        var source, template;

        source = '{{ceil value}}';
        template = Handlebars.compile(source);
        return template(context = {
          value: 5.6
        }).should.equal(6);
      });
    });
  });

  describe('round', function() {
    return describe('{{round 5}}', function() {
      return it('should return the value rounded to the nearest integer.', function() {
        var source, template;

        source = '{{round value}}';
        template = Handlebars.compile(source);
        return template(context = {
          value: 5.69
        }).should.equal(6);
      });
    });
  });

}).call(this);
