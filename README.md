## handlebars-helpers

[![Build](https://github.com/Budibase/handlebars-helpers/actions/workflows/helpers_ci.yml/badge.svg)](https://github.com/Budibase/handlebars-helpers/actions/workflows/helpers_ci.yml)

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.

- [Install](#install)
- [Usage](#usage)
- [Helpers](#helpers)
- [Utils](#utils)
- [History](#history)
- [About](#about)

## Install

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add @budibase/handlebars-helpers
```

## Usage

The main export returns a function that needs to be called to expose the object of helpers.

**Get all helpers**

```js
var helpers = require('@budibase/handlebars-helpers')();
//=> returns object with all (130+) helpers
```

**Get a specific helper collection**

Helper collections are exposed as getters, so only the helpers you want will be required and loaded.

```js
var helpers = require('@budibase/handlebars-helpers');
var math = helpers.math();
//=> only the `math` helpers

var helpers = require('@budibase/handlebars-helpers');
var array = helpers.array();
//=> only the `collections` helpers
```

**Get multiple helpers collections**

Helper collections are exposed as getters, so only the helpers you want will be required and loaded.

```js
var helpers = require('@budibase/handlebars-helpers')(['math', 'string']);
//=> only the `math` and `string` helpers
```

**Optionally pass your own handlebars**

```js
var handlebars = require('handlebars');
var helpers = require('@budibase/handlebars-helpers')({
  handlebars: handlebars
});

// or for a specific collection
var math = helpers.math({
  handlebars: handlebars
});
```

## Helpers

## Categories

Currently **189 helpers** in **20 categories**:

* **[array](#array)** ([code](lib/array.js) | [unit tests](test/array.js))
* **[code](#code)** ([code](lib/code.js) | [unit tests](test/code.js))
* **[collection](#collection)** ([code](lib/collection.js) | [unit tests](test/collection.js))
* **[comparison](#comparison)** ([code](lib/comparison.js) | [unit tests](test/comparison.js))
* **[html](#html)** ([code](lib/html.js) | [unit tests](test/html.js))
* **[i18n](#i18n)** ([code](lib/i18n.js) | [unit tests](test/i18n.js))
* **[inflection](#inflection)** ([code](lib/inflection.js) | [unit tests](test/inflection.js))
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

Visit the: [code](lib/array.js) | [unit tests](test/array.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+array+helpers))

* **[after](#after)** ([code](lib/array.js#L22) | [tests](test/array.js#L13))
* **[arrayify](#arrayify)** ([code](lib/array.js#L39) | [tests](test/array.js#L29))
* **[before](#before)** ([code](lib/array.js#L58) | [tests](test/array.js#L36))
* **[eachIndex](#eachIndex)** ([code](lib/array.js#L77) | [tests](test/array.js#L58))
* **[filter](#filter)** ([code](lib/array.js#L102) | [tests](test/array.js#L91))
* **[first](#first)** ([code](lib/array.js#L142) | [tests](test/array.js#L65))
* **[forEach](#forEach)** ([code](lib/array.js#L184) | [tests](test/array.js#L123))
* **[inArray](#inArray)** ([code](lib/array.js#L224) | [tests](test/array.js#L160))
* **[isArray](#isArray)** ([code](lib/array.js#L244) | [tests](test/array.js#L172))
* **[itemAt](#itemAt)** ([code](lib/array.js#L263) | [tests](test/array.js#L182))
* **[join](#join)** ([code](lib/array.js#L294) | [tests](test/array.js#L225))
* **[equalsLength](#equalsLength)** ([code](lib/array.js#L313) | [no tests])
* **[last](#last)** ([code](lib/array.js#L349) | [tests](test/array.js#L240))
* **[length](#length)** ([code](lib/array.js#L379) | [tests](test/array.js#L254))
* **[lengthEqual](#lengthEqual)** ([code](lib/array.js#L395) | [tests](test/array.js#L254))
* **[map](#map)** ([code](lib/array.js#L414) | [tests](test/array.js#L266))
* **[pluck](#pluck)** ([code](lib/array.js#L445) | [tests](test/array.js#L300))
* **[reverse](#reverse)** ([code](lib/array.js#L473) | [no tests])
* **[some](#some)** ([code](lib/array.js#L504) | [tests](test/array.js#L308))
* **[sort](#sort)** ([code](lib/array.js#L532) | [tests](test/array.js#L333))
* **[sortBy](#sortBy)** ([code](lib/array.js#L557) | [tests](test/array.js#L358))
* **[withAfter](#withAfter)** ([code](lib/array.js#L588) | [tests](test/array.js#L390))
* **[withBefore](#withBefore)** ([code](lib/array.js#L618) | [tests](test/array.js#L397))
* **[withFirst](#withFirst)** ([code](lib/array.js#L648) | [tests](test/array.js#L404))
* **[withGroup](#withGroup)** ([code](lib/array.js#L692) | [tests](test/array.js#L418))
* **[withLast](#withLast)** ([code](lib/array.js#L727) | [tests](test/array.js#L428))
* **[withSort](#withSort)** ([code](lib/array.js#L766) | [tests](test/array.js#L442))
* **[unique](#unique)** ([code](lib/array.js#L816) | [tests](test/array.js#L483))

### [code helpers](#code)

Visit the: [code](lib/code.js) | [unit tests](test/code.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+code+helpers))

* **[embed](#embed)** ([code](lib/code.js#L23) | [tests](test/code.js#L10))
* **[gist](#gist)** ([code](lib/code.js#L45) | [tests](test/code.js#L62))
* **[jsfiddle](#jsfiddle)** ([code](lib/code.js#L60) | [tests](test/code.js#L69))

### [collection helpers](#collection)

Visit the: [code](lib/collection.js) | [unit tests](test/collection.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+collection+helpers))

* **[isEmpty](#isEmpty)** ([code](lib/collection.js#L31) | [tests](test/collection.js#L14))
* **[iterate](#iterate)** ([code](lib/collection.js#L59) | [tests](test/collection.js#L68))

### [comparison helpers](#comparison)

Visit the: [code](lib/comparison.js) | [unit tests](test/comparison.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+comparison+helpers))

* **[and](#and)** ([code](lib/comparison.js#L27) | [tests](test/comparison.js#L10))
* **[compare](#compare)** ([code](lib/comparison.js#L57) | [tests](test/comparison.js#L41))
* **[contains](#contains)** ([code](lib/comparison.js#L124) | [tests](test/comparison.js#L167))
* **[default](#default)** ([code](lib/comparison.js#L143) | [tests](test/comparison.js#L204))
* **[eq](#eq)** ([code](lib/comparison.js#L165) | [tests](test/comparison.js#L351))
* **[gt](#gt)** ([code](lib/comparison.js#L188) | [tests](test/comparison.js#L214))
* **[gte](#gte)** ([code](lib/comparison.js#L212) | [tests](test/comparison.js#L245))
* **[has](#has)** ([code](lib/comparison.js#L232) | [tests](test/comparison.js#L260))
* **[isFalsey](#isFalsey)** ([code](lib/comparison.js#L274) | [tests](test/comparison.js#L327))
* **[isTruthy](#isTruthy)** ([code](lib/comparison.js#L289) | [tests](test/comparison.js#L339))
* **[ifEven](#ifEven)** ([code](lib/comparison.js#L310) | [tests](test/comparison.js#L368))
* **[ifNth](#ifNth)** ([code](lib/comparison.js#L327) | [tests](test/comparison.js#L380))
* **[ifOdd](#ifOdd)** ([code](lib/comparison.js#L350) | [tests](test/comparison.js#L403))
* **[is](#is)** ([code](lib/comparison.js#L274) | [tests](test/comparison.js#L327))
* **[isnt](#isnt)** ([code](lib/comparison.js#L389) | [tests](test/comparison.js#L432))
* **[lt](#lt)** ([code](lib/comparison.js#L411) | [tests](test/comparison.js#L449))
* **[lte](#lte)** ([code](lib/comparison.js#L435) | [tests](test/comparison.js#L476))
* **[neither](#neither)** ([code](lib/comparison.js#L456) | [tests](test/comparison.js#L511))
* **[not](#not)** ([code](lib/comparison.js#L470) | [no tests])
* **[or](#or)** ([code](lib/comparison.js#L492) | [tests](test/comparison.js#L523))
* **[unlessEq](#unlessEq)** ([code](lib/comparison.js#L518) | [tests](test/comparison.js#L556))
* **[unlessGt](#unlessGt)** ([code](lib/comparison.js#L538) | [tests](test/comparison.js#L567))
* **[unlessLt](#unlessLt)** ([code](lib/comparison.js#L558) | [tests](test/comparison.js#L578))
* **[unlessGteq](#unlessGteq)** ([code](lib/comparison.js#L578) | [tests](test/comparison.js#L589))
* **[unlessLteq](#unlessLteq)** ([code](lib/comparison.js#L598) | [tests](test/comparison.js#L604))

### [html helpers](#html)

Visit the: [code](lib/html.js) | [unit tests](test/html.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+html+helpers))

* **[attr](#attr)** ([code](lib/html.js#L23) | [tests](test/html.js#L13))
* **[css](#css)** ([code](lib/html.js#L45) | [tests](test/html.js#L21))
* **[js](#js)** ([code](lib/html.js#L89) | [tests](test/html.js#L69))
* **[sanitize](#sanitize)** ([code](lib/html.js#L121) | [tests](test/html.js#L98))
* **[ul](#ul)** ([code](lib/html.js#L135) | [tests](test/html.js#L108))
* **[ol](#ol)** ([code](lib/html.js#L154) | [tests](test/html.js#L115))
* **[thumbnailImage](#thumbnailImage)** ([code](lib/html.js#L176) | [tests](test/html.js#L122))

### [i18n helpers](#i18n)

Visit the: [code](lib/i18n.js) | [unit tests](test/i18n.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+i18n+helpers))

* **[i18n](#i18n)** ([code](lib/i18n.js#L18) | [tests](test/i18n.js#L11))

### [inflection helpers](#inflection)

Visit the: [code](lib/inflection.js) | [unit tests](test/inflection.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+inflection+helpers))

* **[inflect](#inflect)** ([code](lib/inflection.js#L30) | [tests](test/inflection.js#L9))
* **[ordinalize](#ordinalize)** ([code](lib/inflection.js#L58) | [tests](test/inflection.js#L22))

### [match helpers](#match)

Visit the: [code](lib/match.js) | [unit tests](test/match.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+match+helpers))

* **[match](#match)** ([code](lib/match.js#L23) | [tests](test/match.js#L13))
* **[isMatch](#isMatch)** ([code](lib/match.js#L47) | [tests](test/match.js#L61))
* **[mm](#mm)** ([code](lib/match.js#L56) | [no tests])

### [math helpers](#math)

Visit the: [code](lib/math.js) | [unit tests](test/math.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+math+helpers))

* **[abs](#abs)** ([code](lib/math.js#L15) | [no tests])
* **[add](#add)** ([code](lib/math.js#L31) | [tests](test/math.js#L10))
* **[avg](#avg)** ([code](lib/math.js#L54) | [no tests])
* **[ceil](#ceil)** ([code](lib/math.js#L69) | [tests](test/math.js#L29))
* **[divide](#divide)** ([code](lib/math.js#L84) | [tests](test/math.js#L36))
* **[floor](#floor)** ([code](lib/math.js#L102) | [tests](test/math.js#L43))
* **[minus](#minus)** ([code](lib/math.js#L118) | [no tests])
* **[modulo](#modulo)** ([code](lib/math.js#L137) | [no tests])
* **[multiply](#multiply)** ([code](lib/math.js#L157) | [tests](test/math.js#L50))
* **[plus](#plus)** ([code](lib/math.js#L175) | [no tests])
* **[random](#random)** ([code](lib/math.js#L194) | [tests](test/math.js#L102))
* **[remainder](#remainder)** ([code](lib/math.js#L212) | [tests](test/math.js#L57))
* **[round](#round)** ([code](lib/math.js#L224) | [tests](test/math.js#L69))
* **[subtract](#subtract)** ([code](lib/math.js#L241) | [tests](test/math.js#L76))
* **[sum](#sum)** ([code](lib/math.js#L263) | [tests](test/math.js#L83))

### [misc helpers](#misc)

Visit the: [code](lib/misc.js) | [unit tests](test/misc.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+misc+helpers))

* **[frame](#frame)** ([code](lib/misc.js#L11) | [no tests])
* **[option](#option)** ([code](lib/misc.js#L26) | [tests](test/misc.js#L20))
* **[noop](#noop)** ([code](lib/misc.js#L39) | [tests](test/misc.js#L13))
* **[typeOf](#typeOf)** ([code](lib/misc.js#L59) | [no tests])
* **[withHash](#withHash)** ([code](lib/misc.js#L71) | [tests](test/misc.js#L38))

### [number helpers](#number)

Visit the: [code](lib/number.js) | [unit tests](test/number.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+number+helpers))

* **[bytes](#bytes)** ([code](lib/number.js#L24) | [tests](test/number.js#L10))
* **[addCommas](#addCommas)** ([code](lib/number.js#L61) | [tests](test/number.js#L84))
* **[phoneNumber](#phoneNumber)** ([code](lib/number.js#L74) | [tests](test/number.js#L30))
* **[toAbbr](#toAbbr)** ([code](lib/number.js#L92) | [tests](test/number.js#L91))
* **[toExponential](#toExponential)** ([code](lib/number.js#L130) | [tests](test/number.js#L59))
* **[toFixed](#toFixed)** ([code](lib/number.js#L153) | [tests](test/number.js#L37))
* **[toFloat](#toFloat)** ([code](lib/number.js#L169) | [tests](test/number.js#L77))
* **[toInt](#toInt)** ([code](lib/number.js#L179) | [tests](test/number.js#L70))
* **[toPrecision](#toPrecision)** ([code](lib/number.js#L196) | [tests](test/number.js#L48))

### [object helpers](#object)

Visit the: [code](lib/object.js) | [unit tests](test/object.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+object+helpers))

* **[extend](#extend)** ([code](lib/object.js#L18) | [tests](test/object.js#L15))
* **[forIn](#forIn)** ([code](lib/object.js#L55) | [tests](test/object.js#L33))
* **[forOwn](#forOwn)** ([code](lib/object.js#L81) | [tests](test/object.js#L50))
* **[toPath](#toPath)** ([code](lib/object.js#L106) | [tests](test/object.js#L87))
* **[get](#get)** ([code](lib/object.js#L128) | [tests](test/object.js#L77))
* **[getObject](#getObject)** ([code](lib/object.js#L149) | [tests](test/object.js#L77))
* **[hasOwn](#hasOwn)** ([code](lib/object.js#L167) | [tests](test/object.js#L126))
* **[isObject](#isObject)** ([code](lib/object.js#L183) | [tests](test/object.js#L144))
* **[JSONparse](#JSONparse)** ([code](lib/object.js#L201) | [tests](test/object.js#L164))
* **[JSONstringify](#JSONstringify)** ([code](lib/object.js#L218) | [no tests])
* **[merge](#merge)** ([code](lib/object.js#L235) | [tests](test/object.js#L156))
* **[parseJSON](#parseJSON)** ([code](lib/object.js#L254) | [no tests])
* **[pick](#pick)** ([code](lib/object.js#L267) | [tests](test/object.js#L171))
* **[stringify](#stringify)** ([code](lib/object.js#L290) | [tests](test/object.js#L199))

### [path helpers](#path)

Visit the: [code](lib/path.js) | [unit tests](test/path.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+path+helpers))

* **[absolute](#absolute)** ([code](lib/path.js#L20) | [tests](test/path.js#L13))
* **[dirname](#dirname)** ([code](lib/path.js#L40) | [tests](test/path.js#L25))
* **[relative](#relative)** ([code](lib/path.js#L59) | [tests](test/path.js#L32))
* **[basename](#basename)** ([code](lib/path.js#L81) | [tests](test/path.js#L47))
* **[stem](#stem)** ([code](lib/path.js#L100) | [tests](test/path.js#L58))
* **[extname](#extname)** ([code](lib/path.js#L119) | [tests](test/path.js#L69))
* **[resolve](#resolve)** ([code](lib/path.js#L138) | [no tests])
* **[segments](#segments)** ([code](lib/path.js#L166) | [tests](test/path.js#L80))

### [regex helpers](#regex)

Visit the: [code](lib/regex.js) | [unit tests](test/regex.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+regex+helpers))

* **[toRegex](#toRegex)** ([code](lib/regex.js#L19) | [no tests])
* **[test](#test)** ([code](lib/regex.js#L42) | [no tests])

### [string helpers](#string)

Visit the: [code](lib/string.js) | [unit tests](test/string.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+string+helpers))

* **[append](#append)** ([code](lib/string.js#L22) | [no tests])
* **[camelcase](#camelcase)** ([code](lib/string.js#L41) | [tests](test/string.js#L10))
* **[capitalize](#capitalize)** ([code](lib/string.js#L60) | [tests](test/string.js#L25))
* **[capitalizeAll](#capitalizeAll)** ([code](lib/string.js#L77) | [tests](test/string.js#L36))
* **[center](#center)** ([code](lib/string.js#L95) | [tests](test/string.js#L47))
* **[chop](#chop)** ([code](lib/string.js#L125) | [tests](test/string.js#L58))
* **[dashcase](#dashcase)** ([code](lib/string.js#L143) | [tests](test/string.js#L73))
* **[dotcase](#dotcase)** ([code](lib/string.js#L162) | [tests](test/string.js#L88))
* **[downcase](#downcase)** ([code](lib/string.js#L182) | [no tests])
* **[ellipsis](#ellipsis)** ([code](lib/string.js#L202) | [tests](test/string.js#L103))
* **[hyphenate](#hyphenate)** ([code](lib/string.js#L223) | [tests](test/string.js#L118))
* **[isString](#isString)** ([code](lib/string.js#L240) | [tests](test/string.js#L129))
* **[lowercase](#lowercase)** ([code](lib/string.js#L256) | [tests](test/string.js#L151))
* **[occurrences](#occurrences)** ([code](lib/string.js#L278) | [tests](test/string.js#L162))
* **[pascalcase](#pascalcase)** ([code](lib/string.js#L303) | [tests](test/string.js#L173))
* **[pathcase](#pathcase)** ([code](lib/string.js#L323) | [tests](test/string.js#L188))
* **[plusify](#plusify)** ([code](lib/string.js#L343) | [tests](test/string.js#L203))
* **[prepend](#prepend)** ([code](lib/string.js#L363) | [no tests])
* **[raw](#raw)** ([code](lib/string.js#L385) | [no tests])
* **[remove](#remove)** ([code](lib/string.js#L413) | [no tests])
* **[removeFirst](#removeFirst)** ([code](lib/string.js#L432) | [no tests])
* **[replace](#replace)** ([code](lib/string.js#L452) | [tests](test/string.js#L222))
* **[replaceFirst](#replaceFirst)** ([code](lib/string.js#L473) | [no tests])
* **[reverse](#reverse)** ([code](lib/string.js#L492) | [tests](test/string.js#L241))
* **[sentence](#sentence)** ([code](lib/string.js#L509) | [tests](test/string.js#L252))
* **[snakecase](#snakecase)** ([code](lib/string.js#L528) | [tests](test/string.js#L263))
* **[split](#split)** ([code](lib/string.js#L547) | [tests](test/string.js#L278))
* **[startsWith](#startsWith)** ([code](lib/string.js#L572) | [tests](test/string.js#L293))
* **[titleize](#titleize)** ([code](lib/string.js#L596) | [tests](test/string.js#L312))
* **[trim](#trim)** ([code](lib/string.js#L623) | [tests](test/string.js#L323))
* **[trimLeft](#trimLeft)** ([code](lib/string.js#L639) | [no tests])
* **[trimRight](#trimRight)** ([code](lib/string.js#L657) | [no tests])
* **[truncate](#truncate)** ([code](lib/string.js#L680) | [tests](test/string.js#L338))
* **[truncateWords](#truncateWords)** ([code](lib/string.js#L712) | [no tests])
* **[upcase](#upcase)** ([code](lib/string.js#L742) | [no tests])
* **[uppercase](#uppercase)** ([code](lib/string.js#L763) | [tests](test/string.js#L362))

### [url helpers](#url)

Visit the: [code](lib/url.js) | [unit tests](test/url.js) | [issues](https://github.com/helpers/handlebars-helpers/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+url+helpers))

* **[encodeURI](#encodeURI)** ([code](lib/url.js#L19) | [tests](test/url.js#L31))
* **[escape](#escape)** ([code](lib/url.js#L34) | [no tests])
* **[decodeURI](#decodeURI)** ([code](lib/url.js#L48) | [tests](test/url.js#L38))
* **[urlResolve](#urlResolve)** ([code](lib/url.js#L82) | [tests](test/url.js#L11))
* **[urlParse](#urlParse)** ([code](lib/url.js#L94) | [tests](test/url.js#L45))
* **[stripQuerystring](#stripQuerystring)** ([code](lib/url.js#L106) | [tests](test/url.js#L24))
* **[stripProtocol](#stripProtocol)** ([code](lib/url.js#L126) | [no tests])

***

## array

### [{{after}}](lib/array.js#L22)

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

### [{{arrayify}}](lib/array.js#L39)

Cast the given `value` to an array.

**Params**

* `value` **{any}**
* `returns` **{Array}**

**Example**

```handlebars
{{arrayify "foo"}}
<!-- results in: [ "foo" ] -->
```

### [{{before}}](lib/array.js#L58)

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

### [{{eachIndex}}](lib/array.js#L77)

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

### [{{filter}}](lib/array.js#L102)

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

### [{{first}}](lib/array.js#L142)

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

### [{{forEach}}](lib/array.js#L184)

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

### [{{inArray}}](lib/array.js#L224)

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

### [{{isArray}}](lib/array.js#L244)

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

### [{{itemAt}}](lib/array.js#L263)

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

### [{{join}}](lib/array.js#L294)

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

### [{{equalsLength}}](lib/array.js#L313)

Returns true if the the length of the given `value` is equal
to the given `length`. Can be used as a block or inline helper.

**Params**

* `value` **{Array|String}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

### [{{last}}](lib/array.js#L349)

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

### [{{length}}](lib/array.js#L379)

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

### [{{lengthEqual}}](lib/array.js#L395)

Alias for [equalsLength](#equalsLength)

### [{{map}}](lib/array.js#L414)

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

### [{{pluck}}](lib/array.js#L445)

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

### [{{reverse}}](lib/array.js#L473)

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

### [{{some}}](lib/array.js#L504)

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

### [{{sort}}](lib/array.js#L532)

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

### [{{sortBy}}](lib/array.js#L557)

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

### [{{withAfter}}](lib/array.js#L588)

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

### [{{withBefore}}](lib/array.js#L618)

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

### [{{withFirst}}](lib/array.js#L648)

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

### [{{withGroup}}](lib/array.js#L692)

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

### [{{withLast}}](lib/array.js#L727)

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

### [{{withSort}}](lib/array.js#L766)

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

### [{{unique}}](lib/array.js#L816)

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

### [{{embed}}](lib/code.js#L23)

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

### [{{gist}}](lib/code.js#L45)

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{gist "12345"}}
```

### [{{jsfiddle}}](lib/code.js#L60)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

## collection

### [{{isEmpty}}](lib/collection.js#L31)

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

### [{{iterate}}](lib/collection.js#L59)

Block helper that iterates over an array or object. If
an array is given, `.forEach` is called, or if an object
is given, `.forOwn` is called, otherwise the inverse block
is returned.

**Params**

* `collection` **{Object|Array}**: The collection to iterate over
* `options` **{Object}**
* `returns` **{String}**

## comparison

### [{{and}}](lib/comparison.js#L27)

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

### [{{compare}}](lib/comparison.js#L57)

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

### [{{contains}}](lib/comparison.js#L124)

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

### [{{default}}](lib/comparison.js#L143)

Returns the first value that is not undefined, otherwise the "default" value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [{{eq}}](lib/comparison.js#L165)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gt}}](lib/comparison.js#L188)

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gte}}](lib/comparison.js#L212)

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{has}}](lib/comparison.js#L232)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isFalsey}}](lib/comparison.js#L274)

Returns true if the given `value` is falsey. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{isTruthy}}](lib/comparison.js#L289)

Returns true if the given `value` is truthy. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{ifEven}}](lib/comparison.js#L310)

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

### [{{ifNth}}](lib/comparison.js#L327)

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{ifOdd}}](lib/comparison.js#L350)

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

### [{{is}}](lib/comparison.js#L367)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [eq](#eq) but does not do strict equality.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isnt}}](lib/comparison.js#L389)

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [unlessEq](#unlesseq) but does not use strict equality for
comparisons.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{lt}}](lib/comparison.js#L411)

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{lte}}](lib/comparison.js#L435)

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{neither}}](lib/comparison.js#L456)

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{not}}](lib/comparison.js#L470)

Returns true if `val` is falsey. Works as a block or inline helper.

**Params**

* `val` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{or}}](lib/comparison.js#L492)

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

### [{{unlessEq}}](lib/comparison.js#L518)

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessGt}}](lib/comparison.js#L538)

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessLt}}](lib/comparison.js#L558)

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessGteq}}](lib/comparison.js#L578)

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessLteq}}](lib/comparison.js#L598)

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

## html

### [{{attr}}](lib/html.js#L23)

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

### [{{css}}](lib/html.js#L45)

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

### [{{js}}](lib/html.js#L89)

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{js scripts}}
```

### [{{sanitize}}](lib/html.js#L121)

Strip HTML tags from a string, so that only the text nodes are preserved.

**Params**

* `str` **{String}**: The string of HTML to sanitize.
* `returns` **{String}**

**Example**

```handlebars
{{sanitize "<span>foo</span>"}}
<!-- results in: 'foo' -->
```

### [{{ul}}](lib/html.js#L135)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{ol}}](lib/html.js#L154)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{thumbnailImage}}](lib/html.js#L176)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:
* `context.alt` **{String}**
* `context.src` **{String}**
* `context.width` **{Number}**
* `context.height` **{Number}**
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

## i18n

### [{{i18n}}](lib/i18n.js#L18)

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**
* `options` **{Object}**
* `returns` **{String}**

## inflection

### [{{inflect}}](lib/inflection.js#L30)

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

### [{{ordinalize}}](lib/inflection.js#L58)

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

## match

### [{{match}}](lib/match.js#L23)

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

### [{{isMatch}}](lib/match.js#L47)

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

### [{{abs}}](lib/math.js#L15)

Return the magnitude of `a`.

**Params**

* `a` **{Number}**
* `returns` **{Number}**

### [{{add}}](lib/math.js#L31)

Return the sum of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{avg}}](lib/math.js#L54)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
<!-- results in: '3' -->
```

### [{{ceil}}](lib/math.js#L69)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{divide}}](lib/math.js#L84)

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### [{{floor}}](lib/math.js#L102)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{minus}}](lib/math.js#L118)

Return the difference of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**

### [{{modulo}}](lib/math.js#L137)

Get the remainder of a division operation.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{multiply}}](lib/math.js#L157)

Return the product of `a` multiply `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

### [{{plus}}](lib/math.js#L175)

Add `a` by `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier

### [{{random}}](lib/math.js#L194)

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{String}**

### [{{remainder}}](lib/math.js#L212)

Get the remainder when `a` is divided by `b`.

**Params**

* `a` **{Number}**: a
* `b` **{Number}**: b

### [{{round}}](lib/math.js#L224)

Round the given number.

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{subtract}}](lib/math.js#L241)

Return the product of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{sum}}](lib/math.js#L263)

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{sum "[1, 2, 3, 4, 5]"}}
<!-- results in: '15' -->
```

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

## misc

### [{{option}}](lib/misc.js#L26)

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

### [{{noop}}](lib/misc.js#L39)

Block helper that renders the block without taking any arguments.

**Params**

* `options` **{Object}**
* `returns` **{String}**

### [{{typeOf}}](lib/misc.js#L59)

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

### [{{withHash}}](lib/misc.js#L71)

Block helper that builds the context for the block
from the options hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

## number

### [{{bytes}}](lib/number.js#L24)

Format a number to it's equivalent in bytes. If a string is passed, it's length will be formatted and returned.

**Examples:**

* `'foo' => 3 B`
* `13661855 => 13.66 MB`
* `825399 => 825.39 kB`
* `1396 => 1.4 kB`

**Params**

* `number` **{Number|String}**
* `returns` **{String}**

### [{{addCommas}}](lib/number.js#L61)

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### [{{phoneNumber}}](lib/number.js#L74)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### [{{toAbbr}}](lib/number.js#L92)

Abbreviate numbers to the given number of `precision`. This is for
general numbers, not size in bytes.

**Params**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

### [{{toExponential}}](lib/number.js#L130)

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```handlebars
{{toExponential number digits}};
```

### [{{toFixed}}](lib/number.js#L153)

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

### [{{toFloat}}](lib/number.js#L169)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toInt}}](lib/number.js#L179)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toPrecision}}](lib/number.js#L196)

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

### [{{extend}}](lib/object.js#L18)

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

### [{{forIn}}](lib/object.js#L55)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

### [{{forOwn}}](lib/object.js#L81)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

### [{{toPath}}](lib/object.js#L106)

Take arguments and, if they are string or number, convert them to a dot-delineated object property path.

**Params**

* `prop` **{String|Number}**: The property segments to assemble (can be multiple).
* `returns` **{String}**

### [{{get}}](lib/object.js#L128)

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

### [{{getObject}}](lib/object.js#L149)

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

### [{{hasOwn}}](lib/object.js#L167)

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

### [{{isObject}}](lib/object.js#L183)

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

### [{{JSONparse}}](lib/object.js#L201)

Parses the given string using `JSON.parse`.

**Params**

* `string` **{String}**: The string to parse

**Example**

```handlebars
<!-- string: '{"foo": "bar"}' -->
{{JSONparse string}}
<!-- results in: { foo: 'bar' } -->
```

### [{{JSONstringify}}](lib/object.js#L218)

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

### [{{merge}}](lib/object.js#L235)

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

### [{{pick}}](lib/object.js#L267)

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more properties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.

## path

### [{{absolute}}](lib/path.js#L20)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{absolute "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### [{{dirname}}](lib/path.js#L40)

Get the directory path segment from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dirname "docs/toc.md"}}
<!-- results in: 'docs' -->
```

### [{{relative}}](lib/path.js#L59)

Get the relative filepath from `a` to `b`.

**Params**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{relative a b}}
```

### [{{basename}}](lib/path.js#L81)

Get the file extension from the given `filepath`.

**Params**

* `ext` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{basename "docs/toc.md"}}
<!-- results in: 'toc.md' -->
```

### [{{stem}}](lib/path.js#L100)

Get the "stem" from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{stem "docs/toc.md"}}
<!-- results in: 'toc' -->
```

### [{{extname}}](lib/path.js#L119)

Get the file extension from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{extname "docs/toc.md"}}
<!-- results in: '.md' -->
```

### [{{resolve}}](lib/path.js#L138)

Resolve an absolute path from the given `filepath`.

**Params**

* `filepath` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{resolve "docs/toc.md"}}
<!-- results in: '/User/dev/docs/toc.md' -->
```

### [{{segments}}](lib/path.js#L166)

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

### [{{toRegex}}](lib/regex.js#L19)

Convert the given string to a regular expression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{toRegex "foo"}}
<!-- results in: /foo/ -->
```

### [{{test}}](lib/regex.js#L42)

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

### [{{append}}](lib/string.js#L22)

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

### [{{camelcase}}](lib/string.js#L41)

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```handlebars
{{camelcase "foo bar baz"}};
<!-- results in:  'fooBarBaz' -->
```

### [{{capitalize}}](lib/string.js#L60)

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
<!-- results in:  "Foo bar baz" -->
```

### [{{capitalizeAll}}](lib/string.js#L77)

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- results in:  "Foo Bar Baz" -->
```

### [{{center}}](lib/string.js#L95)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### [{{chop}}](lib/string.js#L125)

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

### [{{dashcase}}](lib/string.js#L143)

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- results in:  'a-b-c-d-e' -->
```

### [{{dotcase}}](lib/string.js#L162)

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- results in:  'a.b.c.d.e' -->
```

### [{{downcase}}](lib/string.js#L182)

Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{downcase "aBcDeF"}}
<!-- results in:  'abcdef' -->
```

### [{{ellipsis}}](lib/string.js#L202)

Truncates a string to the specified `length`, and appends it with an elipsis, `…`.

**Params**

* `str` **{String}**
* `length` **{Number}**: The desired length of the returned string.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
{{ellipsis (sanitize "<span>foo bar baz</span>") 7}}
<!-- results in:  'foo bar…' -->
{{ellipsis "foo bar baz" 7}}
<!-- results in:  'foo bar…' -->
```

### [{{hyphenate}}](lib/string.js#L223)

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- results in:  "foo-bar-baz-qux" -->
```

### [{{isString}}](lib/string.js#L240)

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
<!-- results in:  'true' -->
```

### [{{lowercase}}](lib/string.js#L256)

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- results in:  'foo bar baz' -->
```

### [{{occurrences}}](lib/string.js#L278)

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

### [{{pascalcase}}](lib/string.js#L303)

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- results in:  'FooBarBaz' -->
```

### [{{pathcase}}](lib/string.js#L323)

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- results in:  'a/b/c/d/e' -->
```

### [{{plusify}}](lib/string.js#L343)

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
<!-- results in:  'foo+bar+baz' -->
```

### [{{prepend}}](lib/string.js#L363)

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

### [{{raw}}](lib/string.js#L385)

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

### [{{remove}}](lib/string.js#L413)

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

### [{{removeFirst}}](lib/string.js#L432)

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

### [{{replace}}](lib/string.js#L452)

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

### [{{replaceFirst}}](lib/string.js#L473)

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

### [{{reverse}}](lib/string.js#L492)

Reverse a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{reverse "abcde"}}
<!-- results in:  'edcba' -->
```

### [{{sentence}}](lib/string.js#L509)

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- results in:  'Hello world. Goodbye world.' -->
```

### [{{snakecase}}](lib/string.js#L528)

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- results in:  'a_b_c_d_e' -->
```

### [{{split}}](lib/string.js#L547)

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is an empty string.

**Example**

```handlebars
{{split "a,b,c" ","}}
<!-- results in:  ['a', 'b', 'c'] -->
```

### [{{startsWith}}](lib/string.js#L572)

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

### [{{titleize}}](lib/string.js#L596)

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
<!-- results in:  'This Is Title Case' -->
```

### [{{trim}}](lib/string.js#L623)

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC' -->
```

### [{{trimLeft}}](lib/string.js#L639)

Removes extraneous whitespace from the beginning of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC ' -->
```

### [{{trimRight}}](lib/string.js#L657)

Removes extraneous whitespace from the end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trimRight " ABC "}}
<!-- results in:  ' ABC' -->
```

### [{{truncate}}](lib/string.js#L680)

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

### [{{truncateWords}}](lib/string.js#L712)

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

### [{{upcase}}](lib/string.js#L742)

Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{upcase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```

### [{{uppercase}}](lib/string.js#L763)

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

### [{{encodeURI}}](lib/url.js#L19)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### [{{escape}}](lib/url.js#L34)

Escape the given string by replacing characters with escape sequences.
Useful for allowing the string to be used in a URL, etc.

**Params**

* `str` **{String}**
* `returns` **{String}**: Escaped string.

### [{{decodeURI}}](lib/url.js#L48)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### [{{urlResolve}}](lib/url.js#L82)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### [{{urlParse}}](lib/url.js#L94)

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### [{{stripQuerystring}}](lib/url.js#L106)

Strip the query string from the given `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**: the url without the queryString

### [{{stripProtocol}}](lib/url.js#L126)

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

### [{{changecase}}](lib/utils/index.js#L54)

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

### [{{random}}](lib/utils/index.js#L80)

Generate a random number

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{Number}**

***

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

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 17, 2017._
