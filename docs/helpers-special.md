#### {{embed}}
_Embed code from given file_

Parameters: 
* `String|File` : path to the file you want to embed
* `String (optional)`: Optional second parameter to "force" a specific language to use fo syntax highlighting.

Syntax: `{{ embed [file] [syntax] }}`

Helper also:
* Unless overridden by a given extension, the helper will automatically apply the extension of the given file next to the first "code fence" (` ``` html`) in the output.
* When embedding a markdown snippet (`.md|markdown|markd`), the helper automatically converts any code fences inside the snippet their unicode equivalent (`&#x60;&#x60;&#x60;`)

Example:
``` hbs
{{ embed 'src/test.json' }}


// Force highlighting as `javascript` instead of `json`
{{ embed 'src/test.json' 'javascript' }}
```

### README Helpers

#### {{authors}}
Generates a list of markdown-formatted project authors from the AUTHORS file in the root of a project. Since Handlebars enforces case sensitivity with helper names, this helper comes in two different flavors: `{{AUTHORS}}` or `{{authors}}`.

Params: `none`
Usage: `{{authors}}` or `{{authors "path/to/AUTHORS"}}`

Data (`AUTHORS` file in the root of our project): 

```
Brian Woodward (http://github.com/doowb)
Jon Schlinkert (http://github.com/jonschlinkert)
```

Template (lowercase version):
``` handlebars
{{authors}}
```

Renders to:
``` md
* [Brian Woodward](http://github.com/doowb)  
* [Jon Schlinkert](http://github.com/jonschlinkert)  
```

Or the uppercase version:
``` handlebars
{{AUTHORS}}
```

Renders to:
``` 
**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)
```


### Travis CI

#### {{travis}}
_Creates a "full" Travis CI link in markdown format_.

Params: `branch`
Type: `String`
Usage: `{{travis [branch]}}`

Template:
``` handlebars
{{travis}}`
```

Renders to:
``` markdown
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

Template with branch: 
``` handlebars
{{travis 'master'}}
```

Renders to:
``` markdown
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib)
```

#### {{travis-badge}}
_Creates a Travis CI link in markdown format_.

Params: `none`
Usage: `{{travis-badge}}`

Template
``` handlebars
{{travis}}`
```

Renders to:
``` markdown
[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

#### {{changelog}}
A few convenience helpers that read data in YAML format, and do interesting things with the data. Well... they "do things" with the data. Anyway I guess only nerds like me find it interesting. 

**NOTE**: These helpers will throw an error if the source files are not  valid YAML format, using the following conventions:

A couple things to keep in mind about YAML:

* YAML is picky, so don't be surprised if the parser throws an error from improperly placed quotation marks.
* Seriously, don't be surprised. If you even come onto the issues and act surprised when it happens, an automated message will tell you to read the first bullet.

Example of the format to follow in your `CHANGELOG` file:

``` yaml
v0.1.2
  date: "2014-04-09"
  changes:
    - The future sucks.
    - This is my third and last commmit from the future.
v0.1.1
  date: "2014-04-08"
  changes:
    - Second commit from the future.
    - The future is more boring that I thought it would be.
v0.1.0
  date: "2014-03-07"
  changes:
    - First commit... from the future. Yes!
```
Of coure, you are under no obligation to make your changelog entries as interesting as these, and you may record your entries at any point in whatever timeline you prefer, but whatever you write must be valid YAML when you do it.

The output will look like this:

``` md
* 2013-03-15    v0.1.2    Update README.md with documentation, examples.
* 2013-03-06    v0.1.0    First commit.
```

* More info here: [js-yaml](https://github.com/nodeca/js-yaml)
* See the tests here: [test/helpers/special_test.js](test/helpers/special_test.js)


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
