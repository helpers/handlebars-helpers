#### \{{expandJSON}}
_Return a stringified array of the expanded file paths that match the given globbing pattern(s)_

Parameters: `String`
Default: `undefined`

Template:

```html
\{{expandJSON 'src/**/*.md'}}
```

Renders to:

```javascript
[
  "src/content/blockquotes.md",
  "src/content/chapters/01-getting-started.md",
  "src/content/chapters/02-language-features.md",
  "src/content/chapters/03-advanced-materials.md",
  "src/content/code.md",
  "src/content/emphasis.md",
  "src/content/headings.md",
  "src/content/images.md",
  "src/content/links.md",
  "src/content/lists.md",
  "src/content/markdown-here.md",
  "src/content/paragraphs.md",
  "src/content/post.md",
  "src/content/reference-links.md",
  "src/content/reference.md",
  "src/content/tables.md",
  "src/content/test.md"
]
```
