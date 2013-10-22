#### \{{urlParse}}
_Take a URL string, and return an object._

Params:
* `url`
* Output format: `yaml` or `json`. Default: `json`

Template:

```html
\{{urlParse "http://example.com/one"}}
```

Renders to:

```json
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

```html
\{{urlParse "http://foo.com/bar/baz?key=value" "yaml"}}
```

Renders to:

```yaml
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