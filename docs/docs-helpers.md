## Special helpers
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



## Path helpers
Path helpers are [node.js](http://nodejs.org/api/path.html) utilities for handling and transforming file paths. As with node.js: 

> "these helpers perform only string transformations. The file system is not consulted to check whether paths are valid."

#### {{relative}}
_Derive the relative path from one **absolute path** to another (e.g from path A, to path B)._
<br>Parameters: `string` (the value to test against)
<br>Default: `none`

Example:
``` handlebars
{{relative "from" "to"}}
```
Usage:
``` html
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 
```

Renders to:
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```

#### {{extname}}
_"Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string."_

Parameters: `string` (the value to test against). 
Default: `none`

Template:
``` html
{{extname 'index.html'}}
```

Renders to:
```
.html
```

Template: 
```
{{extname 'index.'}}
```

Renders to:
```
.
```

Template: 
```
{{extname 'index'}}
```

Returns nothing.



#### {{dirname}}
_Return the directory name of a path. Similar to the Unix dirname command._

Template:

``` html
{{dirname '/foo/bar/baz/asdf/quux'}}

Renders to:
```
'/foo/bar/baz/asdf'
```



## URL helpers
URL helpers are [node.js](http://nodejs.org/api/url.html) `url` utilities for URL resolution and parsing. As with node.js: 

> "Parsed URL objects have some or all of the following fields, depending on whether or not they exist in the URL string. Any parts that are not in the URL string will not be in the parsed object."

#### {{url_resolve}}
_Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag._

<br>Template:
``` haskell
{{url_resolve url href}}
```
Example:
``` html
<a href="{{url_resolve "http://example.com/one" "/two"}}"></a> 
```
Renders to:
``` html
<a href="http://example.com/two"></a> 
```


#### {{url_parse}}
_Take a URL string, and return an object._

Params:
* `url`
* Output format: `yaml` or `json`. Default: `json`

Template:
``` 
{{url_parse "http://example.com/one"}} 
```

Renders to:
``` json
{
  "protocol": "http:",
  "slashes": true,
  "auth": null,
  "host": "example.com",
  "port": null,
  "hostname": "example.com",
  "hash": null,
  "search": null,
  "query": null,
  "pathname": "/one",
  "path": "/one",
  "href": "http://example.com/one"
} 
```

Or with `yaml` as the second param:
``` haskell
{{url_parse "http://foo.com/bar/baz?key=value" "yaml"}}
```

Renders to:
``` coffeescript
protocol: "http:"
slashes: true
auth: null
host: "foo.com"
port: null
hostname: "foo.com"
hash: null
search: "?key=value"
query: "key=value"
pathname: "/bar/baz"
path: "/bar/baz?key=value"
href: "http://foo.com/bar/baz?key=value"
parse: 
format: 
resolve: 
resolveObject: 
parseHost: 
```


## File helpers
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


## Strings helpers
#### {{occurrences}}
_Evaluate string A, and count the occurrences of string B within string A_
<br>Default: `undefined`
<br>Parameters:
* `String A` (required): The string to evaluate
* `String B` (required): The string to look for and count in "string A"

``` handlebars
{{occurrences "evaluate this string" "evaluate"}}
```
Result :
```
1
```

#### {{hyphenate}}
_Replace spaces in string with hyphens._
<br>Parameters: `none`
``` handlebars
{{hyphenate "make this all hyphenated"}}
```
Result :
```
make-this-all-hyphenated
```

#### {{dashify}}
_Same as `hyphenate`, but replaces dots in string with hyphens._
<br>Parameters: `none`
``` handlebars
{{dashify "make.this.all.hyphenated"}}
```
Renders to:
```
make-this-all-hyphenated
```

#### {{lowercase}}
_Turns a string to lowercase._
<br>Parameters: `none`
``` handlebars
{{lowercase "MAKE THIS ALL LOWERCASE"}}
```
Renders to:
```
make this all lowercase
```

#### {{uppercase}}
_Turns a string to uppercase. Opposite of `{{lowercase}}`._
<br>Parameters: `none`
``` handlebars
 {{uppercase "make this all uppercase"}}
```
Renders to:
```
MAKE THIS ALL UPPERCASE
```

#### {{capitalizeFirst}}
_Capitalizes the first word in a string._
<br>Parameters: `none`
``` handlebars
{{capitalizeFirst "capitalize first word in this sentence"}}
```
Renders to:
```
Capitalize first word in this sentence
```

#### {{capitalizeEach}}
_Capitalizes each word in a string._
<br>Parameters: `none`
``` handlebars
{{capitalizeEach "capitalize EACH word in this sentence"}}
```
Renders to:
```
Capitalize EACH Word In This Sentence
```

#### {{titleize}}
_Capitalizes all words within a string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel)._
<br>Parameters: `none`
``` handlebars
{{titleize "capitalize EACH word in this sentence"}}
```
Renders to:
```
Capitalize Each Word In This Sentence.
```

#### {{sentence}}
_Capitalizes the first word of each sentence in a string and converts the rest of the sentence to lowercase._
Parameters: `none`
``` handlebars
{{sentence "capitalize the FIRST word in each sentence. but make the OTHER words lowercase."}}
```
Renders to:
```
Capitalize the first word in each sentence. But make the other words lowercase.
```

#### {{reverse}}
_Reverses a string._
<br>Parameters: `none`
``` handlebars
{{reverse "bender should NOT be allowed on TV."}}
```
Renders to:
```
.VT no dewolla eb TON dluohs redneb
```

#### {{truncate}}
_Truncates a string given a specified `length`, providing a custom string to denote an `omission`._
<br>Parameters: 

* length: `int`- The number of characters to keep (Required). 
* omission: `string` - A string to denote an omission (Optional). 

``` handlebars
{{truncate "Bender should not be allowed on tv." 31 "..."}}
```
Renders to:
```
Bender should not be allowed...
```

#### {{center}}
_Centers a string using non-breaking spaces._
<br>Parameters: spaces: `int` - The number of spaces. (Required)
``` handlebars
{{center "Bender should not be allowed on tv." 10}}
```
Renders to:
```
|              Bender should not be allowed on tv.              |
```

#### {{formatPhoneNumber}}
_Output a formatted phone number_

Credit: [Treehouse Blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)

Data:
```js
number: 4444444444
```
Template:
``` handlebars
{{formatPhoneNumber number}}
```
Renders to:
```
(444) 444-4444
```



## HTML helpers
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

#### {{blockquote}}
**Planned...**

_Create a blockquote. Outputs a string with a given attribution as a quote._

Template:

``` handlebars
{{#blockquote '@doowb' 'http://github.com/source/for/your/quote' 'This is the title' }}
  This is your quote.
{{/blockquote}}
```

Renders to:

``` html
<blockquote>
  <p>This is your quote.</p>
  <footer> 
    <strong>@doowb</strong>
    <cite> 
      <a href="http://github.com/source/for/your/quote">This is the title</a>
    </cite>
  </footer>
</blockquote>
```

#### {{timeline}}
**Planned...**

_Iterates through an array, letting the contents know whether a timeline entry belongs in the left or right column._

Parameters: 

* `array` to iterate over, 
* `string`: CSS class name for left columns
* `string`: CSS class name for right columns

Credit: by [@jonschlinkert](http://github.com/jonschlinkert), and based on striped helper from [treehouse blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)

Usage:
``` handlebars
<div class="timeline">
 {{#timeline myArray "left" "right"}}
 <div class="{{columnClass}}">
   {{> entry}}
 </div>
 {{else}}
   <em>There aren't any entries.</em>
 {{/timeline}}
</div>
```

#### {{exticon}}
_Generate the appropriate icon based on the extension of the given file._

Since this helper generates classes that are very specific, feel free to copy the code and use it as inspiration for your a helper that works for you.

Usage: 
``` handlebars
{{exticon 'file.png'}}
{{exticon 'file.pdf'}}
{{exticon 'file.doc'}}
{{exticon 'file.txt'}}
{{exticon 'file.csv'}}
{{exticon 'file'}}
```
Output:
``` html
<img src="img/img-icon.png"><i>file.png</i>
<img src="img/pdf-icon.png"><i>file.pdf</i>
<img src="img/word-icon.png"><i>file.doc</i>
<img src="img/txt-icon.png"><i>file.txt</i>
<img src="img/csv-icon.png"><i>file.csv</i>
<img src="img/other-icon.png"><i>file</i>
```

#### {{ul}}
_Creates an unordered list._

Parameters: `Hash|HTML attributes`, `Optional`

HTML attributes to use on the `ul` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```
Template:
``` handlebars
{{#ul collection class="deliveries-list"}}
  {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
{{/ul}}
```
``` html
// Output:
<ul class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ul>
```
#### {{ol}}
_Same as the `ul` helper but creates and ordered list. Returns `<br>` tags based on a count._

Parameters: `Hash`, `HTML attributes`, `Optional`

HTML attributes to use on the `ol` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```

Template:
``` handlebars
{{#ol collection class="deliveries-list"}}
  {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
{{/ol}}
```
``` html
// Output:
<ol class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ol>
```

#### {{br}}
_Renders `<br>` elements in the output, based on the number given as a parameter. Not really recommended for general use, but it's here if you need it._

Parameters: `Integer|Count`, `Optional`

The number of `br` elements to render. 

`template.hbs`
``` handlebars
{{br 5}}
```
renders to:
``` html
`<br><br><br><br><br>`
```


## Collections helpers
#### {{first}}
_Returns the first item in a collection._
<br>Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{first collection}}

```

Renders to:
```
Amy Wong
```

#### {{withFirst}}
_Use the first item in a collection inside a block._
<br>Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{#withFirst collection}}
  <p>{{this}} is smart.</p>
{{/withFirst}}

```

Renders to:
``` html
<p>Amy Wong is smart.</p>
```

#### {{last}}
_Returns the last item in a collection. Opposite of `first`._
<br>Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{last collection}}

```

Renders to:
```
Scruffy
```

#### {{withLast}}
_Use the last item in a collection inside a block. Opposite of `withFirst`._
<br>Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{#withLast collection}}
  <p>{{this}} is lazy.</p>
{{/withLast}}

```

Renders to:
``` html
<p>Scruffy is lazy.</p>
```

#### {{after}}
_Returns all of the items in the collection after the specified count._
<br>Parameters: count `int` - How many items to omit from the beginning. (Required)
```
// Date
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{after collection 5}}
```

Renders to:
``` html
Leela, Professor Farnsworth, Scruffy
```

#### {{withAfter}}
_Use all of the items in the collection after the specified count inside a block._
<br>Parameters: count `int` - How many items to omit from the beginning. (Required)

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{#withAfter collection 5}}
    {{titleize this}}
{{/withAfter}}

```

Renders to:
```
Leela Professor Farnsworth Scruffy
```

#### {{before}}
_Returns all of the items in the collection before the specified count. Opposite of `after`._
<br>Parameters: count `int` - How many items to omit from the end. (Required)

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{before collection 5}}

```

Renders to:
```
Amy Wong, Bender, Dr. Zoidberg
```

#### {{withBefore}}
_Use all of the items in the collection before the specified count inside a block. Opposite of `withAfter`._
<br>Parameters: count `int` - How many items to omit from the end. (Required)

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{#withBefore collection 5}}
    {{reverse this}}
{{/withBefore}}
```

Renders to:
```
gnoW ymA redneB grebdioZ .rD
```

#### {{join}}
_Joins all elements of a collection into a string using a separator if specified._
<br>Parameters: separator `string` - A string to use as a separator between the items. (Optional)

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{join collection " & "}}
```

Renders to:
```
Amy Wong & Bender & Dr. Zoidberg & Fry & Hermes Conrad & Leela & Professor Farnsworth & Scruffy
```

#### {{sort}}
_Returns the collection sorted._
Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
Template:
``` html
{{sort collection}}
```

Renders to:
```
Amy Wong, Bender, Dr. Zoidberg, Fry, Hermes Conrad, Leela, Professor Farnsworth, Scruffy
```

#### {{withSort}}
_Uses the sorted collection inside the block._
<br>Parameters: field `string` - String name of the field or property to sort by. (Optional)

Data:
``` js
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]

```
Template:
``` html
{{#withSort collection "deliveries"}}
  {{name}}: {{deliveries}} <br>
{{/withSort}}
```

Renders to:
```
Fry: -12
Bender: 239
Leela: 8021
```

#### {{length}}
_Returns the length of the collection._
<br>Parameters: `none`

Data:
``` js
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]

```
Template:
``` html
{{length collection}}
```

Renders to:
```
8
```

#### {{lengthEqual}}
_Conditionally render a block based on the length of a collection._
<br>Parameters: length `int` - The value to test against. (Required)

Data:
``` js
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]
```
Template:
``` html
{{#lengthEqual collection 3}}
    There are 3 people in Planet Express.
{{else}}
    This is not Planet Express.
{{/lengthEqual}}
```

Renders to:
```
There are 3 people in Planet Express.
```

#### {{empty}}
_Conditionally render a block if the collection is empty._
<br>Parameters: `none`

Data:
``` js
collection = []
```
Template:
``` html
{{#empty collection}}
    Good news everyone!
{{else}}
    Bad news everyone!
{{/empty}}
```

Renders to:
```
Good news everyone!
```
#### {{any}}
_Conditionally render a block if the collection isn't empty. Opposite of `empty`_
<br>Parameters: `none`

Data:
``` js
collection = ['Professor Farnsworth']
```
Template:s
``` html
{{#any collection}}
  Good news everyone!
{{else}}
  Bad news everyone!
{{/any}}
```

Renders to:
```
Good news everyone!
```

#### {{inArray}}
_Conditionally render a block if a specified value is in the collection._
<br>Parameters: value `string|int` - A value to test against. (Required)

Data:
``` js
collection = ['Professor Farnsworth', 'Fry', 'Bender']
```
Template:s
``` html
{{#inArray collection "Fry"}}
  I'm walking on sunshine!
{{else}}
  I'm walking on darkness.
{{/any}}
```

Renders to:
```
I'm walking on sunshine!
```

#### {{eachIndex}}
_Current implementation of the default Handlebars loop helper {{#each}} adding index (0-based index) to the loop context._
<br>Parameters: `none`

Data:
``` js
collection = ['Professor Farnsworth', 'Fry', 'Bender']
```
Template:s
``` html
{{#eachIndex collection}}
  {{this}} is {{index}}
{{/eachIndex}}
```

Renders to:
```
Professor Farnsworth is 0, Fry is 1, Bender is 2
```

#### {{eachProperty}}
_Loop through an objects properties_
<br>Parameters: `none`

Data:
``` js
TODO...
```
Template:s
``` html
{{#eachProperty object}}
    {{property}}: {{value}}<br/>
{{/eachProperty }}
```

Renders to:
```
TODO...
```


## Math helpers
#### {{add}}
_Returns the sum of two numbers._
<br>Parameters: value `int` - The number to add to the expression. (Required)

Data:
``` js
value = 5
```
Template:
``` html
{{add value 5}}
```
Renders to:
```
10
```

#### {{subtract}}
_Returns the difference of two numbers. Opposite of `add`_
<br>Parameters: value `int` - The number to subtract from the expression. (Required)_

Data:
``` js
value = 5
```
Template:
``` html
{{subtract value 5}}
```
Renders to:
```
0
```

#### {{divide}}
_Returns the division of two numbers._
<br>Parameters: value `int` - The number to divide the expression. (Required)

Data:
``` js
value = 5
```
Template:
``` html
{{divide value 5}}
```
Renders to:
```
1
```

#### {{multiply}}
_Returns the multiplication of two numbers._
<br>Parameters: value `int` - The number to multiply the expression. (Required)

Data:
``` js
value = 5

```
Template:
``` html
{{multiply value 5}}
```
Renders to:
```
25
```

#### {{floor}}
_Returns the value rounded down to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.6
```
Template:
``` html
{{floor value}}
```
Renders to:
```
5
```

#### {{ceil}}
_Returns the value rounded up to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.6
```
Template:
``` html
{{ceil value}}
```
Renders to:
```
6
```

#### {{round}}
_Returns the value rounded to the nearest integer._
<br>Parameters: `none`

Data:
``` js
value = 5.69
```
Template:
``` html
{{round value}}
```
Renders to:
```
6
```

#### {{sum}}
_Returns the sum of multiple numbers. Similar to `{{#add}}` block helper but accepts multiple arguments._
<br>Parameters: `none`

Data:
``` js
value = {
  a: 1,
  b: 2,
  c: 3
}
```
Template:
``` html
{{sum value.a value.b value.c}}
```
Renders to:
```
6
```


## Numbers helpers
#### {{toFixed}}
_Returns exactly `digits` after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length._

Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)

Data:
``` js
value = 5.53231
```

Template:
``` html
{{toFixed value 3}}
```

Renders to:
```
5.532
```

#### {{toPrecision}}
_Returns the number in fixed-point or exponential notation rounded to `precision` significant digits._

Parameters: precision `int` - The number of digits. If omitted, it returns the entire number (without any formatting). (Optional)

Data:
``` js
value = 555.322
```

Template:
``` html
{{toPrecision value 4}}
```

Renders to:
```
555.3
```

#### {{toExponential}}
_Returns the number in exponential notation with one digit before the decimal point, rounded to `fractions` digits after the decimal point._

Parameters: fractions `int` - An integer specifying the number of digits after the decimal point. (Optional)

Data:
``` js
value = 5
```

Template:
``` html
{{toExponential value 5}}
```

Renders to:
```
5.00000e+0
```

#### {{toInt}}
_Returns an integer._

Parameters: `none`

Data:
``` js
value = '22.2abc'
```

Template:
``` html
{{toInt value}}
```

Renders to:
```
22
```

#### {{toFloat}}
_Returns a floating point number._

Parameters: `none`

Data:
``` js
value = '22.2abc'
```

Template:
``` html
{{toFloat value}}
```

Renders to:
```
22.2
```

#### {{toAbbr}}
_Returns the number in abbreviation formats based on a value. The number is rounded to a particular decimal place._

Parameters: digits `int` - The number of digits to appear after the decimal point. (Optional)

Default: `2`

Data:
``` js
value = 123456789
```

Template:
``` html
{{toAbbr value}}
```

Renders to:
```
123.457m
```

#### {{addCommas}}
_Adds commas to a number._

Parameters: `none`

Data:
``` js
value = 2222222
```

Template:
``` html
{{addCommas value}}
```

Renders to:
```
2,222,222
```


## Comparisons: "equal" helpers
#### {{is}}
_Conditionally render a block if the condition is true (if x = y)._

Parameters: `string|int` (the value to test against)
Default: `undefined`

Example #1:

Data:
``` js
---
number = 5
---
```

Template:
``` html
{{#is number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/is}}
```

Renders to:
```
Kiss my shiny metal ass!
```

Example #2:

If you are using [Assemble](https://github.com/assemble/assemble), data from _YAML front matter_ or any specified `JSON` and/or `YAML` source files will get passed through to the context in your templates.

Data and Templates: 
``` yaml
---
page:
  title: About Us
---

{{#is page.title "Home"}}
    <h1> About Us </h1>
{{else}}
    <h1> My Blog </h1>
{{/is}}
```

Renders to:
```
<h1> About Us </h1>
```

#### {{if_eq}}
**Same as `is`, consider consolidating**
_Conditionally render a block if the condition is true (If x = y)._

Parameters: `none`
``` handlebars
{{#if_eq x compare=y}} ... {{/if_eq}}
```

#### {{isnt}}
_Conditionally render a block if the condition is false. Opposite of `is`._
<br>Parameters: value `string|int` - the value to test against.

Data:
``` js
number = 5
```

Template:
``` html
{{#isnt number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/isnt}}
```

Renders to:
```
Never mind :(
```

#### {{or}}
_Conditionally render a block if one of the values is truthy._

Parameters: values `string|int` - the values to test against.

Data:
``` js
great = no
magnificent = true
```

Template:
``` html
{{#or great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/or}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{and}}
_Conditionally render a block if both values are truthy._

Parameters: values `string|int` - the values to test against.

Data:
``` js
great = true
magnificent = true
```

Template:
``` html
{{#and great magnificent}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/and}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{unless_eq}}
**Same as `isnt`, consider consolidating**
_Conditionally render a block if the condition is false (Unless x = y). Opposite of `is`._

Parameters: `none`
``` handlebars
{{#unless_eq x compare=y}} ... {{/unless_eq}}
```



## Comparisons: "greater than" helpers
#### {{if_gt}}
_Conditionally render a block if the value is greater than a given number (If x > y)._
Parameters: `none`
``` handlebars
{{#if_gt x compare=y}} ... {{/if_gt}}
```

#### {{gt}}
**Same as `if_gt`, consider consolidating**
_Conditionally render a block if the value is greater than a given number (If x > y)._
<br>Parameters: value `string|int` - the value to test against.

Data:
``` js
number = 5
```

Template:
``` html
{{#gt number 8}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/gt}}
```

Renders to:
```
Never mind :(
```

#### {{unless_gt}}
_Unless greater than (Unless x > y)_
Parameters: `none`
``` handlebars
{{#unless_gt x compare=y}} ... {{/unless_gt}}
```

#### {{if_gteq}}
_Conditionally render a block if the value is greater or equal than a given number (If x >= y)._
Parameters: `none`
``` handlebars
{{#if_gteq x compare=y}} ... {{/if_gteq}}
```

#### {{gte}}
**Same as `if_gteq`, consider consolidating**
_Conditionally render a block if the value is greater or equal than a given number (If x >= y)._
<br>Parameters: value `string|int` - the value to test against.

``` js
number = 5
```

Template:
``` html
{{#gte number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/gte}}
```

Renders to:
```
Kiss my shiny metal ass!
```


#### {{unless_gteq}}
_"Unless x >= y". Render block, unless given value is greater than or equal to._
Parameters: `none`

``` handlebars
{{#unless_gteq x compare=y}} ... {{/unless_gteq}}
```


## Comparisons: "less than" helpers
#### {{lt}}
_Conditionally render a block if the value is less than a given number. Opposite of `gt`._
<br>Parameters: value `string|int` - the value to test against.
``` js
number = 5
```
``` html
{{#lt number 3}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/lt}}
```

Renders to:
```
Never mind :(
```

#### {{lte}}
_Conditionally render a block if the value is less or equal than a given number. Opposite of `gte`._
<br>Parameters: value `string|int` - the value to test against.
``` js
number = 5
```
``` html
// Template
{{#lte number 5}}
    Kiss my shiny metal ass!
{{else}}
    Never mind :(
{{/lte}}
```

Renders to:
```
Kiss my shiny metal ass!
```

#### {{unless_lt}}
_Render block, unless value is less than a given number (Unless x < y)_.

Parameters: `none`
``` handlebars
{{#unless_lt x compare=y}} ... {{/unless_lt}}
```

#### {{unless_lteq}}
_Render block, unless value is less than or equal to a given number (Unless x <= y)_.

Parameters: `none`
``` handlebars
{{#unless_lteq x compare=y}} ... {{/unless_lteq}}
```



## Dates helpers
#### {{formatDate}}
_Formats a date into a string given a format. Accepts any value that can be passed to `new Date()`. This helper is a port of the [formatDate-js](http://https://github.com/michaelbaldry/formatDate-js) library by [Michael Baldry](https://github.com/michaelbaldry)._
<br>Parameters: format `string`, `required`
The format string, according to these tokens: [strftime](http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime)

Given this data:
``` js
date = new Date()
```
And these templates:
``` handlebars
{{formatDate date "%m/%d/%Y"}}
{{formatDate date "%I:%M%p"}}
{{formatDate date "%F"}}
{{formatDate date "%Y%m%dT%H%M%S%z"}}
```
The output would be:
```
07/26/2012
11:38PM
2012-07-26
20120726T233805-0004
```

#### {{now}}
_Returns the current date._
<br>Parameters: format `string` - The format string, according to these tokens: [http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime]() (Optional)

Template:
``` handlebars
{{now}}
{{now "%m/%d/%Y"}}
```
Renders to:
```
Thu Jul 26 2012 23:41:02 GMT-0400 (AST)
07/26/2012
```

#### {{timeago}}
_Returns a human-readable time phrase from the given date._
<br>Parameters: `none`

Data:
``` js
date = 'Thu Jul 22 2012 23:41:02 GMT-0400 (AST)'
```
Template:
``` handlebars
{{timeago date}}
```
Renders to:
``` 
4 days ago
```



## Inflections helpers
#### {{inflect}}
_Returns the plural or singular form of a word based on a count._

Parameters:
* singular `string` - The singular form of the word. (Required)
* plural `string` - The plural form of the word. (Required)
* include `boolean` - whether or not to include the count before the word. (Optional)

Data:
``` js
enemies = 0
friends = 1
```
Template:
``` html
{{inflect enemies "enemy" "enemies"}}
{{inflect friends "friend" "friends" true}}
```
Renders to:
```
enemies
1 friend
```

#### {{ordinalize}}
_Turns a number into an ordinal string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel)._

Parameters: `none`

Template:
``` html
{{ordinalize 3}}
{{ordinalize 1}}
{{ordinalize 22}}
```
Renders to:
```
3rd
1st
22nd
```


## Logging helpers
#### {{log}}
_Simple `console.log()`_

Parameters: `none`

``` html
// Template
{{log "Hi console :)"}}
```

Renders to:
``` bash
Hi console :)
```

#### {{debug}}
_Simple `console.debug()` that shows the current context._

Parameters: `none`

Data:
``` js
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```

Template:
``` html
{{#withFirst collection}}
   {{debug name}}
{{/withFirst}}
```

Renders to:
``` json
Context: { deliveries: 8021, name: "Leela" }
Value: Leela
```

#### {{expandJSON}}
_Return a unique, JSON-formatted array of all file or directory paths that match the given globbing pattern(s)_

Parameters: `String`
Default: `undefined`

Template:
``` html
{{expandJSON './src/**/*.md'}}
```

Renders to:
``` json
[
  "./src/content/blockquotes.md",
  "./src/content/chapters/01-getting-started.md",
  "./src/content/chapters/02-language-features.md",
  "./src/content/chapters/03-advanced-materials.md",
  "./src/content/code.md",
  "./src/content/emphasis.md",
  "./src/content/headings.md",
  "./src/content/images.md",
  "./src/content/links.md",
  "./src/content/lists.md",
  "./src/content/markdown-here.md",
  "./src/content/paragraphs.md",
  "./src/content/post.md",
  "./src/content/reference-links.md",
  "./src/content/reference.md",
  "./src/content/tables.md",
  "./src/content/test.md"
]
```

#### {{expandYAML}}
_Return a unique, YAML-formatted array of all file or directory paths that match the given globbing pattern(s)_

Parameters: `String`

 Default: `undefined`

Template:
``` html
{{expandYAML './src/**/*.md'}}
```

Renders to:
``` yaml
- "./src/content/blockquotes.md"
- "./src/content/chapters/01-getting-started.md"
- "./src/content/chapters/02-language-features.md"
- "./src/content/chapters/03-advanced-materials.md"
- "./src/content/code.md"
- "./src/content/emphasis.md"
- "./src/content/headings.md"
- "./src/content/images.md"
- "./src/content/links.md"
- "./src/content/lists.md"
- "./src/content/markdown-here.md"
- "./src/content/paragraphs.md"
- "./src/content/post.md"
- "./src/content/reference-links.md"
- "./src/content/reference.md"
- "./src/content/tables.md"
- "./src/content/test.md"
```



## Miscellaneous helpers
#### {{default}}
_Provides a default or fallback value if a value doesn't exist._
<br>Parameters: defaultValue `string|int` - The default value to use. `title = ''`

Template:
``` html
{{default title "No title available."}}
```
Renders to:
```
No title available.
```

#### {{noop}}

TODO...

