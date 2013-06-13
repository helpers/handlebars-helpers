URL helpers are [node.js](http://nodejs.org/api/url.html) `url` utilities for URL resolution and parsing. As with node.js: 

> "Parsed URL objects have some or all of the following fields, depending on whether or not they exist in the URL string. Any parts that are not in the URL string will not be in the parsed object."

#### {{url_resolve}}
_Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag._

<br>Template:
``` haskell
{{url_resolve url href}}
```
Example:
``` html
<a href="{{url_resolve "http://example.com/one" "/two"}}"></a> 
```
Renders to:
``` html
<a href="http://example.com/two"></a> 
```


#### {{url_parse}}
_Take a URL string, and return an object._

Params:
* `url`
* Output format: `yaml` or `json`. Default: `json`

Template:
``` 
{{url_parse "http://example.com/one"}} 
```

Renders to:
``` json
{
  "protocol": "http:",
  "slashes": true,
  "auth": null,
  "host": "example.com",
  "port": null,
  "hostname": "example.com",
  "hash": null,
  "search": null,
  "query": null,
  "pathname": "/one",
  "path": "/one",
  "href": "http://example.com/one"
} 
```

Or with `yaml` as the second param:
``` haskell
{{url_parse "http://foo.com/bar/baz?key=value" "yaml"}}
```

Renders to:
``` coffeescript
protocol: "http:"
slashes: true
auth: null
host: "foo.com"
port: null
hostname: "foo.com"
hash: null
search: "?key=value"
query: "key=value"
pathname: "/bar/baz"
path: "/bar/baz?key=value"
href: "http://foo.com/bar/baz?key=value"
parse: 
format: 
resolve: 
resolveObject: 
parseHost: 
```