# handlebars-helpers [![NPM version](https://img.shields.io/npm/v/handlebars-helpers.svg?style=flat)](https://www.npmjs.com/package/handlebars-helpers) [![NPM monthly downloads](https://img.shields.io/npm/dm/handlebars-helpers.svg?style=flat)](https://npmjs.org/package/handlebars-helpers)  [![NPM total downloads](https://img.shields.io/npm/dt/handlebars-helpers.svg?style=flat)](https://npmjs.org/package/handlebars-helpers) [![Linux Build Status](https://img.shields.io/travis/helpers/handlebars-helpers.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/handlebars-helpers) [![Windows Build Status](https://img.shields.io/appveyor/ci/helpers/handlebars-helpers.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/helpers/handlebars-helpers)

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.

You might also be interested in [template-helpers](https://github.com/jonschlinkert/template-helpers).

- [Install](#install)
- [Browser usage](#browser-usage)
- [Usage](#usage)
- [Helpers](#helpers)
- [Utils](#utils)
- [History](#history)
- [About](#about)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save handlebars-helpers
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add handlebars-helpers
```

## Browser usage

See how to [use handlebars-helpers in the browser](https://github.com/doowb/handlebars-helpers-browserify-example).

## Usage

The main export returns a function that needs to be called to expose the object of helpers.

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

## Helpers

## Categories

Currently **149 helpers** in **19 categories**:

* **[array](#array)** ([code](lib/array.js) | [unit tests](test/array.js))
* **[code](#code)** ([code](lib/code.js) | [unit tests](test/code.js))
* **[collection](#collection)** ([code](lib/collection.js) | [unit tests](test/collection.js))
* **[comparison](#comparison)** ([code](lib/comparison.js) | [unit tests](test/comparison.js))
* **[date](#date)** ([code](lib/date.js) | [unit tests](test/date.js))
* **[fs](#fs)** ([code](lib/fs.js) | [unit tests](test/fs.js))
* **[html](#html)** ([code](lib/html.js) | [unit tests](test/html.js))
* **[i18n](#i18n)** ([code](lib/i18n.js) | [unit tests](test/i18n.js))
* **[inflection](#inflection)** ([code](lib/inflection.js) | [unit tests](test/inflection.js))
* **[logging](#logging)** ([code](lib/logging.js) | [unit tests](test/logging.js))
* **[markdown](#markdown)** ([code](lib/markdown.js) | [unit tests](test/markdown.js))
* **[match](#match)** ([code](lib/match.js) | [unit tests](test/match.js))
* **[math](#math)** ([code](lib/math.js) | [unit tests](test/math.js))
* **[misc](#misc)** ([code](lib/misc.js) | [unit tests](test/misc.js))
* **[number](#number)** ([code](lib/number.js) | [unit tests](test/number.js))
* **[object](#object)** ([code](lib/object.js) | [unit tests](test/object.js))
* **[path](#path)** ([code](lib/path.js) | [unit tests](test/path.js))
* **[string](#string)** ([code](lib/string.js) | [unit tests](test/string.js))
* **[url](#url)** ([code](lib/url.js) | [unit tests](test/url.js))

## All helpers

### [array helpers](#array)

Visit the: [code](lib/array.js) | [unit tests](test/array.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+array+helpers))

* **[after](#after)** ([code](lib/array.js#L28) | [tests](test/array.js#L11))
* **[arrayify](#arrayify)** ([code](lib/array.js#L45) | [tests](test/array.js#L27))
* **[before](#before)** ([code](lib/array.js#L66) | [tests](test/array.js#L34))
* **[eachIndex](#eachIndex)** ([code](lib/array.js#L84) | [tests](test/array.js#L56))
* **[filter](#filter)** ([code](lib/array.js#L112) | [tests](test/array.js#L89))
* **[first](#first)** ([code](lib/array.js#L155) | [tests](test/array.js#L63))
* **[forEach](#forEach)** ([code](lib/array.js#L198) | [tests](test/array.js#L121))
* **[inArray](#inArray)** ([code](lib/array.js#L241) | [tests](test/array.js#L158))
* **[isArray](#isArray)** ([code](lib/array.js#L261) | [tests](test/array.js#L170))
* **[itemAt](#itemAt)** ([code](lib/array.js#L283) | [tests](test/array.js#L180))
* **[join](#join)** ([code](lib/array.js#L327) | [tests](test/array.js#L223))
* **[last](#last)** ([code](lib/array.js#L351) | [tests](test/array.js#L238))
* **[lengthEqual](#lengthEqual)** ([code](lib/array.js#L380) | [tests](test/array.js#L252))
* **[map](#map)** ([code](lib/array.js#L409) | [tests](test/array.js#L264))
* **[some](#some)** ([code](lib/array.js#L447) | [tests](test/array.js#L293))
* **[sort](#sort)** ([code](lib/array.js#L479) | [tests](test/array.js#L318))
* **[sortBy](#sortBy)** ([code](lib/array.js#L505) | [tests](test/array.js#L343))
* **[withAfter](#withAfter)** ([code](lib/array.js#L539) | [tests](test/array.js#L375))
* **[withBefore](#withBefore)** ([code](lib/array.js#L570) | [tests](test/array.js#L382))
* **[withFirst](#withFirst)** ([code](lib/array.js#L601) | [tests](test/array.js#L389))
* **[withGroup](#withGroup)** ([code](lib/array.js#L648) | [tests](test/array.js#L403))
* **[withLast](#withLast)** ([code](lib/array.js#L683) | [tests](test/array.js#L413))
* **[withSort](#withSort)** ([code](lib/array.js#L724) | [tests](test/array.js#L427))

### [code helpers](#code)

Visit the: [code](lib/code.js) | [unit tests](test/code.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+code+helpers))

* **[embed](#embed)** ([code](lib/code.js#L30) | [tests](test/code.js#L9))
* **[gist](#gist)** ([code](lib/code.js#L52) | [tests](test/code.js#L61))
* **[jsfiddle](#jsfiddle)** ([code](lib/code.js#L68) | [tests](test/code.js#L68))

### [collection helpers](#collection)

Visit the: [code](lib/collection.js) | [unit tests](test/collection.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+collection+helpers))

* **[isEmpty](#isEmpty)** ([code](lib/collection.js#L28) | [tests](test/collection.js#L11))
* **[iterate](#iterate)** ([code](lib/collection.js#L56) | [tests](test/collection.js#L38))
* **[length](#length)** ([code](lib/collection.js#L87) | [tests](test/collection.js#L77))

### [comparison helpers](#comparison)

Visit the: [code](lib/comparison.js) | [unit tests](test/comparison.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+comparison+helpers))

* **[and](#and)** ([code](lib/comparison.js#L26) | [tests](test/comparison.js#L10))
* **[compare](#compare)** ([code](lib/comparison.js#L48) | [tests](test/comparison.js#L22))
* **[contains](#contains)** ([code](lib/comparison.js#L119) | [tests](test/comparison.js#L148))
* **[gt](#gt)** ([code](lib/comparison.js#L146) | [tests](test/comparison.js#L175))
* **[gte](#gte)** ([code](lib/comparison.js#L174) | [tests](test/comparison.js#L206))
* **[has](#has)** ([code](lib/comparison.js#L197) | [tests](test/comparison.js#L221))
* **[eq](#eq)** ([code](lib/comparison.js#L232) | [tests](test/comparison.js#L279))
* **[ifEven](#ifEven)** ([code](lib/comparison.js#L260) | [tests](test/comparison.js#L296))
* **[ifNth](#ifNth)** ([code](lib/comparison.js#L279) | [tests](test/comparison.js#L308))
* **[ifOdd](#ifOdd)** ([code](lib/comparison.js#L304) | [tests](test/comparison.js#L331))
* **[is](#is)** ([code](lib/comparison.js#L323) | [tests](test/comparison.js#L343))
* **[isnt](#isnt)** ([code](lib/comparison.js#L347) | [tests](test/comparison.js#L360))
* **[lt](#lt)** ([code](lib/comparison.js#L373) | [tests](test/comparison.js#L377))
* **[lte](#lte)** ([code](lib/comparison.js#L401) | [tests](test/comparison.js#L404))
* **[neither](#neither)** ([code](lib/comparison.js#L426) | [tests](test/comparison.js#L439))
* **[or](#or)** ([code](lib/comparison.js#L452) | [tests](test/comparison.js#L451))
* **[unlessEq](#unlessEq)** ([code](lib/comparison.js#L478) | [tests](test/comparison.js#L470))
* **[unlessGt](#unlessGt)** ([code](lib/comparison.js#L497) | [tests](test/comparison.js#L481))
* **[unlessLt](#unlessLt)** ([code](lib/comparison.js#L516) | [tests](test/comparison.js#L492))
* **[unlessGteq](#unlessGteq)** ([code](lib/comparison.js#L535) | [tests](test/comparison.js#L503))
* **[unlessLteq](#unlessLteq)** ([code](lib/comparison.js#L554) | [tests](test/comparison.js#L518))

### [date helpers](#date)

Visit the: [code](lib/date.js) | [unit tests](test/date.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+date+helpers))

* **[moment](#moment)** ([code](lib/date.js#L15) | [no tests])

### [fs helpers](#fs)

Visit the: [code](lib/fs.js) | [unit tests](test/fs.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+fs+helpers))

* **[fileSize](#fileSize)** ([code](lib/fs.js#L27) | [tests](test/fs.js#L16))
* **[read](#read)** ([code](lib/fs.js#L68) | [tests](test/fs.js#L55))
* **[readdir](#readdir)** ([code](lib/fs.js#L81) | [tests](test/fs.js#L62))

### [html helpers](#html)

Visit the: [code](lib/html.js) | [unit tests](test/html.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+html+helpers))

* **[css](#css)** ([code](lib/html.js#L23) | [tests](test/html.js#L12))
* **[ellipsis](#ellipsis)** ([code](lib/html.js#L66) | [tests](test/html.js#L55))
* **[js](#js)** ([code](lib/html.js#L88) | [tests](test/html.js#L70))
* **[sanitize](#sanitize)** ([code](lib/html.js#L120) | [tests](test/html.js#L99))
* **[truncate](#truncate)** ([code](lib/html.js#L142) | [tests](test/html.js#L109))
* **[ul](#ul)** ([code](lib/html.js#L162) | [tests](test/html.js#L133))
* **[ol](#ol)** ([code](lib/html.js#L181) | [tests](test/html.js#L140))
* **[thumbnailImage](#thumbnailImage)** ([code](lib/html.js#L203) | [tests](test/html.js#L147))

### [i18n helpers](#i18n)

Visit the: [code](lib/i18n.js) | [unit tests](test/i18n.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+i18n+helpers))

* **[i18n](#i18n)** ([code](lib/i18n.js#L22) | [tests](test/i18n.js#L10))

### [inflection helpers](#inflection)

Visit the: [code](lib/inflection.js) | [unit tests](test/inflection.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+inflection+helpers))

* **[inflect](#inflect)** ([code](lib/inflection.js#L21) | [tests](test/inflection.js#L8))
* **[ordinalize](#ordinalize)** ([code](lib/inflection.js#L50) | [tests](test/inflection.js#L21))

### [logging helpers](#logging)

Visit the: [code](lib/logging.js) | [unit tests](test/logging.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+logging+helpers))

* **[log](#log)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[info](#info)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[bold](#bold)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[warn](#warn)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[error](#error)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[debug](#debug)** ([code](lib/logging.js#Lundefined) | [no tests])
* **[_inspect](#_inspect)** ([code](lib/logging.js#Lundefined) | [no tests])

### [markdown helpers](#markdown)

Visit the: [code](lib/markdown.js) | [unit tests](test/markdown.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+markdown+helpers))

* **[markdown](#markdown)** ([code](lib/markdown.js#Lundefined) | [tests](test/markdown.js#L9))
* **[md](#md)** ([code](lib/markdown.js#L56) | [tests](test/markdown.js#L17))

### [match helpers](#match)

Visit the: [code](lib/match.js) | [unit tests](test/match.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+match+helpers))

* **[mm](#mm)** ([code](lib/match.js#L26) | [tests](test/match.js#L15))
* **[match](#match)** ([code](lib/match.js#L45) | [tests](test/match.js#L14))
* **[isMatch](#isMatch)** ([code](lib/match.js#L66) | [tests](test/match.js#L64))

### [math helpers](#math)

Visit the: [code](lib/math.js) | [unit tests](test/math.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+math+helpers))

* **[add](#add)** ([code](lib/math.js#L19) | [tests](test/math.js#L9))
* **[subtract](#subtract)** ([code](lib/math.js#L31) | [tests](test/math.js#L63))
* **[divide](#divide)** ([code](lib/math.js#L43) | [tests](test/math.js#L35))
* **[multiply](#multiply)** ([code](lib/math.js#L55) | [tests](test/math.js#L49))
* **[floor](#floor)** ([code](lib/math.js#L66) | [tests](test/math.js#L42))
* **[ceil](#ceil)** ([code](lib/math.js#L77) | [tests](test/math.js#L28))
* **[round](#round)** ([code](lib/math.js#L88) | [tests](test/math.js#L56))
* **[sum](#sum)** ([code](lib/math.js#L106) | [tests](test/math.js#L70))
* **[avg](#avg)** ([code](lib/math.js#L132) | [no tests])

### [misc helpers](#misc)

Visit the: [code](lib/misc.js) | [unit tests](test/misc.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+misc+helpers))

* **[default](#default)** ([code](lib/misc.js#L21) | [tests](test/misc.js#L13))
* **[option](#option)** ([code](lib/misc.js#L40) | [tests](test/misc.js#L30))
* **[noop](#noop)** ([code](lib/misc.js#L54) | [tests](test/misc.js#L23))
* **[withHash](#withHash)** ([code](lib/misc.js#L68) | [tests](test/misc.js#L48))

### [number helpers](#number)

Visit the: [code](lib/number.js) | [unit tests](test/number.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+number+helpers))

* **[addCommas](#addCommas)** ([code](lib/number.js#L19) | [tests](test/number.js#L63))
* **[phoneNumber](#phoneNumber)** ([code](lib/number.js#L32) | [tests](test/number.js#L9))
* **[random](#random)** ([code](lib/number.js#L50) | [tests](test/number.js#L95))
* **[toAbbr](#toAbbr)** ([code](lib/number.js#L64) | [tests](test/number.js#L70))
* **[toExponential](#toExponential)** ([code](lib/number.js#L102) | [tests](test/number.js#L38))
* **[toFixed](#toFixed)** ([code](lib/number.js#L122) | [tests](test/number.js#L16))
* **[toFloat](#toFloat)** ([code](lib/number.js#L139) | [tests](test/number.js#L56))
* **[toInt](#toInt)** ([code](lib/number.js#L149) | [tests](test/number.js#L49))
* **[toPrecision](#toPrecision)** ([code](lib/number.js#L160) | [tests](test/number.js#L27))

### [object helpers](#object)

Visit the: [code](lib/object.js) | [unit tests](test/object.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+object+helpers))

* **[extend](#extend)** ([code](lib/object.js#L22) | [tests](test/object.js#L13))
* **[forIn](#forIn)** ([code](lib/object.js#L61) | [tests](test/object.js#L31))
* **[forOwn](#forOwn)** ([code](lib/object.js#L88) | [tests](test/object.js#L48))
* **[toPath](#toPath)** ([code](lib/object.js#L113) | [tests](test/object.js#L85))
* **[get](#get)** ([code](lib/object.js#L136) | [tests](test/object.js#L75))
* **[getObject](#getObject)** ([code](lib/object.js#L158) | [tests](test/object.js#L75))
* **[hasOwn](#hasOwn)** ([code](lib/object.js#L177) | [tests](test/object.js#L124))
* **[isObject](#isObject)** ([code](lib/object.js#L194) | [tests](test/object.js#L142))
* **[merge](#merge)** ([code](lib/object.js#L210) | [tests](test/object.js#L154))
* **[JSONparse](#JSONparse)** ([code](lib/object.js#L235) | [no tests])
* **[parseJSON](#parseJSON)** ([code](lib/object.js#L244) | [tests](test/object.js#L162))
* **[pick](#pick)** ([code](lib/object.js#L257) | [tests](test/object.js#L169))
* **[JSONstringify](#JSONstringify)** ([code](lib/object.js#L284) | [no tests])
* **[stringify](#stringify)** ([code](lib/object.js#L296) | [tests](test/object.js#L197))

### [path helpers](#path)

Visit the: [code](lib/path.js) | [unit tests](test/path.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+path+helpers))

* **[absolute](#absolute)** ([code](lib/path.js#L24) | [tests](test/path.js#L12))
* **[dirname](#dirname)** ([code](lib/path.js#L43) | [tests](test/path.js#L24))
* **[relative](#relative)** ([code](lib/path.js#L60) | [tests](test/path.js#L31))
* **[basename](#basename)** ([code](lib/path.js#L76) | [tests](test/path.js#L46))
* **[stem](#stem)** ([code](lib/path.js#L92) | [tests](test/path.js#L57))
* **[extname](#extname)** ([code](lib/path.js#L108) | [tests](test/path.js#L68))
* **[segments](#segments)** ([code](lib/path.js#L132) | [tests](test/path.js#L79))

### [string helpers](#string)

Visit the: [code](lib/string.js) | [unit tests](test/string.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+string+helpers))

* **[camelcase](#camelcase)** ([code](lib/string.js#L25) | [tests](test/string.js#L9))
* **[capitalize](#capitalize)** ([code](lib/string.js#L43) | [tests](test/string.js#L24))
* **[capitalizeAll](#capitalizeAll)** ([code](lib/string.js#L62) | [tests](test/string.js#L35))
* **[center](#center)** ([code](lib/string.js#L79) | [tests](test/string.js#L46))
* **[chop](#chop)** ([code](lib/string.js#L112) | [tests](test/string.js#L57))
* **[dashcase](#dashcase)** ([code](lib/string.js#L130) | [tests](test/string.js#L72))
* **[dotcase](#dotcase)** ([code](lib/string.js#L149) | [tests](test/string.js#L87))
* **[hyphenate](#hyphenate)** ([code](lib/string.js#L167) | [tests](test/string.js#L102))
* **[isString](#isString)** ([code](lib/string.js#L185) | [no tests])
* **[lowercase](#lowercase)** ([code](lib/string.js#L201) | [tests](test/string.js#L113))
* **[occurrences](#occurrences)** ([code](lib/string.js#L221) | [tests](test/string.js#L124))
* **[pascalcase](#pascalcase)** ([code](lib/string.js#L249) | [tests](test/string.js#L135))
* **[pathcase](#pathcase)** ([code](lib/string.js#L270) | [tests](test/string.js#L150))
* **[plusify](#plusify)** ([code](lib/string.js#L289) | [tests](test/string.js#L165))
* **[reverse](#reverse)** ([code](lib/string.js#L308) | [tests](test/string.js#L203))
* **[replace](#replace)** ([code](lib/string.js#L328) | [tests](test/string.js#L184))
* **[sentence](#sentence)** ([code](lib/string.js#L348) | [tests](test/string.js#L214))
* **[snakecase](#snakecase)** ([code](lib/string.js#L371) | [tests](test/string.js#L225))
* **[split](#split)** ([code](lib/string.js#L390) | [tests](test/string.js#L240))
* **[startsWith](#startsWith)** ([code](lib/string.js#L415) | [tests](test/string.js#L281))
* **[titleize](#titleize)** ([code](lib/string.js#L441) | [tests](test/string.js#L255))
* **[trim](#trim)** ([code](lib/string.js#L471) | [tests](test/string.js#L266))
* **[uppercase](#uppercase)** ([code](lib/string.js#L490) | [tests](test/string.js#L300))

### [url helpers](#url)

Visit the: [code](lib/url.js) | [unit tests](test/url.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+url+helpers))

* **[encodeURI](#encodeURI)** ([code](lib/url.js#L22) | [tests](test/url.js#L33))
* **[decodeURI](#decodeURI)** ([code](lib/url.js#L34) | [tests](test/url.js#L40))
* **[urlResolve](#urlResolve)** ([code](lib/url.js#L48) | [tests](test/url.js#L9))
* **[urlParse](#urlParse)** ([code](lib/url.js#L60) | [tests](test/url.js#L47))
* **[stripQuerystring](#stripQuerystring)** ([code](lib/url.js#L73) | [tests](test/url.js#L26))
* **[stripProtocol](#stripProtocol)** ([code](lib/url.js#L89) | [no tests])

***

## array

### [{{after}}](lib/array.js#L28)

Returns all of the items in an array after the specified index. Opposite of [before](#before).

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**: Collection
* `n` **{Number}**: Starting index (number of items to exclude)
* `returns` **{Array}**: Array exluding `n` items.

**Example**

```handlebars
{{after array 1}}
//=> '["c"]'
```

### [{{arrayify}}](lib/array.js#L45)

Cast the given `value` to an array.

**Params**

* `value` **{any}**
* `returns` **{Array}**

**Example**

```handlebars
{{arrayify "foo"}}
//=> '["foo"]'
```

### [{{before}}](lib/array.js#L66)

Return all of the items in the collection before the specified count. Opposite of [after](#after).

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `n` **{Number}**
* `returns` **{Array}**: Array excluding items after the given number.

**Example**

```handlebars
{{before array 2}}
//=> '["a", "b"]'
```

### [{{eachIndex}}](lib/array.js#L84)

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

### [{{filter}}](lib/array.js#L112)

Block helper that filters the given array and renders the block for values that evaluate to `true`, otherwise the inverse block is returned.

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#filter array "foo"}}AAA{{else}}BBB{{/filter}}
//=> 'BBB'
```

### [{{first}}](lib/array.js#L155)

Returns the first item, or first `n` items of an array.

Given the array `['a', 'b', 'c', 'd', 'e']`:

**Params**

* `array` **{Array}**
* `n` **{Number}**: Number of items to return, starting at `0`.
* `returns` **{Array}**

**Example**

```handlebars
{{first array 2}}
//=> '["a", "b"]'
```

### [{{forEach}}](lib/array.js#L198)

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

### [{{inArray}}](lib/array.js#L241)

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
//=> 'bar'
```

### [{{isArray}}](lib/array.js#L261)

Returns true if `value` is an es5 array.

**Params**

* `value` **{any}**: The value to test.
* `returns` **{Boolean}**

**Example**

```handlebars
{{isArray "abc"}}
//=> 'false'
```

### [{{itemAt}}](lib/array.js#L283)

Block helper that returns the item with specified index.

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `returns` **{any}** `value`

**Example**

```handlebars
{{itemAt array 1}}
//=> 'b'
```

### [{{join}}](lib/array.js#L327)

Join all elements of array into a string, optionally using a given separator.

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `sep` **{String}**: The separator to use.
* `returns` **{String}**

**Example**

```handlebars
{{join array}}
//=> 'a, b, c'

{{join array '-'}}
//=> 'a-b-c'
```

### [{{last}}](lib/array.js#L351)

Returns the last item, or last `n` items of an array. Opposite of [first](#first).

Given the array `['a', 'b', 'c', 'd', 'e']`:

**Params**

* `array` **{Array}**
* `n` **{Number}**: Number of items to return, starting with the last item.
* `returns` **{Array}**

**Example**

```handlebars
{{last array 2}}
//=> '["d", "e"]'
```

### [{{lengthEqual}}](lib/array.js#L380)

Block helper that compares the length of the given array to the number passed as the second argument. If the array length is equal to the given `length`, the block is returned, otherwise an inverse block may optionally be returned.

Given the array `['a', 'b', 'c', 'd', 'e']`:

**Params**

* `array` **{Array}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#lengthEqual array 10}}AAA{{else}}BBB{{/lengthEqual}}
//=> 'BBB'
```

### [{{map}}](lib/array.js#L409)

Returns a new array, created by calling `function` on each element of the given `array`.

Given an array `['a', 'b', 'c']`:

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
// {{map array double}}
//=> '["aa", "bb", "cc"]'
```

### [{{some}}](lib/array.js#L447)

Block helper that returns the block if the callback returns true for some value in the given array.

Given the array `[1, 'b', 3]`:

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
//=> 'Render me if the array has a string.'
```

### [{{sort}}](lib/array.js#L479)

Sort the given `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

Given an array `['b', 'a', 'c']`:

**Params**

* `array` **{Array}**: the array to sort.
* `key` **{String|Function}**: The object key to sort by, or sorting function.

**Example**

```handlebars
{{sort array}}
//=> '["a", "b", "c"]'
```

### [{{sortBy}}](lib/array.js#L505)

Sort an `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

Given an array `[{a: 'zzz'}, {a: 'aaa'}]`:

**Params**

* `array` **{Array}**: the array to sort.
* `props` **{String|Function}**: One or more properties to sort by, or sorting functions to use.

**Example**

```handlebars
{{sortBy array "a"}}
//=> '[{"a":"aaa"}, {"a":"zzz"}]'
```

### [{{withAfter}}](lib/array.js#L539)

Use the items in the array _after_ the specified index as context inside a block. Opposite of [withBefore](#withBefore).

Given the array `['a', 'b', 'c', 'd', 'e']`:

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**Example**

```handlebars
{{#withAfter array 3}}
  {{this}}
{{/withAfter}}
//=> "de"
```

### [{{withBefore}}](lib/array.js#L570)

Use the items in the array _before_ the specified index as context inside a block. Opposite of [withAfter](#withAfter).

Given the array `['a', 'b', 'c', 'd', 'e']`:

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
//=> 'ab'
```

### [{{withFirst}}](lib/array.js#L601)

Use the first item in a collection inside a handlebars block expression. Opposite of [withLast](#withLast).

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#withFirst array}}
  {{this}}
{{/withFirst}}
//=> 'a'
```

### [{{withGroup}}](lib/array.js#L648)

Block helper that groups array elements by given `value`.

Given the array `['a', 'b', 'c', 'd','e','f','g','h']`:
//=> 'a','b','c','d'<br>
//=> 'e','f','g','h'<br>

**Params**

* `array` **{Array}**
* `every` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#withGroup array 4}}
  {{#each this}}
    {{.}}
  {{each}}
  <br>
{{/withGroup}}
```

### [{{withLast}}](lib/array.js#L683)

Use the last item or `n` items in an array as context inside a block. Opposite of [withFirst](#withFirst).

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{Array}**
* `idx` **{Number}**: The starting index.
* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{#withLast array}}
  {{this}}
{{/withLast}}
//=> 'c'
```

### [{{withSort}}](lib/array.js#L724)

Block helper that sorts a collection and exposes the sorted collection as context inside the block.

Given the array `['b', 'a', 'c']`:

**Params**

* `array` **{Array}**
* `prop` **{String}**
* `options` **{Object}**: Specify `reverse="true"` to reverse the array.
* `returns` **{String}**

**Example**

```handlebars
{{#withSort array}}{{this}}{{/withSort}}
//=> 'abc'
```

## code

### [{{embed}}](lib/code.js#L30)

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

### [{{gist}}](lib/code.js#L52)

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{gist "12345"}}
```

### [{{jsfiddle}}](lib/code.js#L68)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

## collection

### [{{isEmpty}}](lib/collection.js#L28)

Block helper that returns a block if the given collection is
empty. If the collection is not empty the inverse block is returned
(if supplied).

**Params**

* `collection` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{iterate}}](lib/collection.js#L56)

Iterate over an array or object,

**Params**

* `context` **{Object|Array}**: The collection to iterate over
* `options` **{Object}**
* `returns` **{String}**

### [{{length}}](lib/collection.js#L87)

Returns the length of the given collection. When using a string literal in the template, the string must be value JSON. See the example below. Otherwise pass in an array or object from the context

**Params**

* `value` **{Array|Object|String}**
* `returns` **{Number}**: The length of the value.

**Example**

```handlebars
{{length '["a", "b", "c"]'}}
//=> 3

//=> myArray = ['a', 'b', 'c', 'd', 'e'];
{{length myArray}}
//=> 5

//=> myObject = {'a': 'a', 'b': 'b'};
{{length myObject}}
//=> 2
```

## comparison

### [{{and}}](lib/comparison.js#L26)

Block helper that renders the block if **both** of the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{compare}}](lib/comparison.js#L48)

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

### [{{contains}}](lib/comparison.js#L119)

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

### [{{gt}}](lib/comparison.js#L146)

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gte}}](lib/comparison.js#L174)

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{has}}](lib/comparison.js#L197)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{eq}}](lib/comparison.js#L232)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{ifEven}}](lib/comparison.js#L260)

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

### [{{ifNth}}](lib/comparison.js#L279)

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{ifOdd}}](lib/comparison.js#L304)

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

### [{{is}}](lib/comparison.js#L323)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isnt}}](lib/comparison.js#L347)

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{lt}}](lib/comparison.js#L373)

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{lte}}](lib/comparison.js#L401)

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{neither}}](lib/comparison.js#L426)

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{or}}](lib/comparison.js#L452)

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

### [{{unlessEq}}](lib/comparison.js#L478)

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessGt}}](lib/comparison.js#L497)

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessLt}}](lib/comparison.js#L516)

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessGteq}}](lib/comparison.js#L535)

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessLteq}}](lib/comparison.js#L554)

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

## date

### [{{moment}}](lib/date.js#L15)

Expose `moment` helper

## fs

### [{{fileSize}}](lib/fs.js#L27)

Converts bytes into a nice representation with unit.

**Examples:**

* `13661855 => 13.7 MB`
* `825399 => 825 KB`
* `1396 => 1 KB`

**Params**

* `value` **{String}**
* `returns` **{String}**

### [{{read}}](lib/fs.js#L68)

Read a file from the file system. This is useful in composing "include"-style helpers using sub-expressions.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```js
{{read "a/b/c.js"}}
{{someHelper (read "a/b/c.md")}}
```

### [{{readdir}}](lib/fs.js#L81)

Return an array of files from the given
directory.

**Params**

* `directory` **{String}**
* `returns` **{Array}**

## html

### [{{css}}](lib/html.js#L23)

Add an array of `<link>` tags. Automatically resolves
relative paths to `options.assets` if passed on the context.

**Params**

* `context` **{Object}**
* `returns` **{String}**

### [{{ellipsis}}](lib/html.js#L66)

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

### [{{js}}](lib/html.js#L88)

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{js scripts}}
```

### [{{sanitize}}](lib/html.js#L120)

Strip HTML tags from a string, so that only the text nodes are preserved.

**Params**

* `str` **{String}**: The string of HTML to sanitize.
* `returns` **{String}**

**Example**

```js
{{sanitize "<span>foo</span>"}}
//=> 'foo'
```

### [{{truncate}}](lib/html.js#L142)

Truncate a string by removing all HTML tags and limiting the result to the specified `length`. Aslo see [ellipsis](#ellipsis).

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

### [{{ul}}](lib/html.js#L162)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{ol}}](lib/html.js#L181)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{thumbnailImage}}](lib/html.js#L203)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:
* `context.alt` **{String}**
* `context.src` **{String}**
* `context.width` **{Number}**
* `context.height` **{Number}**
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

## i18n

### [{{i18n}}](lib/i18n.js#L22)

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**
* `options` **{Object}**
* `returns` **{String}**

## inflection

### [{{inflect}}](lib/inflection.js#L21)

**Params**

* `count` **{Number}**
* `singular` **{String}**: The singular form
* `plural` **{String}**: The plural form
* `include` **{String}**
* `returns` **{String}**

### [{{ordinalize}}](lib/inflection.js#L50)

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

## logging

[logging-helpers](https://github.com/helpers/logging-helpers).

## markdown

### [{{markdown}}](lib/markdown.js#L28)

Block helper that converts a string of inline markdown to HTML.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```html
{{#markdown}}
# Foo
{{/markdown}}
//=> <h1>Foo</h1>
```

### [{{md}}](lib/markdown.js#L56)

Read a markdown file from the file system and inject its contents after converting it to HTML.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

**Example**

```html
{{md "foo/bar.md"}}
```

## match

### [{{mm}}](lib/match.js#L26)

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

### [{{match}}](lib/match.js#L45)

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

### [{{isMatch}}](lib/match.js#L66)

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

## math

### [{{add}}](lib/math.js#L19)

Return the product of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**

### [{{subtract}}](lib/math.js#L31)

Return the product of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**

### [{{divide}}](lib/math.js#L43)

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### [{{multiply}}](lib/math.js#L55)

Multiply `a` by `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier

### [{{floor}}](lib/math.js#L66)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**

### [{{ceil}}](lib/math.js#L77)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**

### [{{round}}](lib/math.js#L88)

Round the given value.

**Params**

* `value` **{Number}**

### [{{sum}}](lib/math.js#L106)

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{sum "[1, 2, 3, 4, 5]"}}
//=> '15'
```

### [{{avg}}](lib/math.js#L132)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
//=> '3'
```

## misc

### [{{default}}](lib/misc.js#L21)

Returns the first value if defined, otherwise the "default" value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [{{option}}](lib/misc.js#L40)

Return the given value of `prop` from `this.options`. Given the context `{options: {a: {b: {c: 'ddd'}}}}`

**Params**

* `prop` **{String}**
* `returns` **{any}**

**Example**

```handlebars
{{option "a.b.c"}}
<!-- results => `ddd` -->
```

### [{{noop}}](lib/misc.js#L54)

Block helper that renders the block without taking any arguments.

**Params**

* `options` **{Object}**
* `returns` **{String}**

### [{{withHash}}](lib/misc.js#L68)

Block helper that builds the context for the block
from the options hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

## number

### [{{addCommas}}](lib/number.js#L19)

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### [{{phoneNumber}}](lib/number.js#L32)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### [{{random}}](lib/number.js#L50)

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{String}**

### [{{toAbbr}}](lib/number.js#L64)

Abbreviate numbers to the given number of `precision`. This is for
general numbers, not size in bytes.

**Params**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

### [{{toExponential}}](lib/number.js#L102)

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```js
{{toExponential number digits}};
```

### [{{toFixed}}](lib/number.js#L122)

Formats the given number using fixed-point notation.

**Params**

* `number` **{Number}**
* `digits` **{Number}**: Optional. The number of digits to use after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
* `returns` **{Number}**

### [{{toFloat}}](lib/number.js#L139)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toInt}}](lib/number.js#L149)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toPrecision}}](lib/number.js#L160)

**Params**

* `number` **{Number}**
* `precision` **{Number}**: Optional. The number of significant digits.
* `returns` **{Number}**

## object

### [{{extend}}](lib/object.js#L22)

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

### [{{forIn}}](lib/object.js#L61)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{forOwn}}](lib/object.js#L88)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

### [{{toPath}}](lib/object.js#L114)

Take arguments and, if they are string or number, convert them to a dot-delineated object property path.

**Params**

* `prop` **{String|Number}**: The property segments to assemble (can be multiple).
* `returns` **{String}**

### [{{get}}](lib/object.js#L136)

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

### [{{getObject}}](lib/object.js#L158)

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

### [{{hasOwn}}](lib/object.js#L177)

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

### [{{isObject}}](lib/object.js#L194)

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

### [{{merge}}](lib/object.js#L210)

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

### [{{JSONparse}}](lib/object.js#L235)

Block helper that parses a string using `JSON.parse`,
then passes the parsed object to the block as context.

**Params**

* `string` **{String}**: The string to parse
* `options` **{Object}**: Handlebars options object

### [{{pick}}](lib/object.js#L257)

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more properties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.

### [{{JSONstringify}}](lib/object.js#L284)

Stringify an object using `JSON.stringify`.

**Params**

* `obj` **{Object}**: Object to stringify
* `returns` **{String}**

## path

### [{{absolute}}](lib/path.js#L24)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{absolute "docs/toc.md"}}
//=> 'docs'
```

### [{{dirname}}](lib/path.js#L43)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dirname "docs/toc.md"}}
//=> 'docs'
```

### [{{relative}}](lib/path.js#L60)

Get the relative filepath from `a` to `b`.

**Params**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{relative a b}}
```

### [{{basename}}](lib/path.js#L76)

Get the file extension from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{basename "docs/toc.md"}}
//=> 'toc.md'
```

### [{{stem}}](lib/path.js#L92)

Get the "stem" from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{stem "docs/toc.md"}}
//=> 'toc'
```

### [{{extname}}](lib/path.js#L108)

Get the file extension from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{extname "docs/toc.md"}}
//=> '.md'
```

### [{{segments}}](lib/path.js#L132)

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

## string

### [{{camelcase}}](lib/string.js#L25)

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```js
{{camelcase "foo bar baz"}};
//=> 'fooBarBaz'
```

### [{{capitalize}}](lib/string.js#L43)

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
//=> "Foo bar baz"
```

### [{{capitalizeAll}}](lib/string.js#L62)

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalizeAll "foo bar baz"}}
//=> "Foo Bar Baz"
```

### [{{center}}](lib/string.js#L79)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### [{{chop}}](lib/string.js#L112)

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

### [{{dashcase}}](lib/string.js#L130)

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{dashcase "a-b-c d_e"}}
//=> 'a-b-c-d-e'
```

### [{{dotcase}}](lib/string.js#L149)

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{dotcase "a-b-c d_e"}}
//=> 'a.b.c.d.e'
```

### [{{hyphenate}}](lib/string.js#L167)

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
//=> "foo-bar-baz-qux"
```

### [{{isString}}](lib/string.js#L185)

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
//=> 'true'
```

### [{{lowercase}}](lib/string.js#L201)

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
//=> 'foo bar baz'
```

### [{{occurrences}}](lib/string.js#L221)

Return the number of occurrences of `substring` within the given `string`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: Number of occurrences

**Example**

```handlebars
{{occurrences "foo bar foo bar baz" "foo"}}
//=> 2
```

### [{{pascalcase}}](lib/string.js#L249)

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{pascalcase "foo bar baz"}}
//=> 'FooBarBaz'
```

### [{{pathcase}}](lib/string.js#L270)

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{pathcase "a-b-c d_e"}}
//=> 'a/b/c/d/e'
```

### [{{plusify}}](lib/string.js#L289)

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
//=> 'foo+bar+baz'
```

### [{{reverse}}](lib/string.js#L308)

Reverse a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{reverse "abcde"}}
//=> 'edcba'
```

### [{{replace}}](lib/string.js#L328)

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

### [{{sentence}}](lib/string.js#L348)

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
//=> 'Hello world. Goodbye world.'
```

### [{{snakecase}}](lib/string.js#L371)

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```js
{{snakecase "a-b-c d_e"}}
//=> 'a_b_c_d_e'
```

### [{{split}}](lib/string.js#L390)

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is `,`

**Example**

```js
{{split "a,b,c" ","}}
//=> ['a', 'b', 'c']
```

### [{{startsWith}}](lib/string.js#L415)

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

### [{{titleize}}](lib/string.js#L441)

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
//=> 'This Is Title Case'
```

### [{{trim}}](lib/string.js#L471)

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```js
{{trim " ABC "}}
//=> 'ABC'
```

### [{{uppercase}}](lib/string.js#L490)

Uppercase all of the characters in the given string. If used as a
block helper it will uppercase the entire block. This helper
does not support inverse blocks.

**Params**

* `str` **{String}**: The string to uppercase
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**

## url

### [{{encodeURI}}](lib/url.js#L22)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### [{{decodeURI}}](lib/url.js#L34)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### [{{urlResolve}}](lib/url.js#L48)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### [{{urlParse}}](lib/url.js#L60)

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### [{{stripQuerystring}}](lib/url.js#L73)

Strip the query string from a `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**: the url without the queryString

### [{{stripProtocol}}](lib/url.js#L89)

Strip protocol from a `url`.

Useful for displaying media that may have an 'http' protocol
on secure connections.  Will change 'http://foo.bar to `//foo.bar`

**Params**

* `str` **{String}**
* `returns` **{String}**: the url with http protocol stripped

***

## Utils

The following utils are exposed on `.utils`.

### [{{toRegex}}](lib/utils/index.js#L56)

Converts a "regex-string" to an actual regular expression.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
utils.toRegex('"/foo/"');
//=> /foo/
```

### [{{isRegex}}](lib/utils/index.js#L69)

Returns true if the given value appears to be a
regular expression.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

### [{{changecase}}](lib/utils/index.js#L111)

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

### [{{random}}](lib/utils/index.js#L137)

Generate a random number

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{Number}**

### [{{isUndefined}}](lib/utils/index.js#L150)

Returns true if the given value is `undefined` or
is a handlebars options hash.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [{{isOptions}}](lib/utils/index.js#L163)

Returns true if the given value appears to be an **options** object.

**Params**

* `value` **{Object}**
* `returns` **{Boolean}**

### [{{getArgs}}](lib/utils/index.js#L175)

Get options from the options hash and `this`.

**Params**

* `app` **{Object}**: The current application instance.
* `returns` **{Object}**

### [{{isObject}}](lib/utils/index.js#L208)

Returns true if the given value is an object
and not an array.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [{{isEmpty}}](lib/utils/index.js#L221)

Returns true if the given value is empty.

**Params**

* `value` **{any}**
* `returns` **{Boolean}**

### [{{tryParse}}](lib/utils/index.js#L244)

Try to parse the given `string` as JSON. Fails
gracefully if the value cannot be parsed.

**Params**

* `string` **{String}**
* `returns` **{Object}**

### [{{result}}](lib/utils/index.js#L260)

Return the given value. If the value is a function
it will be called, and the result is returned.

**Params**

* `val` **{any}**
* `returns` **{any}**

### [{{identity}}](lib/utils/index.js#L275)

Return the given value, unchanged.

**Params**

* `val` **{any}**
* `returns` **{any}**

### [{{isString}}](lib/utils/index.js#L287)

Return true if `val` is a string.

**Params**

* `val` **{any}**: The value to check
* `returns` **{Boolean}**

### [{{arrayify}}](lib/utils/index.js#L299)

Cast `val` to an array.

**Params**

* `val` **{any}**: The value to arrayify.
* `returns` **{Array}**

***

## History

## [v0.8.4](https://github.com/helpers/handlebars-helpers/compare/v0.8.3...v0.8.4) - 2017-07-03

**changes**

* removes strlen helper in favor of fixing the length helper

## [v0.8.3](https://github.com/helpers/handlebars-helpers/compare/v0.8.2...v0.8.3) - 2017-07-03

**changes**

* adds strlen helper
* adds itemAt helper
* clean up code comments for array helpers

## [v0.8.2](https://github.com/helpers/handlebars-helpers/compare/v0.8.1...v0.8.2) - 2017-03-30

**changes**

* documentation updates
* fixes md helper to use sync by default

## [v0.8.1](https://github.com/helpers/handlebars-helpers/compare/v0.8.0...v0.8.1) - 2017-03-30

**changes**

* fixes sorting in withSort helper. see https://github.com/helpers/handlebars-helpers/pull/245
* adds toPath helper
* handle null inputs in number helpers
* adds stripProtocol helper

## [v0.8.0](https://github.com/helpers/handlebars-helpers/compare/v0.7.6...v0.8.0) - 2017-01-25

**changes**

* handle string arguments in list helpers
* adds JSONParse helper as an alias for parseJSON

## [v0.7.6](https://github.com/helpers/handlebars-helpers/compare/v0.7.0...v0.7.6) - 2017-01-08

**changes**

* fixes markdown helpers. see https://github.com/helpers/handlebars-helpers/pull/226
* documentation improvements and other minor fixes

## [v0.7.0](https://github.com/helpers/handlebars-helpers/compare/v0.6.0...v0.7.0) - 2016-07-16

**changes**

* The [or](#or) helper can now take a variable number of arguments

## [v0.6.0](https://github.com/helpers/handlebars-helpers/compare/v0.3.3...v0.6.0) - 2016-05-13

**changes**

* the main export is now a function that takes a name or array of names of helper types to load. Example `helpers(['string', 'array'])` will load only the `string` and `array` helpers
* helper types can alternatively be accessed as methods. example - `helpers.path()` will return all of the path helpers.
* handlebars may be provided by the user. if not provided it will fall back to the `handlebars-helpers`  handlebars
* helpers are now as generic as possible, with little to no code related to assemble, grunt, etc.
* helpers are lazy-loaded using getters for improved performance
* Once tests are added for the `md` and `markdown` helpers, we'll have 100% unit test coverage on helpers

## [v0.3.3](https://github.com/helpers/handlebars-helpers/compare/v0.3.2...v0.3.3) - 2013-09-03

**changes**

* Adds fileSize helper.
* Adds startsWith helper.

## [v0.3.2](https://github.com/helpers/handlebars-helpers/compare/v0.3.0...v0.3.2) - 2013-08-20

**changes**

* Adds glob helper.

## [v0.3.0](https://github.com/helpers/handlebars-helpers/compare/v0.2.4...v0.3.0) - 2013-07-30

**changes**

* The project has been refactored, cleaned up, and full documentation has bee put up at http://assemble.io

## [v0.2.4](https://github.com/helpers/handlebars-helpers/compare/v0.2.3...v0.2.4) - 2013-05-11

**changes**

* Adding object globbing utility functions to be used in helpers later.

## [v0.2.3](https://github.com/helpers/handlebars-helpers/compare/v0.2.0...v0.2.3) - 2013-05-11

**changes**

* File globbing added to some helpers. Including md and some file helpers.

## [v0.2.0](https://github.com/helpers/handlebars-helpers/compare/v0.1.32...v0.2.0) - 2013-05-07

**changes**

* A bunch of new tests for markdown and special helpers.
* Refactored most of the rest of the helpers to separate functions from Handlebars registration.

## [v0.1.32](https://github.com/helpers/handlebars-helpers/compare/v0.1.31...v0.1.32) - 2013-05-02

**changes**

* Updates utils and a number of helpers, including value, property, and stringify.

## [v0.1.31](https://github.com/helpers/handlebars-helpers/compare/v0.1.30...v0.1.31) - 2013-04-21

**changes**

* Fixes relative helper

## [v0.1.30](https://github.com/helpers/handlebars-helpers/compare/v0.1.25...v0.1.30) - 2013-04-20

**changes**

* Refactoring helpers-collection module to separate the functions from the Handlebars helper registration process.

## [v0.1.25](https://github.com/helpers/handlebars-helpers/compare/v0.1.21...v0.1.25) - 2013-04-16

**changes**

* Adding defineSection and renderSection helpers to try to get sections populated in a layout from the page.

## [v0.1.21](https://github.com/helpers/handlebars-helpers/compare/v0.1.20...v0.1.21) - 2013-04-07

**changes**

* Add markdown helpers back, add more tests.

## [v0.1.20](https://github.com/helpers/handlebars-helpers/compare/v0.1.11...v0.1.20) - 2013-04-06

**changes**

* Generalized helpers structure, externalized utilities.

## [v0.1.11](https://github.com/helpers/handlebars-helpers/compare/v0.1.10...v0.1.11) - 2013-04-05

**changes**

* New authors and gist helpers, general cleanup and new tests.

## [v0.1.10](https://github.com/helpers/handlebars-helpers/compare/v0.1.8...v0.1.10) - 2013-04-04

**changes**

* Externalized utility javascript from helpers.js

## [v0.1.8](https://github.com/helpers/handlebars-helpers/compare/v0.1.7...v0.1.8) - 2013-03-28

**changes**

* Gruntfile updated with mocha tests for 71 helpers, bug fixes.

## [v0.1.7](https://github.com/helpers/handlebars-helpers/compare/v0.1.3...v0.1.7) - 2013-03-18

**changes**

* New path helper 'relative', for resolving relative path from one absolute path to another.

## [v0.1.3](https://github.com/helpers/handlebars-helpers/compare/v0.1.2...v0.1.3) - 2013-03-16

**changes**

* New helpers, 'formatPhoneNumber' and 'eachProperty'

## [v0.1.2](https://github.com/helpers/handlebars-helpers/compare/v0.1.0...v0.1.2) - 2013-03-15

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

| **Commits** | **Contributor** |
| --- | --- |
| 499 | [jonschlinkert](https://github.com/jonschlinkert) |
| 178 | [doowb](https://github.com/doowb) |
| 12 | [spacedawwwg](https://github.com/spacedawwwg) |
| 5 | [hariadi](https://github.com/hariadi) |
| 4 | [ChiperSoft](https://github.com/ChiperSoft) |
| 4 | [stephenway](https://github.com/stephenway) |
| 4 | [makotot](https://github.com/makotot) |
| 4 | [timdouglas](https://github.com/timdouglas) |
| 3 | [GreenRaccoon23](https://github.com/GreenRaccoon23) |
| 3 | [LaurentGoderre](https://github.com/LaurentGoderre) |
| 3 | [Melindrea](https://github.com/Melindrea) |
| 3 | [adjohnson916](https://github.com/adjohnson916) |
| 2 | [huntie](https://github.com/huntie) |
| 2 | [acinader](https://github.com/acinader) |
| 2 | [jfroom](https://github.com/jfroom) |
| 2 | [sheedy](https://github.com/sheedy) |
| 2 | [Arkkimaagi](https://github.com/Arkkimaagi) |
| 2 | [cfjedimaster](https://github.com/cfjedimaster) |
| 2 | [backflip](https://github.com/backflip) |
| 2 | [nlfurniss](https://github.com/nlfurniss) |
| 1 | [alesk](https://github.com/alesk) |
| 1 | [alisd23](https://github.com/alisd23) |
| 1 | [dandv](https://github.com/dandv) |
| 1 | [thegreatsunra](https://github.com/thegreatsunra) |
| 1 | [dwabyick](https://github.com/dwabyick) |
| 1 | [iamstolis](https://github.com/iamstolis) |
| 1 | [jasonbellamy](https://github.com/jasonbellamy) |
| 1 | [joeybaker](https://github.com/joeybaker) |
| 1 | [allmarkedup](https://github.com/allmarkedup) |
| 1 | [eins78](https://github.com/eins78) |
| 1 | [efender](https://github.com/efender) |
| 1 | [pburtchaell](https://github.com/pburtchaell) |
| 1 | [samtiffin](https://github.com/samtiffin) |
| 1 | [shannonmoeller](https://github.com/shannonmoeller) |
| 1 | [Swapnull](https://github.com/Swapnull) |
| 1 | [liammoat](https://github.com/liammoat) |
| 1 | [nathanjessen](https://github.com/nathanjessen) |
| 1 | [supersheep](https://github.com/supersheep) |

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

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 03, 2017._