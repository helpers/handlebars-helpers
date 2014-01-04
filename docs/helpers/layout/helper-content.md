#### \{{content}}
_Imports a partial into the current template. If that partial contains `{{block}}` sections, they can be altered by `{{content}}` blocks inside the extend._

Parameters: name `string` The name of the `{{block}}` to target with the new content.
Default: `undefined`

Attributes: mode `append|prepend|replace` How the contents of this `{{content}}` block should be applied to the `{{block}}`.
Default: 'append'

##### Examples:

```html
{{#content "mainContent"}}
  <p>New Content To Replace Old</p>
{{/content}}
```

```html
{{#content "mainContent" mode="append"}}
  <p>New Content To Append To Old</p>
{{/content}}
```

See `{{extend}}` for examples.
