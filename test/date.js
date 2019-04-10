const assert = require('assert');
const moment = require('moment');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.date({ handlebars: hbs });

const context = { formatDate: "MM-DD-YYYY", time: new Date('2018-12-31') };

describe('date', function() {
  describe('year', () => {
    it('works with no parameters', () => {
      const fn = hbs.compile('{{year}}');
      assert.deepEqual(fn(context), moment().format('YYYY'));
    });

    it('works with a two-character year format', () => {
      const fn = hbs.compile('{{year "YY"}}');
      assert.deepEqual(fn(context), moment().format('YY'));
    });

    it('works with a four-character year format', () => {
      const fn = hbs.compile('{{year "YYYY"}}');
      assert.deepEqual(fn(context), moment().format('YYYY'));
    });

    it('ignores any other formats', () => {
      const fn = hbs.compile('{{year "DD-MM"}}');
      assert.deepEqual(fn(context), moment().format('YYYY'));
    });
  });

  describe('date', () => {
    it('works with no parameters', () => {
      const fn = hbs.compile('{{date}}');
      assert.deepEqual(fn(context), moment().format('MMMM DD, YYYY'));
    });

    it('works with only a custom format parameter', () => {
      const fn = hbs.compile('{{date "YYYY"}}');
      assert.deepEqual(fn(context), moment().format('YYYY'));
    });

    it('works with a custom time and custom format', () => {
      const fn = hbs.compile('{{date "2018-12-31" "MMMM DD, YYYY"}}');
      assert.deepEqual(fn(context), 'December 31, 2018');
    });

    it('works with a time variable and custom format', () => {
      const fn = hbs.compile('{{date time "MMMM DD, YYYY"}}');
      assert.deepEqual(fn(context), 'December 31, 2018');
    });

    it('works with a format from the context:', () => {
      const fn = hbs.compile('{{date time formatDate}}');
      assert.deepEqual(fn(context), '12-31-2018');
    });

    it('works with an ISO time string and custom format', () => {
      const fn = hbs.compile('{{date "2018-12-31T14:23:02.544+0000" "MMMM DD, YYYY"}}');
      assert.deepEqual(fn(context), 'December 31, 2018');
    });
  });
});
