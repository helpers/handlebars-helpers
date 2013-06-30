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
Template:
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
