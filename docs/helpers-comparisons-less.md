#### {{lt}}
_Conditionally render a block if the value is less than a given number. Opposite of `gt`._
<br>Parameters: value `string|int` - the value to test against.
``` js
number = 5
```
``` html
{{#lt number 3}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/lt}}
```

Renders to:
```
Never mind :(
```

#### {{lte}}
_Conditionally render a block if the value is less or equal than a given number. Opposite of `gte`._
<br>Parameters: value `string|int` - the value to test against.
``` js
number = 5
```
``` html
// Template
{{#lte number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/lte}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{unless_lt}}
_Render block, unless value is less than a given number (Unless x < y)_.

Parameters: `none`
``` handlebars
{{#unless_lt x compare=y}} ... {{/unless_lt}}
```

#### {{unless_lteq}}
_Render block, unless value is less than or equal to a given number (Unless x <= y)_.

Parameters: `none`
``` handlebars
{{#unless_lteq x compare=y}} ... {{/unless_lteq}}
```
