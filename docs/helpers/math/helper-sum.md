#### \{{sum}}
_Returns the sum of multiple numbers. Similar to `\{{#add}}` block helper but accepts multiple arguments._
<br>Parameters: `none`

Data:

```javascript
value = {
  a: 1,
  b: 2,
  c: 3
}
```
Template:

```html
\{{sum value.a value.b value.c}}
```
Renders to:

```
6
```
