(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-inflections').register(Handlebars, {});

  describe('inflect', function() {
    describe('{{inflect enemies "enemy" "enemies"}}', function() {
      return it('should return the plural or singular form of a word based on a value.', function() {
        var context, source, template;
        source = '{{inflect enemies "enemy" "enemies"}}';
        template = Handlebars.compile(source);
        context = {
          enemies: 3
        };
        return template(context).should.equal('enemies');
      });
    });
    return describe('{{inflect friends "friend" "friends" true}}', function() {
      return it('should return the plural or singular form of a word based on a value and include the count.', function() {
        var context, source, template;
        source = '{{inflect friends "friend" "friends" true}}';
        template = Handlebars.compile(source);
        context = {
          friends: 1
        };
        return template(context).should.equal('1 friend');
      });
    });
  });

  describe('ordinalize', function() {
    return describe('{{ordinalize 22}}', function() {
      return it('should return the number converted into an ordinal string.', function() {
        var source, template;
        source = '{{ordinalize 22}}';
        template = Handlebars.compile(source);
        return template().should.equal('22nd');
      });
    });
  });

}).call(this);
