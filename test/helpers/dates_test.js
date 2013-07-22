(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-dates').register(Handlebars, {});

  describe('formatDate', function() {
    return describe('{{formatDate date format}}', function() {
      return it('should return the date formated into a string given a specified format.', function() {
        var context, source, template;
        source = '{{formatDate date "%F"}}';
        template = Handlebars.compile(source);
        context = {
          date: new Date('2/21/1992')
        };
        return template(context).should.equal('1992-02-21');
      });
    });
  });

  describe('now', function() {
    return describe('{{now}}', function() {
      return it('should return the current date.', function() {
        var date, source, template;
        date = new Date().getTime();
        source = '{{now}}';
        template = Handlebars.compile(source);
        return new Date(template()).getTime().should.be.within(date - 1000, date + 1000);
      });
    });
  });

  describe('timeago', function() {
    return describe('{{timeago date}}', function() {
      return it('should return a human-readable time phrase from the given a date', function() {
        var context, source, template;
        source = '{{timeago date}}';
        template = Handlebars.compile(source);
        context = {
          date: new Date()
        };
        return template(context).should.equal('Just now');
      });
    });
  });

}).call(this);
