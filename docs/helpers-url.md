URL helpers are [node.js](http://nodejs.org/api/url.html) `url` utilities for URL resolution and parsing. As with node.js: 

> "Parsed URL objects have some or all of the following fields, depending on whether or not they exist in the URL string. Any parts that are not in the URL string will not be in the parsed object."

#### url_resolve (url, href)
_Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag._

<br>Usage:
``` html
{{url_resolve url href}}
```
Example:
``` handlebars
<a href="{{url_resolve "http://example.com/one" "/two"}}"></a> 

// returns
<a href="http://example.com/two"></a> 
```


#### url_parse (url)
_Take a URL string, and return an object._

Params: 
* `url`
* Pass `true` as the second argument to also parse the query string using the querystring module. 

Defaults to false.

<br>Usage:
``` html
{{url_resolve url href}}
```
Example:
``` handlebars
<a href="{{url_resolve "http://example.com/one" "/two"}}"></a> 

// returns
<a href="http://example.com/two"></a> 
```