(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-numbers').register(Handlebars, {});

  describe('toFixed', function() {
    describe('{{toFixed value}}', function() {
      return it('should return the value rounded to the nearest integer.', function() {
        var context, source, template;
        source = '{{toFixed value}}';
        template = Handlebars.compile(source);
        context = {
          value: 5.53231
        };
        return template(context).should.equal('6');
      });
    });
    return describe('{{toFixed value 3}}', function() {
      return it('should return the value rounded exactly n digits after the decimal place.', function() {
        var context, source, template;
        source = '{{toFixed value 3}}';
        template = Handlebars.compile(source);
        context = {
          value: 5.53231
        };
        return template(context).should.equal('5.532');
      });
    });
  });

  describe('toPrecision', function() {
    describe('{{toPrecision value}}', function() {
      return it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
        var context, source, template;
        source = '{{toPrecision value}}';
        template = Handlebars.compile(source);
        context = {
          value: 555.322
        };
        return template(context).should.equal('6e+2');
      });
    });
    return describe('{{toPrecision value 4}}', function() {
      return it('should return the value rounded exactly n digits after the decimal place.', function() {
        var context, source, template;
        source = '{{toPrecision value 4}}';
        template = Handlebars.compile(source);
        context = {
          value: 555.322
        };
        return template(context).should.equal('555.3');
      });
    });
  });

  describe('toExponential', function() {
    describe('{{toExponential value}}', function() {
      return it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
        var context, source, template;
        source = '{{toExponential value}}';
        template = Handlebars.compile(source);
        context = {
          value: 5
        };
        return template(context).should.equal('5e+0');
      });
    });
    return describe('{{toExponential value 5}}', function() {
      return it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
        var context, source, template;
        source = '{{toExponential value 5}}';
        template = Handlebars.compile(source);
        context = {
          value: 5
        };
        return template(context).should.equal('5.00000e+0');
      });
    });
  });

  describe('toInt', function() {
    return describe('{{toInt value}}', function() {
      return it('should return an integer.', function() {
        var context, source, template;
        source = '{{toInt value}}';
        template = Handlebars.compile(source);
        context = {
          value: '3cc'
        };
        return template(context).should.equal(3);
      });
    });
  });

  describe('toFloat', function() {
    return describe('{{toFloat value}}', function() {
      return it('should return a floating point number.', function() {
        var context, source, template;
        source = '{{toFloat value}}';
        template = Handlebars.compile(source);
        context = {
          value: '3.1cc'
        };
        return template(context).should.equal(3.1);
      });
    });
  });

  describe('addCommas', function() {
    return describe('{{addCommas value}}', function() {
      return it('should add commas to a number.', function() {
        var context, source, template;
        source = '{{addCommas value}}';
        template = Handlebars.compile(source);
        context = {
          value: 2222222
        };
        return template(context).should.equal('2,222,222');
      });
    });
  });

  describe('toAbbr', function() {
    describe('{{toAbbr value}}', function() {
      return it('should formats (and approximates) a number into abbreviation based on a value.', function() {
        var context, source, template;
        source = '{{toAbbr value}}';
        template = Handlebars.compile(source);
        context = {
          value: 123456789
        };
        return template(context).should.equal('123.46m');
      });
    });
    return describe('{{toAbbr value 3}}', function() {
      return it('should formats (and approximates) a number into abbreviation based on a value and include decimal.', function() {
        var context, source, template;
        source = '{{toAbbr value 3}}';
        template = Handlebars.compile(source);
        context = {
          value: 123456789
        };
        return template(context).should.equal('123.457m');
      });
    });
  });

  describe('fileSize', function() {
    describe('{{fileSize bigValue}}', function() {
      return it('should add MB and display a decimal point (matches file size strings in Mac OS X)', function() {
        var context, source, template;
        source = '{{fileSize bigValue}}';
        template = Handlebars.compile(source);
        context = {
          bigValue: 13661855
        };
        return template(context).should.equal('13.7 MB');
      });
    });
    describe('{{fileSize mValue}}', function() {
      return it('should add KB and display only three digits (matches file size strings in Mac OS X)', function() {
        var context, source, template;
        source = '{{fileSize mValue}}';
        template = Handlebars.compile(source);
        context = {
          mValue: 825399
        };
        return template(context).should.equal('825 KB');
      });
    });
    return describe('{{fileSize tinyValue}}', function() {
      return it('should add KB and display only one digit (matches file size strings in Mac OS X)', function() {
        var context, source, template;
        source = '{{fileSize tinyValue}}';
        template = Handlebars.compile(source);
        context = {
          tinyValue: 1396
        };
        return template(context).should.equal('1 KB');
      });
    });
  });

}).call(this);
