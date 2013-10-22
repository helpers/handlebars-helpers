#### \{{eachIndex}}
_Current implementation of the default Handlebars loop helper \{{#each}} adding index (0-based index) to the loop context._
<br>Parameters: `none`

Data:

```json
"collection": ["Professor Farnsworth", "Fry", "Bend"]
```
Template:

```html
\{{#eachIndex collection}}
  \{{this}} is \{{index}}
\{{/eachIndex}}
```

Renders to:

```
Professor Farnsworth is 0, Fry is 1, Bender is 2
```