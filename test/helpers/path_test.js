/**
 * Handlebars Helpers Tests: Path Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-path').register(Handlebars, {});


// TODO:
// relative using {{assets}} variable
// relative using {{page}}/{{currentPage}} variable
// absolute

describe('extname', function() {
  describe('{{extname src}}', function() {
    it('should return the extname of a given file path', function() {
      var source, template;
      source = '{{extname "package.json"}}';
      template = Handlebars.compile(source);
      template().should.equal('json');
    });
    it('should return the extname of a given file path', function() {
      var source, template;
      source = '{{extname "docs/toc.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('md');
    });
    it('should return the extname of a given file path', function() {
      var source, template;
      source = '{{extname "AUTHORS"}}';
      template = Handlebars.compile(source);
      template().should.equal('AUTHORS');
    });
  });
});

describe('basename', function() {
  describe('{{basename src}}', function() {
    it('should return the basename of a given file path', function() {
      var source, template;
      source = '{{basename "docs/toc.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('toc');
    });
    it('should return the basename of a given file path', function() {
      var source, template;
      source = '{{basename "docs/toc"}}';
      template = Handlebars.compile(source);
      template().should.equal('toc');
    });
    it('should return the basename of a given file path', function() {
      var source, template;
      source = '{{basename "package.json"}}';
      template = Handlebars.compile(source);
      template().should.equal('package');
    });
  });
});

describe('filename', function() {
  describe('{{filename src}}', function() {
    it('should return the filename of a given file path', function() {
      var source, template;
      source = '{{filename "docs/toc.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('toc.md');
    });
  });
});

describe('dirname', function() {
  describe('{{dirname src}}', function() {
    it('should return the directory name of the given file path', function() {
      var source, template;
      source = '{{dirname "docs/toc.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('docs');
    });
    it('should return the directory name of the given file path', function() {
      var source, template;
      source = '{{dirname "examples/result/md/path.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('examples/result/md');
    });
  });
});

describe('relative', function() {
  describe('{{relative a b}}', function() {
    it('should return the relative path from file A to file B', function() {
      var source, template;
      source = '{{relative "dist/docs.html" "index.html"}}';
      template = Handlebars.compile(source);
      template().should.equal('../index.html');
    });
    it('should return the relative path from file A to file B', function() {
      var source, template;
      source = '{{relative "examples/result/md/path.md" "examples/assets"}}';
      template = Handlebars.compile(source);
      template().should.equal('../../assets');
    });
  });
});
