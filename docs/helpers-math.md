#### {{add}}
_Returns the sum of two numbers._
<br>Parameters: value `int` - The number to add to the expression. (Required)

Data:
``` js
value = 5
```
Template:
``` html
{{add value 5}}
```
Renders to:
```
10
```

#### {{subtract}}
_Returns the difference of two numbers. Opposite of `add`_
<br>Parameters: value `int` - The number to subtract from the expression. (Required)_

Data:
``` js
value = 5
```
Template:
``` html
{{subtract value 5}}
```
Renders to:
```
0
```

#### {{divide}}
_Returns the division of two numbers._
<br>Parameters: value `int` - The number to divide the expression. (Required)

Data:
``` js
value = 5
```
Template:
``` html
{{divide value 5}}
```
Renders to:
```
1
```

#### {{multiply}}
_Returns the multiplication of two numbers._
<br>Parameters: value `int` - The number to multiply the expression. (Required)

Data:
``` js
value = 5

```
Template:
``` html
{{multiply value 5}}
```
Renders to:
```
25
```

#### {{floor}}
_Returns the value rounded down to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.6
```
Template:
``` html
{{floor value}}
```
Renders to:
```
5
```

#### {{ceil}}
_Returns the value rounded up to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.6
```
Template:
``` html
{{ceil value}}
```
Renders to:
```
6
```

#### {{round}}
_Returns the value rounded to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.69
```
Template:
``` html
{{round value}}
```
Renders to:
```
6
```

#### {{sum}}
_Returns the sum of multiple numbers. Similar to `{{#add}}` block helper but accepts multiple arguments._
<br>Parameters: `none`

Data:
``` js
value = {
  a: 1,
  b: 2,
  c: 3
}
```
Template:
``` html
{{sum value.a value.b value.c}}
```
Renders to:
```
6
```