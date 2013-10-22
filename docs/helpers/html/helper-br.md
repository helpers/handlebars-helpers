#### \{{br}}
_Renders `<br>` elements in the output, based on the number given as a parameter. Not really recommended for general use, but it's here if you need it._

Parameters: `Integer|Count`, `Optional`

The number of `br` elements to render.

`template.hbs`

```html
\{{br 5}}
```

renders to:

```html
`<br><br><br><br><br>`
```
