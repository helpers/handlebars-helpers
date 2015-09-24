'use strict';

var should = require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.array({handlebars: hbs});

var context = {array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

describe('isArray', function() {
  it('should return true if the value is an array.', function() {
    hbs.compile('{{isArray "foo"}}')().should.eql('false');
    hbs.compile('{{isArray foo}}')({foo: ['foo']}).should.equal('true');
  });
});

describe('arrayify', function() {
  it('should coerce a value to an array.', function() {
    hbs.compile('{{isArray (arrayify "foo")}}')().should.equal('true');
    hbs.compile('{{isArray (arrayify ["foo"])}}')().should.equal('true');
  });
});

describe('first', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{first}}')().should.equal('');
  });

  it('should return the first item in an array.', function() {
    var template = hbs.compile('{{first foo}}');
    template({foo: ['a', 'b', 'c']}).should.equal('a');
  });

  it('should return an array with the first two items in an array.', function() {
    var template = hbs.compile('{{first foo 2}}');
    template({foo: ['a', 'b', 'c']}).should.eql(['a', 'b'].toString());
  });
});

describe('last', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{last}}')().should.equal('');
  });

  it('should return the last item in an array.', function() {
    hbs.compile('{{last array}}')(context).should.equal('h');
  });
  it('should return an array with the last two items in an array.', function() {
    hbs.compile('{{last array 2}}')(context).should.eql(['g', 'h'].toString());
  });
});

describe('before', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{before}}')().should.equal('');
  });
  it('should return all of the items in an array before the given index.', function() {
    var template = hbs.compile('{{before array 5}}');
    template(context).should.eql(['a', 'b', 'c'].toString());
  });
});

describe('after', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{after}}')().should.equal('');
  });

  it('should return all of the items in an array after the given index.', function() {
    var template = hbs.compile('{{after array 5}}');
    template(context).should.eql(['f', 'g', 'h'].toString());
  });
});

describe('join', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{join}}')().should.equal('');
  });

  it('should return all items in an array joined by the default separator.', function() {
    var template = hbs.compile('{{join array}}');
    template(context).should.equal('a, b, c, d, e, f, g, h');
  });

  it('should return all items in an array joined by the given separator.', function() {
    var template = hbs.compile('{{join array " | "}}');
    template(context).should.equal('a | b | c | d | e | f | g | h');
  });
});

describe('map', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{map}}')().should.equal('');
  });

  it('should map the items in the array and return new values.', function() {
    var o = {};
    o.double = function(str) {
      return str + str;
    };
    var template = hbs.compile('{{map \'["a","b","c"]\' double}}');
    template(o).should.equal('aa,bb,cc');
  });
});

describe('sortBy', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{sortBy}}')().should.equal('');
  });

  it('should sort the items in an array.', function() {
    var template = hbs.compile('{{sortBy \'["b", "c", "a"]\'}}');
    template(context).should.equal('a,b,c');
  });

  it('should take a compare function.', function() {
    var o = {};
    o.compare = function (a, b) {
      return b.localeCompare(a);
    };
    var template = hbs.compile('{{sortBy \'["b", "c", "a"]\' compare}}');
    template(o).should.equal('c,b,a');
  });

  it('should sort based on object key:', function() {
    var ctx = {arr: [{a: 'zzz'}, {a: 'aaa'}]};
    hbs.registerHelper(helpers.data());
    var template = hbs.compile('{{{stringify (sortBy arr "a") 0}}}');
    template(ctx).should.equal('[{"a":"aaa"},{"a":"zzz"}]');
  });
});

describe('length', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{length}}')().should.equal('');
  });

  it('should return the length of a string.', function() {
    var template = hbs.compile('{{length "foo"}}');
    template(context).should.equal('3');
  });

  it('should return the length of an array.', function() {
    var template = hbs.compile('{{length \'["b", "c", "a"]\'}}');
    template(context).should.equal('3');
  });
});

describe('compact', function() {
  it('should return an empty string when undefined.', function() {
    hbs.compile('{{compact}}')().should.equal('');
  });

  it('should remove falsey values from an array.', function() {
    var ctx = {arr: [null, 'a', undefined, 0, false, 'b', 'c', '']};
    var template = hbs.compile('{{compact arr}}');
    template(ctx).should.equal('a,b,c');
  });
});

describe('after', function() {
  it('Should return all of the items in an array after the specified count.', function() {
    var template = hbs.compile('{{after array 5}}');
    template(context).should.eql(['f', 'g', 'h'].toString());
  });
});

describe('any', function() {
  it('Should conditionally render a block the array isn\'t empty.', function() {
    var template = hbs.compile('{{#any array}}AAA{{else}}BBB{{/any}}');
    template(context).should.equal('AAA');
  });
});

describe('before', function() {
  it('Should return all of the items in an array before the specified count.', function() {
    var template = hbs.compile('{{before array 5}}');
    template(context).should.eql(['a', 'b', 'c'].toString());
  });
});

describe('join', function() {
  it('Should return all items in an array joined by a separator if specified.', function() {
    var template = hbs.compile('{{join array " | "}}');
    template(context).should.equal('a | b | c | d | e | f | g | h');
  });
});

describe('filter', function() {
  it('Should conditionally render a block if a specified string is in the collection.', function() {
    var source = '{{#filter array "d"}}AAA{{else}}BBB{{/filter}}';
    hbs.compile(source)(context).should.equal('AAA');
  });

  it('Should render a block for each object that has a "first" property with the value "d".', function() {

    var ctx = {
      collection: [
        {first: 'aaa', last: 'bbb'},
        {first: 'b'},
        {title: 'ccc', last: 'ddd'},
        {first: 'd'},
        {first: 'eee', last: 'fff'},
        {first: 'f'},
        {title: 'ggg', last: 'hhh'},
        {first: 'h'}
      ]
    };

    var source = '{{#filter collection "d" property="first"}}{{this.first}}{{else}}ZZZ{{/filter}}';
    var template = hbs.compile(source);
    template(ctx).should.equal('d');
  });
});

describe('each', function() {
  it('Should use the key and value of each property in an object inside a block.', function() {
    var template = hbs.compile('{{#each obj}}{{@key}}: {{this}} {{/each}}');
    template({obj: {fry: 3, bender: 120 }}).should.equal('fry: 3 bender: 120 ');
  });
});

describe('eachIndex', function() {
  it('Should render the block using the array and each item\'s index.', function() {
    var template = hbs.compile('{{#eachIndex array}} {{item}} is {{index}} {{/eachIndex}}');
    template(context).should.equal(' a is 0  b is 1  c is 2  d is 3  e is 4  f is 5  g is 6  h is 7 ');
  });
});

describe('eachIndexPlusOne', function() {
  it('Should render the block using the array and each item\'s index + 1.', function() {
    var template = hbs.compile('{{#eachIndexPlusOne array}} {{item}} is {{index}} {{/eachIndexPlusOne}}');
    template(context).should.equal(' a is 1  b is 2  c is 3  d is 4  e is 5  f is 6  g is 7  h is 8 ');
  });
});

describe('empty', function() {
  it('Should conditionally render a block the array is empty.', function() {
    var template = hbs.compile('{{#empty array}}AAA{{else}}BBB{{/empty}}');
    template(context).should.equal('BBB');
  });
});

describe('inArray', function() {
  it('Should conditionally render a block if a specified string is in the array.', function() {
    var template = hbs.compile('{{#inArray array "d"}}AAA{{else}}BBB{{/inArray}}');
    template(context).should.equal('AAA');
  });
});

describe('length', function() {
  it('Should return the length of the array', function() {
    var template = hbs.compile('{{length array}}');
    template(context).should.equal('8');
  });
});

describe('lengthEqual', function() {
  it('Should conditionally render a block based on the length of an array.', function() {
    var template = hbs.compile('{{#lengthEqual array 3}}AAA{{else}}BBB{{/lengthEqual}}');
    template(context).should.equal('BBB');
  });
});

describe('first', function() {
  it('Should return the first item in a collection.', function() {
    var template = hbs.compile('{{first foo}}');
    template({foo: ['a', 'b', 'c']}).should.equal('a');
  });

  it('Should return an array with the first two items in a collection.', function() {
    var template = hbs.compile('{{first foo 2}}');
    template({foo: ['a', 'b', 'c']}).should.eql(['a', 'b'].toString());
  });
});

describe('last', function() {
  it('Should return the last item in a collection.', function() {
    hbs.compile('{{last array}}')(context).should.equal('h');
  });

  it('Should return an array with the last two items in a collection.', function() {
    hbs.compile('{{last array 2}}')(context).should.eql(['g', 'h'].toString());
  });
});

describe('{{withFirst}}', function() {
  it('Should use the first item in an array inside a block.', function() {
    var template = hbs.compile('{{#withFirst array}}<p>{{this}} is smart.</p>{{/withFirst}}');
    template(context).should.equal('<p>a is smart.</p>');
  });
  it('Should use the first two items in an array inside a block.', function() {
    var template = hbs.compile('{{#withFirst array 2}}<p>{{this}} is smart.</p>{{/withFirst}}');
    template(context).should.equal('<p>a is smart.</p><p>b is smart.</p>');
  });
});

describe('sort', function() {
  it('Should return all items in an array sorted in lexicographical order.', function() {
    var template = hbs.compile('{{sort array}}');
    template(context).should.eql(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].toString());
  });

  // this test and sort helper needs to be updated to do something
  // other than just spitting out the string of the array.
  it('Should return all items in an array sorted in by name.', function() {
    var template = hbs.compile('{{sort collection "name"}}');
    var res = template({
      collection: [{
        name: 'f',
        deliveries: 8021
      }, {
        name: 'b',
        deliveries: 239
      }, {
        name: 'd',
        deliveries: -12
      }]
    });

    res.should.eql([{
      name: 'b',
      deliveries: 239
    }, {
      name: 'd',
      deliveries: -12
    }, {
      name: 'f',
      deliveries: 8021
    }].toString());
  });
});

describe('withAfter', function() {
  it('Should use all of the items in an array after the specified count inside a block.', function() {
    var template = hbs.compile('{{#withAfter array 5}}<{{this}}>{{/withAfter}}');
    template(context).should.equal('<f><g><h>');
  });
});

describe('withBefore', function() {
  it('Should use all of the items in an array before the specified count inside a block.', function() {
    var template = hbs.compile('{{#withBefore array 5}}<{{this}}>{{/withBefore}}');
    template(context).should.equal('<a><b><c>');
  });
});

describe('withLast', function() {
  it('Should use the last item in an array inside a block.', function() {
    var template = hbs.compile('{{#withLast array}}<p>{{this}} is dumb.</p>{{/withLast}}');
    template(context).should.equal('<p>h is dumb.</p>');
  });
  it('Should use the last two items in an array inside a block.', function() {
    var template = hbs.compile('{{#withLast array 2}}<p>{{this}} is dumb.</p>{{/withLast}}');
    template(context).should.equal('<p>g is dumb.</p><p>h is dumb.</p>');
  });
});

describe('withSort', function() {
  it('Should sort the array in lexicographical order and use it in a block.', function() {
    var template = hbs.compile('{{#withSort array}}<p>{{this}}</p>{{/withSort}}');
    template(context).should.equal('<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p><p>f</p><p>g</p><p>h</p>');
  });
  it('Should sort the array by deliveries and use it in a block.', function() {
    var template = hbs.compile('{{#withSort collection "deliveries"}}{{name}}: {{deliveries}} <br>{{/withSort}}');
    var res = template({
      collection: [{name: 'f', deliveries: 8021 }, {name: 'b', deliveries: 239 }, {name: 'd', deliveries: -12 }]
    });
    res.should.equal('d: -12 <br>b: 239 <br>f: 8021 <br>');
  });
});

