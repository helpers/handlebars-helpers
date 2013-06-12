#### {{is}}
_Conditionally render a block if the condition is true (if x = y)._

Parameters: `string|int` (the value to test against)
Default: `undefined`

Example #1:
``` js
// Data
---
number = 5
---
```
``` xml
// Template
{{#is number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/is}}

// Result:
Kiss my shiny metal ass!
```

Example #2:

If you are using [Assemble](https://github.com/assemble/assemble), data from _YAML front matter_ or any specified `JSON` and/or `YAML` source files will get passed through to the context in your templates.

``` yaml
--- # YAML Front Matter
page:
  title: About Us
---
```
``` xml
{{#is page.title "home"}}
    <h1> About Us </h1>
{{else}}
    Never mind :(
{{/is}}
```
Result:
```
<h1> About Us </h1>
```

#### {{if_eq}}
**Same as `is`, consider consolidating**
_Conditionally render a block if the condition is true (If x = y)._
Parameters: `none`
``` erlang
{{#if_eq x compare=y}} ... {{/if_eq}}
```

#### {{isnt}}
_Conditionally render a block if the condition is false. Opposite of `is`._
<br>Parameters: value `string|int` - the value to test against.
``` js
// Data
number = 5
```
``` xml
// Template
{{#isnt number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/isnt}}

// Result:
Never mind :(
```

#### {{or}}
_Conditionally render a block if one of the values is truthy._
<br>Parameters: values `string|int` - the values to test against.
``` js
great = no
magnificent = true
```
``` xml
// Template
{{#or great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/or}}

// Result:
Kiss my shiny metal ass!
```

#### {{and}}
_Conditionally render a block if both values are truthy._
<br>Parameters: values `string|int` - the values to test against.
``` js
// Data
great = true
magnificent = true
```
``` xml
// Template
{{#and great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/and}}

// Result:
Kiss my shiny metal ass!
```

#### {{unless_eq}}
**Same as `isnt`, consider consolidating**
_Conditionally render a block if the condition is false (Unless x = y). Opposite of `is`._
Parameters: `none`
``` erlang
{{#unless_eq x compare=y}} ... {{/unless_eq}}
```
