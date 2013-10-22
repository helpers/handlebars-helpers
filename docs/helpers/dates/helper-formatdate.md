#### \{{formatDate}}
_Formats a date into a string given a format. Accepts any value that can be passed to `new Date()`. This helper is a port of the [formatDate-js](http://https://github.com/michaelbaldry/formatDate-js) library by [Michael Baldry](https://github.com/michaelbaldry)._

<br>Parameters: format `String`, `required`

The format string, according to these tokens: [strftime](http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime)

Given this data:

```javascript
date = new Date()
```

And these templates:

```html
\{{formatDate date "%m/%d/%Y"}}
\{{formatDate date "%I:%M%p"}}
\{{formatDate date "%F"}}
\{{formatDate date "%Y%m%dT%H%M%S%z"}}
```

The output would be:

```
07/26/2012
11:38PM
2012-07-26
20120726T233805-0004
```


