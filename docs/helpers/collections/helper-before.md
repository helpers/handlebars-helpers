#### \{{before}}
_Returns all of the items in the collection before the specified count. Opposite of `after`._
<br>Parameters: count `int` - How many items to omit from the end. (Required)

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
\{{before collection 5}}

```

Renders to:

```html
Amy Wong, Bender, Dr. Zoidberg
```
