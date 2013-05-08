(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-special').register(Handlebars, {});

  describe('basename', function() {
    return describe('{{basename id}}', function() {
      return it('should return the basename of a given file', function() {
        var source, template;

        source = '{{basename "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('toc');
      });
    });
  });

  describe('filename', function() {
    return describe('{{filename id}}', function() {
      return it('should return the filename of a given file', function() {
        var source, template;

        source = '{{filename "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('toc.md');
      });
    });
  });

  describe('extname', function() {
    return describe('{{extname id}}', function() {
      return it('should return the extname of a given file', function() {
        var source, template;

        source = '{{extname "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('md');
      });
    });
  });

  describe('relative', function() {
    return describe('{{relative a b}}', function() {
      return it('should return the relative path from file A to file B', function() {
        var source, template;

        source = '{{relative "examples/result/md/path.md" "examples/assets"}}';
        template = Handlebars.compile(source);
        return template().should.equal('../../assets');
      });
    });
  });

}).call(this);
