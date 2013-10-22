#### \{{is}}
_Conditionally render a block if the condition is true (if x = y)._

Parameters: `string|int` (the value to test against)
Default: `undefined`

##### Example #1:

Data:

```javascript
---
number = 5
---
```

Template:

```html
\{{#is number 5}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/is}}
```

Renders to:

```
Kiss my shiny metal ass!
```

##### Example #2:

If you are using data from _YAML front matter_ or any specified `JSON` and/or `YAML` source files will get passed through to the context in your templates.

Data and Templates:

```html
---
page:
  title: About Us
---

\{{#is page.title "Home"}}
    <h1> About Us </h1>
\{{else}}
    <h1> My Blog </h1>
\{{/is}}
```

Renders to:

```html
<h1> About Us </h1>
```

#### \{{ifeq}}
**Alias for `is`. Considering consolidating**

_Conditionally render a block if the condition is true (If x = y)._

Parameters: `none`

```html
\{{#ifeq x compare=y}} ... \{{/ifeq}}
```