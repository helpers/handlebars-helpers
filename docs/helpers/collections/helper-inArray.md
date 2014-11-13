#### \{{inArray}}
_Conditionally render a block if a specified value is in the collection._
<br>Parameters: value `string|int` - A value to test against. (Required)

Data:

```json
"collection": ["Professor Farnsworth", "Fry", "Bend"]
```
Template:

```html
\{{#inArray collection "Fry"}}
  I'm walking on sunshine!
\{{else}}
  I'm walking on darkness.
\{{/inArray}}
```

Renders to:

```html
I'm walking on sunshine!
```

