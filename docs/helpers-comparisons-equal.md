#### {{is}}
_Conditionally render a block if the condition is true (if x = y)._

Parameters: `string|int` (the value to test against)
Default: `undefined`

Example #1:

Data:
``` js
---
number = 5
---
```

Template:
``` html
{{#is number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/is}}
```

Renders to:
```
Kiss my shiny metal ass!
```

Example #2:

If you are using [Assemble](https://github.com/assemble/assemble), data from _YAML front matter_ or any specified `JSON` and/or `YAML` source files will get passed through to the context in your templates.

Data and Templates: 
``` yaml
---
page:
  title: About Us
---

{{#is page.title "Home"}}
    <h1> About Us </h1>
{{else}}
    <h1> My Blog </h1>
{{/is}}
```

Renders to:
```
<h1> About Us </h1>
```

#### {{if_eq}}
**Same as `is`, consider consolidating**
_Conditionally render a block if the condition is true (If x = y)._

Parameters: `none`
``` handlebars
{{#if_eq x compare=y}} ... {{/if_eq}}
```

#### {{isnt}}
_Conditionally render a block if the condition is false. Opposite of `is`._
<br>Parameters: value `string|int` - the value to test against.

Data:
``` js
number = 5
```

Template:
``` html
{{#isnt number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/isnt}}
```

Renders to:
```
Never mind :(
```

#### {{or}}
_Conditionally render a block if one of the values is truthy._

Parameters: values `string|int` - the values to test against.

Data:
``` js
great = no
magnificent = true
```

Template:
``` html
{{#or great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/or}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{and}}
_Conditionally render a block if both values are truthy._

Parameters: values `string|int` - the values to test against.

Data:
``` js
great = true
magnificent = true
```

Template:
``` html
{{#and great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/and}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{unless_eq}}
**Same as `isnt`, consider consolidating**
_Conditionally render a block if the condition is false (Unless x = y). Opposite of `is`._

Parameters: `none`
``` handlebars
{{#unless_eq x compare=y}} ... {{/unless_eq}}
```
