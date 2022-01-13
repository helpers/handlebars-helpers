# handlebars-helpers
<!-- {% raw %} -->

> More than 160 helpers for Handlebars.

- [Browser usage](#browser-usage)
- [Usage](#usage)
- [Helpers](#helpers)
- [History](#history)
- [About](#about)

You might also be interested in [template-helpers](https://github.com/jonschlinkert/template-helpers).

## Browser usage

See how to [use handlebars-helpers in the browser](https://github.com/doowb/handlebars-helpers-browserify-example).

## Usage

The main file (`index.js`) exports groups of helpers. See it for a list of all the groups.

Import the groups you want and register each as a helper:

```js
import handlebars from 'handlebars';
import { array, collection, math, number } from 'handlebars-helpers';

[array, collection, math, number].forEach(
  (helper) => {
    Handlebars.registerHelper(helper);
  },
);
```

## Helpers

## Categories

Currently **162 helpers** in **18 categories**:

* **[array](#array)** ([code](lib/array.js) | [unit tests](test/array.js))
* **[code](#code)** ([code](lib/code.js) | [unit tests](test/code.js))
* **[collection](#collection)** ([code](lib/collection.js) | [unit tests](test/collection.js))
* **[comparison](#comparison)** ([code](lib/comparison.js) | [unit tests](test/comparison.js))
* **[date](#date)** ([code](lib/date.js) | [unit tests](test/date.js))
* **[html](#html)** ([code](lib/html.js) | [unit tests](test/html.js))
* **[i18n](#internationalization)** ([code](lib/i18n.js) | [unit tests](test/i18n.js))
* **[inflection](#inflection)** ([code](lib/inflection.js) | [unit tests](test/inflection.js))
* **[markdown](#markdown)** ([code](lib/markdown.js) | [unit tests](test/markdown.js))
* **[match](#match)** ([code](lib/match.js) | [unit tests](test/match.js))
* **[math](#math)** ([code](lib/math.js) | [unit tests](test/math.js))
* **[misc](#misc)** ([code](lib/misc.js) | [unit tests](test/misc.js))
* **[number](#number)** ([code](lib/number.js) | [unit tests](test/number.js))
* **[object](#object)** ([code](lib/object.js) | [unit tests](test/object.js))
* **[path](#path)** ([code](lib/path.js) | [unit tests](test/path.js))
* **[regex](#regex)** ([code](lib/regex.js) | [unit tests](test/regex.js))
* **[string](#string)** ([code](lib/string.js) | [unit tests](test/string.js))
* **[url](#url)** ([code](lib/url.js) | [unit tests](test/url.js))

## All helpers

### Array helpers

Visit the: [code](lib/array.js) | [unit tests](test/array.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+array+helpers)

* **[after](#after)** ([code](lib/array.js) | [tests](test/array.js))
* **[arrayify](#arrayify)** ([code](lib/array.js) | [tests](test/array.js))
* **[before](#before)** ([code](lib/array.js) | [tests](test/array.js))
* **[eachIndex](#eachindex)** ([code](lib/array.js) | [tests](test/array.js))
* **[filter](#filter)** ([code](lib/array.js) | [tests](test/array.js))
* **[first](#first)** ([code](lib/array.js) | [tests](test/array.js))
* **[forEach](#foreach)** ([code](lib/array.js) | [tests](test/array.js))
* **[hasLength](#haslength)** ([code](lib/array.js) | [tests](test/array.js))
* **[inArray](#inarray)** ([code](lib/array.js) | [tests](test/array.js))
* **[isArray](#isarray)** ([code](lib/array.js) | [tests](test/array.js))
* **[itemAt](#itemat)** ([code](lib/array.js) | [tests](test/array.js))
* **[join](#join)** ([code](lib/array.js) | [tests](test/array.js))
* **[last](#last)** ([code](lib/array.js) | [tests](test/array.js))
* **[length](#length)** ([code](lib/array.js) | [tests](test/array.js))
* **[map](#map)** ([code](lib/array.js) | [tests](test/array.js))
* **[pluck](#pluck)** ([code](lib/array.js) | [tests](test/array.js))
* **[reverse](#reverse)** ([code](lib/array.js) | [tests](test/array.js))
* **[some](#some)** ([code](lib/array.js) | [tests](test/array.js))
* **[sort](#sort)** ([code](lib/array.js) | [tests](test/array.js))
* **[sortBy](#sortby)** ([code](lib/array.js) | [tests](test/array.js))
* **[withAfter](#withafter)** ([code](lib/array.js) | [tests](test/array.js))
* **[withBefore](#withbefore)** ([code](lib/array.js) | [tests](test/array.js))
* **[withFirst](#withfirst)** ([code](lib/array.js) | [tests](test/array.js))
* **[withGroup](#withgroup)** ([code](lib/array.js) | [tests](test/array.js))
* **[withLast](#withlast)** ([code](lib/array.js) | [tests](test/array.js))
* **[withSort](#withsort)** ([code](lib/array.js) | [tests](test/array.js))
* **[unique](#unique)** ([code](lib/array.js) | [tests](test/array.js))

### Code helpers

Visit the: [code](lib/code.js) | [unit tests](test/code.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+code+helpers)

* **[gist](#gist)** ([code](lib/code.js) | [tests](test/code.js))
* **[jsfiddle](#jsfiddle)** ([code](lib/code.js) | [tests](test/code.js))

### Collection helpers

Visit the: [code](lib/collection.js) | [unit tests](test/collection.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+collection+helpers)

* **[isEmpty](#isempty)** ([code](lib/collection.js) | [tests](test/collection.js))
* **[iterate](#iterate)** ([code](lib/collection.js) | [tests](test/collection.js))

### Comparison helpers

Visit the: [code](lib/comparison.js) | [unit tests](test/comparison.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+comparison+helpers)

* **[and](#and)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[compare](#compare)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[contains](#contains)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[default](#default)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[eq](#eq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[gt](#gt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[gte](#gte)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[has](#has)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[isTruthy](#istruthy)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifEven](#ifeven)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifNth](#ifnth)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifOdd](#ifodd)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[is](#is)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[isnt](#isnt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[lt](#lt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[lte](#lte)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[neither](#neither)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[not](#not)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[or](#or)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessEq](#unlesseq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessGt](#unlessgt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessLt](#unlesslt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessGteq](#unlessgteq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessLteq](#unlesslteq)** ([code](lib/comparison.js) | [tests](test/comparison.js))

### Date helpers

Visit the: [code](lib/date.js) | [unit tests](test/date.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+date+helpers)

* **[year](#year)** ([code](lib/date.js) | [tests](test/date.js))

### HTML helpers

Visit the: [code](lib/html.js) | [unit tests](test/html.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+html+helpers)

* **[attr](#attr)** ([code](lib/html.js) | [tests](test/html.js))
* **[css](#css)** ([code](lib/html.js) | [tests](test/html.js))
* **[js](#js)** ([code](lib/html.js) | [tests](test/html.js))
* **[sanitize](#sanitize)** ([code](lib/html.js) | [tests](test/html.js))
* **[ul](#ul)** ([code](lib/html.js) | [tests](test/html.js))
* **[ol](#ol)** ([code](lib/html.js) | [tests](test/html.js))
* **[thumbnailImage](#thumbnailimage)** ([code](lib/html.js) | [tests](test/html.js))

### Internationalization helpers

Visit the: [code](lib/i18n.js) | [unit tests](test/i18n.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+i18n+helpers)

* **[i18n](#i18n)** ([code](lib/i18n.js) | [tests](test/i18n.js))

### Inflection helpers

Visit the: [code](lib/inflection.js) | [unit tests](test/inflection.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+inflection+helpers)

* **[inflect](#inflect)** ([code](lib/inflection.js) | [tests](test/inflection.js))
* **[ordinalize](#ordinalize)** ([code](lib/inflection.js) | [tests](test/inflection.js))

### Markdown helpers

Visit the: [code](lib/markdown.js) | [unit tests](test/markdown.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+markdown+helpers)

* **[markdownToHTML](#markdowntohtml)** ([code](lib/markdown.js) | [tests](test/markdown.js))

### Match helpers

Visit the: [code](lib/match.js) | [unit tests](test/match.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+match+helpers)

* **[match](#match)** ([code](lib/match.js) | [tests](test/match.js))
* **[isMatch](#ismatch)** ([code](lib/match.js) | [tests](test/match.js))

### Math helpers

Visit the: [code](lib/math.js) | [unit tests](test/math.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+math+helpers)

* **[abs](#abs)** ([code](lib/math.js) | [no tests])
* **[add](#add)** ([code](lib/math.js) | [tests](test/math.js))
* **[avg](#avg)** ([code](lib/math.js) | [no tests])
* **[ceil](#ceil)** ([code](lib/math.js) | [tests](test/math.js))
* **[divide](#divide)** ([code](lib/math.js) | [tests](test/math.js))
* **[floor](#floor)** ([code](lib/math.js) | [tests](test/math.js))
* **[multiply](#multiply)** ([code](lib/math.js) | [tests](test/math.js))
* **[random](#random)** ([code](lib/math.js) | [tests](test/math.js))
* **[remainder](#remainder)** ([code](lib/math.js) | [tests](test/math.js))
* **[round](#round)** ([code](lib/math.js) | [tests](test/math.js))
* **[subtract](#subtract)** ([code](lib/math.js) | [tests](test/math.js))
* **[sum](#sum)** ([code](lib/math.js) | [tests](test/math.js))

### Misc helpers

Visit the: [code](lib/misc.js) | [unit tests](test/misc.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+misc+helpers)

* **[option](#option)** ([code](lib/misc.js) | [tests](test/misc.js))
* **[noop](#noop)** ([code](lib/misc.js) | [tests](test/misc.js))
* **[typeOf](#typeof)** ([code](lib/misc.js) | [no tests])
* **[withHash](#withhash)** ([code](lib/misc.js) | [tests](test/misc.js))

### Number helpers

Visit the: [code](lib/number.js) | [unit tests](test/number.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+number+helpers)

* **[bytes](#bytes)** ([code](lib/number.js) | [tests](test/number.js))
* **[addCommas](#addcommas)** ([code](lib/number.js) | [tests](test/number.js))
* **[phoneNumber](#phonenumber)** ([code](lib/number.js) | [tests](test/number.js))
* **[toAbbr](#toabbr)** ([code](lib/number.js) | [tests](test/number.js))
* **[toExponential](#toexponential)** ([code](lib/number.js) | [tests](test/number.js))
* **[toFixed](#tofixed)** ([code](lib/number.js) | [tests](test/number.js))
* **[toFloat](#tofloat)** ([code](lib/number.js) | [tests](test/number.js))
* **[toInt](#toint)** ([code](lib/number.js) | [tests](test/number.js))
* **[toPrecision](#toprecision)** ([code](lib/number.js) | [tests](test/number.js))

### Object helpers

Visit the: [code](lib/object.js) | [unit tests](test/object.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+object+helpers)

* **[extend](#extend)** ([code](lib/object.js) | [tests](test/object.js))
* **[forIn](#forIn)** ([code](lib/object.js) | [tests](test/object.js))
* **[forOwn](#forOwn)** ([code](lib/object.js) | [tests](test/object.js))
* **[toPath](#toPath)** ([code](lib/object.js) | [tests](test/object.js))
* **[get](#get)** ([code](lib/object.js) | [tests](test/object.js))
* **[getObject](#getObject)** ([code](lib/object.js) | [tests](test/object.js))
* **[hasOwn](#hasOwn)** ([code](lib/object.js) | [tests](test/object.js))
* **[isObject](#isObject)** ([code](lib/object.js) | [tests](test/object.js))
* **[JSONparse](#JSONparse)** ([code](lib/object.js) | [tests](test/object.js))
* **[JSONstringify](#JSONstringify)** ([code](lib/object.js) | [no tests])
* **[merge](#merge)** ([code](lib/object.js) | [tests](test/object.js))
* **[parseJSON](#parseJSON)** ([code](lib/object.js) | [no tests])
* **[pick](#pick)** ([code](lib/object.js) | [tests](test/object.js))
* **[stringify](#stringify)** ([code](lib/object.js) | [tests](test/object.js))

### Path helpers

Visit the: [code](lib/path.js) | [unit tests](test/path.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+path+helpers)

* **[absolute](#absolute)** ([code](lib/path.js) | [tests](test/path.js))
* **[dirname](#dirname)** ([code](lib/path.js) | [tests](test/path.js))
* **[relative](#relative)** ([code](lib/path.js) | [tests](test/path.js))
* **[basename](#basename)** ([code](lib/path.js) | [tests](test/path.js))
* **[stem](#stem)** ([code](lib/path.js) | [tests](test/path.js))
* **[extname](#extname)** ([code](lib/path.js) | [tests](test/path.js))
* **[resolve](#resolve)** ([code](lib/path.js) | [no tests])
* **[segments](#segments)** ([code](lib/path.js) | [tests](test/path.js))

### Regex helpers

Visit the: [code](lib/regex.js) | [unit tests](test/regex.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+regex+helpers)

* **[toRegex](#toRegex)** ([code](lib/regex.js) | [no tests])
* **[test](#test)** ([code](lib/regex.js) | [no tests])

### String helpers

Visit the: [code](lib/string.js) | [unit tests](test/string.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+string+helpers)

* **[append](#append)** ([code](lib/string.js) | [no tests])
* **[camelcase](#camelcase)** ([code](lib/string.js) | [tests](test/string.js))
* **[capitalize](#capitalize)** ([code](lib/string.js) | [tests](test/string.js))
* **[capitalizeAll](#capitalizeAll)** ([code](lib/string.js) | [tests](test/string.js))
* **[center](#center)** ([code](lib/string.js) | [tests](test/string.js))
* **[chop](#chop)** ([code](lib/string.js) | [tests](test/string.js))
* **[dashcase](#dashcase)** ([code](lib/string.js) | [tests](test/string.js))
* **[dotcase](#dotcase)** ([code](lib/string.js) | [tests](test/string.js))
* **[downcase](#downcase)** ([code](lib/string.js) | [no tests])
* **[ellipsis](#ellipsis)** ([code](lib/string.js) | [tests](test/string.js))
* **[hyphenate](#hyphenate)** ([code](lib/string.js) | [tests](test/string.js))
* **[isString](#isString)** ([code](lib/string.js) | [tests](test/string.js))
* **[lowercase](#lowercase)** ([code](lib/string.js) | [tests](test/string.js))
* **[occurrences](#occurrences)** ([code](lib/string.js) | [tests](test/string.js))
* **[pascalcase](#pascalcase)** ([code](lib/string.js) | [tests](test/string.js))
* **[pathcase](#pathcase)** ([code](lib/string.js) | [tests](test/string.js))
* **[plusify](#plusify)** ([code](lib/string.js) | [tests](test/string.js))
* **[prepend](#prepend)** ([code](lib/string.js) | [no tests])
* **[raw](#raw)** ([code](lib/string.js) | [no tests])
* **[remove](#remove)** ([code](lib/string.js) | [no tests])
* **[removeFirst](#removeFirst)** ([code](lib/string.js) | [no tests])
* **[replace](#replace)** ([code](lib/string.js) | [tests](test/string.js))
* **[replaceFirst](#replaceFirst)** ([code](lib/string.js) | [no tests])
* **[sentence](#sentence)** ([code](lib/string.js) | [tests](test/string.js))
* **[snakecase](#snakecase)** ([code](lib/string.js) | [tests](test/string.js))
* **[split](#split)** ([code](lib/string.js) | [tests](test/string.js))
* **[startsWith](#startsWith)** ([code](lib/string.js) | [tests](test/string.js))
* **[titleize](#titleize)** ([code](lib/string.js) | [tests](test/string.js))
* **[trim](#trim)** ([code](lib/string.js) | [tests](test/string.js))
* **[trimLeft](#trimLeft)** ([code](lib/string.js) | [no tests])
* **[trimRight](#trimRight)** ([code](lib/string.js) | [no tests])
* **[truncate](#truncate)** ([code](lib/string.js) | [tests](test/string.js))
* **[truncateWords](#truncateWords)** ([code](lib/string.js) | [no tests])
* **[upcase](#upcase)** ([code](lib/string.js) | [no tests])
* **[uppercase](#uppercase)** ([code](lib/string.js) | [tests](test/string.js))

### URL helpers

Visit the: [code](lib/url.js) | [unit tests](test/url.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+url+helpers)

* **[encodeURI](#encodeuri)** ([code](lib/url.js) | [tests](test/url.js))
* **[escape](#escape)** ([code](lib/url.js) | [no tests])
* **[decodeURI](#decodeuri)** ([code](lib/url.js) | [tests](test/url.js))
* **[url_encode](#url_encode)** ([code](lib/url.js) | [no tests])
* **[url_decode](#url_decode)** ([code](lib/url.js) | [no tests])
* **[urlResolve](#urlresolve)** ([code](lib/url.js) | [tests](test/url.js))
* **[urlParse](#urlparse)** ([code](lib/url.js) | [tests](test/url.js))
* **[stripQuerystring](#stripquerystring)** ([code](lib/url.js) | [tests](test/url.js))
* **[stripProtocol](#stripprotocol)** ([code](lib/url.js) | [no tests])

***

## array

### after

Returns all of the items in an array after the specified index. Opposite of [before](#before).

**Params**

* `array` **{Array}**: Collection
* `n` **{Number}**: Starting index (number of items to exclude)
* `returns` **{Array}**: Array exluding `n` items.

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{after array 1}}
<!-- results in: '["c"]' -->
```

### arrayify

Cast the given `value` to an array.

**Params**

* `value` **{any}**
* `returns` **{Array}**

**Example**

```handlebars
{{arrayify "foo"}}
<!-- results in: [ "foo" ] -->
```

### before

Return all of the items in the collection before the specified count. Opposite of [after](#after).

**Params**

* `array` **{Array}**
* `n` **{Number}**
* `returns` **{Array}**: Array excluding items after the given number.

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{before array 2}}
<!-- results in: '["a", "b"]' -->
```

### eachIndex

**Params**

* `array` **{Array}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] -->
{{#eachIndex array}}
  {{item}} is {{index}}
{{/eachIndex}}
```

### filter

Block helper that filters the given array and renders the block for values that evaluate to `true`, otherwise the inverse block is returned.

**Params**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#filter array "foo"}}AAA{{else}}BBB{{/filter}}
<!-- results in: 'BBB' -->
```

### first

Returns the first item, or first `n` items of an array.

**Params**

* `array` **{Array}**
* `n` **{Number}**: Number of items to return, starting at `0`.
* `returns` **{Array}**

**Example**

```handlebars
{{first "['a', 'b', 'c', 'd', 'e']" 2}}
<!-- results in: '["a", "b"]' -->
```

### forEach

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

```handlebars
<!-- accounts = [
{'name': 'John', 'email': 'john@example.com'},
{'name': 'Malcolm', 'email': 'malcolm@example.com'},
{'name': 'David', 'email': 'david@example.com'}
] -->

{{#forEach accounts}}
  <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
    {{ name }}
  </a>{{#unless isLast}}, {{/unless}}
{{/forEach}}
```

### inArray

Block helper that renders the block if an array has the given `value`. Optionally specify an inverse block to render when the array does not have the given value.

**Params**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#inArray array "d"}}
  foo
{{else}}
  bar
{{/inArray}}
<!-- results in: 'bar' -->
```

### isArray

Returns true if `value` is an es5 array.

**Params**

* `value` **{any}**: The value to test.
* `returns` **{Boolean}**

**Example**

```handlebars
{{isArray "abc"}}
<!-- results in: false -->

<!-- array: [1, 2, 3] -->
{{isArray array}}
<!-- results in: true -->
```

### itemAt

Returns the item from `array` at index `idx`.

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `returns` **{any}** `value`

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{itemAt array 1}}
<!-- results in: 'b' -->
```

### join

Join all elements of array into a string, optionally using a given separator.

**Params**

* `array` **{Array}**
* `separator` **{String}**: The separator to use. Defaults to `,`.
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{join array}}
<!-- results in: 'a, b, c' -->

{{join array '-'}}
<!-- results in: 'a-b-c' -->
```

### hasLength

Returns true if the the length of the given `value` is equal
to the given `length`. Can be used as a block or inline helper.

**Params**

* `value` **{Array|String}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

### last

Returns the last item, or last `n` items of an array or string. Opposite of [first](#first).

**Params**

* `value` **{Array|String}**: Array or string.
* `n` **{Number}**: Number of items to return from the end of the array.
* `returns` **{Array}**

**Example**

```handlebars
<!-- var value = ['a', 'b', 'c', 'd', 'e'] -->

{{last value}}
<!-- results in: ['e'] -->

{{last value 2}}
<!-- results in: ['d', 'e'] -->

{{last value 3}}
<!-- results in: ['c', 'd', 'e'] -->
```

### length

Returns the length of the given string or array.

**Params**

* `value` **{Array|Object|String}**
* `returns` **{Number}**: The length of the value.

**Example**

```handlebars
{{length '["a", "b", "c"]'}}
<!-- results in: 3 -->

<!-- results in: myArray = ['a', 'b', 'c', 'd', 'e']; -->
{{length myArray}}
<!-- results in: 5 -->

<!-- results in: myObject = {'a': 'a', 'b': 'b'}; -->
{{length myObject}}
<!-- results in: 2 -->
```

### map

Returns a new array, created by calling `function` on each element of the given `array`. For example,

**Params**

* `array` **{Array}**
* `fn` **{Function}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'], and "double" is a
fictitious function that duplicates letters -->
{{map array double}}
<!-- results in: '["aa", "bb", "cc"]' -->
```

### pluck

Map over the given object or array or objects and create an array of values from the given `prop`. Dot-notation may be used (as a string) to get nested properties.

**Params**

* `collection` **{Array|Object}**
* `prop` **{Function}**
* `returns` **{String}**

**Example**

```handlebars
// {{pluck items "data.title"}}
<!-- results in: '["aa", "bb", "cc"]' -->
```

### reverse

Reverse the elements in an array, or the characters in a string.

**Params**

* `value` **{Array|String}**
* `returns` **{Array|String}**: Returns the reversed string or array.

**Example**

```handlebars
<!-- value: 'abcd' -->
{{reverse value}}
<!-- results in: 'dcba' -->
<!-- value: ['a', 'b', 'c', 'd'] -->
{{reverse value}}
<!-- results in: ['d', 'c', 'b', 'a'] -->
```

### some

Block helper that returns the block if the callback returns true for some value in the given array.

**Params**

* `array` **{Array}**
* `iter` **{Function}**: Iteratee
* **{Options}**: Handlebars provided options object
* `returns` **{String}**

**Example**

```handlebars
<!-- array: [1, 'b', 3] -->
{{#some array isString}}
  Render me if the array has a string.
{{else}}
  Render me if it doesn't.
{{/some}}
<!-- results in: 'Render me if the array has a string.' -->
```

### sort

Sort the given `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.
* `key` **{String|Function}**: The object key to sort by, or sorting function.

**Example**

```handlebars
<!-- array: ['b', 'a', 'c'] -->
{{sort array}}
<!-- results in: '["a", "b", "c"]' -->
```

### sortBy

Sort an `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.
* `props` **{String|Function}**: One or more properties to sort by, or sorting functions to use.

**Example**

```handlebars
<!-- array: [{a: 'zzz'}, {a: 'aaa'}] -->
{{sortBy array "a"}}
<!-- results in: '[{"a":"aaa"}, {"a":"zzz"}]' -->
```

### withAfter

Use the items in the array _after_ the specified index as context inside a block. Opposite of [withBefore](#withBefore).

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withAfter array 3}}
  {{this}}
{{/withAfter}}
<!-- results in: "de" -->
```

### withBefore

Use the items in the array _before_ the specified index as context inside a block. Opposite of [withAfter](#withAfter).

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withBefore array 3}}
  {{this}}
{{/withBefore}}
<!-- results in: 'ab' -->
```

### withFirst

Use the first item in a collection inside a handlebars block expression. Opposite of [withLast](#withLast).

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#withFirst array}}
  {{this}}
{{/withFirst}}
<!-- results in: 'a' -->
```

### withGroup

Block helper that groups array elements by given group `size`.

**Params**

* `array` **{Array}**: The array to iterate over
* `size` **{Number}**: The desired length of each array "group"
* `options` **{Object}**: Handlebars options
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a','b','c','d','e','f','g','h'] -->
{{#withGroup array 4}}
  {{#each this}}
    {{.}}
  {{each}}
  <br>
{{/withGroup}}
<!-- results in: -->
<!-- 'a','b','c','d'<br> -->
<!-- 'e','f','g','h'<br> -->
```

### withLast

Use the last item or `n` items in an array as context inside a block. Opposite of [withFirst](#withFirst).

**Params**

* `array` **{Array}**
* `idx` **{Number}**: The starting index.
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#withLast array}}
  {{this}}
{{/withLast}}
<!-- results in: 'c' -->
```

### withSort

Block helper that sorts a collection and exposes the sorted collection as context inside the block.

**Params**

* `array` **{Array}**
* `prop` **{String}**
* `options` **{Object}**: Specify `reverse="true"` to reverse the array.
* `returns` **{String}**

**Example**

```handlebars
<!-- array: ['b', 'a', 'c'] -->
{{#withSort array}}{{this}}{{/withSort}}
<!-- results in: 'abc' -->
```

### unique

Block helper that return an array with all duplicate values removed. Best used along with a [each](#each) helper.

**Params**

* `array` **{Array}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
<!-- array: ['a', 'a', 'c', 'b', 'e', 'e'] -->
{{#each (unique array)}}{{.}}{{/each}}
<!-- results in: 'acbe' -->
```

## code

### gist

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{gist "12345"}}
```

### jsfiddle

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

## collection

### isEmpty

Inline, subexpression, or block helper that returns true (or the block) if the given collection is empty, or false (or the inverse block, if supplied) if the colleciton is not empty.

**Params**

* `collection` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- array: [] -->
{{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}
<!-- results in: 'AAA' -->

<!-- array: [] -->
{{isEmpty array}}
<!-- results in: true -->
```

### iterate

Block helper that iterates over an array or object. If
an array is given, `.forEach` is called, or if an object
is given, `.forOwn` is called, otherwise the inverse block
is returned.

**Params**

* `collection` **{Object|Array}**: The collection to iterate over
* `options` **{Object}**
* `returns` **{String}**

## comparison

### and

Helper that renders the block if **both** of the given values are truthy. If an inverse block is specified it will be rendered when falsy. Works as a block helper, inline helper or subexpression.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

**Example**

```handlebars
<!-- {great: true, magnificent: true} -->
{{#and great magnificent}}A{{else}}B{{/and}}
<!-- results in: 'A' -->
```

### compare

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

### contains

Block helper that renders the block if `collection` has the given `value`, using strict equality (`===`) for comparison, otherwise the inverse block is rendered (if specified). If a `startIndex` is specified and is negative, it is used as the offset from the end of the collection.

**Params**

* `collection` **{Array|Object|String}**: The collection to iterate over.
* `value` **{any}**: The value to check for.
* `[startIndex=0]` **{Number}**: Optionally define the starting index.
* `options` **{Object}**: Handlebars provided options object.

**Example**

```handlebars
<!-- array = ['a', 'b', 'c'] -->
{{#contains array "d"}}
  This will not be rendered.
{{else}}
  This will be rendered.
{{/contains}}
```

### default

Returns the first value that is not undefined, otherwise the "default" value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### eq

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### gt

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### gte

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### has

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### isTruthy

Returns true if the given `value` is truthy.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### ifEven

Return true if the given value is an even number.

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

### ifNth

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### ifOdd

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

### is

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [eq](#eq) but does not do strict equality.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### isnt

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [unlessEq](#unlesseq) but does not use strict equality for
comparisons.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### lt

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### lte

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### neither

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### not

Returns true if `val` is falsey. Works as a block or inline helper.

**Params**

* `val` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### or

Block helper that renders a block if **any of** the given values is truthy. If an inverse block is specified it will be rendered when falsy.

**Params**

* `arguments` **{...any}**: Variable number of arguments
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#or a b c}}
  If any value is true this will be rendered.
{{/or}}
```

### unlessEq

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### unlessGt

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### unlessLt

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### unlessGteq

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### unlessLteq

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

## date

### year

Get the current year.

**Example**

```handlebars
{{year}}
<!-- 2017 -->
```

## html

### attr

Stringify attributes on the options `hash`.

**Params**

* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
<!-- value = 'bar' -->
<div{{attr foo=value}}></div>
<!-- results in: <div foo="bar"></div>
```

### css

Add an array of `<link>` tags. Automatically resolves relative paths to `options.assets` if passed on the context.

**Params**

* `list` **{String|Array}**: One or more stylesheet urls.
* `returns` **{String}**

**Example**

```handlebars
<!-- {stylesheets: ['foo.css', 'bar.css']} -->
{{css stylesheets}}

<!-- results in: -->
<!-- <link type="text/css" rel="stylesheet" href="foo.css"> -->
<!-- <link type="text/css" rel="stylesheet" href="bar.css"> -->
```

### js

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{js scripts}}
```

### sanitize

Strip HTML tags from a string, so that only the text nodes are preserved.

**Params**

* `str` **{String}**: The string of HTML to sanitize.
* `returns` **{String}**

**Example**

```handlebars
{{sanitize "<span>foo</span>"}}
<!-- results in: 'foo' -->
```

### ul

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### ol

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### thumbnailImage

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:
* `context.alt` **{String}**
* `context.src` **{String}**
* `context.width` **{Number}**
* `context.height` **{Number}**
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

## internationalization

### i18n

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**
* `options` **{Object}**
* `returns` **{String}**

## inflection

### inflect

Returns either the `singular` or `plural` inflection of a word based on the given `count`.

**Params**

* `count` **{Number}**
* `singular` **{String}**: The singular form
* `plural` **{String}**: The plural form
* `includeCount` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{inflect 0 "string" "strings"}}
<!-- "strings" -->
{{inflect 1 "string" "strings"}}
<!-- "string" -->
{{inflect 1 "string" "strings" true}}
<!-- "1 string" -->
{{inflect 2 "string" "strings"}}
<!-- "strings" -->
{{inflect 2 "string" "strings" true}}
<!-- "2 strings" -->
```

### ordinalize

Returns an ordinalized number as a string.

**Params**

* `val` **{String}**: The value to ordinalize.
* `returns` **{String}**: The ordinalized number

**Example**

```handlebars
{{ordinalize 1}}
<!-- '1st' -->
{{ordinalize 21}}
<!-- '21st' -->
{{ordinalize 29}}
<!-- '29th' -->
{{ordinalize 22}}
<!-- '22nd' -->
```

## markdown

### markdownToHTML

Block helper that converts a string of inline markdown to HTML.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#markdownToHTML}}
# Foo

> some quote
{{/markdownToHTML}}
<!-- results in:
<h1>Foo</h1>
<blockquote>
<p>some quote</p>
</blockquote>
-->
```

### md

Read a markdown file from the file system and inject its contents after converting it to HTML.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{md "foo/bar.md"}}
```

## match

### match

Returns an array of strings that match the given glob pattern(s). Options may be passed on the options hash or locals.

**Params**

* `files` **{Array|String}**
* `patterns` **{Array|String}**: One or more glob patterns.
* `locals` **{Object}**
* `options` **{Object}**
* `returns` **{Array}**: Array of matches

**Example**

```handlebars
{{match (readdir "foo") "*.js"}}
{{match (readdir "foo") (toRegex "\\.js$")}}
```

### isMatch

Returns true if a filepath contains the given pattern. Options may be passed on the options hash or locals.

**Params**

* `filepath` **{String}**
* `pattern` **{String}**
* `options` **{Object}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isMatch "foo.md" "*.md"}}
<!-- results in: true -->
```

## math

### abs

Return the magnitude of `a`.

**Params**

* `a` **{Number}**
* `returns` **{Number}**

### add

Return the sum of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### avg

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
<!-- results in: '3' -->
```

### ceil

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### divide

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### floor

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### multiply

Return the product of `a` times `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

### random

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{Number}**

### remainder

Get the remainder of dividing `a` by `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

**Example**

```handlebars
{{remainder 7 5}}
<!-- results in: 2 -->
```

### round

Round the given number.

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### subtract

Return the product of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### sum

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{sum "[1, 2, 3, 4, 5]"}}
<!-- results in: '15' -->
```

## misc

### option

Return the given value of `prop` from `this.options`.

**Params**

* `prop` **{String}**
* `returns` **{any}**

**Example**

```handlebars
<!-- context = {options: {a: {b: {c: 'ddd'}}}} -->
{{option "a.b.c"}}
<!-- results => `ddd` -->
```

### noop

Block helper that renders the block without taking any arguments.

**Params**

* `options` **{Object}**
* `returns` **{String}**

### typeOf

Get the native type of the given `value`

**Params**

* `value` **{any}**
* `returns` **{String}**: Returns the type of value.

**Example**

```handlebars
{{typeOf 1}}
//=> 'number'
{{typeOf "1"}}
//=> 'string'
{{typeOf "foo"}}
//=> 'string'
```

### withHash

Block helper that builds the context for the block
from the options hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

## number

### bytes

Format a number to it's equivalent in bytes. If a string is passed, it's length will be formatted and returned.

**Examples:**

* `'foo' => 3 B`
* `13661855 => 13.66 MB`
* `825399 => 825.39 kB`
* `1396 => 1.4 kB`

**Params**

* `number` **{Number|String}**
* `returns` **{String}**

### addCommas

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### phoneNumber

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### toAbbr

Abbreviate numbers to the given number of `precision`. This is for
general numbers, not size in bytes.

**Params**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

### toExponential

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```handlebars
{{toExponential number digits}};
```

### toFixed

Formats the given number using fixed-point notation.

**Params**

* `number` **{Number}**
* `digits` **{Number}**: (Optional) The number of digits to appear after the decimal point; this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.
* `returns` **{String}**: A string representing the given number using fixed-point notation.

**Example**

```handlebars
{{toFixed "1.1234" 2}}
//=> '1.12'
```

### toFloat

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### toInt

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### toPrecision

Returns a string representing the `Number` object to the specified precision.

**Params**

* `number` **{Number}**
* `precision` **{Number}**: (Optional) An integer specifying the number of significant digits. If precison is not between 1 and 100 (inclusive), it will be coerced to `0`.
* `returns` **{String}**: A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.

**Example**

```handlebars
{{toPrecision "1.1234" 2}}
//=> '1.1'
```

## object

### extend

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

### forIn

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### forOwn

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

### toPath

Take arguments and, if they are string or number, convert them to a dot-delineated object property path.

**Params**

* `prop` **{String|Number}**: The property segments to assemble (can be multiple).
* `returns` **{String}**

### get

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

### getObject

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

### hasOwn

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

### isObject

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

### JSONparse

Parses the given string using `JSON.parse`.

**Params**

* `string` **{String}**: The string to parse

**Example**

```handlebars
<!-- string: '{"foo": "bar"}' -->
{{JSONparse string}}
<!-- results in: { foo: 'bar' } -->
```

### JSONstringify

Stringify an object using `JSON.stringify`.

**Params**

* `obj` **{Object}**: Object to stringify
* `returns` **{String}**

**Example**

```handlebars
<!-- object: { foo: 'bar' } -->
{{JSONstringify object}}
<!-- results in: '{"foo": "bar"}' -->
```

### merge

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

### pick

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more properties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.

## path

### absolute

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{absolute "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### dirname

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dirname "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### relative

Get the relative filepath from `a` to `b`.

**Params**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{relative a b}}
```

### basename

Get the file extension from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{basename "docs/toc.md"}}
<!-- results in: 'toc.md' -->
```

### stem

Get the "stem" from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{stem "docs/toc.md"}}
<!-- results in: 'toc' -->
```

### extname

Get the file extension from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{extname "docs/toc.md"}}
<!-- results in: '.md' -->
```

### resolve

Resolve an absolute path from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{resolve "docs/toc.md"}}
<!-- results in: '/User/dev/docs/toc.md' -->
```

### segments

Get specific (joined) segments of a file path by passing a range of array indices.

**Params**

* `filepath` **{String}**: The file path to split into segments.
* `returns` **{String}**: Returns a single, joined file path.

**Example**

```handlebars
{{segments "a/b/c/d" "2" "3"}}
<!-- results in: 'c/d' -->

{{segments "a/b/c/d" "1" "3"}}
<!-- results in: 'b/c/d' -->

{{segments "a/b/c/d" "1" "2"}}
<!-- results in: 'b/c' -->
```

## regex

### toRegex

Convert the given string to a regular expression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{toRegex "foo"}}
<!-- results in: /foo/ -->
```

### test

Returns true if the given `str` matches the given regex. A regex can be passed on the context, or using the [toRegex](#toregex) helper as a subexpression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{test "bar" (toRegex "foo")}}
<!-- results in: false -->
{{test "foobar" (toRegex "foo")}}
<!-- results in: true -->
{{test "foobar" (toRegex "^foo$")}}
<!-- results in: false -->
```

## string

### append

Append the specified `suffix` to the given string.

**Params**

* `str` **{String}**
* `suffix` **{String}**
* `returns` **{String}**

**Example**

```handlebars
<!-- given that "item.stem" is "foo" -->
{{append item.stem ".html"}}
<!-- results in:  'foo.html' -->
```

### camelcase

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```handlebars
{{camelcase "foo bar baz"}};
<!-- results in:  'fooBarBaz' -->
```

### capitalize

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
<!-- results in:  "Foo bar baz" -->
```

### capitalizeAll

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- results in:  "Foo Bar Baz" -->
```

### center

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### chop

Like trim, but removes both extraneous whitespace **and non-word characters** from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to chop.
* `returns` **{String}**

**Example**

```handlebars
{{chop "_ABC_"}}
<!-- results in:  'ABC' -->

{{chop "-ABC-"}}
<!-- results in:  'ABC' -->

{{chop " ABC "}}
<!-- results in:  'ABC' -->
```

### dashcase

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- results in:  'a-b-c-d-e' -->
```

### dotcase

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- results in:  'a.b.c.d.e' -->
```

### downcase

Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{downcase "aBcDeF"}}
<!-- results in:  'abcdef' -->
```

### ellipsis

Truncates a string to the specified `length`, and appends it with an elipsis, `…`.

**Params**

* `str` **{String}**
* `length` **{Number}**: The desired length of the returned string.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
{{ellipsis (sanitize "<span>foo bar baz</span>"), 7}}
<!-- results in:  'foo bar…' -->
{{ellipsis "foo bar baz", 7}}
<!-- results in:  'foo bar…' -->
```

### hyphenate

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- results in:  "foo-bar-baz-qux" -->
```

### isString

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
<!-- results in:  'true' -->
```

### lowercase

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- results in:  'foo bar baz' -->
```

### occurrences

Return the number of occurrences of `substring` within the given `string`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: Number of occurrences

**Example**

```handlebars
{{occurrences "foo bar foo bar baz" "foo"}}
<!-- results in:  2 -->
```

### pascalcase

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- results in:  'FooBarBaz' -->
```

### pathcase

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- results in:  'a/b/c/d/e' -->
```

### plusify

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
<!-- results in:  'foo+bar+baz' -->
```

### prepend

Prepends the given `string` with the specified `prefix`.

**Params**

* `str` **{String}**
* `prefix` **{String}**
* `returns` **{String}**

**Example**

```handlebars
<!-- given that "val" is "bar" -->
{{prepend val "foo-"}}
<!-- results in:  'foo-bar' -->
```

### raw

Render a block without processing mustache templates inside the block.

**Params**

* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{{{#raw}}}}
{{foo}}
{{{{/raw}}}}
<!-- results in:  '{{foo}}' -->
```

### remove

Remove all occurrences of `substring` from the given `str`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{remove "a b a b a b" "a "}}
<!-- results in:  'b b b' -->
```

### removeFirst

Remove the first occurrence of `substring` from the given `str`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{remove "a b a b a b" "a"}}
<!-- results in:  ' b a b a b' -->
```

### replace

Replace all occurrences of substring `a` with substring `b`.

**Params**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- results in:  'z b z b z b' -->
```

### replaceFirst

Replace the first occurrence of substring `a` with substring `b`.

**Params**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- results in:  'z b a b a b' -->
```

### sentence

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- results in:  'Hello world. Goodbye world.' -->
```

### snakecase

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- results in:  'a_b_c_d_e' -->
```

### split

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is an empty string.

**Example**

```handlebars
{{split "a,b,c" ","}}
<!-- results in:  ['a', 'b', 'c'] -->
```

### startsWith

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

### titleize

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
<!-- results in:  'This Is Title Case' -->
```

### trim

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC' -->
```

### trimLeft

Removes extraneous whitespace from the beginning of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC ' -->
```

### trimRight

Removes extraneous whitespace from the end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trimRight " ABC "}}
<!-- results in:  ' ABC' -->
```

### truncate

Truncate a string to the specified `length`. Also see [ellipsis](#ellipsis).

**Params**

* `str` **{String}**
* `limit` **{Number}**: The desired length of the returned string.
* `suffix` **{String}**: Optionally supply a string to use as a suffix to denote when the string has been truncated. Otherwise an ellipsis (`…`) will be used.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
truncate("foo bar baz", 7);
<!-- results in:  'foo bar' -->
truncate(sanitize("<span>foo bar baz</span>", 7));
<!-- results in:  'foo bar' -->
```

### truncateWords

Truncate a string to have the specified number of words. Also see [truncate](#truncate).

**Params**

* `str` **{String}**
* `limit` **{Number}**: The desired length of the returned string.
* `suffix` **{String}**: Optionally supply a string to use as a suffix to denote when the string has been truncated.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
truncateWords("foo bar baz", 1);
<!-- results in:  'foo…' -->
truncateWords("foo bar baz", 2);
<!-- results in:  'foo bar…' -->
truncateWords("foo bar baz", 3);
<!-- results in:  'foo bar baz' -->
```

### upcase

Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{upcase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```

### uppercase

Uppercase all of the characters in the given string. If used as a block helper it will uppercase the entire block. This helper does not support inverse blocks.

**Params**

* `str` **{String}**: The string to uppercase
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**

**Example**

```handlebars
{{uppercase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```

## url

### encodeURI

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### escape

Escape the given string by replacing characters with escape sequences.
Useful for allowing the string to be used in a URL, etc.

**Params**

* `str` **{String}**
* `returns` **{String}**: Escaped string.

### decodeURI

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### url_encode

Alias for [encodeURI](#encodeuri).

### url_decode

Alias for [decodeURI](#decodeuri).

### urlResolve

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### urlParse

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### stripQuerystring

Strip the query string from the given `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**: the url without the queryString

### stripProtocol

Strip protocol from a `url`. Useful for displaying media that may have an 'http' protocol on secure connections.

**Params**

* `str` **{String}**
* `returns` **{String}**: the url with http protocol stripped

**Example**

```handlebars
<!-- url = 'http://foo.bar' -->
{{stripProtocol url}}
<!-- results in: '//foo.bar' -->
```

***

## History

## [0.11.0](https://github.com/wirechunk/handlebars-helpers/compare/0.10.0...0.11.0) - 2022-01-12

## [0.10.0](https://github.com/wirechunk/handlebars-helpers/compare/0.9.0...0.10.0) - 2017-11-17

**changes**

* adds `unique` to array helpers
* updates `css` helper to ensure that path.join() is not called on an absolute URL.

## [v0.9.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.8.4...v0.9.0) - 2017-07-03

**changes**

* all unit tests now use assert instead of should
* remove `fileSize` helper in favor of new `bytes` helper, which does the same thing, but returns `B` instead of `byte` or `bytes`.
* JSONParse helper is no longer a block helper. It now returns an object, which can be used as a subexpression to achieve the same behavior as before.
* adds better error handling for path helpers, since node.js errors are terrible. We have a better way to handle errors that will be implemented in a near future release.
* adds inline helper support to `isEmpty`, so it can now be used as an inline or block helper
* adds `raw` helper
* adds regex helpers
* adds inline helper support to most of the comparison helpers, so they can now be used as inline or block helpers
* adds `pluck` helper to array helpers
* adds `prepend` and `append` helpers to string helpers
* adds `isTruthy` and `isFalsey` comparison helpers
* adds `escape` and `url_encode` and `url_decode` URL helpers
* adds `attr` helper to html helpers
* adds `year` helper to date helpers
* adds `typeOf` and `frame` helpers to misc helpers
* adds `abs`, `minus`, `modulo`, `plus`, `times` to math helpers
* moves `ellipsis` helper from `html` helpers to string helpers
* moves `truncate` helper from `html` helpers to string helpers
* moves `reverse` helper from `string` helpers to array helpers
* differentiate `eq` and `is` helpers so that `eq` is strict equality and `is` is not
* removes `mm` helper, use `match` instead

## [v0.8.4](https://github.com/wirechunk/handlebars-helpers/compare/v0.8.3...v0.8.4) - 2017-07-03

**changes**

* removes strlen helper in favor of fixing the length helper

## [v0.8.3](https://github.com/wirechunk/handlebars-helpers/compare/v0.8.2...v0.8.3) - 2017-07-03

**changes**

* adds strlen helper
* adds itemAt helper
* clean up code comments for array helpers

## [v0.8.2](https://github.com/wirechunk/handlebars-helpers/compare/v0.8.1...v0.8.2) - 2017-03-30

**changes**

* documentation updates
* fixes md helper to use sync by default

## [v0.8.1](https://github.com/wirechunk/handlebars-helpers/compare/v0.8.0...v0.8.1) - 2017-03-30

**changes**

* fixes sorting in withSort helper. see https://github.com/wirechunk/handlebars-helpers/pull/245
* adds toPath helper
* handle null inputs in number helpers
* adds stripProtocol helper

## [v0.8.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.7.6...v0.8.0) - 2017-01-25

**changes**

* handle string arguments in list helpers
* adds JSONParse helper as an alias for parseJSON

## [v0.7.6](https://github.com/wirechunk/handlebars-helpers/compare/v0.7.0...v0.7.6) - 2017-01-08

**changes**

* fixes markdown helpers. see https://github.com/wirechunk/handlebars-helpers/pull/226
* documentation improvements and other minor fixes

## [v0.7.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.6.0...v0.7.0) - 2016-07-16

**changes**

* The [or](#or) helper can now take a variable number of arguments

## [v0.6.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.3.3...v0.6.0) - 2016-05-13

**changes**

* the main export is now a function that takes a name or array of names of helper types to load. Example `helpers(['string', 'array'])` will load only the `string` and `array` helpers
* helper types can alternatively be accessed as methods. example - `helpers.path()` will return all of the path helpers.
* handlebars may be provided by the user. if not provided it will fall back to the `handlebars-helpers`  handlebars
* helpers are now as generic as possible, with little to no code related to assemble, grunt, etc.
* helpers are lazy-loaded using getters for improved performance
* Once tests are added for the `md` and `markdown` helpers, we'll have 100% unit test coverage on helpers

## [v0.3.3](https://github.com/wirechunk/handlebars-helpers/compare/v0.3.2...v0.3.3) - 2013-09-03

**changes**

* Adds fileSize helper.
* Adds startsWith helper.

## [v0.3.2](https://github.com/wirechunk/handlebars-helpers/compare/v0.3.0...v0.3.2) - 2013-08-20

**changes**

* Adds glob helper.

## [v0.3.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.2.4...v0.3.0) - 2013-07-30

**changes**

* The project has been refactored, cleaned up, and full documentation has bee put up at http://assemble.io

## [v0.2.4](https://github.com/wirechunk/handlebars-helpers/compare/v0.2.3...v0.2.4) - 2013-05-11

**changes**

* Adding object globbing utility functions to be used in helpers later.

## [v0.2.3](https://github.com/wirechunk/handlebars-helpers/compare/v0.2.0...v0.2.3) - 2013-05-11

**changes**

* File globbing added to some helpers. Including md and some file helpers.

## [v0.2.0](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.32...v0.2.0) - 2013-05-07

**changes**

* A bunch of new tests for markdown and special helpers.
* Refactored most of the rest of the helpers to separate functions from Handlebars registration.

## [v0.1.32](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.31...v0.1.32) - 2013-05-02

**changes**

* Updates utils and a number of helpers, including value, property, and stringify.

## [v0.1.31](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.30...v0.1.31) - 2013-04-21

**changes**

* Fixes relative helper

## [v0.1.30](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.25...v0.1.30) - 2013-04-20

**changes**

* Refactoring helpers-collection module to separate the functions from the Handlebars helper registration process.

## [v0.1.25](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.21...v0.1.25) - 2013-04-16

**changes**

* Adding defineSection and renderSection helpers to try to get sections populated in a layout from the page.

## [v0.1.21](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.20...v0.1.21) - 2013-04-07

**changes**

* Add markdown helpers back, add more tests.

## [v0.1.20](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.11...v0.1.20) - 2013-04-06

**changes**

* Generalized helpers structure, externalized utilities.

## [v0.1.11](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.10...v0.1.11) - 2013-04-05

**changes**

* New authors and gist helpers, general cleanup and new tests.

## [v0.1.10](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.8...v0.1.10) - 2013-04-04

**changes**

* Externalized utility javascript from helpers.js

## [v0.1.8](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.7...v0.1.8) - 2013-03-28

**changes**

* Gruntfile updated with mocha tests for 71 helpers, bug fixes.

## [v0.1.7](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.3...v0.1.7) - 2013-03-18

**changes**

* New path helper 'relative', for resolving relative path from one absolute path to another.

## [v0.1.3](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.2...v0.1.3) - 2013-03-16

**changes**

* New helpers, 'formatPhoneNumber' and 'eachProperty'

## [v0.1.2](https://github.com/wirechunk/handlebars-helpers/compare/v0.1.0...v0.1.2) - 2013-03-15

**changes**

* Update README.md with documentation, examples.

## [v0.1.0] - 2013-03-06

**changes**

* First commit.

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers "Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.")
* [utils](https://www.npmjs.com/package/utils): Fast, generic JavaScript/node.js utility functions. | [homepage](https://github.com/jonschlinkert/utils "Fast, generic JavaScript/node.js utility functions.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

### Release history

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](https://twitter.com/doowb)

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
When this project was created some helpers were sourced from [Swag, by Elving Rodriguez](http://elving.github.com/swag/).
Released under the [MIT License](LICENSE).
<!-- {% endraw %} -->
