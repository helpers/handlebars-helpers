#### \{{and}}
_Conditionally render a block if both values are truthy._

Parameters: values `string|int` - the values to test against.

Data:

```javascript
great = true
magnificent = true
```

Template:

```html
\{{#and great magnificent}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/and}}
```

Renders to:
```
Kiss my shiny metal ass!
```