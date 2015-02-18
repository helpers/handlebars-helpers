---
name: withFirst
block: true
summary: Use the first item or first `n` items of a collection inside a block.
parameters:
    - name: collection
      type: collection
      required: true
    - name: count
      type: number
      description: Number of items to use.
      required: false
      default: 1
---

## Example

With an array and no specified count:

```json
"array": [
  "Amy Wong",
  "Bender",
  "Dr. Zoidberg",
  "Fry"
]
```

Template:

```html
\{{#withFirst array}}
  <p>\{{this}} is smart.</p>
\{{/withFirst}}
```

Renders to:

```html
<p>Amy Wong is smart.</p>
```

Or with an array of objects and a specified count:

```json
"arrayOfObjects": [
  {
    "name": "Hermes Conrad",
    "quality": "wise"
  }, {
    "name": "Professor Farnsworth",
    "quality": "uncanny"
  }, {
    "name": "Scruffy",
    "quality": "ridiculous"
  }, {
    "name": "Leela",
    "quality": "outstanding"
  }
]
```

Template:

```html
\{{#withFirst arrayOfObjects 2}}
  <p>\{{name}} is \{{quality}}.</p>
\{{/withFirst}}
```

Renders to:

```html
<p>Hermes Conrad is wise.</p>
<p>Professor Farnsworth is uncanny.</p>
```