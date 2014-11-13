#### \{{urlResolve}}
_Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag._

<br>Template:

```html
\{{urlResolve url href}}
```

Example:

```html
<a href="\{{urlResolve "http://example.com/one" "/two"}}"></a>
```
Renders to:

```html
<a href="http://example.com/two"></a>
```
