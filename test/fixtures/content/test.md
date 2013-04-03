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