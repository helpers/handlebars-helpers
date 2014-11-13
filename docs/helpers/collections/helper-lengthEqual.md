#### \{{lengthEqual}}
_Conditionally render a block based on the length of a collection._
<br>Parameters: length `int` - The value to test against. (Required)

Data:

```json
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
    "deliveries": -12
  }
]
```
Template:

```html
\{{#lengthEqual collection 3}}
  There are 3 people in Planet Express.
\{{else}}
  This is not Planet Express.
\{{/lengthEqual}}
```

Renders to:

```
There are 3 people in Planet Express.
```