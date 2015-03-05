/**
 * Handlebars Helpers Tests: Logging Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-logging').register(Handlebars, {});

var log = console ? console.log : function() {};
log.history = [];

console.log = function() {
  log.history.push.apply(log.history, arguments);
  log.apply(console, arguments);
};

describe('log', function() {
  describe('{{log "Log helper worked!"}}', function() {
    var source = '{{log "Log helper worked!"}}';
    var template = Handlebars.compile(source);
    it('should log a message to the console.', function() {
      template();
      log.history.should.include('Log helper worked!');
    });

    it('should always return an empty string.', function() {
      template().should.equal('');
    });
  });

  describe('{{log value}}', function() {
    var source = '{{log value}}';
    var template = Handlebars.compile(source);
    var context = {value: 'foo'};
    it('should log values from the context.', function() {
      template(context);
      log.history.should.include('foo');
    });
  });
});

describe('debug', function() {
  describe('{{debug value}}', function() {
    it('should log current context.', function() {
      log.history = [];
      var source = '{{debug this}}';
      var template = Handlebars.compile(source);
      var context = 'assemble';
      template(context);
      log.history.should.include('assemble');
    });
  });
});
