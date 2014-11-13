#### \{{toPrecision}}
_Returns the number in fixed-point or exponential notation rounded to `precision` significant digits._

Parameters: precision `int` - The number of digits. If omitted, it returns the entire number (without any formatting). (Optional)

Data:

```javascript
value = 555.322
```

Template:

```html
\{{toPrecision value 4}}
```

Renders to:

```
555.3
```
