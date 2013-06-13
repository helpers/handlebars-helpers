#### {{toFixed}}
_Returns exactly `digits` after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length._

Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)

Data:
``` js
value = 5.53231
```

Template:
``` html
{{toFixed value 3}}
```

Renders to:
```
5.532
```

#### {{toPrecision}}
_Returns the number in fixed-point or exponential notation rounded to `precision` significant digits._

Parameters: precision `int` - The number of digits. If omitted, it returns the entire number (without any formatting). (Optional)

Data:
``` js
value = 555.322
```

Template:
``` html
{{toPrecision value 4}}
```

Renders to:
```
555.3
```

#### {{toExponential}}
_Returns the number in exponential notation with one digit before the decimal point, rounded to `fractions` digits after the decimal point._

Parameters: fractions `int` - An integer specifying the number of digits after the decimal point. (Optional)

Data:
``` js
value = 5
```

Template:
``` html
{{toExponential value 5}}
```

Renders to:
```
5.00000e+0
```

#### {{toInt}}
_Returns an integer._

Parameters: `none`

Data:
``` js
value = '22.2abc'
```

Template:
``` html
{{toInt value}}
```

Renders to:
```
22
```

#### {{toFloat}}
_Returns a floating point number._

Parameters: `none`

Data:
``` js
value = '22.2abc'
```

Template:
``` html
{{toFloat value}}
```

Renders to:
```
22.2
```

#### {{toAbbr}}
_Returns the number in abbreviation formats based on a value. The number is rounded to a particular decimal place._

Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)

Default: `2`

Data:
``` js
value = 123456789
```

Template:
``` html
{{toAbbr value}}
```

Renders to:
```
123.457m
```

#### {{addCommas}}
_Adds commas to a number._

Parameters: `none`

Data:
``` js
value = 2222222
```

Template:
``` html
{{addCommas value}}
```

Renders to:
```
2,222,222
```