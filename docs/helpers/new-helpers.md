---
published: false
---

## \\{{#loop}}
some_object = { foo: { firstname: 'John', lastname: 'Johnson' }, bar: { firstname: 'Peter', lastname: 'Parker' } };

with:

```handlebars
\{{#loop some_object}}
  \{{__key}}: \{{firstname}} - \{{lastname}}<br>
\{{/loop}}
```

Results in:

```html
foo: John Johnson<br>
bar: Peter Parker<br>
```

### \{{check}}

```handlebars
\{{#check variable "xx" }}
  do something if variable is equal to "xx"
\{{else}}
  do something if variable is not equal to "xx"
\{{/check}}
```

### \{{checknot}}

Opposite of \{{check}}.


### \{{eq}}

```html
<a href='\{{eq variable "xx" "there_is_xx_link" "there_is_not_xx_link"}}'>link</a>
```

### \{{def}}

```html
<div>\{{def variable "default_value"}}</div>
```

### \{{truncate}}

```html
<div>\{{truncate "some very long text" 10}}</div>
```

### \{{assign}}

Attention, the following helper is some kind of workaround, do not use this function unless you know what are you doing and you really need this.

```js
foo=bar
```

```handlebars
\{{assign "tmp_var" "this " "is " "some " "combined " "string " "with " foo " variable" }}
```

Results in `tmp_var="this is some combined string with bar variable"`


You can see and examine other functions in script.js


## LICENSE
MIT


## AUTHORS
Arminas Žukauskas <arminas ( at ) jojo ( dot ) lt>