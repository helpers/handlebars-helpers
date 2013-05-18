Path helpers are [node.js](http://nodejs.org/api/path.html) utilities for handling and transforming file paths. As with node.js: 

> "these helpers perform only string transformations. The file system is not consulted to check whether paths are valid."

#### relative (from, to)
_Derive the relative path from one **absolute path** to another (e.g from path A, to path B)._
<br>Parameters: `string` (the value to test against)
<br>Default: `none`
<br>Usage:
``` html
{{relative "from" "to"}}
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

// returns
<a href="../../dist/assets/css/styles.css"></a> 
```

#### extname
_"Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string."_
<br>Parameters: `string` (the value to test against)
<br>Default: `none`
<br>Usage:
``` html
{{extname 'index.html'}}

// returns
'.html'

{{extname 'index.'}}

// returns
'.'

{{extname 'index'}}

// returns
''
```

#### dirname
_Return the directory name of a path. Similar to the Unix dirname command._

Example:

``` html
{{dirname '/foo/bar/baz/asdf/quux'}}

// returns
'/foo/bar/baz/asdf'
```
