(function() {
  var Handlebars, context;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-collections').register(Handlebars, {});

  context = {
    collection: ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']
  };

  describe('first', function() {
    describe('{{first collection}}', function() {
      return it('should return the first item in a collection.', function() {
        var source, template;
        source = '{{first collection}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('Amy Wong');
      });
    });
    return describe('{{first collection 2}}', function() {
      return it('should return an array with the first two items in a collection.', function() {
        var source, template;
        source = '{{first collection 2}}';
        template = Handlebars.compile(source);
        return template(context).should.eql(['Amy Wong', 'Bender']);
      });
    });
  });

  describe('withFirst', function() {
    describe('{{#withFirst collection}} \n\
    <p>{{this}} is smart.</p> \n\
  {{/withFirst}}', function() {
      return it('should use the first item in a collection inside a block.', function() {
        var source, template;
        source = '{{#withFirst collection}}<p>{{this}} is smart.</p>{{/withFirst}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<p>Amy Wong is smart.</p>');
      });
    });
    return describe('{{#withFirst collection 2}} \n\
    <p>{{this}} is smart.</p> \n\
  {{/withFirst}}', function() {
      return it('should use the first two items in a collection inside a block.', function() {
        var source, template;
        source = '{{#withFirst collection 2}}<p>{{this}} is smart.</p>{{/withFirst}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<p>Amy Wong is smart.</p><p>Bender is smart.</p>');
      });
    });
  });

  describe('last', function() {
    describe('{{last collection}}', function() {
      return it('should return the last item in a collection.', function() {
        var source, template;
        source = '{{last collection}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('Scruffy');
      });
    });
    return describe('{{last collection 2}}', function() {
      return it('should return an array with the last two items in a collection.', function() {
        var source, template;
        source = '{{last collection 2}}';
        template = Handlebars.compile(source);
        return template(context).should.eql(['Professor Farnsworth', 'Scruffy']);
      });
    });
  });

  describe('withLast', function() {
    describe('{{#withLast collection}} \n\
    <p>{{this}} is dumb.</p> \n\
  {{/withLast}}', function() {
      return it('should use the last item in a collection inside a block.', function() {
        var source, template;
        source = '{{#withLast collection}}<p>{{this}} is dumb.</p>{{/withLast}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<p>Scruffy is dumb.</p>');
      });
    });
    return describe('{{#withLast collection 2}} \n\
    <p>{{this}} is dumb.</p> \n\
  {{/withLast}}', function() {
      return it('should use the last two items in a collection inside a block.', function() {
        var source, template;
        source = '{{#withLast collection 2}}<p>{{this}} is dumb.</p>{{/withLast}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<p>Professor Farnsworth is dumb.</p><p>Scruffy is dumb.</p>');
      });
    });
  });

  describe('after', function() {
    return describe('{{after collection 5}}', function() {
      return it('should return all of the items in a collection after the specified count.', function() {
        var source, template;
        source = '{{after collection 5}}';
        template = Handlebars.compile(source);
        return template(context).should.eql(['Leela', 'Professor Farnsworth', 'Scruffy']);
      });
    });
  });

  describe('withAfter', function() {
    return describe('{{#withAfter collection 5}} \n\
    <{{this}}> \n\
  {{/withAfter}}', function() {
      return it('should use all of the items in a collection after the specified count inside a block.', function() {
        var source, template;
        source = '{{#withAfter collection 5}}<{{this}}>{{/withAfter}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<Leela><Professor Farnsworth><Scruffy>');
      });
    });
  });

  describe('before', function() {
    return describe('{{before collection 5}}', function() {
      return it('should return all of the items in a collection before the specified count.', function() {
        var source, template;
        source = '{{before collection 5}}';
        template = Handlebars.compile(source);
        return template(context).should.eql(['Amy Wong', 'Bender', 'Dr. Zoidberg']);
      });
    });
  });

  describe('withBefore', function() {
    return describe('{{#withBefore collection 5}} \n\
    <{{this}}> \n\
  {{/withBefore}}', function() {
      return it('should use all of the items in a collection before the specified count inside a block.', function() {
        var source, template;
        source = '{{#withBefore collection 5}}<{{this}}>{{/withBefore}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<Amy Wong><Bender><Dr. Zoidberg>');
      });
    });
  });

  describe('join', function() {
    return describe('{{join collection " | "}}', function() {
      return it('should return all items in a collection joined by a separator if specified.', function() {
        var source, template;
        source = '{{join collection " | "}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('Amy Wong | Bender | Dr. Zoidberg | Fry | Hermes Conrad | Leela | Professor Farnsworth | Scruffy');
      });
    });
  });

  describe('sort', function() {
    describe('{{sort collection}}', function() {
      return it('should return all items in a collection sorted in lexicographical order.', function() {
        var source, template;
        source = '{{sort collection}}';
        template = Handlebars.compile(source);
        return template(context).should.eql(['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']);
      });
    });
    return describe('{{sort collection "name"}}', function() {
      return it('should return all items in a collection sorted in by name.', function() {
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
        return template(_context).should.eql([
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
        ]);
      });
    });
  });

  describe('withSort', function() {
    describe('{{#withSort collection}} \n\
    <p>{{this}}</p> \n\
  {{/withSort}}', function() {
      return it('should sort the collection in lexicographical order and use it in a block.', function() {
        var source, template;
        source = '{{#withSort collection}}<p>{{this}}</p>{{/withSort}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<p>Amy Wong</p><p>Bender</p><p>Dr. Zoidberg</p><p>Fry</p><p>Hermes Conrad</p><p>Leela</p><p>Professor Farnsworth</p><p>Scruffy</p>');
      });
    });
    return describe('{{#withSort collection "deliveries"}} \n\
    {{name}}: {{deliveries}} <br> \n\
  {{/withSort}}', function() {
      return it('should sort the collection by deliveries and use it in a block.', function() {
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
        return template(_context).should.equal('Fry: -12 <br>Bender: 239 <br>Leela: 8021 <br>');
      });
    });
  });

  describe('length', function() {
    return describe('{{length collection}}', function() {
      return it('should return the length of the collection', function() {
        var source, template;
        source = '{{length collection}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(8);
      });
    });
  });

  describe('lengthEqual', function() {
    return describe('{{#lengthEqual collection 3}} \n\
    There are 3 people in Planet Express. \n\
  {{else}} \n\
    This is not Planet Express. \n\
  {{/lengthEqual}}', function() {
      return it('should conditionally render a block based on the length of a collection.', function() {
        var source, template;
        source = '{{#lengthEqual collection 3}}There are 3 people in Planet Express.{{else}}This is not Planet Express.{{/lengthEqual}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('This is not Planet Express.');
      });
    });
  });

  describe('empty', function() {
    return describe('{{#empty collection}} \n\
    Bad news everyone! \n\
  {{else}} \n\
    Good news everyone! \n\
  {{/empty}}', function() {
      return it('should conditionally render a block the collection is empty.', function() {
        var source, template;
        source = '{{#empty collection}}Bad news everyone!{{else}}Good news everyone!{{/empty}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('Good news everyone!');
      });
    });
  });

  describe('any', function() {
    return describe('{{#any collection}} \n\
    Bad news everyone! \n\
  {{else}} \n\
    Good news everyone! \n\
  {{/any}}', function() {
      return it('should conditionally render a block the collection isn\'t empty.', function() {
        var source, template;
        source = '{{#any collection}}Bad news everyone!{{else}}Good news everyone!{{/any}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('Bad news everyone!');
      });
    });
  });

  describe('inArray', function() {
    return describe('{{#inArray collection "Fry"}} \n\
    I\'m walking on sunshine! \n\
  {{else}} \n\
    I\'m walking in darkness. \n\
  {{/inArray}}', function() {
      return it('should conditionally render a block if a specified value is in the collection.', function() {
        var source, template;
        source = '{{#inArray collection "Fry"}}I\'m walking on sunshine!{{else}}I\'m walking in darkness.{{/inArray}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('I\'m walking on sunshine!');
      });
    });
  });

  describe('eachIndex', function() {
    return describe('{{#eachIndex collection}} \n\
    {{item}} is {{index}} \n\
  {{/eachIndex}}', function() {
      return it('should render the block using the array and each item\'s index.', function() {
        var source, template;
        source = '{{#eachIndex collection}} {{item}} is {{index}} {{/eachIndex}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(' Amy Wong is 0  Bender is 1  Dr. Zoidberg is 2  Fry is 3  Hermes Conrad is 4  Leela is 5  Professor Farnsworth is 6  Scruffy is 7 ');
      });
    });
  });

  describe('eachIndexPlusOne', function() {
    return describe('{{#eachIndexPlusOne collection}} \n\
    {{item}} is {{index}} \n\
  {{/eachIndexPlusOne}}', function() {
      return it('should render the block using the array and each item\'s index + 1.', function() {
        var source, template;
        source = '{{#eachIndexPlusOne collection}} {{item}} is {{index}} {{/eachIndexPlusOne}}';
        template = Handlebars.compile(source);
        return template(context).should.equal(' Amy Wong is 1  Bender is 2  Dr. Zoidberg is 3  Fry is 4  Hermes Conrad is 5  Leela is 6  Professor Farnsworth is 7  Scruffy is 8 ');
      });
    });
  });

  describe('each', function() {
    return describe('{{#each collection}} {{@key}}: {{this}} {{/each}}', function() {
      return it('should use the key and value of each property in an object inside a block.', function() {
        var source, template;
        context = {
          collection: {
            fry: 3,
            bender: 120
          }
        };
        source = '{{#each collection}}{{@key}}: {{this}} {{/each}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('fry: 3 bender: 120 ');
      });
    });
  });

}).call(this);
