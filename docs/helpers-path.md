Path helpers are [node.js](http://nodejs.org/api/path.html#path_path_relative_from_to) utilities for handling and transforming file paths. As with node.js: 

> "these helpers perform only string transformations. The file system is not consulted to check whether paths are valid."

#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
{{relative "from" "to"}}
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```