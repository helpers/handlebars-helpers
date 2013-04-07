#### formatDate
_Formats a date into a string given a format. Accepts any value that can be passed to `new Date()`. This helper is a port of the [formatDate-js](http://https://github.com/michaelbaldry/formatDate-js) library by [Michael Baldry](https://github.com/michaelbaldry)._
<br>Parameters: format `string`, `required`
The format string, according to these tokens: [strftime](http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime)
``` js
// Data
date = new Date()
```
``` html
// Template
{{formatDate date "%m/%d/%Y"}}
{{formatDate date "%I:%M%p"}}
{{formatDate date "%F"}}
{{formatDate date "%Y%m%dT%H%M%S%z"}}

// Result:
07/26/2012
11:38PM
2012-07-26
20120726T233805-0004
```

#### now
_Returns the current date._
<br>Parameters: format `string` - The format string, according to these tokens: [http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime]() (Optional)
``` html
// Template
{{now}}
{{now "%m/%d/%Y"}}

// Result:
Thu Jul 26 2012 23:41:02 GMT-0400 (AST)
07/26/2012
```

#### timeago
_Returns a human-readable time phrase from the given date._
<br>Parameters: `none`
``` js
// Data
date = 'Thu Jul 22 2012 23:41:02 GMT-0400 (AST)'
```
``` html
// Template
{{timeago date}}

// Result:
4 days ago
```
