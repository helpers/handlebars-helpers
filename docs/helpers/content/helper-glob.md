#### \{{glob}}
**example helper**: This helper is intended to be instructive, to help with creating new helpers that use these features.

_Use minimatch patterns to include content from specified file or files._
<br>Parameters: `String`
<br> Default: `undefined`

Examples:

```handlebars
\{{glob 'src/files/*.md'}}
\{{glob 'src/files/*.{txt,md}'}}
```

{{#draft}}
#### \{{globWithContext}}
**example helper**: This helper is intended to be instructive, to help with creating new helpers that use these features.

_Use minimatch patterns to include content from specified file or files._
<br>Parameters: `String`
<br> Default: `undefined`

Content:

This is the content of file we're going to include with our `globWithContent` helper (this helper allows you to include content from multiple files, but we're going to specify one for the example).

```markdown
[\{{link.text}}](\{{link.url}})
```

Data (context):

```yaml
---
href:
  link:
    text: Click Me
    url: http://assemble.io
---
```

The

```handlebars
\{{globWithContext './src/**/test.md' href}}
```

Data (context):

```yaml
---
link:
  text: Click Me
  url: http://assemble.io
---
```

```handlebars
\{{globWithContext './src/**/test.md' this}}
\{{globWithContext './src/**/test.md' this}}
```
{{/draft}}