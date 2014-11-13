#### \{{isnt}}
_Conditionally render a block if the condition is false. Opposite of `is`._
<br>Parameters: value `string|int` - the value to test against.

Data:
```javascript
number = 5
```

Template:
```html
\{{#isnt number 5}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/isnt}}
```

Renders to:
```
Never mind :(
```