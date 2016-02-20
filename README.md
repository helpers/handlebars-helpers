# handlebars-helpers [![NPM version](https://img.shields.io/npm/v/handlebars-helpers.svg)](https://www.npmjs.com/package/handlebars-helpers) [![Build Status](https://img.shields.io/travis/assemble/handlebars-helpers.svg)](https://travis-ci.org/assemble/handlebars-helpers)

> More than 130 [Handlebars](http://www.handlebarsjs.com/) helpers in ~20 categories that can be used with any Handlebars project.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i handlebars-helpers --save
```

## Usage

```js
var helpers = require('handlebars-helpers')();
//=> returns object with all (130+) helpers
```

**Get a specific collection**

Helper collections are exposed as getters, so only the helpers you want will be required and loaded.

```js
var helpers = require('handlebars-helpers');
var math = helpers.math();
//=> only the `math` helpers

var helpers = require('handlebars-helpers');
var array = helpers.array();
//=> only the `collections` helpers
```

**Optionally pass your own handlebars**

```js
var handlebars = require('handlebars');
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

// or for a specific collection
var math = helpers.math({
  handlebars: handlebars
});
```

***

## Helpers

* [array](#array)
* [code](#code)
* [collection](#collection)
* [comparison](#comparison)
* [date](#date)
* [fs](#fs)
* [html](#html)
* [i18n](#i18n)
* [inflection](#inflection)
* [logging](#logging)
* [markdown](#markdown)
* [math](#math)
* [misc](#misc)
* [number](#number)
* [object](#object)
* [path](#path)
* [string](#string)
* [url](#url)

### array

### [.after](lib/array.js#L26)

Returns all of the items in an array after the specified index. Opposite of [before][].

**Params**

* `array` **{Array}**: Collection
* `n` **{Number}**: Starting index (number of items to exclude)
* `returns` **{Array}**: Array exluding `n` items.

**Example**

```handlebars
{{after "['a', 'b', 'c']" 1}}
//=> '["c"]'
```

### [.arrayify](lib/array.js#L43)

Cast the given `value` to an array.

**Params**

* `value` **{any}**
* `returns` **{Array}**

**Example**

```handlebars
{{arrayify "foo"}}
//=> '["foo"]'
```

### [.before](lib/array.js#L62)

Return all of the items in the collection before the specified count. Opposite of [after][].

**Params**

* `array` **{Array}**
* `n` **{Number}**
* `returns` **{Array}**: Array excluding items after the given number.

**Example**

```handlebars
{{before "['a', 'b', 'c']" 2}}
//=> '["a", "b"]'
```

### [.eachIndex](lib/array.js#L80)

**Params**

* `array` **{Array}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#eachIndex collection}}
  {{item}} is {{index}}
{{/eachIndex}}
```

### [.filter](lib/array.js#L98)

**Params**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

### [.first](lib/array.js#L141)

Returns the first item, or first `n` items of an array.

**Params**

* `array` **{Array}**
* `n` **{Number}**: Number of items to return, starting at `0`.
* `returns` **{Array}**

**Example**

```handlebars
{{first "['a', 'b', 'c', 'd', 'e']" 2}}
//=> '["a", "b"]'
```

### [.forEach](lib/array.js#L184)

Iterates over each item in an array and exposes the current item in the array as context to the inner block. In addition to the current array item, the helper exposes the following variables to the inner block:

* `index`
* `total`
* `isFirst`
* `isLast`
Also, `@index` is exposed as a private variable, and additional
private variables may be defined as hash arguments.

**Params**

* `array` **{Array}**
* `returns` **{String}**

**Example**

```js
var accounts = [
{'name': 'John', 'email': 'john@example.com'},
{'name': 'Malcolm', 'email': 'malcolm@example.com'},
{'name': 'David', 'email': 'david@example.com'}
];

// example usage
// {{#forEach accounts}}
//   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
//     {{ name }}
//   </a>{{#unless isLast}}, {{/unless}}
// {{/forEach}}
```

### [.inArray](lib/array.js#L226)

Block helper that renders the block if an array has the given `value`. Optionally specify an inverse block to render when the array does not have the given value.

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#inArray array "d"}}
  foo
{{else}}
  bar
{{/inArray}}
```

### [.isArray](lib/array.js#L246)

Returns true if `value` is an es5 array.

**Params**

* `value` **{any}**: The value to test.
* `returns` **{Boolean}**

**Example**

```handlebars
{{isArray "abc"}}
//=> 'false'
```

### [.join](lib/array.js#L268)

Join all elements of array into a string, optionally using a given separator.

**Params**

* `array` **{Array}**
* `sep` **{String}**: The separator to use.
* `returns` **{String}**

**Example**

```handlebars
{{join "['a', 'b', 'c']"}}
//=> 'a, b, c'

{{join "['a', 'b', 'c']" '-'}}
//=> 'a-b-c'
```

### [.last](lib/array.js#L290)

Returns the last item, or last `n` items of an array. Opposite of [first][].

**Params**

* `array` **{Array}**
* `n` **{Number}**: Number of items to return, starting with the last item.
* `returns` **{Array}**

**Example**

```handlebars
{{last "['a', 'b', 'c', 'd', 'e']" 2}}
//=> '["d", "e"]'
```

### [.lengthEqual](lib/array.js#L312)

Block helper that compares the length of the given array to
the number passed as the second argument. If the array length
is equal to the given `length`, the block is returned,
otherwise an inverse block may optionally be returned.

**Params**

* `array` **{Array}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

### [.map](lib/array.js#L339)

Returns a new array, created by calling `function` on each element of the given `array`.

**Params**

* `array` **{Array}**
* `fn` **{Function}**
* `returns` **{String}**

**Example**

```js
// register `double` as a helper
function double(str) {
  return str + str;
}
// then used like this:
// {{map "['a', 'b', 'c']" double}}
//=> '["aa", "bb", "cc"]'
```

### [.some](lib/array.js#L374)

Block helper that returns the block if the callback returns true for some value in the given array.

**Params**

* `array` **{Array}**
* `cb` **{Function}**: callback function
* **{Options}**: Handlebars provided options object
* `returns` **{Array}**

**Example**

```handlebars
{{#some array isString}}
  Render me if the array has a string.
{{else}}
  Render me if it doesn't.
{{/some}}
```

### [.sort](lib/array.js#L404)

Sort the given `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.
* `key` **{String|Function}**: The object key to sort by, or sorting function.

**Example**

```handlebars
{{sort "['b', 'a', 'c']"}}
//=> 'a,b,c'
```

### [.sortBy](lib/array.js#L431)

Sort an `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.
* `props` **{String|Function}**: One or more properties to sort by, or sorting functions to use.

**Example**

```handlebars
{{sortBy '["b", "a", "c"]'}}
//=> 'a,b,c'

{{sortBy '[{a: "zzz"}, {a: "aaa"}]' "a"}}
//=> '[{"a":"aaa"},{"a":"zzz"}]'
```

### [.withAfter](lib/array.js#L457)

Use the items in the array _after_ the specified index
as context inside a block. Opposite of [withBefore][].

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

### [.withBefore](lib/array.js#L485)

Use the items in the array _before_ the specified index as context inside a block.Opposite of [withAfter][].

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
{{#withBefore array 3}}
  {{this}}
{{/withBefore}}
```

### [.withFirst](lib/array.js#L508)

Use the first item in a collection inside a handlebars
block expression. Opposite of [withLast][].

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

### [.withLast](lib/array.js#L542)

Use the last item or `n` items in an array as context inside a block.
Opposite of [withFirst][].

**Params**

* `array` **{Array}**
* `idx` **{Number}**: The starting index.
* `options` **{Object}**
* `returns` **{String}**

### [.withSort](lib/array.js#L577)

Block helper that sorts a collection and exposes the sorted
collection as context inside the block.

**Params**

* `array` **{Array}**
* `prop` **{String}**
* `options` **{Object}**: Specify `reverse="true"` to reverse the array.
* `returns` **{String}**

### code

### [.embed](lib/code.js#L31)

Embed code from an external file as preformatted text.

**Params**

* `fp` **{String}**: filepath to the file to embed.
* `language` **{String}**: Optionally specify the language to use for syntax highlighting.
* `returns` **{String}**

**Example**

```handlebars
{{embed 'path/to/file.js'}}

// specify the language to use
{{embed 'path/to/file.hbs' 'html')}}
```

### [.gist](lib/code.js#L56)

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{gist 12345}}
```

### [.jsfiddle](lib/code.js#L72)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

### collection

### [.isEmpty](lib/collection.js#L28)

Block helper that returns a block if the given collection is
empty. If the collection is not empty the inverse block is returned
(if supplied).

**Params**

* `collection` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [.iterate](lib/collection.js#L56)

Iterate over an array or object,

**Params**

* `context` **{Object|Array}**: The collection to iterate over
* `options` **{Object}**
* `returns` **{String}**

### [.length](lib/collection.js#L77)

Returns the length of the given collection.

**Params**

* `value` **{Array|Object|String}**
* `returns` **{Number}**: The length of the value.

**Example**

```handlebars
{{length "['a', 'b', 'c']"}}
//=> 3
```

### comparison

### [.and](lib/comparison.js#L26)

Block helper that renders the block if **both** of the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [.compare](lib/comparison.js#L48)

Render a block when a comparison of the first and third
arguments returns true. The second argument is
the [arithemetic operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) to use. You may also
optionally specify an inverse block to render when falsy.

**Params**

* `a` **{}**
* `operator` **{}**: The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
* `b` **{}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or if specified the inverse block is rendered if falsey.

### [.contains](lib/comparison.js#L119)

Block helper that renders the block if `collection` has the given `value`, using strict equality (`===`) for comparison, otherwise the inverse block is rendered (if specified). If a `startIndex` is specified and is negative, it is used as the offset from the end of the collection.

Given the array `['a', 'b', 'c']`:

**Params**

* `collection` **{Array|Object|String}**: The collection to iterate over.
* `value` **{any}**: The value to check for.
* `[startIndex=0]` **{Number}**: Optionally define the starting index.
* `options` **{Object}**: Handlebars provided options object.

**Example**

```handlebars
{{#contains array "d"}}
  This will not be rendered.
{{else}}
  This will be rendered.
{{/contains}}
```

### [.gt](lib/comparison.js#L146)

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.gte](lib/comparison.js#L174)

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.has](lib/comparison.js#L197)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [.eq](lib/comparison.js#L232)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.ifEven](lib/comparison.js#L260)

Return true if the given vaue is an even number.

**Params**

* `number` **{Number}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#ifEven value}}
  render A
{{else}}
  render B
{{/ifEven}}
```

### [.ifNth](lib/comparison.js#L279)

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.ifOdd](lib/comparison.js#L304)

Block helper that renders a block if `value` is **an odd number**. If an inverse block is specified it will be rendered when falsy.

**Params**

* `value` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#ifOdd value}}
  render A
{{else}}
  render B
{{/ifOdd}}
```

### [.is](lib/comparison.js#L323)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [.isnt](lib/comparison.js#L347)

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [.lt](lib/comparison.js#L373)

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.lte](lib/comparison.js#L401)

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.neither](lib/comparison.js#L426)

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.or](lib/comparison.js#L447)

Block helper that renders a block if **either of** the given values
is truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.unlessEq](lib/comparison.js#L467)

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [.unlessGt](lib/comparison.js#L486)

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [.unlessLt](lib/comparison.js#L505)

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.unlessGteq](lib/comparison.js#L524)

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [.unlessLteq](lib/comparison.js#L543)

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### date

### [.moment](lib/date.js#L15)

Expose `moment` helper

### fs

### [.fileSize](lib/fs.js#L27)

Converts bytes into a nice representation with unit.

**Examples:**

* `13661855 => 13.7 MB`
* `825399 => 825 KB`
* `1396 => 1 KB`

**Params**

* `value` **{String}**
* `returns` **{String}**

### [.read](lib/fs.js#L63)

Read a file from the file system.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

### [.readdir](lib/fs.js#L76)

Return an array of files from the given
directory.

**Params**

* `directory` **{String}**
* `returns` **{Array}**

### html

### [.css](lib/html.js#L23)

Add an array of `<link>` tags. Automatically resolves
relative paths to `options.assets` if passed on the context.

**Params**

* `context` **{Object}**
* `returns` **{String}**

### [.ellipsis](lib/html.js#L66)

Truncates a string to the specified `length`, and appends it with an elipsis, `…`.

**Params**

* `str` **{String}**
* `length` **{Number}**: The desired length of the returned string.
* `returns` **{String}**: The truncated string.

**Example**

```js
{{ellipsis "<span>foo bar baz</span>", 7}}
//=> 'foo bar…'
```

### [.js](lib/html.js#L88)

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{js scripts}}
```

### [.sanitize](lib/html.js#L120)

Strip HTML tags from a string, so that only the text nodes are preserved.

**Params**

* `str` **{String}**: The string of HTML to sanitize.
* `returns` **{String}**

**Example**

```js
{{sanitize "<span>foo</span>"}}
//=> 'foo'
```

### [.truncate](lib/html.js#L142)

Truncate a string by removing all HTML tags and limiting the result to the specified `length`. Aslo see [ellipsis][].

**Params**

* `str` **{String}**
* `limit` **{Number}**: The desired length of the returned string.
* `suffix` **{String}**: Optionally supply a string to use as a suffix to denote when the string has been truncated.
* `returns` **{String}**: The truncated string.

**Example**

```js
truncate("<span>foo bar baz</span>", 7);
//=> 'foo bar'
```

### [.ul](lib/html.js#L162)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [.ol](lib/html.js#L178)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [.thumbnailImage](lib/html.js#L197)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:
* `context.alt` **{String}**
* `context.src` **{String}**
* `context.width` **{Number}**
* `context.height` **{Number}**
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

### i18n

### [.i18n](lib/i18n.js#L22)

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**
* `options` **{Object}**
* `returns` **{String}**

### inflection

### [.inflect](lib/inflection.js#L21)

**Params**

* `count` **{Number}**
* `singular` **{String}**: The singular form
* `plural` **{String}**: The plural form
* `include` **{String}**
* `returns` **{String}**

### [.ordinalize](lib/inflection.js#L50)

Returns an ordinalized number (as a string).

**Params**

* `val` **{String}**: The value to ordinalize.
* `returns` **{String}**: The ordinalized number

**Example**

```handlebars
{{ordinalize 1}}
//=> '1st'
{{ordinalize 21}}
//=> '21st'
{{ordinalize 29}}
//=> '29th'
{{ordinalize 22}}
//=> '22nd'
```

### logging

[logging-helpers](https://github.com/helpers/logging-helpers).

### markdown

### [.markdown](lib/markdown.js#L14)

Expose `{{markdown}}` block helper

### [.md](lib/markdown.js#L21)

Expose `{{md}}` helper

### matching

### [.mm](lib/match.js#L26)

The main function. Pass an array of filepaths, and a string or array of glob patterns. Options may be passed on the hash or on `this.options`.

**Params**

* `files` **{Array|String}**
* `patterns` **{Array|String}**: One or more glob patterns.
* `options` **{Object}**
* `returns` **{Array}**: Array of matches

**Example**

```handlebars
{{match (readdir "foo") "*.js"}}
```

### [.match](lib/match.js#L45)

Returns an array of files that match the given glob pattern. Options may be passed on the hash or on `this.options`.

**Params**

* `files` **{Array}**
* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
{{match (readdir "foo") "*.js"}}
```

### [.isMatch](lib/match.js#L66)

Returns true if a filepath contains the given pattern. Options may be passed on the hash or on `this.options`.

**Params**

* `filepath` **{String}**
* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
{{isMatch "foo.md" "*.md"}}
//=> true
```

### math

### [.add](lib/math.js#L19)

Return the product of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**

### [.subtract](lib/math.js#L30)

Return the product of `a` minus `b`.

**Params**

* **{Number}**: a

### [.divide](lib/math.js#L42)

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### [.multiply](lib/math.js#L54)

Multiply `a` by `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier

### [.floor](lib/math.js#L65)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**

### [.ceil](lib/math.js#L76)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**

### [.round](lib/math.js#L87)

Round the given value.

**Params**

* `value` **{Number}**

### [.sum](lib/math.js#L105)

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{sum "[1, 2, 3, 4, 5]"}}
//=> '15'
```

### [.avg](lib/math.js#L131)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
//=> '3'
```

### misc

### [.default](lib/misc.js#L22)

Returns the first value if defined, otherwise the second ("default")
value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [.or](lib/misc.js#L39)

Returns the first value if defined, otherwise the
second value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [.option](lib/misc.js#L58)

Return the given value of `prop` from `this.options`. Given the context `{options: {a: {b: {c: 'ddd'}}}}`

Returns `ddd`

**Params**

* `prop` **{String}**
* `returns` **{any}**

**Example**

```handlebars
{{option "a.b.c"}}
```

### [.noop](lib/misc.js#L72)

Block helper that renders the block without taking any arguments.

**Params**

* `options` **{Object}**
* `returns` **{String}**

### [.withHash](lib/misc.js#L86)

Block helper that builds the context for the block
from the options hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

### number

### [.addCommas](lib/number.js#L19)

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### [.phoneNumber](lib/number.js#L32)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### [.random](lib/number.js#L50)

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{String}**

### [.toAbbr](lib/number.js#L63)

Abbreviate numbers to the given number of `precision`.

**Params**

* `number` **{String}**
* `precision` **{String}**
* `returns` **{String}**

### [.toExponential](lib/number.js#L97)

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```js
{{toExponential number digits}};
```

### [.toFixed](lib/number.js#L113)

Formats the given number using fixed-point notation.

**Params**

* `number` **{Number}**
* `digits` **{Number}**: Optional. The number of digits to use after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
* `returns` **{Number}**

### [.toFloat](lib/number.js#L126)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [.toInt](lib/number.js#L136)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [.toPrecision](lib/number.js#L146)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### object

### [.extend](lib/object.js#L21)

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

### [.forIn](lib/object.js#L59)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [.forOwn](lib/object.js#L86)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

### [.get](lib/object.js#L116)

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

### [.getObject](lib/object.js#L138)

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

### [.hasOwn](lib/object.js#L157)

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

### [.isObject](lib/object.js#L174)

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

### [.merge](lib/object.js#L190)

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

### [.parseJSON](lib/object.js#L215)

Block helper that parses a string using `JSON.parse`,
then passes the parsed object to the block as context.

**Params**

* `string` **{String}**: The string to parse
* `options` **{Object}**: Handlebars options object

### [.pick](lib/object.js#L230)

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more proeperties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.

### [.stringify](lib/object.js#L257)

Stringify an object using `JSON.stringify`.

**Params**

* `obj` **{Object}**: Object to stringify
* `returns` **{String}**

### path

### [.basename](lib/path.js#L24)

Get the file extension from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{basename "docs/toc.md"}}
//=> 'toc.md'
```

### [.dirname](lib/path.js#L40)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dirname "docs/toc.md"}}
//=> 'docs'
```

### [.extname](lib/path.js#L56)

Get the file extension from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{extname "docs/toc.md"}}
//=> '.md'
```

### [.relative](lib/path.js#L73)

Get the relative filepath from `a` to `b`.

**Params**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{relative a b}}
```

### [.segments](lib/path.js#L97)

Get specific (joined) segments of a file path by passing a range of array indices.

**Params**

* `filepath` **{String}**: The file path to split into segments.
* `returns` **{String}**: Returns a single, joined file path.

**Example**

```js
{{segments "a/b/c/d" "2" "3"}}
//=> 'c/d'

{{segments "a/b/c/d" "1" "3"}}
//=> 'b/c/d'

{{segments "a/b/c/d" "1" "2"}}
//=> 'b/c'
```

### string

### [.camelcase](lib/string.js#L25)

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```js
{{camelcase "foo bar baz"}};
//=> 'fooBarBaz'
```

### [.capitalize](lib/string.js#L43)

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
//=> "Foo bar baz"
```

### [.capitalizeAll](lib/string.js#L62)

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
//=> "Foo Bar Baz"
```

### [.center](lib/string.js#L79)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### [.chop](lib/string.js#L112)

Like trim, but removes both extraneous whitespace **and non-word characters** from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to chop.
* `returns` **{String}**

**Example**

```js
{{chop "_ABC_"}}
//=> 'ABC'

{{chop "-ABC-"}}
//=> 'ABC'

{{chop " ABC "}}
//=> 'ABC'
```

### [.dashcase](lib/string.js#L130)

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{dashcase "a-b-c d_e"}}
//=> 'a-b-c-d-e'
```

### [.dotcase](lib/string.js#L149)

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{dotcase "a-b-c d_e"}}
//=> 'a.b.c.d.e'
```

### [.hyphenate](lib/string.js#L167)

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
//=> "foo-bar-baz-qux"
```

### [.isString](lib/string.js#L185)

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
//=> 'true'
```

### [.lowercase](lib/string.js#L201)

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
//=> 'foo bar baz'
```

### [.occurrences](lib/string.js#L221)

Return the number of occurrances of `substring` within the given `string`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: Number of occurrances

**Example**

```handlebars
{{occurrances "foo bar foo bar baz" "foo"}}
//=> 2
```

### [.pascalcase](lib/string.js#L253)

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{pascalcase "foo bar baz"}}
//=> 'FooBarBaz'
```

### [.pathcase](lib/string.js#L274)

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
<%= pathcase("a-b-c d_e") %>
//=> 'a/b/c/d/e'
```

### [.plusify](lib/string.js#L293)

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
//=> 'foo+bar+baz'
```

### [.reverse](lib/string.js#L312)

Reverse a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{reverse "abcde"}}
//=> 'edcba'
```

### [.replace](lib/string.js#L332)

Replace all occurrences of `a` with `b`.

**Params**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{replace "a b a b a b" "a" "z"}}
//=> 'z b z b z b'
```

### [.sentence](lib/string.js#L352)

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
//=> 'Hello world. Goodbye world.'
```

### [.snakecase](lib/string.js#L375)

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{snakecase "a-b-c d_e"}}
//=> 'a_b_c_d_e'
```

### [.split](lib/string.js#L394)

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is `,`

**Example**

```js
{{split "a,b,c" ","}}
//=> ['a', 'b', 'c']
```

### [.startsWith](lib/string.js#L419)

Tests whether a string begins with the given prefix.

**Params**

* `prefix` **{String}**
* `testString` **{String}**
* `options` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{#startsWith "Goodbye" "Hello, world!"}}
  Whoops
{{else}}
  Bro, do you even hello world?
{{/startsWith}}
```

### [.titleize](lib/string.js#L445)

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
//=> 'This Is Title Case'
```

### [.trim](lib/string.js#L475)

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```js
{{trim " ABC "}}
//=> 'ABC'
```

### [.uppercase](lib/string.js#L494)

Uppercase all of the characters in the given string. If used as a
block helper it will uppercase the entire block. This helper
does not support inverse blocks.

**Params**

* `str` **{String}**: The string to uppercase
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**

### url

### [.encodeURI](lib/url.js#L22)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### [.decodeURI](lib/url.js#L34)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### [.urlResolve](lib/url.js#L48)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### [.urlParse](lib/url.js#L60)

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### [.stripQuerystring](lib/url.js#L73)

Strip the query string from the give `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**

***

## utils

The following utils are exposed on `utils` as a convenience.

### [.toRegex](lib/utils/index.js#L105)

Converts a "regex-string" to an actual regular expression.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
utils.toRegex('"/foo/"');
//=> /foo/
```

### [.isRegex](lib/utils/index.js#L118)

Returns true if the given value appears to be a
regular expression.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

### [.changecase](lib/utils/index.js#L162)

Change casing on the given `string`, optionally passing a delimiter to use between words in the returned string.

**Params**

* `string` **{String}**: The string to change.
* `returns` **{String}**

**Example**

```js
utils.changecase('fooBarBaz');
//=> 'foo bar baz'

utils.changecase('fooBarBaz' '-');
//=> 'foo-bar-baz'
```

### [.random](lib/utils/index.js#L188)

Generate a random number

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{Number}**

### [.isUndefined](lib/utils/index.js#L201)

Returns true if the given value is `undefined` or
is a handlebars options hash.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [.isOptions](lib/utils/index.js#L215)

Returns true if the given value appears to be an

**options** object.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

### [.getArgs](lib/utils/index.js#L227)

Get options from the options hash and `this`.

**Params**

* `app` **{Object}**: The current application instance.
* `returns` **{Object}**

### [.isObject](lib/utils/index.js#L258)

Returns true if the given value is an object
and not an array.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [.isEmpty](lib/utils/index.js#L271)

Returns true if the given value is empty.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [.tryParse](lib/utils/index.js#L293)

Try to parse the given `string` as JSON. Fails
gracefully if the value cannot be parsed.

**Params**

* `string` **{String}**
* `returns` **{Object}**

### [.result](lib/utils/index.js#L309)

Return the given value. If the value is a function
it will be called, and the result is returned.

**Params**

* `val` **{any}**
* `returns` **{any}**

### [.identity](lib/utils/index.js#L324)

Return the given value, unchanged.

**Params**

* `val` **{any}**
* `returns` **{any}**

### [.isString](lib/utils/index.js#L336)

Return true if `val` is a string.

**Params**

* `val` **{any}**: The value to check
* `returns` **{Boolean}**

### [.arrayify](lib/utils/index.js#L348)

Cast `val` to an array.

**Params**

* `val` **{any}**: The value to arrayify.
* `returns` **{Array}**

***

## Related projects

* [assemble](https://www.npmjs.com/package/assemble): Assemble is a powerful, extendable and easy to use static site generator for node.js. Used… [more](https://www.npmjs.com/package/assemble) | [homepage](https://github.com/assemble/assemble)
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://www.npmjs.com/package/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers)
* [utils](https://www.npmjs.com/package/utils): Fast, generic JavaScript/node.js utility functions. | [homepage](https://github.com/jonschlinkert/utils)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Code coverage

As of February 06, 2016
Statements   : 100% ( 856/856 )
Branches     : 100% ( 446/446 )
Functions    : 100% ( 157/157 )
Lines        : 100% ( 840/840 )

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/handlebars-helpers/issues/new).

If this project doesn't do what you need, [please let us know](https://github.com/assemble/handlebars-helpers/issues)!

## Authors

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2013-2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Some helpers were sourced from [Swag, by Elving Rodriguez](http://elving.github.com/swag/), when this lib was created.
Released under the [MIT license](https://github.com/assemble/handlebars-helpers/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on February 06, 2016._