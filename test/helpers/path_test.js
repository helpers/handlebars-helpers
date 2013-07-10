(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-path').register(Handlebars, {});

  describe('extname', function() {
    return describe('{{extname src}}', function() {
      it('should return the extname of a given file path', function() {
        var source, template;
        source = '{{extname "package.json"}}';
        template = Handlebars.compile(source);
        return template().should.equal('json');
      });
      it('should return the extname of a given file path', function() {
        var source, template;
        source = '{{extname "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('md');
      });
      return it('should return the extname of a given file path', function() {
        var source, template;
        source = '{{extname "AUTHORS"}}';
        template = Handlebars.compile(source);
        return template().should.equal('AUTHORS');
      });
    });
  });

  describe('basename', function() {
    return describe('{{basename src}}', function() {
      it('should return the basename of a given file path', function() {
        var source, template;
        source = '{{basename "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('toc');
      });
      it('should return the basename of a given file path', function() {
        var source, template;
        source = '{{basename "docs/toc"}}';
        template = Handlebars.compile(source);
        return template().should.equal('toc');
      });
      return it('should return the basename of a given file path', function() {
        var source, template;
        source = '{{basename "package.json"}}';
        template = Handlebars.compile(source);
        return template().should.equal('package');
      });
    });
  });

  describe('filename', function() {
    return describe('{{filename src}}', function() {
      return it('should return the filename of a given file path', function() {
        var source, template;
        source = '{{filename "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('toc.md');
      });
    });
  });

  describe('dirname', function() {
    return describe('{{dirname src}}', function() {
      it('should return the directory name of the given file path', function() {
        var source, template;
        source = '{{dirname "docs/toc.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('docs');
      });
      return it('should return the directory name of the given file path', function() {
        var source, template;
        source = '{{dirname "examples/result/md/path.md"}}';
        template = Handlebars.compile(source);
        return template().should.equal('examples/result/md');
      });
    });
  });

  describe('relative', function() {
    return describe('{{relative a b}}', function() {
      it('should return the relative path from file A to file B', function() {
        var source, template;
        source = '{{relative "dist/docs.html" "index.html"}}';
        template = Handlebars.compile(source);
        return template().should.equal('../index.html');
      });
      return it('should return the relative path from file A to file B', function() {
        var source, template;
        source = '{{relative "examples/result/md/path.md" "examples/assets"}}';
        template = Handlebars.compile(source);
        return template().should.equal('../../assets');
      });
    });
  });

}).call(this);
