#### add
_Returns the sum of two numbers._
<br>Parameters: value `int` - The number to add to the expression. (Required)
``` js
// Data
value = 5
```
``` html
// Template
{{add value 5}}

// Result:
10
```

#### subtract
_Returns the difference of two numbers. Opposite of `add`_
<br>Parameters: value `int` - The number to subtract from the expression. (Required)_
``` js
// Data
value = 5
```
``` html
// Template
{{subtract value 5}}

// Result:
0
```

#### divide
_Returns the division of two numbers._
<br>Parameters: value `int` - The number to divide the expression. (Required)
``` js
// Data
value = 5
```
``` html
// Template
{{divide value 5}}

// Result:
1
```

#### multiply
_Returns the multiplication of two numbers._
<br>Parameters: value `int` - The number to multiply the expression. (Required)
``` js
// Data
value = 5

```
``` html
// Template
{{multiply value 5}}

// Result:
25
```

#### floor
_Returns the value rounded down to the nearest integer._
<br>Parameters: `none`
``` js
// Data
value = 5.6
```
``` html
// Template
{{floor value}}

// Result:
5
```

#### ceil
_Returns the value rounded up to the nearest integer._
<br>Parameters: `none`
``` js
// Data
value = 5.6
```
``` html
// Template
{{ceil value}}

// Result:
6
```

#### round
_Returns the value rounded to the nearest integer._
<br>Parameters: `none`
``` js
// Data
value = 5.69
```
``` html
// Template
{{round value}}

// Result:
6
```

#### sum
_Returns the sum of multiple numbers. Similar to `{{#add}}` block helper but accepts multiple arguments._
<br>Parameters: `none`
``` js
// Data
value = {
  a: 1,
  b: 2,
  c: 3
}
```
``` html
// Template
{{sum value.a value.b value.c}}

// Result:
6
```
