---
name: after
block: false
summary: Returns all of the items in a collection after the specified count as a comma-separated string.
parameters:
  - name: collection
    type: collection
    required: true
  - name: count
    type: number
    description: Number of items to omit, counting from the beginning.
    required: true
---

## Example

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
Leela,Professor Farnsworth,Scruffy
```