(function() {
  var Handlebars, _log;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-logging').register(Handlebars, {});

  _log = console ? console.log : function() {};

  _log.history = [];

  console.log = function() {
    _log.history.push.apply(_log.history, arguments);
    return _log.apply(console, arguments);
  };

  describe('log', function() {
    return describe('{{log "Log helper worked!"}}', function() {
      return it('should log a message to the console.', function() {
        var source, template;
        source = '{{log "Log helper worked!"}}';
        template = Handlebars.compile(source);
        template();
        return _log.history.should.include('Log helper worked!');
      });
    });
  });

  _log.history = [];

  describe('debug', function() {
    return describe('{{debug value}}', function() {
      return it('should log current context.', function() {
        var context, source, template;
        source = '{{debug this}}';
        template = Handlebars.compile(source);
        context = 'assemble';
        template(context);
        return _log.history.should.include('assemble');
      });
    });
  });

}).call(this);
