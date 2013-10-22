#### \{{now}}
_Returns the current date._
<br>Parameters: format `String` - The format string, according to these tokens: [http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime]() (Optional)

Template:

```html
\{{now}}
\{{now "%m/%d/%Y"}}
```

Renders to:

```
Thu Jul 26 2012 23:41:02 GMT-0400 (AST)
07/26/2012
```
