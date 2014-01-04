### \{{block}}
_Defines a chunk of a template that can be modified by an extending template.  If the block is not altered by an extending template, then the block's contents remain unchanged._

Parameters: name `string` The name of the block
Default: `undefined`

Blocks may be used as standalone helper calls to create placeholders, or wrap default content to be altered or replaced.

##### Examples:

```html
{{{block "mainContent"}}}
```

Note the triple brackets, needed to keep the new content from being escaped.

```html
{{#block}}
    <p>Default Content</p>
{{/block}}
```

See `{{extend}}` for more examples.
