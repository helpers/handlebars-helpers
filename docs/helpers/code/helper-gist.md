#### \{{gist}}
_Embed public GitHub Gists by adding only the Id of the Gist. The helper also accepts an optional second parameter for targeting a specific file on the Gist.._

Parameters: `String`
Default: `undefined`
Usage: `\{{ gist [id] }}`

Example:

```html
\{{gist '5193239'}}
```
Output:

```html
<script src="https://gist.github.com/5193239.js"></script>
```
