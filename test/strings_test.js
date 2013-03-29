(function() {
  var Assemble, Handlebars;

  require('should');

  Handlebars = require('handlebars');

  Assemble = require('../lib/helpers-lib');

  describe('lowercase', function() {
    return describe('{{lowercase string}}', function() {
      return it('should return the string in lowercase', function() {
        var source, template;

        source = '{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}';
        template = Handlebars.compile(source);
        return template().should.equal('bender should not be allowed on tv');
      });
    });
  });

  describe('uppercase', function() {
    return describe('{{uppercase string}}', function() {
      return it('should return the string in uppercase', function() {
        var source, template;

        source = '{{uppercase "bender should not be allowed on tv"}}';
        template = Handlebars.compile(source);
        return template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
      });
    });
  });

  describe('capitalizeFirst', function() {
    return describe('{{capitalizeFirst string}}', function() {
      return it('should return the string with the first word capitalized.', function() {
        var source, template;

        source = '{{capitalizeFirst "bender should not be allowed on tv"}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender should not be allowed on tv');
      });
    });
  });

  describe('capitalizeEach', function() {
    return describe('{{capitalizeEach string}}', function() {
      return it('should return the string with the every word capitalized.', function() {
        var source, template;

        source = '{{capitalizeEach "bender should not bE allowed on tV"}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender Should Not BE Allowed On TV');
      });
    });
  });

  describe('titleize', function() {
    return describe('{{titleize string}}', function() {
      return it('should return the string in title case.', function() {
        var source, template;

        source = '{{titleize "Bender-should-Not-be-allowed_on_Tv"}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender Should Not Be Allowed On Tv');
      });
    });
  });

  describe('sentence', function() {
    return describe('{{sentence string}}', function() {
      return it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
        var source, template;

        source = '{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
      });
    });
  });

  describe('reverse', function() {
    return describe('{{reverse string}}', function() {
      return it('should return the string in reverse.', function() {
        var source, template;

        source = '{{reverse "bender should NOT be allowed on TV."}}';
        template = Handlebars.compile(source);
        return template().should.equal('.VT no dewolla eb TON dluohs redneb');
      });
    });
  });

  describe('truncate', function() {
    describe('{{truncate string 31}}', function() {
      return it('should return then string truncated by a specified length.', function() {
        var source, template;

        source = '{{truncate "Bender should not be allowed on tv." 31}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender should not be allowed on');
      });
    });
    return describe('{{truncate string 31 "..."}}', function() {
      return it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
        var source, template;

        source = '{{truncate "Bender should not be allowed on tv." 31 "..."}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender should not be allowed...');
      });
    });
  });

  describe('center', function() {
    return describe('{{center string}}', function() {
      return it('should return the string centered by using non-breaking spaces.', function() {
        var source, template;

        source = '{{center "Bender should not be allowed on tv." 2}}';
        template = Handlebars.compile(source);
        return template().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
      });
    });
  });

  describe('newLineToBr', function() {
    return describe('{{newLineToBr string}}', function() {
      return it('should return the string with new line characters converted to <br>.', function() {
        var source, template;

        source = '{{{newLineToBr "Bender \n should \n not \n be allowed on tv."}}}';
        template = Handlebars.compile(source);
        return template().should.equal('Bender <br> should <br> not <br> be allowed on tv.');
      });
    });
  });

}).call(this);
