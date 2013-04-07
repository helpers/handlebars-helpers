#### default
_Provides a default or fallback value if a value doesn't exist._
<br>Parameters: defaultValue `string|int` - The default value to use. `title = ''`

``` html
// Template
{{default title "Not title available."}}

// Result:
Not title available.
```

#### include 
_Provides an easy way to register and use partials inside your templates._

This helper only works if you define your templates as common.js modules, since it uses the common.js `require` function to find and register your templates with `Handlebars.registerPartial`. 

<br>Pattern: `{{include [name] [data]}}`
<br>Parameters:

* name (required): `[string]` - The name or path of the file in which your template is defined. (Required)
* data (optional): `[int|string|collection]` - Data you want to use inside the include. 

Data (collection): `planet-express.json`

``` js
[
  "Professor Farnsworth", 
  "Fry", 
  "Bender"
]
```

Include (partial to be "included"): `planet-express.hbs`
``` html
{{sort this}}
```

Template:
``` html
<p>{{include "planet-express.hbs" data}}</p>
```

Result:
``` html
<p>Bender, Fry, Professor Farnsworth</p>
```

