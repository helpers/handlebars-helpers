#### {{toFixed}}
_Returns exactly `digits` after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length._
<br>Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)
``` js
// Data
value = 5.53231
```
``` html
// Template
{{toFixed value 3}}

// Result:
5.532
```

#### {{toPrecision}}
_Returns the number in fixed-point or exponential notation rounded to `precision` significant digits._
<br>Parameters: precision `int` - The number of digits. If omitted, it returns the entire number (without any formatting). (Optional)
``` js
// Data
value = 555.322
```
``` html
// Template
{{toPrecision value 4}}

// Result:
555.3
```

#### {{toExponential}}
_Returns the number in exponential notation with one digit before the decimal point, rounded to `fractions` digits after the decimal point._
<br>Parameters: fractions `int` - An integer specifying the number of digits after the decimal point. (Optional)
``` js
// Data
value = 5

```
``` html
// Template
{{toExponential value 5}}

// Result:
5.00000e+0
```

#### {{toInt}}
_Returns an integer._
<br>Parameters: `none`
``` js
// Data
value = '22.2abc'
```
``` html
// Template
{{toInt value}}

// Result:
22
```

#### {{toFloat}}
_Returns a floating point number._
<br>Parameters: `none`
``` js
// Data
value = '22.2abc'
```
``` html
// Template
{{toFloat value}}

// Result:
22.2
```

#### {{toAbbr}}
_Returns the number in abbreviation formats based on a value. The number is rounded to a particular decimal place._
<br>Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)
<br>Default: `2`
``` js
// Data
value = 123456789

```
``` html
// Template
{{toAbbr value}}

// Result:
123.457m
```

#### {{addCommas}}
_Adds commas to a number._
<br>Parameters: `none`
``` js
// Data
value = 2222222

```
``` html
// Template
{{addCommas value}}

// Result:
2,222,222
```