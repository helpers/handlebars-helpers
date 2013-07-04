#### {{log}}
_Simple `console.log()`_

Parameters: `none`

``` html
// Template
{{log "Hi console :)"}}
```

Renders to:
``` bash
Hi console :)
```

#### {{debug}}
_Simple `console.debug()` that shows the current context._

Parameters: `none`

Data:
``` js
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```

Template:
``` html
{{#withFirst collection}}
   {{debug name}}
{{/withFirst}}
```

Renders to:
``` json
Context: { deliveries: 8021, name: "Leela" }
Value: Leela
```

#### {{expandJSON}}
_Return a unique, JSON-formatted array of all file or directory paths that match the given globbing pattern(s)_

Parameters: `String`
Default: `undefined`

Template:
``` html
{{expandJSON './src/**/*.md'}}
```

Renders to:
``` json
[
  "./src/content/blockquotes.md",
  "./src/content/chapters/01-getting-started.md",
  "./src/content/chapters/02-language-features.md",
  "./src/content/chapters/03-advanced-materials.md",
  "./src/content/code.md",
  "./src/content/emphasis.md",
  "./src/content/headings.md",
  "./src/content/images.md",
  "./src/content/links.md",
  "./src/content/lists.md",
  "./src/content/markdown-here.md",
  "./src/content/paragraphs.md",
  "./src/content/post.md",
  "./src/content/reference-links.md",
  "./src/content/reference.md",
  "./src/content/tables.md",
  "./src/content/test.md"
]
```

#### {{expandYAML}}
_Return a unique, YAML-formatted array of all file or directory paths that match the given globbing pattern(s)_

Parameters: `String`

 Default: `undefined`

Template:
``` html
{{expandYAML './src/**/*.md'}}
```

Renders to:
``` yaml
- "./src/content/blockquotes.md"
- "./src/content/chapters/01-getting-started.md"
- "./src/content/chapters/02-language-features.md"
- "./src/content/chapters/03-advanced-materials.md"
- "./src/content/code.md"
- "./src/content/emphasis.md"
- "./src/content/headings.md"
- "./src/content/images.md"
- "./src/content/links.md"
- "./src/content/lists.md"
- "./src/content/markdown-here.md"
- "./src/content/paragraphs.md"
- "./src/content/post.md"
- "./src/content/reference-links.md"
- "./src/content/reference.md"
- "./src/content/tables.md"
- "./src/content/test.md"
```
