#### \{{lt}}
_Conditionally render a block if the value is less than a given number. Opposite of `gt`._
<br>Parameters: value `string|int` - the value to test against.

Data:

```javascript
number = 5
```

Template:

```html
\{{#lt number 3}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/lt}}
```
Renders to:

```
Never mind :(
```
