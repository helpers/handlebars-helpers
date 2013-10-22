#### \{{toFixed}}
_Returns exactly `digits` after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length._

Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)

Data:

```javascript
value = 5.53231
```

Template:

```html
\{{toFixed value 3}}
```

Renders to:

```
5.532
```
