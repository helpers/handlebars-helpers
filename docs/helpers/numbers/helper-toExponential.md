#### \{{toExponential}}
_Returns the number in exponential notation with one digit before the decimal point, rounded to `fractions` digits after the decimal point._

Parameters: fractions `int` - An integer specifying the number of digits after the decimal point. (Optional)

Data:

```javascript
value = 5
```

Template:

```html
\{{toExponential value 5}}
```

Renders to:

```
5.00000e+0
```
