#### \{{withLast}}
_Use the last item in a collection inside a block. Opposite of `withFirst`._
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
\{{#withLast collection}}
  <p>\{{this}} is lazy.</p>
\{{/withLast}}
```

Renders to:

```html
<p>Scruffy is lazy.</p>
```
