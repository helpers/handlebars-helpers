(function() {
  var Assemble, Handlebars, _log;

  require('should');

  Handlebars = require('handlebars');

  Assemble = require('../lib/helpers-lib');

  _log = console ? console.log : function() {};

  _log.history = [];

  console.log = function() {
    _log.history.push.apply(_log.history, arguments);
    return _log.apply(console, arguments);
  };

  describe('log', function() {
    return describe('{{log "Hi console :)"}}', function() {
      return it('should log a message to the console.', function() {
        var source, template;

        source = '{{log "Hi console :)"}}';
        template = Handlebars.compile(source);
        template();
        return _log.history.should.include('Hi console :)');
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
        context = 'elving';
        template(context);
        return _log.history.should.include('elving');
      });
    });
  });

}).call(this);
