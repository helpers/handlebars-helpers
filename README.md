# handlebars-helpers [![NPM version](https://badge.fury.io/js/handlebars-helpers.svg)](http://badge.fury.io/js/handlebars-helpers)

> More than 130 Handlebars helpers in ~20 categories. Helpers can be used with [Assemble](https://github.com/assemble/assemble), YUI, Ghost or any node.js/Handlebars project.

### [Visit the live docs →](http://assemble.io/helpers/)

## Install with [npm](npmjs.org)

```bash
npm i handlebars-helpers --save
```

## Helpers

Currently 135 helpers organized into the following categories:

+ **[code](./lib/helpers/code.js)**
  - [embed](./lib/helpers/code.js#L25)
  - [gist](./lib/helpers/code.js#L83)
  - [jsfiddle](./lib/helpers/code.js#L56)
+ **[collections](./lib/helpers/collections.js)**
  - [after](./lib/helpers/collections.js#L31)
  - [any](./lib/helpers/collections.js#L14)
  - [arrayify](./lib/helpers/collections.js#L64)
  - [before](./lib/helpers/collections.js#L80)
  - [eachIndexPlusOne](./lib/helpers/collections.js#L526)
  - [eachIndex](./lib/helpers/collections.js#L499)
  - [eachProperty](./lib/helpers/collections.js#L482)
  - [empty](./lib/helpers/collections.js#L330)
  - [filter](./lib/helpers/collections.js#L346)
  - [first](./lib/helpers/collections.js#L113)
  - [forEach](./lib/helpers/collections.js#L455)
  - [inArray](./lib/helpers/collections.js#L338)
  - [iterate](./lib/helpers/collections.js#L389)
  - [joinAny](./lib/helpers/collections.js#L229)
  - [join](./lib/helpers/collections.js#L206)
  - [last](./lib/helpers/collections.js#L163)
  - [lengthEqual](./lib/helpers/collections.js#L321)
  - [length](./lib/helpers/collections.js#L316)
  - [sort](./lib/helpers/collections.js#L258)
  - [withAfter](./lib/helpers/collections.js#L46)
  - [withBefore](./lib/helpers/collections.js#L95)
  - [withFirst](./lib/helpers/collections.js#L132)
  - [withLast](./lib/helpers/collections.js#L182)
  - [withSort](./lib/helpers/collections.js#L269)
+ **[comparisons](./lib/helpers/comparisons.js)**
  - [and](./lib/helpers/comparisons.js#L50)
  - [any](./lib/helpers/comparisons.js#L43)
  - [compare](./lib/helpers/comparisons.js#L158)
  - [contains](./lib/helpers/comparisons.js#L17)
  - [gt](./lib/helpers/comparisons.js#L58)
  - [gte](./lib/helpers/comparisons.js#L66)
  - [ifEven](./lib/helpers/comparisons.js#L429)
  - [ifNth](./lib/helpers/comparisons.js#L123)
  - [if_any](./lib/helpers/comparisons.js#L396)
  - [if_eq](./lib/helpers/comparisons.js#L225)
  - [if_gt](./lib/helpers/comparisons.js#L259)
  - [if_gteq](./lib/helpers/comparisons.js#L327)
  - [if_lt](./lib/helpers/comparisons.js#L293)
  - [if_lteq](./lib/helpers/comparisons.js#L361)
  - [is](./lib/helpers/comparisons.js#L74)
  - [isnt](./lib/helpers/comparisons.js#L82)
  - [lt](./lib/helpers/comparisons.js#L90)
  - [lte](./lib/helpers/comparisons.js#L98)
  - [or](./lib/helpers/comparisons.js#L111)
  - [unless_eq](./lib/helpers/comparisons.js#L242)
  - [unless_gt](./lib/helpers/comparisons.js#L276)
  - [unless_gteq](./lib/helpers/comparisons.js#L344)
  - [unless_lt](./lib/helpers/comparisons.js#L310)
  - [unless_lteq](./lib/helpers/comparisons.js#L378)
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
  - bold
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
