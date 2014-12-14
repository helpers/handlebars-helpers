# handlebars-helpers [![NPM version](https://badge.fury.io/js/handlebars-helpers.svg)](http://badge.fury.io/js/handlebars-helpers)

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with [Assemble](https://github.com/assemble/assemble), YUI, Ghost or any node.js/Handlebars project.

### [Visit the live docs →](http://assemble.io/helpers/)

## Install with [npm](npmjs.org)

```bash
npm i handlebars-helpers --save
```

## Helpers

Currently 135 helpers:

+ **[code](./lib/helpers/code.js)**
  - [embed](./lib/helpers/code.js#L25)
  - [jsfiddle](./lib/helpers/code.js#L56)
  - [gist](./lib/helpers/code.js#L83)
+ **[collections](./lib/helpers/collections.js)**
  - [any](./lib/helpers/collections.js#L14)
  - [after](./lib/helpers/collections.js#L31)
  - [withAfter](./lib/helpers/collections.js#L46)
  - [arrayify](./lib/helpers/collections.js#L64)
  - [before](./lib/helpers/collections.js#L80)
  - [withBefore](./lib/helpers/collections.js#L95)
  - [first](./lib/helpers/collections.js#L113)
  - [withFirst](./lib/helpers/collections.js#L132)
  - [last](./lib/helpers/collections.js#L163)
  - [withLast](./lib/helpers/collections.js#L182)
  - [join](./lib/helpers/collections.js#L206)
  - [joinAny](./lib/helpers/collections.js#L229)
  - [sort](./lib/helpers/collections.js#L258)
  - [withSort](./lib/helpers/collections.js#L269)
  - [length](./lib/helpers/collections.js#L316)
  - [lengthEqual](./lib/helpers/collections.js#L321)
  - [empty](./lib/helpers/collections.js#L330)
  - [inArray](./lib/helpers/collections.js#L338)
  - [filter](./lib/helpers/collections.js#L346)
  - [iterate](./lib/helpers/collections.js#L389)
  - [forEach](./lib/helpers/collections.js#L455)
  - [eachProperty](./lib/helpers/collections.js#L482)
  - [eachIndex](./lib/helpers/collections.js#L499)
  - [eachIndexPlusOne](./lib/helpers/collections.js#L526)
+ **[comparisons](./lib/helpers/comparisons.js)**
  - [contains](./lib/helpers/comparisons.js#L17)
  - [any](./lib/helpers/comparisons.js#L43)
  - [and](./lib/helpers/comparisons.js#L50)
  - [gt](./lib/helpers/comparisons.js#L58)
  - [gte](./lib/helpers/comparisons.js#L66)
  - [is](./lib/helpers/comparisons.js#L74)
  - [isnt](./lib/helpers/comparisons.js#L82)
  - [lt](./lib/helpers/comparisons.js#L90)
  - [lte](./lib/helpers/comparisons.js#L98)
  - [or](./lib/helpers/comparisons.js#L111)
  - [ifNth](./lib/helpers/comparisons.js#L123)
  - [compare](./lib/helpers/comparisons.js#L158)
  - [if_eq](./lib/helpers/comparisons.js#L225)
  - [unless_eq](./lib/helpers/comparisons.js#L242)
  - [if_gt](./lib/helpers/comparisons.js#L259)
  - [unless_gt](./lib/helpers/comparisons.js#L276)
  - [if_lt](./lib/helpers/comparisons.js#L293)
  - [unless_lt](./lib/helpers/comparisons.js#L310)
  - [if_gteq](./lib/helpers/comparisons.js#L327)
  - [unless_gteq](./lib/helpers/comparisons.js#L344)
  - [if_lteq](./lib/helpers/comparisons.js#L361)
  - [unless_lteq](./lib/helpers/comparisons.js#L378)
  - [if_any](./lib/helpers/comparisons.js#L396)
  - [ifEven](./lib/helpers/comparisons.js#L429)
+ **[data](./lib/helpers/data.js)**
  - [stringify](./lib/helpers/data.js#L11)
  - [parseJSON](./lib/helpers/data.js#L19)
+ **[dates](./lib/helpers/dates.js)**
  - [moment](./lib/helpers/dates.js#L7)
+ **[fs](./lib/helpers/fs.js)**
  - [glob](./lib/helpers/fs.js#L14)
  - [concat](./lib/helpers/fs.js#L28)
  - [fileSize](./lib/helpers/fs.js#L43)
+ **[html](./lib/helpers/html.js)**
  - [css](./lib/helpers/html.js#L14)
  - [js](./lib/helpers/html.js#L33)
  - [ul](./lib/helpers/html.js#L60)
  - [ol](./lib/helpers/html.js#L74)
+ **[i18n](./lib/helpers/i18n.js)**
  - [i18n](./lib/helpers/i18n.js#L13)
+ **[inflections](./lib/helpers/inflections.js)**
  - [inflect](./lib/helpers/inflections.js#L6)
  - [ordinalize](./lib/helpers/inflections.js#L42)
+ **[logging](./lib/helpers/logging.js)**
  - log
  - info
  - bold
  - warn
  - error
+ **[markdown](./lib/helpers/markdown.js)**
  - [markdown](./lib/helpers/markdown.js#L7)
  - [md](./lib/helpers/markdown.js#L13)
+ **[math](./lib/helpers/math.js)**
  - [add](./lib/helpers/math.js#L5)
  - [subtract](./lib/helpers/math.js#L9)
  - [divide](./lib/helpers/math.js#L13)
  - [multiply](./lib/helpers/math.js#L17)
  - [floor](./lib/helpers/math.js#L21)
  - [ceil](./lib/helpers/math.js#L25)
  - [round](./lib/helpers/math.js#L29)
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
  - [relative](./lib/helpers/path.js#L20)
  - [extname](./lib/helpers/path.js#L35)
+ **[string](./lib/helpers/string.js)**
  - [capitalize](./lib/helpers/string.js#L14)
  - [capitalizeFirst](./lib/helpers/string.js#L28)
  - [capitalizeEach](./lib/helpers/string.js#L43)
  - [capitalizeAll](./lib/helpers/string.js#L59)
  - [center](./lib/helpers/string.js#L82)
  - [dashify](./lib/helpers/string.js#L101)
  - [hyphenate](./lib/helpers/string.js#L114)
  - [lowercase](./lib/helpers/string.js#L127)
  - [plusify](./lib/helpers/string.js#L141)
  - [safeString](./lib/helpers/string.js#L154)
  - [sentence](./lib/helpers/string.js#L167)
  - [titleize](./lib/helpers/string.js#L185)
  - [uppercase](./lib/helpers/string.js#L202)
  - [reverse](./lib/helpers/string.js#L210)
  - [count](./lib/helpers/string.js#L225)
  - [replace](./lib/helpers/string.js#L253)
  - [ellipsis](./lib/helpers/string.js#L269)
  - [truncate](./lib/helpers/string.js#L292)
  - [startsWith](./lib/helpers/string.js#L323)
+ **[url](./lib/helpers/url.js)**
  - [encodeURI](./lib/helpers/url.js#L16)
  - [decodeURI](./lib/helpers/url.js#L27)
  - [urlResolve](./lib/helpers/url.js#L40)
  - [urlParse](./lib/helpers/url.js#L55)
  - [stripQuerystring](./lib/helpers/url.js#L60)

## Documentation

### [Visit the docs →](http://assemble.io/helpers/)

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble]. By default, [Handlebars.js](http://handlebarsjs.com/) ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.


## Credit
> Many of these helpers come from the following repos:

Thank you Dan Harper and Elving Rodriguez. Your hard work on many of these helpers is appreciated!

* [Handlebars Helpers, by Dan Harper](http://github.com/danharper)
* [Swag v0.2.1, by Elving Rodriguez](http://elving.github.com/swag/)


## Authors
 
**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 
 
**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 


## License
Copyright (c) 2014 Assemble  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 14, 2014._

[assemble]: https://github.com/assemble/assemble
