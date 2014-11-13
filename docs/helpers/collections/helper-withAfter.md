#### \{{withAfter}}
_Use all of the items in the collection after the specified count inside a block._
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
\{{#withAfter collection 5}}
    \{{titleize this}}
\{{/withAfter}}

```

Renders to:

```html
Leela Professor Farnsworth Scruffy
```
