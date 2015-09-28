'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.html({handlebars: hbs});

var locals = {data: [{aaa: 'AAA', bbb: 'BBB'}, {aaa: 'CCC', bbb: 'DDD'}]};
var actual;

describe('html', function() {
  describe('css', function() {
    it('should return an empty string when no context is passed:', function() {
      hbs.compile('{{{css}}}')().should.equal('');
    });

    it('should use a path passed as a string', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')();
      actual.should.equal('<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should use options.assets', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')({options: {assets: 'foo'}});
      actual.should.equal('<link type="text/css" rel="stylesheet" href="foo/abc.css">');
    });

    it('should ensure that options.assets is a string', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')({options: {assets: null}});
      actual.should.equal('<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should use the `href` attribute on the hash', function() {
      actual = hbs.compile('{{{css href=""}}}')();
      actual.should.equal('');

      actual = hbs.compile('{{{css href="abc.css"}}}')();
      actual.should.equal('<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should create multiple tags from an array passed on the context:', function() {
      var ctx = {styles: ['a.css', 'bcss', 'c.css'] };
      hbs.compile('{{{css styles}}}')(ctx).should.equal([
        '<link type="text/css" rel="stylesheet" href="a.css">',
        '<link type="text/css" rel="stylesheet" href="bcss">',
        '<link type="text/css" rel="stylesheet" href="c.css">',
      ].join('\n'));
    });

    it('should create a less tag (TODO: only works with array format)', function() {
      var ctx = {styles: ['a.less'] };
      hbs.compile('{{{css styles}}}')(ctx).should.equal('<link type="text/css" rel="stylesheet/less" href="a.less">');
    });
  });

  describe('js', function() {
    it('should create an empty script tag', function() {
      hbs.compile('{{{js}}}')().should.equal('<script></script>');
    });

    it('should use a path passed as a string', function() {
      hbs.compile('{{{js "abc.js"}}}')().should.equal('<script src="abc.js"></script>');
    });

    it('should use the `src` attribute on the hash', function() {
      hbs.compile('{{{js src=""}}}')().should.equal('<script src=""></script>');
      hbs.compile('{{{js src="abc.js"}}}')().should.equal('<script src="abc.js"></script>');
    });

    it('should create multiple tags from an array passed on the context:', function() {
      var ctx = {scripts: ['a.js', 'bjs', 'c.js'] };
      hbs.compile('{{{js scripts}}}')(ctx).should.equal([
        '<script src="a.js"></script>',
        '<script src="bjs"></script>',
        '<script src="c.js"></script>',
      ].join('\n'));
    });

    it('should create a coffeescript tag (TODO: only works with array format)', function() {
      var ctx = {scripts: ['a.coffee'] };
      hbs.compile('{{{js scripts}}}')(ctx).should.equal('<script type="text/coffeescript" src="a.coffee">');
    });
  });

  describe('ul', function() {
    it('should should return an unordered list', function() {
      var fn = hbs.compile('{{#ul data class="names"}}{{aaa}} {{bbb}}{{/ul}}');
      fn(locals).should.equal('<ul class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ul>');
    });
  });

  describe('ol', function() {
    it('should should return an ordered list', function() {
      var fn = hbs.compile('{{#ol data class="names"}}{{aaa}} {{bbb}}{{/ol}}');
      fn(locals).should.equal('<ol class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ol>');
    });
  });

  describe('thumbnailImage', function () {
    describe('{{{thumbnailImage context}}}', function () {
      it('should return figure with link and caption', function () {
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            full: 'http://placehold.it/600x400/0eafff/ffffff.png',
            caption: 'My new caption!'
          }
        };
        var fn = hbs.compile('{{{thumbnailImage data}}}');
        var comparison = [
          '<figure id="image-id">',
          '<a href="http://placehold.it/600x400/0eafff/ffffff.png" rel="thumbnail">',
          '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200">',
          '</a>',
          '<figcaption>My new caption!</figcaption>',
          '</figure>',
        ].join('\n');
        fn(context).should.equal(comparison);
      });

      it('should return figure with extra class "test"', function () {
        var source = '{{{thumbnailImage data}}}';
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            classes: {
              figure: ['test']
            },
            full: 'http://placehold.it/600x400/0eafff/ffffff.png',
            caption: 'My new caption!'
          }
        };

        var fn = hbs.compile(source);
        var comparison = [
          '<figure id="image-id" class="test">',
          '<a href="http://placehold.it/600x400/0eafff/ffffff.png" rel="thumbnail">',
          '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200">',
          '</a>',
          '<figcaption>My new caption!</figcaption>',
          '</figure>'
        ].join('\n');
        fn(context).should.equal(comparison);
      });

      it('should return figure with image that has class "test"', function () {
        var source = '{{{thumbnailImage data}}}';
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            full: 'http://placehold.it/600x400/0eafff/ffffff.png',
            classes: {
              image: ['test']
            },
            caption: 'My new caption!'
          }
        };
        var fn = hbs.compile(source);
        var comparison = [
          '<figure id="image-id">',
          '<a href="http://placehold.it/600x400/0eafff/ffffff.png" rel="thumbnail">',
          '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200" class="test">',
          '</a>',
          '<figcaption>My new caption!</figcaption>',
          '</figure>'
        ].join('\n');
        fn(context).should.equal(comparison);
      });

      it('should return figure with link that has class "test"', function () {
        var source = '{{{thumbnailImage data}}}';
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            full: 'http://placehold.it/600x400/0eafff/ffffff.png',
            classes: {
              link: ['test']
            },
            caption: 'My new caption!'
          }
        };
        var fn = hbs.compile(source);
        var comparison = [
         '<figure id="image-id">',
         '<a href="http://placehold.it/600x400/0eafff/ffffff.png" rel="thumbnail" class="test">',
         '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200">',
         '</a>',
         '<figcaption>My new caption!</figcaption>',
         '</figure>',
        ].join('\n');
        fn(context).should.equal(comparison);
      });

      it('should return figure without link', function () {
        var source = '{{{thumbnailImage data}}}';
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            caption: 'My new caption!'
          }
        };
        var fn = hbs.compile(source);
        var comparison = [
          '<figure id="image-id">',
          '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200">',
          '<figcaption>My new caption!</figcaption>',
          '</figure>'
        ].join('\n');
        fn(context).should.equal(comparison);
      });

      it('should return figure without caption', function () {
        var source = '{{{thumbnailImage data}}}';
        var context = {
          data: {
            id: 'id',
            alt: 'Picture of a placeholder',
            thumbnail: 'http://placehold.it/200x200/0eafff/ffffff.png',
            size: {
              width: 200,
              height: 200
            },
            full: 'http://placehold.it/600x400/0eafff/ffffff.png'
          }
        };
        var fn = hbs.compile(source);
        var comparison = [
          '<figure id="image-id">',
          '<a href="http://placehold.it/600x400/0eafff/ffffff.png" rel="thumbnail">',
          '<img alt="Picture of a placeholder" src="http://placehold.it/200x200/0eafff/ffffff.png" width="200" height="200">',
          '</a>',
          '</figure>'
        ].join('\n');
        fn(context).should.equal(comparison);
      });
    });
  });
});
