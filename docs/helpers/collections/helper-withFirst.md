#### \{{withFirst}}
_Use the first item in a collection inside a block._
<br>Parameters: `none`

Data:

```json
"collection": [
  "Amy Wong",
  "Bender",
  "Dr. Zoidberg",
  "Fry",
  "Hermes Conrad",
  "Leela",
  "Professor Farnsworth",
  "Scruffy"
]
```
Template:

```html
\{{#withFirst collection}}
  <p>\{{this}} is smart.</p>
\{{/withFirst}}
```

Renders to:

```html
<p>Amy Wong is smart.</p>
```