'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars').create();
var helpers = require('..');
helpers.html({handlebars: hbs});

var locals = {data: [{aaa: 'AAA', bbb: 'BBB'}, {aaa: 'CCC', bbb: 'DDD'}]};
var actual;

describe('html', function() {
  describe('attr', function() {
    it('should strip html from a string.', function() {
      var actual = hbs.compile('<div{{{attr class=foo}}}></div>')({foo: 'btn'});
      assert.equal(actual, '<div class="btn"></div>');
      assert.equal(hbs.compile('{{attr}}')(), '');
    });
  });

  describe('css', function() {
    it('should return an empty string when no context is passed:', function() {
      assert.equal(hbs.compile('{{{css}}}')(), '');
    });

    it('should use a path passed as a string', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')();
      assert.equal(actual, '<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should use options.assets', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')({options: {assets: 'foo'}});
      assert.equal(actual, '<link type="text/css" rel="stylesheet" href="foo/abc.css">');
    });

    it('should ensure that options.assets is a string', function() {
      var actual = hbs.compile('{{{css "abc.css"}}}')({options: {assets: null}});
      assert.equal(actual, '<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should not use options.assets when passing in an absolute url', function() {
      var actual = hbs.compile('{{{css "https://abc.com/bar.css"}}}')({options: {assets: 'foo'}});
      assert.equal(actual, '<link type="text/css" rel="stylesheet" href="https://abc.com/bar.css">');
    });

    it('should use the `href` attribute on the hash', function() {
      actual = hbs.compile('{{{css href=""}}}')();
      assert.equal(actual, '');

      actual = hbs.compile('{{{css href="abc.css"}}}')();
      assert.equal(actual, '<link type="text/css" rel="stylesheet" href="abc.css">');
    });

    it('should create multiple tags from an array passed on the context:', function() {
      var ctx = {styles: ['a.css', 'bcss', 'c.css'] };
      assert.equal(hbs.compile('{{{css styles}}}')(ctx), [
        '<link type="text/css" rel="stylesheet" href="a.css">',
        '<link type="text/css" rel="stylesheet" href="bcss">',
        '<link type="text/css" rel="stylesheet" href="c.css">'
      ].join('\n'));
    });

    it('should create a less tag (TODO: only works with array format)', function() {
      var ctx = {styles: ['a.less'] };
      assert.equal(hbs.compile('{{{css styles}}}')(ctx), '<link type="text/css" rel="stylesheet/less" href="a.less">');
    });
  });

  describe('js', function() {
    it('should create an empty script tag', function() {
      assert.equal(hbs.compile('{{{js}}}')(), '<script></script>');
    });

    it('should use a path passed as a string', function() {
      assert.equal(hbs.compile('{{{js "abc.js"}}}')(), '<script src="abc.js"></script>');
    });

    it('should use the `src` attribute on the hash', function() {
      assert.equal(hbs.compile('{{{js src=""}}}')(), '<script src=""></script>');
      assert.equal(hbs.compile('{{{js src="abc.js"}}}')(), '<script src="abc.js"></script>');
    });

    it('should create multiple tags from an array passed on the context:', function() {
      var ctx = {scripts: ['a.js', 'bjs', 'c.js'] };
      assert.equal(hbs.compile('{{{js scripts}}}')(ctx), [
        '<script src="a.js"></script>',
        '<script src="bjs"></script>',
        '<script src="c.js"></script>'
      ].join('\n'));
    });

    it('should create a coffeescript tag (TODO: only works with array format)', function() {
      var ctx = {scripts: ['a.coffee'] };
      assert.equal(hbs.compile('{{{js scripts}}}')(ctx), '<script type="text/coffeescript" src="a.coffee"></script>');
    });
  });

  describe('sanitize', function() {
    it('should return an empty string when undefined.', function() {
      assert.equal(hbs.compile('{{sanitize}}')(), '');
    });
    it('should strip html from a string.', function() {
      var actual = hbs.compile('{{sanitize "<span>foo</span>"}}')();
      assert.equal(actual, 'foo');
    });
  });

  describe('ul', function() {
    it('should should return an unordered list', function() {
      var fn = hbs.compile('{{#ul data class="names"}}{{aaa}} {{bbb}}{{/ul}}');
      assert.equal(fn(locals), '<ul class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ul>');
    });
  });

  describe('ol', function() {
    it('should should return an ordered list', function() {
      var fn = hbs.compile('{{#ol data class="names"}}{{aaa}} {{bbb}}{{/ol}}');
      assert.equal(fn(locals), '<ol class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ol>');
    });
  });

  describe('thumbnailImage', function() {
    describe('{{{thumbnailImage context}}}', function() {
      it('should return figure with link and caption', function() {
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
          '</figure>'
        ].join('\n');
        assert.equal(fn(context), comparison);
      });

      it('should return figure with extra class "test"', function() {
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
        assert.equal(fn(context), comparison);
      });

      it('should return figure with image that has class "test"', function() {
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
        assert.equal(fn(context), comparison);
      });

      it('should return figure with link that has class "test"', function() {
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
          '</figure>'
        ].join('\n');
        assert.equal(fn(context), comparison);
      });

      it('should return figure without link', function() {
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
        assert.equal(fn(context), comparison);
      });

      it('should return figure without caption', function() {
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
        assert.equal(fn(context), comparison);
      });
    });
  });
});
