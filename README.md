# handlebars-helpers [![NPM version](https://badge.fury.io/js/handlebars-helpers.svg)](http://badge.fury.io/js/handlebars-helpers)  [![Build Status](https://travis-ci.org/assemble/handlebars-helpers.svg)](https://travis-ci.org/assemble/handlebars-helpers) 

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with [Assemble](https://github.com/assemble/assemble), YUI, Ghost or any node.js/Handlebars project.

### [Visit the live docs →](http://assemble.io/helpers/)

## Install with [npm](npmjs.org)

```bash
npm i handlebars-helpers --save
```

## Usage

```js
var helpers = require('handlebars-helpers');
//=> returns object with all 130+ helpers
```

**Get a specific collection**

```js
var helpers = require('handlebars-helpers')('math');
//=> only the `math` helpers

var helpers = require('handlebars-helpers')('collections');
//=> only the `collections` helpers
```

**Get multiple collections**


```js
var helpers = require('handlebars-helpers')(['url', 'string']);
//=> helpers from both `url` and `string`
```


## Helpers

Currently 137 helpers organized into the following categories:

+ **[code](./lib/helpers/code.js)**
  - [embed](./lib/helpers/code.js#L25)
  - [gist](./lib/helpers/code.js#L83)
  - [jsfiddle](./lib/helpers/code.js#L56)
+ **[collections](./lib/helpers/collections.js)**
  - [after](./lib/helpers/collections.js#L32)
  - [any](./lib/helpers/collections.js#L15)
  - [arrayify](./lib/helpers/collections.js#L65)
  - [before](./lib/helpers/collections.js#L81)
  - [eachIndexPlusOne](./lib/helpers/collections.js#L536)
  - [eachIndex](./lib/helpers/collections.js#L509)
  - [eachProperty](./lib/helpers/collections.js#L492)
  - [empty](./lib/helpers/collections.js#L338)
  - [filter](./lib/helpers/collections.js#L354)
  - [first](./lib/helpers/collections.js#L114)
  - [forEach](./lib/helpers/collections.js#L465)
  - [inArray](./lib/helpers/collections.js#L346)
  - [iterate](./lib/helpers/collections.js#L399)
  - [joinAny](./lib/helpers/collections.js#L236)
  - [join](./lib/helpers/collections.js#L207)
  - [last](./lib/helpers/collections.js#L164)
  - [lengthEqual](./lib/helpers/collections.js#L329)
  - [length](./lib/helpers/collections.js#L324)
  - [sort](./lib/helpers/collections.js#L265)
  - [withAfter](./lib/helpers/collections.js#L47)
  - [withBefore](./lib/helpers/collections.js#L96)
  - [withFirst](./lib/helpers/collections.js#L133)
  - [withLast](./lib/helpers/collections.js#L183)
  - [withSort](./lib/helpers/collections.js#L276)
+ **[comparisons](./lib/helpers/comparisons.js)**
  - [and](./lib/helpers/comparisons.js#L50)
  - [any](./lib/helpers/comparisons.js#L43)
  - [compare](./lib/helpers/comparisons.js#L139)
  - [contains](./lib/helpers/comparisons.js#L17)
  - [gt](./lib/helpers/comparisons.js#L58)
  - [gte](./lib/helpers/comparisons.js#L66)
  - [ifAny](./lib/helpers/comparisons.js#L282)
  - [ifEven](./lib/helpers/comparisons.js#L315)
  - [ifNth](./lib/helpers/comparisons.js#L122)
  - [if_eq](./lib/helpers/comparisons.js#L204)
  - [if_gt](./lib/helpers/comparisons.js#L218)
  - [if_gteq](./lib/helpers/comparisons.js#L246)
  - [if_lt](./lib/helpers/comparisons.js#L232)
  - [if_lteq](./lib/helpers/comparisons.js#L260)
  - [is](./lib/helpers/comparisons.js#L74)
  - [isnt](./lib/helpers/comparisons.js#L82)
  - [lt](./lib/helpers/comparisons.js#L90)
  - [lte](./lib/helpers/comparisons.js#L98)
  - [or](./lib/helpers/comparisons.js#L110)
  - [unless_eq](./lib/helpers/comparisons.js#L211)
  - [unless_gt](./lib/helpers/comparisons.js#L225)
  - [unless_gteq](./lib/helpers/comparisons.js#L253)
  - [unless_lt](./lib/helpers/comparisons.js#L239)
  - [unless_lteq](./lib/helpers/comparisons.js#L267)
+ **[data](./lib/helpers/data.js)**
  - [parseJSON](./lib/helpers/data.js#L19)
  - [stringify](./lib/helpers/data.js#L11)
+ **[dates](./lib/helpers/dates.js)**
  - [moment](./lib/helpers/dates.js#L7)
+ **[fs](./lib/helpers/fs.js)**
  - [concat](./lib/helpers/fs.js#L28)
  - [fileSize](./lib/helpers/fs.js#L43)
  - [glob](./lib/helpers/fs.js#L14)
+ **[html](./lib/helpers/html.js)**
  - [css](./lib/helpers/html.js#L14)
  - [js](./lib/helpers/html.js#L33)
  - [ol](./lib/helpers/html.js#L74)
  - [ul](./lib/helpers/html.js#L60)
+ **[i18n](./lib/helpers/i18n.js)**
  - [i18n](./lib/helpers/i18n.js#L13)
+ **[inflections](./lib/helpers/inflections.js)**
  - [inflect](./lib/helpers/inflections.js#L6)
  - [ordinalize](./lib/helpers/inflections.js#L42)
+ **[logging](./lib/helpers/logging.js)**
  - _inspect
  - bold
  - debug
  - error
  - info
  - log
  - warn
+ **[markdown](./lib/helpers/markdown.js)**
  - [markdown](./lib/helpers/markdown.js#L7)
  - [md](./lib/helpers/markdown.js#L13)
+ **[math](./lib/helpers/math.js)**
  - [add](./lib/helpers/math.js#L5)
  - [ceil](./lib/helpers/math.js#L25)
  - [divide](./lib/helpers/math.js#L13)
  - [floor](./lib/helpers/math.js#L21)
  - [multiply](./lib/helpers/math.js#L17)
  - [round](./lib/helpers/math.js#L29)
  - [subtract](./lib/helpers/math.js#L9)
  - [sum](./lib/helpers/math.js#L33)
+ **[misc](./lib/helpers/misc.js)**
  - [default](./lib/helpers/misc.js#L3)
  - [noop](./lib/helpers/misc.js#L14)
  - [withHash](./lib/helpers/misc.js#L23)
+ **[numbers](./lib/helpers/numbers.js)**
  - [addCommas](./lib/helpers/numbers.js#L11)
  - [phoneNumber](./lib/helpers/numbers.js#L25)
  - [random](./lib/helpers/numbers.js#L42)
  - [randomize](./lib/helpers/numbers.js#L57)
  - [toAbbr](./lib/helpers/numbers.js#L70)
  - [toExponential](./lib/helpers/numbers.js#L95)
  - [toFixed](./lib/helpers/numbers.js#L102)
  - [toFloat](./lib/helpers/numbers.js#L109)
  - [toInt](./lib/helpers/numbers.js#L113)
  - [toPrecision](./lib/helpers/numbers.js#L117)
+ **[path](./lib/helpers/path.js)**
  - [extname](./lib/helpers/path.js#L35)
  - [relative](./lib/helpers/path.js#L20)
+ **[string](./lib/helpers/string.js)**
  - [capitalizeAll](./lib/helpers/string.js#L59)
  - [capitalizeEach](./lib/helpers/string.js#L43)
  - [capitalizeFirst](./lib/helpers/string.js#L28)
  - [capitalize](./lib/helpers/string.js#L14)
  - [center](./lib/helpers/string.js#L82)
  - [count](./lib/helpers/string.js#L225)
  - [dashify](./lib/helpers/string.js#L101)
  - [ellipsis](./lib/helpers/string.js#L269)
  - [hyphenate](./lib/helpers/string.js#L114)
  - [lowercase](./lib/helpers/string.js#L127)
  - [plusify](./lib/helpers/string.js#L141)
  - [replace](./lib/helpers/string.js#L253)
  - [reverse](./lib/helpers/string.js#L210)
  - [safeString](./lib/helpers/string.js#L154)
  - [sentence](./lib/helpers/string.js#L167)
  - [startsWith](./lib/helpers/string.js#L323)
  - [titleize](./lib/helpers/string.js#L185)
  - [truncate](./lib/helpers/string.js#L292)
  - [uppercase](./lib/helpers/string.js#L202)
+ **[url](./lib/helpers/url.js)**
  - [decodeURI](./lib/helpers/url.js#L27)
  - [encodeURI](./lib/helpers/url.js#L16)
  - [stripQuerystring](./lib/helpers/url.js#L60)
  - [urlParse](./lib/helpers/url.js#L55)
  - [urlResolve](./lib/helpers/url.js#L40)

## Documentation

### [Visit the docs →](http://assemble.io/helpers/)

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble]. By default, [Handlebars.js](http://handlebarsjs.com/) ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.


## Credit
When this library was initially created a number of the helpers were sourced from [Swag, by Elving Rodriguez](http://elving.github.com/swag/). Thanks, Elving, for your hard work on Swag.


## Authors

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 
 
**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 


## License
Copyright (c) 2014-2015 Assemble  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 17, 2015._

[assemble]: https://github.com/assemble/assemble