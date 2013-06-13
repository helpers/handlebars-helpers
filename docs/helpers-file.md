#### {{include}}
_Include external files._

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

Renders to:
``` html
<p>Bender, Fry, Professor Farnsworth</p>
```

#### {{glob}}
**example helpers, not for actual use!**
Why do this? The goal is to inspire other concepts that build from this one.

_Use globbing patterns to embed content from specified file or files._
<br>Parameters: `String`
<br> Default: `undefined`

Examples:
``` html
{{glob 'src/files/*.md'}}
{{glob 'src/files/*.{txt,md}'}}
```

#### {{copy}}
**example helpers, not for actual use!**
Why do this? The goal is to inspire other concepts that build from this one.

_Example helper, copies file A to path B._
<br>Parameters: `String`
<br> Default: `undefined`

Example:
``` html
{{copy 'a.html' '../dir/b.txt'}}
```