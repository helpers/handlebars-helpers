#### \{{gt}}
_Conditionally render a block if the value is greater than a given number (If x > y)._
<br>Parameters: value `string|int` - the value to test against.

Data:

```javascript
number = 5
```

Template:

```html
\{{#gt number 8}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/gt}}
```

Renders to:

```
Never mind :(
```
{{#todo}}**Same as `if_gt`, consider consolidating**{{/todo}}