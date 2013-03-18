#### default
_Provides a default or fallback value if a value doesn't exist._
<br>Parameters: defaultValue `string|int` - The default value to use. `title = ''`

``` html
// Template
\{{default title "Not title available."}}

// Result:
Not title available.
```

#### partial (**NOT USED IN ASSEMBLE**)
_Provides an easy way to register and use partials inside your templates._

This helper only works if you define your templates as common.js modules, since it uses the common.js `require` function to find and register your templates with `Handlebars.registerPartial`. It was created with [brunch](http://brunch.io) in mind (which I use a lot), because brunch automatically wraps your scripts and templates in common.js modules to use in the browser.

<br>Parameters:

* name `string` - The name or path of the file in which your template is defined. (Required)
* data `int|string|collection` - The data you want to use inside the partial. (Optional)

``` js
// Path to your templates from where you override config.partialsPath
// The path must finish with a foward slash '/'
config.partialsPath = '../views/templates/'

// Data
collection = [
  'Professor Farnsworth', 
  'Fry', 
  'Bender'
]
```
``` html
// Your Partial (planet_express.hbs)
\{{sort this}}

// Your template
<p>\{{partial "planet_express" collection}}</p>

// Result:
<p>Bender, Fry, Professor Farnsworth</p>
```