# handlebars-helpers

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.

You might also be interested in [template-helpers](https://github.com/jonschlinkert/template-helpers).

- [Install](#install)
- [Browser usage](#browser-usage)
- [Usage](#usage)
- [Helpers](#helpers)
- [Utils](#utils)
- [History](#history)
- [About](#about)

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

Currently **189 helpers** in **20 categories**:

* **[array](#array)** ([code](lib/array.js) | [unit tests](test/array.js))
* **[code](#code)** ([code](lib/code.js) | [unit tests](test/code.js))
* **[collection](#collection)** ([code](lib/collection.js) | [unit tests](test/collection.js))
* **[comparison](#comparison)** ([code](lib/comparison.js) | [unit tests](test/comparison.js))
* **[date](#date)** ([code](lib/date.js) | [unit tests](test/date.js))
* **[html](#html)** ([code](lib/html.js) | [unit tests](test/html.js))
* **[i18n](#i18n)** ([code](lib/i18n.js) | [unit tests](test/i18n.js))
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

### [array helpers](#array)

Visit the: [code](lib/array.js) | [unit tests](test/array.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+array+helpers)

* **[after](#after)** ([code](lib/array.js) | [tests](test/array.js))
* **[arrayify](#arrayify)** ([code](lib/array.js) | [tests](test/array.js))
* **[before](#before)** ([code](lib/array.js) | [tests](test/array.js))
* **[eachIndex](#eachIndex)** ([code](lib/array.js) | [tests](test/array.js))
* **[filter](#filter)** ([code](lib/array.js) | [tests](test/array.js))
* **[first](#first)** ([code](lib/array.js) | [tests](test/array.js))
* **[forEach](#forEach)** ([code](lib/array.js) | [tests](test/array.js))
* **[inArray](#inArray)** ([code](lib/array.js) | [tests](test/array.js))
* **[isArray](#isArray)** ([code](lib/array.js) | [tests](test/array.js))
* **[itemAt](#itemAt)** ([code](lib/array.js) | [tests](test/array.js))
* **[join](#join)** ([code](lib/array.js) | [tests](test/array.js))
* **[equalsLength](#equalsLength)** ([code](lib/array.js) | [no tests])
* **[last](#last)** ([code](lib/array.js) | [tests](test/array.js))
* **[length](#length)** ([code](lib/array.js) | [tests](test/array.js))
* **[lengthEqual](#lengthEqual)** ([code](lib/array.js) | [tests](test/array.js))
* **[map](#map)** ([code](lib/array.js) | [tests](test/array.js))
* **[pluck](#pluck)** ([code](lib/array.js) | [tests](test/array.js))
* **[reverse](#reverse)** ([code](lib/array.js) | [no tests])
* **[some](#some)** ([code](lib/array.js) | [tests](test/array.js))
* **[sort](#sort)** ([code](lib/array.js) | [tests](test/array.js))
* **[sortBy](#sortBy)** ([code](lib/array.js) | [tests](test/array.js))
* **[withAfter](#withAfter)** ([code](lib/array.js) | [tests](test/array.js))
* **[withBefore](#withBefore)** ([code](lib/array.js) | [tests](test/array.js))
* **[withFirst](#withFirst)** ([code](lib/array.js) | [tests](test/array.js))
* **[withGroup](#withGroup)** ([code](lib/array.js) | [tests](test/array.js))
* **[withLast](#withLast)** ([code](lib/array.js) | [tests](test/array.js))
* **[withSort](#withSort)** ([code](lib/array.js) | [tests](test/array.js))
* **[unique](#unique)** ([code](lib/array.js) | [tests](test/array.js))

### [code helpers](#code)

Visit the: [code](lib/code.js) | [unit tests](test/code.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+code+helpers)

* **[embed](#embed)** ([code](lib/code.js) | [tests](test/code.js))
* **[gist](#gist)** ([code](lib/code.js) | [tests](test/code.js))
* **[jsfiddle](#jsfiddle)** ([code](lib/code.js) | [tests](test/code.js))

### [collection helpers](#collection)

Visit the: [code](lib/collection.js) | [unit tests](test/collection.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+collection+helpers)

* **[isEmpty](#isEmpty)** ([code](lib/collection.js) | [tests](test/collection.js))
* **[iterate](#iterate)** ([code](lib/collection.js) | [tests](test/collection.js))

### [comparison helpers](#comparison)

Visit the: [code](lib/comparison.js) | [unit tests](test/comparison.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+comparison+helpers)

* **[and](#and)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[compare](#compare)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[contains](#contains)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[default](#default)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[eq](#eq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[gt](#gt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[gte](#gte)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[has](#has)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[isFalsey](#isFalsey)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[isTruthy](#isTruthy)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifEven](#ifEven)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifNth](#ifNth)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[ifOdd](#ifOdd)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[is](#is)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[isnt](#isnt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[lt](#lt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[lte](#lte)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[neither](#neither)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[not](#not)** ([code](lib/comparison.js) | [no tests])
* **[or](#or)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessEq](#unlessEq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessGt](#unlessGt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessLt](#unlessLt)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessGteq](#unlessGteq)** ([code](lib/comparison.js) | [tests](test/comparison.js))
* **[unlessLteq](#unlessLteq)** ([code](lib/comparison.js) | [tests](test/comparison.js))

### [date helpers](#date)

Visit the: [code](lib/date.js) | [unit tests](test/date.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+date+helpers)

* **[year](#year)** ([code](lib/date.js) | [no tests])

### [html helpers](#html)

Visit the: [code](lib/html.js) | [unit tests](test/html.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+html+helpers)

* **[attr](#attr)** ([code](lib/html.js) | [tests](test/html.js))
* **[css](#css)** ([code](lib/html.js) | [tests](test/html.js))
* **[js](#js)** ([code](lib/html.js) | [tests](test/html.js))
* **[sanitize](#sanitize)** ([code](lib/html.js) | [tests](test/html.js))
* **[ul](#ul)** ([code](lib/html.js) | [tests](test/html.js))
* **[ol](#ol)** ([code](lib/html.js) | [tests](test/html.js))
* **[thumbnailImage](#thumbnailImage)** ([code](lib/html.js) | [tests](test/html.js))

### [i18n helpers](#i18n)

Visit the: [code](lib/i18n.js) | [unit tests](test/i18n.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+i18n+helpers)

* **[i18n](#i18n)** ([code](lib/i18n.js) | [tests](test/i18n.js))

### [inflection helpers](#inflection)

Visit the: [code](lib/inflection.js) | [unit tests](test/inflection.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+inflection+helpers)

* **[inflect](#inflect)** ([code](lib/inflection.js) | [tests](test/inflection.js))
* **[ordinalize](#ordinalize)** ([code](lib/inflection.js) | [tests](test/inflection.js))

### [markdown helpers](#markdown)

Visit the: [code](lib/markdown.js) | [unit tests](test/markdown.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+markdown+helpers)

* **[markdown](#markdown)** ([code](lib/markdown.js#Lundefined) | [tests](test/markdown.js))
* **[md](#md)** ([code](lib/markdown.js) | [tests](test/markdown.js))

### [match helpers](#match)

Visit the: [code](lib/match.js) | [unit tests](test/match.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+match+helpers)

* **[match](#match)** ([code](lib/match.js) | [tests](test/match.js))
* **[isMatch](#isMatch)** ([code](lib/match.js) | [tests](test/match.js))

### [math helpers](#math)

Visit the: [code](lib/math.js) | [unit tests](test/math.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+math+helpers)

* **[abs](#abs)** ([code](lib/math.js) | [no tests])
* **[add](#add)** ([code](lib/math.js) | [tests](test/math.js))
* **[avg](#avg)** ([code](lib/math.js) | [no tests])
* **[ceil](#ceil)** ([code](lib/math.js) | [tests](test/math.js))
* **[divide](#divide)** ([code](lib/math.js) | [tests](test/math.js))
* **[floor](#floor)** ([code](lib/math.js) | [tests](test/math.js))
* **[modulo](#modulo)** ([code](lib/math.js) | [no tests])
* **[multiply](#multiply)** ([code](lib/math.js) | [tests](test/math.js))
* **[random](#random)** ([code](lib/math.js) | [tests](test/math.js))
* **[remainder](#remainder)** ([code](lib/math.js) | [tests](test/math.js))
* **[round](#round)** ([code](lib/math.js) | [tests](test/math.js))
* **[subtract](#subtract)** ([code](lib/math.js) | [tests](test/math.js))
* **[sum](#sum)** ([code](lib/math.js) | [tests](test/math.js))

### [misc helpers](#misc)

Visit the: [code](lib/misc.js) | [unit tests](test/misc.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+misc+helpers)

* **[frame](#frame)** ([code](lib/misc.js) | [no tests])
* **[option](#option)** ([code](lib/misc.js) | [tests](test/misc.js))
* **[noop](#noop)** ([code](lib/misc.js) | [tests](test/misc.js))
* **[typeOf](#typeOf)** ([code](lib/misc.js) | [no tests])
* **[withHash](#withHash)** ([code](lib/misc.js) | [tests](test/misc.js))

### [number helpers](#number)

Visit the: [code](lib/number.js) | [unit tests](test/number.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+number+helpers)

* **[bytes](#bytes)** ([code](lib/number.js) | [tests](test/number.js))
* **[addCommas](#addCommas)** ([code](lib/number.js) | [tests](test/number.js))
* **[phoneNumber](#phoneNumber)** ([code](lib/number.js) | [tests](test/number.js))
* **[toAbbr](#toAbbr)** ([code](lib/number.js) | [tests](test/number.js))
* **[toExponential](#toExponential)** ([code](lib/number.js) | [tests](test/number.js))
* **[toFixed](#toFixed)** ([code](lib/number.js) | [tests](test/number.js))
* **[toFloat](#toFloat)** ([code](lib/number.js) | [tests](test/number.js))
* **[toInt](#toInt)** ([code](lib/number.js) | [tests](test/number.js))
* **[toPrecision](#toPrecision)** ([code](lib/number.js) | [tests](test/number.js))

### [object helpers](#object)

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

### [path helpers](#path)

Visit the: [code](lib/path.js) | [unit tests](test/path.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+path+helpers)

* **[absolute](#absolute)** ([code](lib/path.js) | [tests](test/path.js))
* **[dirname](#dirname)** ([code](lib/path.js) | [tests](test/path.js))
* **[relative](#relative)** ([code](lib/path.js) | [tests](test/path.js))
* **[basename](#basename)** ([code](lib/path.js) | [tests](test/path.js))
* **[stem](#stem)** ([code](lib/path.js) | [tests](test/path.js))
* **[extname](#extname)** ([code](lib/path.js) | [tests](test/path.js))
* **[resolve](#resolve)** ([code](lib/path.js) | [no tests])
* **[segments](#segments)** ([code](lib/path.js) | [tests](test/path.js))

### [regex helpers](#regex)

Visit the: [code](lib/regex.js) | [unit tests](test/regex.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+regex+helpers)

* **[toRegex](#toRegex)** ([code](lib/regex.js) | [no tests])
* **[test](#test)** ([code](lib/regex.js) | [no tests])

### [string helpers](#string)

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
* **[reverse](#reverse)** ([code](lib/string.js) | [tests](test/string.js))
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

### [url helpers](#url)

Visit the: [code](lib/url.js) | [unit tests](test/url.js) | [issues](https://github.com/wirechunk/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+url+helpers)

* **[encodeURI](#encodeURI)** ([code](lib/url.js) | [tests](test/url.js))
* **[escape](#escape)** ([code](lib/url.js) | [no tests])
* **[decodeURI](#decodeURI)** ([code](lib/url.js) | [tests](test/url.js))
* **[url_encode](#url_encode)** ([code](lib/url.js) | [no tests])
* **[url_decode](#url_decode)** ([code](lib/url.js) | [no tests])
* **[urlResolve](#urlResolve)** ([code](lib/url.js) | [tests](test/url.js))
* **[urlParse](#urlParse)** ([code](lib/url.js) | [tests](test/url.js))
* **[stripQuerystring](#stripQuerystring)** ([code](lib/url.js) | [tests](test/url.js))
* **[stripProtocol](#stripProtocol)** ([code](lib/url.js) | [no tests])

***

## array

### [{{after}}](lib/array.js)

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

### [{{arrayify}}](lib/array.js)

Cast the given `value` to an array.

**Params**

* `value` **{any}**
* `returns` **{Array}**

**Example**

```handlebars
{{arrayify "foo"}}
<!-- results in: [ "foo" ] -->
```

### [{{before}}](lib/array.js)

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

### [{{eachIndex}}](lib/array.js)

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

### [{{filter}}](lib/array.js)

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

### [{{first}}](lib/array.js)

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

### [{{forEach}}](lib/array.js)

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

### [{{inArray}}](lib/array.js)

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

### [{{isArray}}](lib/array.js)

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

### [{{itemAt}}](lib/array.js)

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

### [{{join}}](lib/array.js)

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

### [{{equalsLength}}](lib/array.js)

Returns true if the the length of the given `value` is equal
to the given `length`. Can be used as a block or inline helper.

**Params**

* `value` **{Array|String}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

### [{{last}}](lib/array.js)

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

### [{{length}}](lib/array.js)

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

### [{{lengthEqual}}](lib/array.js)

Alias for [equalsLength](#equalsLength)

### [{{map}}](lib/array.js)

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

### [{{pluck}}](lib/array.js)

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

### [{{reverse}}](lib/array.js)

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

### [{{some}}](lib/array.js)

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

### [{{sort}}](lib/array.js)

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

### [{{sortBy}}](lib/array.js)

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

### [{{withAfter}}](lib/array.js)

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

### [{{withBefore}}](lib/array.js)

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

### [{{withFirst}}](lib/array.js)

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

### [{{withGroup}}](lib/array.js)

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

### [{{withLast}}](lib/array.js)

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

### [{{withSort}}](lib/array.js)

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

### [{{unique}}](lib/array.js)

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

### [{{embed}}](lib/code.js)

Embed code from an external file as preformatted text.

**Params**

* `filepath` **{String}**: filepath to the file to embed.
* `language` **{String}**: Optionally specify the language to use for syntax highlighting.
* `returns` **{String}**

**Example**

```handlebars
{{embed 'path/to/file.js'}}
<!-- optionally specify the language to use -->
{{embed 'path/to/file.hbs' 'html')}}
```

### [{{gist}}](lib/code.js)

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{gist "12345"}}
```

### [{{jsfiddle}}](lib/code.js)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

## collection

### [{{isEmpty}}](lib/collection.js)

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

### [{{iterate}}](lib/collection.js)

Block helper that iterates over an array or object. If
an array is given, `.forEach` is called, or if an object
is given, `.forOwn` is called, otherwise the inverse block
is returned.

**Params**

* `collection` **{Object|Array}**: The collection to iterate over
* `options` **{Object}**
* `returns` **{String}**

## comparison

### [{{and}}](lib/comparison.js)

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

### [{{compare}}](lib/comparison.js)

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

### [{{contains}}](lib/comparison.js)

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

### [{{default}}](lib/comparison.js)

Returns the first value that is not undefined, otherwise the "default" value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [{{eq}}](lib/comparison.js)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gt}}](lib/comparison.js)

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gte}}](lib/comparison.js)

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{has}}](lib/comparison.js)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isFalsey}}](lib/comparison.js)

Returns true if the given `value` is falsey. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{isTruthy}}](lib/comparison.js)

Returns true if the given `value` is truthy. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{ifEven}}](lib/comparison.js)

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

### [{{ifNth}}](lib/comparison.js)

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{ifOdd}}](lib/comparison.js)

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

### [{{is}}](lib/comparison.js)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [eq](#eq) but does not do strict equality.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isnt}}](lib/comparison.js)

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [unlessEq](#unlesseq) but does not use strict equality for
comparisons.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{lt}}](lib/comparison.js)

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{lte}}](lib/comparison.js)

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{neither}}](lib/comparison.js)

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{not}}](lib/comparison.js)

Returns true if `val` is falsey. Works as a block or inline helper.

**Params**

* `val` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{or}}](lib/comparison.js)

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

### [{{unlessEq}}](lib/comparison.js)

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessGt}}](lib/comparison.js)

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessLt}}](lib/comparison.js)

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessGteq}}](lib/comparison.js)

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessLteq}}](lib/comparison.js)

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

## date

### [{{year}}](lib/date.js)

Get the current year.

**Example**

```handlebars
{{year}}
<!-- 2017 -->
```

## html

### [{{attr}}](lib/html.js)

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

### [{{css}}](lib/html.js)

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

### [{{js}}](lib/html.js)

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{js scripts}}
```

### [{{sanitize}}](lib/html.js)

Strip HTML tags from a string, so that only the text nodes are preserved.

**Params**

* `str` **{String}**: The string of HTML to sanitize.
* `returns` **{String}**

**Example**

```handlebars
{{sanitize "<span>foo</span>"}}
<!-- results in: 'foo' -->
```

### [{{ul}}](lib/html.js)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{ol}}](lib/html.js)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{thumbnailImage}}](lib/html.js)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:
* `context.alt` **{String}**
* `context.src` **{String}**
* `context.width` **{Number}**
* `context.height` **{Number}**
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

## i18n

### [{{i18n}}](lib/i18n.js)

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**
* `options` **{Object}**
* `returns` **{String}**

## inflection

### [{{inflect}}](lib/inflection.js)

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

### [{{ordinalize}}](lib/inflection.js)

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

### [{{markdown}}](lib/markdown.js)

Block helper that converts a string of inline markdown to HTML.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#markdown}}
# Foo
{{/markdown}}
<!-- results in: <h1>Foo</h1> -->
```

### [{{md}}](lib/markdown.js)

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

### [{{match}}](lib/match.js)

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

### [{{isMatch}}](lib/match.js)

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

### [{{abs}}](lib/math.js)

Return the magnitude of `a`.

**Params**

* `a` **{Number}**
* `returns` **{Number}**

### [{{add}}](lib/math.js)

Return the sum of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{avg}}](lib/math.js)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
<!-- results in: '3' -->
```

### [{{ceil}}](lib/math.js)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{divide}}](lib/math.js)

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### [{{floor}}](lib/math.js)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{modulo}}](lib/math.js)

Get the remainder of a division operation.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{multiply}}](lib/math.js)

Return the product of `a` times `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

### [{{random}}](lib/math.js)

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{String}**

### [{{remainder}}](lib/math.js)

Get the remainder when `a` is divided by `b`.

**Params**

* `a` **{Number}**: a
* `b` **{Number}**: b

### [{{round}}](lib/math.js)

Round the given number.

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{subtract}}](lib/math.js)

Return the product of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{sum}}](lib/math.js)

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

### [{{option}}](lib/misc.js)

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

### [{{noop}}](lib/misc.js)

Block helper that renders the block without taking any arguments.

**Params**

* `options` **{Object}**
* `returns` **{String}**

### [{{typeOf}}](lib/misc.js)

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

### [{{withHash}}](lib/misc.js)

Block helper that builds the context for the block
from the options hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

## number

### [{{bytes}}](lib/number.js)

Format a number to it's equivalent in bytes. If a string is passed, it's length will be formatted and returned.

**Examples:**

* `'foo' => 3 B`
* `13661855 => 13.66 MB`
* `825399 => 825.39 kB`
* `1396 => 1.4 kB`

**Params**

* `number` **{Number|String}**
* `returns` **{String}**

### [{{addCommas}}](lib/number.js)

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### [{{phoneNumber}}](lib/number.js)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### [{{toAbbr}}](lib/number.js)

Abbreviate numbers to the given number of `precision`. This is for
general numbers, not size in bytes.

**Params**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

### [{{toExponential}}](lib/number.js)

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```handlebars
{{toExponential number digits}};
```

### [{{toFixed}}](lib/number.js)

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

### [{{toFloat}}](lib/number.js)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toInt}}](lib/number.js)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toPrecision}}](lib/number.js)

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

### [{{extend}}](lib/object.js)

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

### [{{forIn}}](lib/object.js)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{forOwn}}](lib/object.js)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

### [{{toPath}}](lib/object.js)

Take arguments and, if they are string or number, convert them to a dot-delineated object property path.

**Params**

* `prop` **{String|Number}**: The property segments to assemble (can be multiple).
* `returns` **{String}**

### [{{get}}](lib/object.js)

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

### [{{getObject}}](lib/object.js)

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

### [{{hasOwn}}](lib/object.js)

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

### [{{isObject}}](lib/object.js)

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

### [{{JSONparse}}](lib/object.js)

Parses the given string using `JSON.parse`.

**Params**

* `string` **{String}**: The string to parse

**Example**

```handlebars
<!-- string: '{"foo": "bar"}' -->
{{JSONparse string}}
<!-- results in: { foo: 'bar' } -->
```

### [{{JSONstringify}}](lib/object.js)

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

### [{{merge}}](lib/object.js)

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

### [{{pick}}](lib/object.js)

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more properties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.

## path

### [{{absolute}}](lib/path.js)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{absolute "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### [{{dirname}}](lib/path.js)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dirname "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### [{{relative}}](lib/path.js)

Get the relative filepath from `a` to `b`.

**Params**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{relative a b}}
```

### [{{basename}}](lib/path.js)

Get the file extension from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{basename "docs/toc.md"}}
<!-- results in: 'toc.md' -->
```

### [{{stem}}](lib/path.js)

Get the "stem" from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{stem "docs/toc.md"}}
<!-- results in: 'toc' -->
```

### [{{extname}}](lib/path.js)

Get the file extension from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{extname "docs/toc.md"}}
<!-- results in: '.md' -->
```

### [{{resolve}}](lib/path.js)

Resolve an absolute path from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{resolve "docs/toc.md"}}
<!-- results in: '/User/dev/docs/toc.md' -->
```

### [{{segments}}](lib/path.js)

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

### [{{toRegex}}](lib/regex.js)

Convert the given string to a regular expression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{toRegex "foo"}}
<!-- results in: /foo/ -->
```

### [{{test}}](lib/regex.js)

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

### [{{append}}](lib/string.js)

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

### [{{camelcase}}](lib/string.js)

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```handlebars
{{camelcase "foo bar baz"}};
<!-- results in:  'fooBarBaz' -->
```

### [{{capitalize}}](lib/string.js)

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
<!-- results in:  "Foo bar baz" -->
```

### [{{capitalizeAll}}](lib/string.js)

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- results in:  "Foo Bar Baz" -->
```

### [{{center}}](lib/string.js)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### [{{chop}}](lib/string.js)

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

### [{{dashcase}}](lib/string.js)

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- results in:  'a-b-c-d-e' -->
```

### [{{dotcase}}](lib/string.js)

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- results in:  'a.b.c.d.e' -->
```

### [{{downcase}}](lib/string.js)

Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{downcase "aBcDeF"}}
<!-- results in:  'abcdef' -->
```

### [{{ellipsis}}](lib/string.js)

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

### [{{hyphenate}}](lib/string.js)

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- results in:  "foo-bar-baz-qux" -->
```

### [{{isString}}](lib/string.js)

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
<!-- results in:  'true' -->
```

### [{{lowercase}}](lib/string.js)

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- results in:  'foo bar baz' -->
```

### [{{occurrences}}](lib/string.js)

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

### [{{pascalcase}}](lib/string.js)

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- results in:  'FooBarBaz' -->
```

### [{{pathcase}}](lib/string.js)

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- results in:  'a/b/c/d/e' -->
```

### [{{plusify}}](lib/string.js)

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
<!-- results in:  'foo+bar+baz' -->
```

### [{{prepend}}](lib/string.js)

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

### [{{raw}}](lib/string.js)

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

### [{{remove}}](lib/string.js)

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

### [{{removeFirst}}](lib/string.js)

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

### [{{replace}}](lib/string.js)

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

### [{{replaceFirst}}](lib/string.js)

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

### [{{reverse}}](lib/string.js)

Reverse a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{reverse "abcde"}}
<!-- results in:  'edcba' -->
```

### [{{sentence}}](lib/string.js)

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- results in:  'Hello world. Goodbye world.' -->
```

### [{{snakecase}}](lib/string.js)

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- results in:  'a_b_c_d_e' -->
```

### [{{split}}](lib/string.js)

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is an empty string.

**Example**

```handlebars
{{split "a,b,c" ","}}
<!-- results in:  ['a', 'b', 'c'] -->
```

### [{{startsWith}}](lib/string.js)

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

### [{{titleize}}](lib/string.js)

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
<!-- results in:  'This Is Title Case' -->
```

### [{{trim}}](lib/string.js)

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC' -->
```

### [{{trimLeft}}](lib/string.js)

Removes extraneous whitespace from the beginning of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC ' -->
```

### [{{trimRight}}](lib/string.js)

Removes extraneous whitespace from the end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trimRight " ABC "}}
<!-- results in:  ' ABC' -->
```

### [{{truncate}}](lib/string.js)

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

### [{{truncateWords}}](lib/string.js)

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

### [{{upcase}}](lib/string.js)

Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{upcase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```

### [{{uppercase}}](lib/string.js)

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

### [{{encodeURI}}](lib/url.js)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### [{{escape}}](lib/url.js)

Escape the given string by replacing characters with escape sequences.
Useful for allowing the string to be used in a URL, etc.

**Params**

* `str` **{String}**
* `returns` **{String}**: Escaped string.

### [{{decodeURI}}](lib/url.js)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### [{{url_encode}}](lib/url.js)

Alias for [encodeURI](#encodeuri).

### [{{url_decode}}](lib/url.js)

Alias for [decodeURI](#decodeuri).

### [{{urlResolve}}](lib/url.js)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### [{{urlParse}}](lib/url.js)

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### [{{stripQuerystring}}](lib/url.js)

Strip the query string from the given `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**: the url without the queryString

### [{{stripProtocol}}](lib/url.js)

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

## Utils

The following utils are exposed on `.utils`.

### [{{changecase}}](lib/utils/index.js)

Change casing on the given `string`, optionally passing a delimiter to use between words in the returned string.

**Params**

* `string` **{String}**: The string to change.
* `returns` **{String}**

**Example**

```handlebars
utils.changecase('fooBarBaz');
//=> 'foo bar baz'

utils.changecase('fooBarBaz' '-');
//=> 'foo-bar-baz'
```

### [{{random}}](lib/utils/index.js)

Generate a random number

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{Number}**

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
