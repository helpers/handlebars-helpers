#### \{{embed}}
_Embed code from specified file(s)_

Parameters:
* `String|File` : path to the file you want to embed
* `String|Language (optional)`: Optional second parameter to "force" a specific language to use fo syntax highlighting.

Unless overridden by a given extension, the helper will automatically use the extension of the specified file as the language to use for syntax highlighting. You may also force the helper to use a language that is different than the extension of the file.

For example, here we will force highlighting as `javascript` instead of `json`

```html
\{{ embed 'src/example.json' 'js' }}
```

When embedding a markdown snippet (`.md|markdown|markd`), the helper automatically converts any code fences inside the snippet (`` ``` ``) to their unicode equivalent ("`&#x60;&#x60;&#x60;`")

```html
\{{embed 'src/example.md'}}
```

**File globbing**

The `embed` helper also accepts globbing patterns:

```html
\{{embed 'src/code-examples/*.*'}}
```
When globbing file is used, the code from each file will be embedded separately, and the file extension of each file will be used to identify the language to use for syntax highlighting. You may of course override the language, but whatever language you use will be applied to every embedded file.

_use globbing carefully! Until you have the hang of it try to be on the safe side and be more specific with your patterns_
