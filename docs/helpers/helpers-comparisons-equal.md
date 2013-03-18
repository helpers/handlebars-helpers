#### is
_Conditionally render a block if the condition is true._
<br>Parameters: value `string|int` - the value to test against.
``` js
// Data
number = 5
```
``` html
// Template
\{{#is number 5}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/is}}

// Result:
Kiss my shiny metal ass!
```
#### if_eq
**Same as `is`, consider consolidating**
_Conditionally render a block if the condition is true (If x = y)._
Parameters: `none`
``` handlebars
\{{#if_eq x compare=y}} ... \{{/if_eq}}
```

#### isnt
_Conditionally render a block if the condition is false. Opposite of `is`._
<br>Parameters: value `string|int` - the value to test against.
``` js
// Data
number = 5
```
``` html
// Template
\{{#isnt number 5}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/isnt}}

// Result:
Never mind :(
```

#### or
_Conditionally render a block if one of the values is truthy._
<br>Parameters: values `string|int` - the values to test against.
``` js
great = no
magnificent = true
```
``` html
// Template
\{{#or great magnificent}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/or}}

// Result:
Kiss my shiny metal ass!
```

#### and
_Conditionally render a block if both values are truthy._
<br>Parameters: values `string|int` - the values to test against.
``` js
// Data
great = true
magnificent = true
```
``` html
// Template
\{{#and great magnificent}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/and}}

// Result:
Kiss my shiny metal ass!
```

#### unless_eq
**Same as `isnt`, consider consolidating**
_Conditionally render a block if the condition is false (Unless x = y). Opposite of `is`._
Parameters: `none`
``` handlebars
\{{#unless_eq x compare=y}} ... \{{/unless_eq}}
```
