#### \{{debug}}
_Simple `console.debug()` that shows the current context._

Parameters: `none`

Data:

```javascript
{
  "collection": [
    {
      "name": "Leela",
      "deliveries": 8021
    },
    {
      "name": "Bender",
      "deliveries": 239
    },
    {
      "name": "Fry",
      "deliveries": 1
    }
  ]
}
```

Template:

```html
\{{#withFirst collection}}
   \{{debug name}}
\{{/withFirst}}
```

Renders to:

```javascript
Context: { deliveries: 8021, name: "Leela" }
Value: Leela
```
