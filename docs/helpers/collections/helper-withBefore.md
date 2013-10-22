#### \{{withBefore}}
_Use all of the items in the collection before the specified count inside a block. Opposite of `withAfter`._
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
\{{#withBefore collection 5}}
    \{{reverse this}}
\{{/withBefore}}
```

Renders to:

```html
gnoW ymA redneB grebdioZ .rD
```
