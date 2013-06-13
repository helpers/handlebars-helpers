#### {{embed}}
_Embed code from specified file(s)_

Parameters: 
* `String|File` : path to the file you want to embed
* `String|Language (optional)`: Optional second parameter to "force" a specific language to use fo syntax highlighting.

Unless overridden by a given extension, the helper will automatically use the extension of the specified file as the language to use for syntax highlighting. You may also force the helper to use a language that is different than the extension of the file. 

For example, here we will force highlighting as `javascript` instead of `json`
``` hbs
{{ embed 'src/example.json' 'js' }}
```

When embedding a markdown snippet (`.md|markdown|markd`), the helper automatically converts any code fences inside the snippet their unicode equivalent (`&#x60;&#x60;&#x60;`)
```
{{embed 'src/example.md'}}
```

**File globbing**

The `embed` helper also accepts globbing patterns: 
```
{{embed 'src/code-examples/*.*'}}
```
When globbing file is used, the code from each file will be embedded separately, and the file extension of each file will be used to identify the language to use for syntax highlighting. You may of course override the language, but whatever language you use will be applied to every embedded file. 

_use globbing carefully! Until you have the hang of it try to be on the safe side and be more specific with your patterns_


#### {{gist}}
_Embed public GitHub Gists by adding only the Id of the Gist. The helper also accepts an optional second parameter for targeting a specific file on the Gist.._

Parameters: `String`
Default: `undefined`
Usage: `{{ gist [id] }}`

Example:
``` hbs
{{gist '5193239'}}
```
Output:
``` html
<script src="https://gist.github.com/5193239.js"></script>
```


#### {{jsfiddle}}
_Easily embed a [jsFiddle](http://jsfiddle.net) in a page, requiring only the ID of the fiddle._

Credit: [octopress](http://octopress.org/docs/plugins/jsfiddle-tag/)

Parameters: `{{ jsfiddle "id" "tabs" "skin" "height" "width" }}`
  * `id`: full URL to the fiddle excluding `http://jsfiddle.net`
  * `tabs`: tabs to be displayed, and the order specified
  * `skin`: the skin to be used, `light` or `presentation` are the only options available.
  * `height`: the height of the rendered `<iframe>`
  * `width`: the width of the rendered `<iframe>`

Template:
``` handlebars
{{ jsfiddle 'ccWP7' }}
```

##### Fiddle tabs
You may also adjust the tabs shown and/or the order in which tabs are displayed. 

Default tabs and display order: `js,resources,html,css,result`

Options: 
* `js`, `html`, `css`: tabs for displaying code
* `result`: tab for displaying the rendered result of the code
* `resources`: tabs for displaying the list of external resources used. This tab will not be displayed if no resources were used.

Template:
``` handlebars
{{jsfiddle 'ccWP7' 'result,js,html,css'}}
```

Renders to:
``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/ccWP7/embedded/result,js,html,css/"></iframe>
```

You may remove the tabs you don't need:

Template:
``` handlebars
{{jsfiddle 'ccWP7' 'js,result'}}
```

Renders to:
``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/abc123/embedded/js,result/"></iframe>
```

#### Fiddle skins
A third _optional_ parameter may be used to specify the "skin" for the fiddle. At time of writing, the only skins available are `light` and `presentation`. However as [jsFiddle](http://jsfiddle.net) announces new skins they may be used immediately.

Default: `light`

Template:
``` handlebars
{{jsfiddle 'ccWP7' 'result,js,html,css' 'presentation'}}
```

Renders to:
``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/ccWP7/embedded/js,result/presentation/"></iframe> 
```
