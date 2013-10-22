#### \{{_relative}}
_Derive the relative path from one **absolute path** to another (e.g from path A, to path B)._
<br>Parameters: `string` (the value to test against)
<br>Default: `none`

Example:

```html
\{{_relative "from" "to"}}
```
Template:

```html
<a href="\{{_relative "src" "dist"}}/assets/css/styles.css"></a>
```

Renders to:

```html
<a href="../../dist/assets/css/styles.css"></a>
```