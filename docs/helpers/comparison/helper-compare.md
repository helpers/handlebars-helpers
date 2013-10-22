#### \{{#compare}}...\{{/compare}}
Credit: [OOCSS](https://github.com/stubbornella/oocss)

Compare the "left value" to the "right value" using any of the allowed operators.

##### Allowed operators

* `==`
* `===`
* `!=`
* `!==`
* `<`
* `>`
* `<=`
* `>=`
* `typeof`

##### Parameters:

1. `Left`: value to compare against
1. `Operator`: The operator to use for the comparison. Must be between quotes `">"`, `"="`, `"<="` and so on.
1. `Right`: value to
1. `Options`: Options object for Handlebars.


##### Syntax:

```handlebars
\{{#compare [leftvalue] [operator] [rightvalue]}}
  foo
\{{else}}
  bar
\{{/compare}}
```

##### Examples:

```handlebars
\{{#compare unicorns "<" ponies}}
  I knew it, unicorns are just low-quality ponies!
\{{/compare}}


\{{#compare value ">=" 10}}
  The value is greater or equal than 10
  \{{else}}
  The value is lower than 10
\{{/compare}}
```