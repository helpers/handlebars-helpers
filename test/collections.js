'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('collections'));
var context = {collection: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

describe('after', function() {
  it('Should return all of the items in a collection after the specified count.', function() {
    var template = Handlebars.compile('{{after collection 5}}');
    template(context).should.eql(['f', 'g', 'h'].toString());
  });
});

describe('any', function() {
  it('Should conditionally render a block the collection isn\'t empty.', function() {
    var template = Handlebars.compile('{{#any collection}}AAA{{else}}BBB{{/any}}');
    template(context).should.equal('AAA');
  });
});

describe('before', function() {
  it('Should return all of the items in a collection before the specified count.', function() {
    var template = Handlebars.compile('{{before collection 5}}');
    template(context).should.eql(['a', 'b', 'c'].toString());
  });
});

describe('join', function() {
  it('Should return all items in a collection joined by a separator if specified.', function() {
    var template = Handlebars.compile('{{join collection " | "}}');
    template(context).should.equal('a | b | c | d | e | f | g | h');
  });
});

describe('filter', function() {
  it('Should conditionally render a block if a specified string is in the collection.', function() {
    var source = '{{#filter collection "d"}}AAA{{else}}BBB{{/filter}}';
    Handlebars.compile(source)(context).should.equal('AAA');
  });

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

  it('Should render a block for each object that has a "first" property with the value "d".', function() {
    var source = '{{#filter collection "d" property="first"}}{{this.first}}{{else}}ZZZ{{/filter}}';
    var template = Handlebars.compile(source);
    template(ctx).should.equal('d');
  });
});

describe('each', function() {
  it('Should use the key and value of each property in an object inside a block.', function() {
    var template = Handlebars.compile('{{#each obj}}{{@key}}: {{this}} {{/each}}');
    template({obj: {fry: 3, bender: 120 }}).should.equal('fry: 3 bender: 120 ');
  });
});

describe('eachIndex', function() {
  it('Should render the block using the array and each item\'s index.', function() {
    var template = Handlebars.compile('{{#eachIndex collection}} {{item}} is {{index}} {{/eachIndex}}');
    template(context).should.equal(' a is 0  b is 1  c is 2  d is 3  e is 4  f is 5  g is 6  h is 7 ');
  });
});

describe('eachIndexPlusOne', function() {
  it('Should render the block using the array and each item\'s index + 1.', function() {
    var template = Handlebars.compile('{{#eachIndexPlusOne collection}} {{item}} is {{index}} {{/eachIndexPlusOne}}');
    template(context).should.equal(' a is 1  b is 2  c is 3  d is 4  e is 5  f is 6  g is 7  h is 8 ');
  });
});

describe('empty', function() {
  it('Should conditionally render a block the collection is empty.', function() {
    var template = Handlebars.compile('{{#empty collection}}AAA{{else}}BBB{{/empty}}');
    template(context).should.equal('BBB');
  });
});

describe('inArray', function() {
  it('Should conditionally render a block if a specified string is in the collection.', function() {
    var template = Handlebars.compile('{{#inArray collection "d"}}AAA{{else}}BBB{{/inArray}}');
    template(context).should.equal('AAA');
  });
});

describe('length', function() {
  it('Should return the length of the collection', function() {
    var template = Handlebars.compile('{{length collection}}');
    template(context).should.equal('8');
  });
});

describe('lengthEqual', function() {
  it('Should conditionally render a block based on the length of a collection.', function() {
    var template = Handlebars.compile('{{#lengthEqual collection 3}}AAA{{else}}BBB{{/lengthEqual}}');
    template(context).should.equal('BBB');
  });
});

describe('{{first}}', function() {
  it('Should return the first item in a collection.', function() {
    var template = Handlebars.compile('{{first foo}}');
    template({foo: ['a', 'b', 'c']}).should.equal('a');
  });

  it('Should return an array with the first two items in a collection.', function() {
    var template = Handlebars.compile('{{first foo 2}}');
    template({foo: ['a', 'b', 'c']}).should.eql(['a', 'b'].toString());
  });
});

describe('last', function() {
  it('Should return the last item in a collection.', function() {
    Handlebars.compile('{{last collection}}')(context).should.equal('h');
  });
  it('Should return an array with the last two items in a collection.', function() {
    Handlebars.compile('{{last collection 2}}')(context).should.eql(['g', 'h'].toString());
  });
});

describe('{{withFirst}}', function() {
  it('Should use the first item in a collection inside a block.', function() {
    var template = Handlebars.compile('{{#withFirst collection}}<p>{{this}} is smart.</p>{{/withFirst}}');
    template(context).should.equal('<p>a is smart.</p>');
  });
  it('Should use the first two items in a collection inside a block.', function() {
    var template = Handlebars.compile('{{#withFirst collection 2}}<p>{{this}} is smart.</p>{{/withFirst}}');
    template(context).should.equal('<p>a is smart.</p><p>b is smart.</p>');
  });
});

describe('sort', function() {
  it('Should return all items in a collection sorted in lexicographical order.', function() {
    var template = Handlebars.compile('{{sort collection}}');
    template(context).should.eql(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].toString());
  });

  // this test and sort helper needs to be updated to do something
  // other than just spitting out the string of the array.
  it('Should return all items in a collection sorted in by name.', function() {
    var template = Handlebars.compile('{{sort collection "name"}}');
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
  it('Should use all of the items in a collection after the specified count inside a block.', function() {
    var template = Handlebars.compile('{{#withAfter collection 5}}<{{this}}>{{/withAfter}}');
    template(context).should.equal('<f><g><h>');
  });
});

describe('withBefore', function() {
  it('Should use all of the items in a collection before the specified count inside a block.', function() {
    var template = Handlebars.compile('{{#withBefore collection 5}}<{{this}}>{{/withBefore}}');
    template(context).should.equal('<a><b><c>');
  });
});

describe('withLast', function() {
  it('Should use the last item in a collection inside a block.', function() {
    var template = Handlebars.compile('{{#withLast collection}}<p>{{this}} is dumb.</p>{{/withLast}}');
    template(context).should.equal('<p>h is dumb.</p>');
  });
  it('Should use the last two items in a collection inside a block.', function() {
    var template = Handlebars.compile('{{#withLast collection 2}}<p>{{this}} is dumb.</p>{{/withLast}}');
    template(context).should.equal('<p>g is dumb.</p><p>h is dumb.</p>');
  });
});

describe('withSort', function() {
  it('Should sort the collection in lexicographical order and use it in a block.', function() {
    var template = Handlebars.compile('{{#withSort collection}}<p>{{this}}</p>{{/withSort}}');
    template(context).should.equal('<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p><p>f</p><p>g</p><p>h</p>');
  });
  it('Should sort the collection by deliveries and use it in a block.', function() {
    var template = Handlebars.compile('{{#withSort collection "deliveries"}}{{name}}: {{deliveries}} <br>{{/withSort}}');
    var res = template({
      collection: [{name: 'f', deliveries: 8021 }, {name: 'b', deliveries: 239 }, {name: 'd', deliveries: -12 }]
    });
    res.should.equal('d: -12 <br>b: 239 <br>f: 8021 <br>');
  });
});

