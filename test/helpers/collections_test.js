/**
 * Handlebars Helpers Tests: Collections Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

var source, template, context;

context = {
  collection: ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']
};

describe('first', function() {
  describe('{{first collection}}', function() {
    it('Should return the first item in a collection.', function() {
      source = '{{first collection}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Amy Wong');
    });
  });
  describe('{{first collection 2}}', function() {
    it('Should return an array with the first two items in a collection.', function() {
      source = '{{first collection 2}}';
      template = Handlebars.compile(source);
      template(context).should.eql(['Amy Wong', 'Bender'].toString());
    });
  });
});

describe('withFirst', function() {
  describe('{{#withFirst collection}}{{/withFirst}}', function() {
    it('Should use the first item in a collection inside a block.', function() {
      source = '{{#withFirst collection}}<p>{{this}} is smart.</p>{{/withFirst}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<p>Amy Wong is smart.</p>');
    });
  });
  describe('{{#withFirst collection 2}}{{/withFirst}}', function() {
    it('Should use the first two items in a collection inside a block.', function() {
      source = '{{#withFirst collection 2}}<p>{{this}} is smart.</p>{{/withFirst}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<p>Amy Wong is smart.</p><p>Bender is smart.</p>');
    });
  });
});

describe('last', function() {
  describe('{{last collection}}', function() {
    it('Should return the last item in a collection.', function() {
      source = '{{last collection}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Scruffy');
    });
  });
  describe('{{last collection 2}}', function() {
    it('Should return an array with the last two items in a collection.', function() {
      source = '{{last collection 2}}';
      template = Handlebars.compile(source);
      template(context).should.eql(['Professor Farnsworth', 'Scruffy'].toString());
    });
  });
});

describe('withLast', function() {
  describe('{{#withLast collection}}{{/withLast}}', function() {
    it('Should use the last item in a collection inside a block.', function() {
      source = '{{#withLast collection}}<p>{{this}} is dumb.</p>{{/withLast}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<p>Scruffy is dumb.</p>');
    });
  });
  describe('{{#withLast collection 2}}{{/withLast}}', function() {
    it('Should use the last two items in a collection inside a block.', function() {
      source = '{{#withLast collection 2}}<p>{{this}} is dumb.</p>{{/withLast}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<p>Professor Farnsworth is dumb.</p><p>Scruffy is dumb.</p>');
    });
  });
});

describe('after', function() {
  describe('{{after collection 5}}', function() {
    it('Should return all of the items in a collection after the specified count.', function() {
      source = '{{after collection 5}}';
      template = Handlebars.compile(source);
      template(context).should.eql(['Leela', 'Professor Farnsworth', 'Scruffy'].toString());
    });
  });
});

describe('withAfter', function() {
  describe('{{#withAfter collection count}}{{/withAfter}}', function() {
    it('Should use all of the items in a collection after the specified count inside a block.', function() {
      source = '{{#withAfter collection 5}}<{{this}}>{{/withAfter}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<Leela><Professor Farnsworth><Scruffy>');
    });
  });
});

describe('before', function() {
  describe('{{before collection count}}', function() {
    it('Should return all of the items in a collection before the specified count.', function() {
      source = '{{before collection 5}}';
      template = Handlebars.compile(source);
      template(context).should.eql(['Amy Wong', 'Bender', 'Dr. Zoidberg'].toString());
    });
  });
});

describe('withBefore', function() {
  describe('{{#withBefore collection count}}{{/withBefore}}', function() {
    it('Should use all of the items in a collection before the specified count inside a block.', function() {
      source = '{{#withBefore collection 5}}<{{this}}>{{/withBefore}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<Amy Wong><Bender><Dr. Zoidberg>');
    });
  });
});

describe('join', function() {
  describe('{{join collection separator}}', function() {
    it('Should return all items in a collection joined by a separator if specified.', function() {
      source = '{{join collection " | "}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Amy Wong | Bender | Dr. Zoidberg | Fry | Hermes Conrad | Leela | Professor Farnsworth | Scruffy');
    });
  });
});

describe('sort', function() {
  describe('{{sort collection}}', function() {
    it('Should return all items in a collection sorted in lexicographical order.', function() {
      source = '{{sort collection}}';
      template = Handlebars.compile(source);
      template(context).should.eql(['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy'].toString());
    });
  });

  // this test and sort helper needs to be updated to do something
  // other than just spitting out the string of the array.
  describe('{{sort collection property}}', function() {
    it('Should return all items in a collection sorted in by name.', function() {
      var source, template, _context;
      source = '{{sort collection "name"}}';
      template = Handlebars.compile(source);
      _context = {
        collection: [
          {
            name: 'Leela',
            deliveries: 8021
          }, {
            name: 'Bender',
            deliveries: 239
          }, {
            name: 'Fry',
            deliveries: -12
          }
        ]
      };
      template(_context).should.eql([
        {
          name: 'Bender',
          deliveries: 239
        }, {
          name: 'Fry',
          deliveries: -12
        }, {
          name: 'Leela',
          deliveries: 8021
        }
      ].toString());
    });
  });
});

describe('withSort', function() {
  describe('{{#withSort collection}}{{/withSort}}', function() {
    it('Should sort the collection in lexicographical order and use it in a block.', function() {
      source = '{{#withSort collection}}<p>{{this}}</p>{{/withSort}}';
      template = Handlebars.compile(source);
      template(context).should.equal('<p>Amy Wong</p><p>Bender</p><p>Dr. Zoidberg</p><p>Fry</p><p>Hermes Conrad</p><p>Leela</p><p>Professor Farnsworth</p><p>Scruffy</p>');
    });
  });
  describe('{{#withSort collection property}}{{/withSort}}', function() {
    it('Should sort the collection by deliveries and use it in a block.', function() {
      var source, template, _context;
      source = '{{#withSort collection "deliveries"}}{{name}}: {{deliveries}} <br>{{/withSort}}';
      template = Handlebars.compile(source);
      _context = {
        collection: [
          {
            name: 'Leela',
            deliveries: 8021
          }, {
            name: 'Bender',
            deliveries: 239
          }, {
            name: 'Fry',
            deliveries: -12
          }
        ]
      };
      template(_context).should.equal('Fry: -12 <br>Bender: 239 <br>Leela: 8021 <br>');
      /***
      _context.collection.should.eql([
          {
            name: 'Leela',
            deliveries: 8021
          }, {
            name: 'Bender',
            deliveries: 239
          }, {
            name: 'Fry',
            deliveries: -12
          }
        ]);
     ***/
    });
  });
});

describe('length', function() {
  describe('{{length collection}}', function() {
    it('Should return the length of the collection', function() {
      source = '{{length collection}}';
      template = Handlebars.compile(source);
      template(context).should.equal('8');
    });
  });
});

describe('lengthEqual', function() {
  describe('{{#lengthEqual collection length}}{{/lengthEqual}}', function() {
    it('Should conditionally render a block based on the length of a collection.', function() {
      source = '{{#lengthEqual collection 3}}There are 3 people in Planet Express.{{else}}This is not Planet Express.{{/lengthEqual}}';
      template = Handlebars.compile(source);
      template(context).should.equal('This is not Planet Express.');
    });
  });
});

describe('empty', function() {
  describe('{{#empty collection}}{{/empty}}', function() {
    it('Should conditionally render a block the collection is empty.', function() {
      source = '{{#empty collection}}Bad news everyone!{{else}}Good news everyone!{{/empty}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Good news everyone!');
    });
  });
});

describe('any', function() {
  describe('{{#any collection}}{{/any}}', function() {
    it('Should conditionally render a block the collection isn\'t empty.', function() {
      source = '{{#any collection}}Bad news everyone!{{else}}Good news everyone!{{/any}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Bad news everyone!');
    });
  });
});

describe('inArray', function() {
  describe('{{#inArray collection string}}{{/inArray}}', function() {
    it('Should conditionally render a block if a specified string is in the collection.', function() {
      source = '{{#inArray collection "Fry"}}I\'m walking on sunshine!{{else}}I\'m walking in darkness.{{/inArray}}';
      template = Handlebars.compile(source);
      template(context).should.equal('I\'m walking on sunshine!');
    });
  });
});

xdescribe('filter', function() {
  describe('{{#filter collection string}}{{/filter}}', function() {
    it('Should conditionally render a block if a specified string is in the collection.', function() {
      source = '{{#filter collection "Fry"}}I\'m walking on sunshine!{{else}}I\'m walking in darkness.{{/filter}}';
      template = Handlebars.compile(source);
      template(context).should.equal('I\'m walking on sunshine!');
    });
  });

  describe('{{#filter collection value property="foo"}}{{/filter}}', function() {
    var context = {
      collection: [
        { first: 'Amy', last: 'Wong'},
        { first: 'Bender'},
        { title: 'Dr.', last: 'Zoidberg'},
        { first: 'Fry'},
        { first: 'Hermes', last: 'Conrad'},
        { first: 'Leela'},
        { title: 'Professor', last: 'Farnsworth'},
        { first: 'Scruffy'}
      ]
    };
    it('Should render a block for each object that has a "first" property with the value "Fry".', function() {
      source = '{{#filter collection "Fry" property="first"}}{{this.first}}{{else}}Not found!{{/filter}}';
      template = Handlebars.compile(source);
      template(context).should.equal('Fry');
    });
  });
});

describe('eachIndex', function() {
  describe('{{#eachIndex collection}}{{/eachIndex}}', function() {
    it('Should render the block using the array and each item\'s index.', function() {
      source = '{{#eachIndex collection}} {{item}} is {{index}} {{/eachIndex}}';
      template = Handlebars.compile(source);
      template(context).should.equal(' Amy Wong is 0  Bender is 1  Dr. Zoidberg is 2  Fry is 3  Hermes Conrad is 4  Leela is 5  Professor Farnsworth is 6  Scruffy is 7 ');
    });
  });
});

xdescribe('eachIndexPlusOne', function() {
  describe('{{#eachIndexPlusOne collection}}{{/eachIndexPlusOne}}',
    function() {
      it('Should render the block using the array and each item\'s index + 1.', function() {
      source = '{{#eachIndexPlusOne collection}} {{item}} is {{index}} {{/eachIndexPlusOne}}';
      template = Handlebars.compile(source);
      template(context).should.equal(' Amy Wong is 1  Bender is 2  Dr. Zoidberg is 3  Fry is 4  Hermes Conrad is 5  Leela is 6  Professor Farnsworth is 7  Scruffy is 8 ');
    });
  });
});

describe('each', function() {
  describe('{{#each collection}}{{/each}}', function() {
    it('Should use the key and value of each property in an object inside a block.', function() {
      context = {
        collection: {
          fry: 3,
          bender: 120
        }
      };
      source = '{{#each collection}}{{@key}}: {{this}} {{/each}}';
      template = Handlebars.compile(source);
      template(context).should.equal('fry: 3 bender: 120 ');
    });
  });
});

