#### \{{after}}
_Returns all of the items in the collection after the specified count._
<br>Parameters: count `int` - How many items to omit from the beginning. (Required)

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
\{{after collection 5}}
```

Renders to:

```html
Leela, Professor Farnsworth, Scruffy
```
