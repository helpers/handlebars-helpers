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
  - [embed](./lib/helpers/code.js#25)
  - [jsfiddle](./lib/helpers/code.js#56)
  - [gist](./lib/helpers/code.js#83)
+ **[collections](./lib/helpers/collections.js)**
  - [any](./lib/helpers/collections.js#14)
  - [after](./lib/helpers/collections.js#31)
  - [withAfter](./lib/helpers/collections.js#46)
  - [arrayify](./lib/helpers/collections.js#64)
  - [before](./lib/helpers/collections.js#80)
  - [withBefore](./lib/helpers/collections.js#95)
  - [first](./lib/helpers/collections.js#113)
  - [withFirst](./lib/helpers/collections.js#132)
  - [last](./lib/helpers/collections.js#163)
  - [withLast](./lib/helpers/collections.js#182)
  - [join](./lib/helpers/collections.js#206)
  - [joinAny](./lib/helpers/collections.js#229)
  - [sort](./lib/helpers/collections.js#258)
  - [withSort](./lib/helpers/collections.js#269)
  - [length](./lib/helpers/collections.js#316)
  - [lengthEqual](./lib/helpers/collections.js#321)
  - [empty](./lib/helpers/collections.js#330)
  - [inArray](./lib/helpers/collections.js#338)
  - [filter](./lib/helpers/collections.js#346)
  - [iterate](./lib/helpers/collections.js#389)
  - [forEach](./lib/helpers/collections.js#455)
  - [eachProperty](./lib/helpers/collections.js#482)
  - [eachIndex](./lib/helpers/collections.js#499)
  - [eachIndexPlusOne](./lib/helpers/collections.js#526)
+ **[comparisons](./lib/helpers/comparisons.js)**
  - [contains](./lib/helpers/comparisons.js#17)
  - [any](./lib/helpers/comparisons.js#43)
  - [and](./lib/helpers/comparisons.js#50)
  - [gt](./lib/helpers/comparisons.js#58)
  - [gte](./lib/helpers/comparisons.js#66)
  - [is](./lib/helpers/comparisons.js#74)
  - [isnt](./lib/helpers/comparisons.js#82)
  - [lt](./lib/helpers/comparisons.js#90)
  - [lte](./lib/helpers/comparisons.js#98)
  - [or](./lib/helpers/comparisons.js#111)
  - [ifNth](./lib/helpers/comparisons.js#123)
  - [compare](./lib/helpers/comparisons.js#158)
  - [if_eq](./lib/helpers/comparisons.js#225)
  - [unless_eq](./lib/helpers/comparisons.js#242)
  - [if_gt](./lib/helpers/comparisons.js#259)
  - [unless_gt](./lib/helpers/comparisons.js#276)
  - [if_lt](./lib/helpers/comparisons.js#293)
  - [unless_lt](./lib/helpers/comparisons.js#310)
  - [if_gteq](./lib/helpers/comparisons.js#327)
  - [unless_gteq](./lib/helpers/comparisons.js#344)
  - [if_lteq](./lib/helpers/comparisons.js#361)
  - [unless_lteq](./lib/helpers/comparisons.js#378)
  - [if_any](./lib/helpers/comparisons.js#396)
  - [ifEven](./lib/helpers/comparisons.js#429)
+ **[data](./lib/helpers/data.js)**
  - [stringify](./lib/helpers/data.js#11)
  - [parseJSON](./lib/helpers/data.js#19)
+ **[dates](./lib/helpers/dates.js)**
  - [moment](./lib/helpers/dates.js#7)
+ **[fs](./lib/helpers/fs.js)**
  - [glob](./lib/helpers/fs.js#14)
  - [concat](./lib/helpers/fs.js#28)
  - [fileSize](./lib/helpers/fs.js#43)
+ **[html](./lib/helpers/html.js)**
  - [css](./lib/helpers/html.js#14)
  - [js](./lib/helpers/html.js#33)
  - [ul](./lib/helpers/html.js#60)
  - [ol](./lib/helpers/html.js#74)
+ **[i18n](./lib/helpers/i18n.js)**
  - [i18n](./lib/helpers/i18n.js#13)
+ **[inflections](./lib/helpers/inflections.js)**
  - [inflect](./lib/helpers/inflections.js#6)
  - [ordinalize](./lib/helpers/inflections.js#42)
+ **[logging](./lib/helpers/logging.js)**
  - log
  - info
  - bold
  - warn
  - error
+ **[markdown](./lib/helpers/markdown.js)**
  - [markdown](./lib/helpers/markdown.js#7)
  - [md](./lib/helpers/markdown.js#13)
+ **[math](./lib/helpers/math.js)**
  - [add](./lib/helpers/math.js#5)
  - [subtract](./lib/helpers/math.js#9)
  - [divide](./lib/helpers/math.js#13)
  - [multiply](./lib/helpers/math.js#17)
  - [floor](./lib/helpers/math.js#21)
  - [ceil](./lib/helpers/math.js#25)
  - [round](./lib/helpers/math.js#29)
  - [sum](./lib/helpers/math.js#33)
+ **[misc](./lib/helpers/misc.js)**
  - [default](./lib/helpers/misc.js#3)
  - [noop](./lib/helpers/misc.js#14)
  - [withHash](./lib/helpers/misc.js#23)
+ **[numbers](./lib/helpers/numbers.js)**
  - [addCommas](./lib/helpers/numbers.js#11)
  - [phoneNumber](./lib/helpers/numbers.js#25)
  - [random](./lib/helpers/numbers.js#42)
  - [randomize](./lib/helpers/numbers.js#57)
  - [toAbbr](./lib/helpers/numbers.js#70)
  - [toExponential](./lib/helpers/numbers.js#95)
  - [toFixed](./lib/helpers/numbers.js#102)
  - [toFloat](./lib/helpers/numbers.js#109)
  - [toInt](./lib/helpers/numbers.js#113)
  - [toPrecision](./lib/helpers/numbers.js#117)
+ **[path](./lib/helpers/path.js)**
  - [relative](./lib/helpers/path.js#20)
  - [extname](./lib/helpers/path.js#35)
+ **[string](./lib/helpers/string.js)**
  - [capitalize](./lib/helpers/string.js#14)
  - [capitalizeFirst](./lib/helpers/string.js#28)
  - [capitalizeEach](./lib/helpers/string.js#43)
  - [capitalizeAll](./lib/helpers/string.js#59)
  - [center](./lib/helpers/string.js#82)
  - [dashify](./lib/helpers/string.js#101)
  - [hyphenate](./lib/helpers/string.js#114)
  - [lowercase](./lib/helpers/string.js#127)
  - [plusify](./lib/helpers/string.js#141)
  - [safeString](./lib/helpers/string.js#154)
  - [sentence](./lib/helpers/string.js#167)
  - [titleize](./lib/helpers/string.js#185)
  - [uppercase](./lib/helpers/string.js#202)
  - [reverse](./lib/helpers/string.js#210)
  - [count](./lib/helpers/string.js#225)
  - [replace](./lib/helpers/string.js#253)
  - [ellipsis](./lib/helpers/string.js#269)
  - [truncate](./lib/helpers/string.js#292)
  - [startsWith](./lib/helpers/string.js#323)
+ **[url](./lib/helpers/url.js)**
  - [encodeURI](./lib/helpers/url.js#16)
  - [decodeURI](./lib/helpers/url.js#27)
  - [urlResolve](./lib/helpers/url.js#40)
  - [urlParse](./lib/helpers/url.js#55)
  - [stripQuerystring](./lib/helpers/url.js#60)

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
