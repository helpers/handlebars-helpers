'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..')(Handlebars);

console.log(helpers);

// Handlebars.registerHelper(helpers('array'));

// var context = {arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

// describe('isArray', function() {
//   it('should return true if the value is an array.', function() {
//     Handlebars.compile('{{isArray "foo"}}')().should.eql('false');
//     Handlebars.compile('{{isArray foo}}')({foo: ['foo']}).should.equal('true');
//   });
// });

// describe('arrayify', function() {
//   it('should coerce a value to an array.', function() {
//     _.template('{{isArray(arrayify("foo"))}}')().should.equal('true');
//     _.template('{{isArray(arrayify(["foo"]))}}')().should.equal('true');
//   });
// });

// describe('first', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{first()}}')().should.equal('');
//   });

//   it('should return the first item in an array.', function() {
//     var template = _.template('{{first(foo)}}');
//     template({foo: ['a', 'b', 'c']}).should.equal('a');
//   });

//   it('should return an array with the first two items in an array.', function() {
//     var template = _.template('{{first(foo, 2)}}');
//     template({foo: ['a', 'b', 'c']}).should.eql(['a', 'b'].toString());
//   });
// });

// describe('last', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{last()}}')().should.equal('');
//   });

//   it('should return the last item in an array.', function() {
//     _.template('{{last(arr)}}')(context).should.equal('h');
//   });
//   it('should return an array with the last two items in an array.', function() {
//     _.template('{{last(arr, 2)}}')(context).should.eql(['g', 'h'].toString());
//   });
// });

// describe('before', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{before()}}')().should.equal('');
//   });
//   it('should return all of the items in an array before the given index.', function() {
//     var template = _.template('{{before(arr, 5)}}');
//     template(context).should.eql(['a', 'b', 'c'].toString());
//   });
// });

// describe('after', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{after()}}')().should.equal('');
//   });

//   it('should return all of the items in an array after the given index.', function() {
//     var template = _.template('{{after(arr, 5)}}');
//     template(context).should.eql(['f', 'g', 'h'].toString());
//   });
// });

// describe('join', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{join()}}')().should.equal('');
//   });

//   it('should return all items in an array joined by the default separator.', function() {
//     var template = _.template('{{join(arr)}}');
//     template(context).should.equal('a, b, c, d, e, f, g, h');
//   });

//   it('should return all items in an array joined by the given separator.', function() {
//     var template = _.template('{{join(arr, " | ")}}');
//     template(context).should.equal('a | b | c | d | e | f | g | h');
//   });
// });

// describe('map', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{map()}}')().should.equal('');
//   });

//   it('should map the items in the array and return new values.', function() {
//     var o = {};
//     o.double = function(str) {
//       return str + str;
//     };
//     var template = _.template('{{map(["a","b","c"], double)}}');
//     template(o).should.equal('aa,bb,cc');
//   });
// });

// describe('sort', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{sort()}}')().should.equal('');
//   });

//   it('should sort the items in an array.', function() {
//     var template = _.template('{{sort(["b", "c", "a"])}}');
//     template(context).should.equal('a,b,c');
//   });

//   it('should take a compare function.', function() {
//     var o = {};
//     o.compare = function (a, b) {
//       return b.localeCompare(a);
//     };
//     var template = _.template('{{sort(["b", "c", "a"], compare)}}');
//     template(o).should.equal('c,b,a');
//   });

//   it('should sort based on object key:', function() {
//     var template = _.template('{{JSON.stringify(sort([{a: "zzz"}, {a: "aaa"}], "a"))}}');
//     template().should.equal('[{"a":"aaa"},{"a":"zzz"}]');
//   });
// });

// describe('length', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{length()}}')().should.equal('');
//   });

//   it('should return zero when the value is not an array.', function() {
//     var template = _.template('{{length("foo")}}');
//     template(context).should.equal('0');
//   });

//   it('should return the length of an array.', function() {
//     var template = _.template('{{length(["b", "c", "a"])}}');
//     template(context).should.equal('3');
//   });
// });

// describe('compact', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{compact()}}')().should.equal('');
//   });

//   it('should remove falsey values from an array.', function() {
//     var template = _.template('{{compact([null, "a", undefined, 0, false, "b", "c", ""])}}');
//     template(context).should.equal('a,b,c');
//   });
// });

// describe('difference', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{difference()}}')().should.equal('');
//   });

//   it('should return the difference from multiple arrays', function() {
//     var o = {};
//     o.a = ['a', 'b', 'c', 'd'];
//     o.b = ['b', 'c'];
//     o.c = ['x', 'y'];
//     _.template('{{difference(a, b, c)}}')(o).should.equal('a,d');
//     _.template('{{difference(a, b)}}')(o).should.equal('a,d');
//     _.template('{{difference(a)}}')(o).should.equal('a,b,c,d');
//   });
// });

// describe('unique', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{unique()}}')().should.equal('');
//   });
//   it('should unique items from multiple arrays:', function() {
//     var template = _.template('{{unique(["a", "b", "c", "c"])}}');
//     template(context).should.equal('a,b,c');
//   });
// });

// describe('union', function() {
//   it('should return an empty string when undefined.', function() {
//     _.template('{{union()}}')().should.equal('');
//   });

//   it('should union items from multiple arrays:', function() {
//     var template = _.template('{{union(["a", "c"], ["b", "b"])}}');
//     template(context).should.equal('a,c,b');
//   });

//   it('should union items from multiple arrays:', function() {
//     var template = _.template('{{union(["a"], ["b"])}}');
//     template(context).should.equal('a,b');
//   });
// });
