#### \{{join}}
_Joins all elements of a collection into a string using a separator if specified._
<br>Parameters: separator `string` - A string to use as a separator between the items. (Optional)

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
\{{join collection " & "}}
```

Renders to:

```
Amy Wong & Bender & Dr. Zoidberg & Fry & Hermes Conrad & Leela & Professor Farnsworth & Scruffy
```
