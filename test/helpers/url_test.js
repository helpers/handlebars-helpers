(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-url').register(Handlebars, {});

  describe('url_resolve', function() {
    return describe('{{url_resolve base href}}', function() {
      it('should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', function() {
        var source, template;

        source = '{{url_resolve "/one/two/three" "four"}}';
        template = Handlebars.compile(source);
        return template().should.equal("/one/two/four");
      });
      it('should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', function() {
        var source, template;

        source = '{{url_resolve "http://example.com/" "/one"}}';
        template = Handlebars.compile(source);
        return template().should.equal("http://example.com/one");
      });
      return it('should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', function() {
        var source, template;

        source = '{{url_resolve "http://example.com/one" "/two"}}';
        template = Handlebars.compile(source);
        return template().should.equal("http://example.com/two");
      });
    });
  });

}).call(this);
