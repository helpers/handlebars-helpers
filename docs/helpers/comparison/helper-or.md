#### \{{or}}
_Conditionally render a block if one of the values is truthy._

Parameters: values `string|int` - the values to test against.

Data:

```javascript
great = no
magnificent = true
```

Template:

```html
\{{#or great magnificent}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/or}}
```

Renders to:

```
Kiss my shiny metal ass!
```