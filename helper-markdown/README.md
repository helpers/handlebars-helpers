The [index.js](index.js) file in this directory is based on the code in [helper-markdown](https://www.npmjs.com/package/helper-markdown).

```js
import handlebars from 'handlebars';
import { markdown } from 'handlebars-helpers';
import hljs from 'highlight.js';

handlebars.registerHelper('markdown', markdown({
  // Optional: A function that highlights code and outputs HTML.
  highlight: highlight,
}));
```

A function for highlighting code blocks is provided as the exported `highlight` function. By default,
code is not highlighted.
