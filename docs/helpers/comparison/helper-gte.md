#### \{{gte}}
_Conditionally render a block if the value is greater or equal than a given number (If x >= y)_.
<br>Parameters: value `string|int` - the value to test against.

```javascript
number = 5
```

Template:

```html
\{{#gte number 5}}
  Kiss my shiny metal ass!
\{{else}}
  Never mind :(
\{{/gte}}
```

Renders to:

```
Kiss my shiny metal ass!
```
{{#todo}}**Same as `if_gteq`, consider consolidating**{{/todo}}