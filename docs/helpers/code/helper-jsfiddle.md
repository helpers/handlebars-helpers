## \{{jsfiddle}} <a id="jsfiddle" name="jsfiddle" class="anchor"><span class="glyphicon glyphicon-link"></span></a>
_Easily embed a [jsFiddle](http://jsfiddle.net) in a page, requiring only the ID of the fiddle._

Credit: [octopress](http://octopress.org/docs/plugins/jsfiddle-tag/)

### parameters

All of the following parameters can be defined as hash options:

* `id`    : (required) the `id` of the fiddle. Example: `ccWP7`
* `tabs`  : (optional) tabs to be displayed, and the order specified
* `skin`  : (optional) the skin to be used, `light` or `presentation` are the only options available.
* `height`: (optional) the height of the rendered `<iframe></iframe>`
* `width` : (optional) the width of the rendered `<iframe></iframe>`

Example:

```html
\{{ jsfiddle id="ccWP7" tabs="css,js"}}
```

#### Fiddle tabs
You may also adjust the tabs shown and/or the order in which tabs are displayed.

Default tabs and display order: `js,resources,html,css,result`

Options:
* `js`, `html`, `css`: tabs for displaying code
* `result`: tab for displaying the rendered result of the code
* `resources`: tabs for displaying the list of external resources used. This tab will not be displayed if no resources were used.

Template:

```html
\{{jsfiddle id="ccWP7" tabs="result,js,html,css"}}
```

Renders to:

```html
<iframe
  style="width: 100%; height: 210px"
  src="http://jsfiddle.net/ccWP7/embedded/
  result,js,html,css/"></iframe>
```

You may remove the tabs you don't need:

Template:

```html
\{{jsfiddle id="ccWP7" tabs="js,result"}}
```

Renders to:

```html
<iframe style="width: 100%; height: 210px"
  src="http://jsfiddle.net/abc123/embedded/js,
  result/"></iframe>
```

### Fiddle skins
A third _optional_ parameter may be used to specify the "skin" for the fiddle. At time of writing, the only skins available are `light` and `presentation`.
However as [jsFiddle](http://jsfiddle.net) announces new skins they may be used immediately.

Default: `light`

Template:

```html
\{{jsfiddle id='ccWP7' tabs="result,js,html,css" skin="presentation"}}
```

Renders to:

```html
<iframe style="width: 100%; height: 210px"
  src="http://jsfiddle.net/ccWP7/embedded/js,
  result/presentation/"></iframe>
```
