#### \{{include}}
_Include external files._

<br>Pattern: `\{{include [name] [data]}}`
<br>Parameters:

* name (required): `[string]` - The name or path of the file in which your template is defined. (Required)
* data (optional): `[int|string|collection]` - Data you want to use inside the include.

Data (collection): `planet-express.json`

```javascript
[
  "Professor Farnsworth",
  "Fry",
  "Bender"
]
```

Include (partial to be "included"): `planet-express.hbs`

```html
\{{sort this}}
```

Template:

```html
<p>\{{include "planet-express.hbs" data}}</p>
```

Renders to:

```html
<p>Bender, Fry, Professor Farnsworth</p>
```