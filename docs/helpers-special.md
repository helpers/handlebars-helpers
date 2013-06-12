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
Params: `none`
Usage: `{{authors}}` or `{{authors "path/to/AUTHORS"}}`

Generates a list of markdown-formatted project authors from the AUTHORS file in the root of a project. Since Handlebars enforces case sensitivity with helper names, this helper comes in two different flavors: `{{AUTHORS}}` or `{{authors}}`.

For example, given we have the `AUTHORS` file in the root of our project, and it contains: 

```
Brian Woodward (http://github.com/doowb)
Jon Schlinkert (http://github.com/jonschlinkert)
```
Using the lowercase version of the helper, `{{authors}}`, the output will be:

``` md
* [Brian Woodward](http://github.com/doowb)  
* [Jon Schlinkert](http://github.com/jonschlinkert)  
```

Or using uppercase version, `{{AUTHORS}}`, the output will be:

``` md
**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)
```

### Travis CI

#### {{travis}}
Creates a "full" Travis CI link in markdown format.
Params: `branch`
Type: `String`
Usage: `{{travis [branch]}}`

Example using default: `{{travis}}`

``` md
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

Example with branch: `{{travis 'master'}}`

``` md
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib)
```

#### {{travis-badge}}
Creates a Travis CI link in markdown format.
Params: `none`
Usage: `{{travis-badge}}`

Example:

``` md
[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

#### {{changelog}}
A few convenience helpers that read data in YAML format, and do interesting things with the data. Well... they "do things" with the data. Anyway I guess only nerds like me find it interesting. 

**NOTE**: These helpers will throw an error if the source files are not  valid YAML format, using the following conventions:

A couple things to keep in mind about YAML:

* YAML is picky, so don't be surprised if the parser throws an error from improperly placed quotation marks.
* Seriously, don't be surprised. If you even come onto the issues and act surprised when it happens, an automated message will tell you to read the first bullet.

Here is an example of the format to follow in your `CHANGELOG` file:

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
Credit: [octopress](http://octopress.org/docs/plugins/jsfiddle-tag/)

All you need is the fiddle’s id and you can easily embed it in your page.

Syntax: `{{ jsfiddle id [tabs] [skin] [height] [width] }}`

##### Embedding the fiddle

``` html
http://[id-of-the-fiddle]/embedded/[tabs]/[style]]/
```
Example:

``` handlebars
{{ jsfiddle 'ccWP7' }}
```

**id**

Full URL to the fiddle without `http://jsfiddle.net`

**tabs**

Selected tabs in the order you want them to be displayed. 

Default: `js,resources,html,css,result`

Options: 

* `js`, `html`, `css`: tab with the corresponding code
* `result`: result tab 
* `resources`: list of external resources, it will not be displayed if no resources were used

_Adjusting Tabs_

It’s possible to easily adjust the display order of the tabs. In this case, I’m moving the result to be the first item shown.

``` handlebars
{{ jsfiddle 'ccWP7' 'result,js,html,css' }}
```

**skin**

The skin to be used. 

Default: `light`

_Adjusting the Skin_

A third (optional) parameter is available to set the "skin" for the fiddle. Currently, the only skins available are `light` and `presentation`.  However, if or when jsFiddle announces new options they may be used immediately.

``` handlebars
{{ jsfiddle 'ccWP7' 'result,js,html,css' 'light' }}
```

##### Examples

``` html
<iframe width="100%" height="300" src="http://jsfiddle.net/abc123/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

// or
<iframe style="width: 100%; height: 300px"src="http://jsfiddle.net/abc123/embedded/result,js,html,css/presentation/"></iframe>
```

##### Optional tabs
If you wish to make the "result" tab display first, then just add `result` and any other secondary tabs you wish to include to your URL:

```
{{jsfiddle "http://jsfiddle.net/abc123/embedded/result,js,html,css/"}}
```

``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/abc123/embedded/result,js,html,css/"></iframe>
```

If there is no need to show all the tabs, you may remove the tabs you don't need: 

``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/abc123/embedded/js,result/"></iframe>
```

#### Changing skins
Fiddles also allow "skins". In the following example, `presentation` is the name of the skin:

``` html
<iframe style="width: 100%; height: 210px"src="http://jsfiddle.net/abc123/embedded/js,result/presentation/"></iframe> 
```