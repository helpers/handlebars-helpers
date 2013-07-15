(function() {
  var Handlebars, context;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-code').register(Handlebars, {});

  context = {
    AUTHORS: 'Brian Woodward (http://github.com/doowb)\nJon Schlinkert (http://github.com/jonschlinkert)'
  };

  describe('jsfiddle', function() {
    describe('{{jsfiddle id}}', function() {
      return it('should return a jsfiddle embed link, with default tabs assigned', function() {
        var source, template;
        source = '{{jsfiddle "UXbas"}}';
        template = Handlebars.compile(source);
        return template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
      });
    });
    return describe('{{jsfiddle id tabs}}', function() {
      return it('should return a jsfiddle embed link, with custom tabs assigned', function() {
        var source, template;
        source = '{{jsfiddle "UXbas" "html,css"}}';
        template = Handlebars.compile(source);
        return template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
      });
    });
  });

  describe('gist', function() {
    return describe('{{gist id}}', function() {
      return it('should return a gist script tag', function() {
        var source, template;
        source = '{{gist "abcdefg"}}';
        template = Handlebars.compile(source);
        return template().should.equal('<script src="https://gist.github.com/abcdefg.js"></script>');
      });
    });
  });

}).call(this);
