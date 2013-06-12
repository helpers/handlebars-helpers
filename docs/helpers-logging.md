#### {{log}}
_Simple `console.log()`_
<br>Parameters: `none`
``` html
// Template
{{log "Hi console :)"}}

// Result:
Hi console :)
```

#### {{debug}}
_Simple `console.debug()` that shows the current context._
<br>Parameters: `none`
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```
``` html
// Template
{{#withFirst collection}}
   {{debug name}}
{{/withFirst}}

// Result:
Context: { deliveries: 8021, name: "Leela" }
Value: Leela
```

#### {{expandJSON}}
_Return a unique, JSON-formatted array of all file or directory paths that match the given globbing pattern(s)_
<br>Parameters: `String`
<br> Default: `undefined`

Example:
``` html
{{expandJSON './src/**/*.md'}}

// returns
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
<br>Parameters: `String`
<br> Default: `undefined`

Example:
``` html
{{expandYAML './src/**/*.md'}}

// returns
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
