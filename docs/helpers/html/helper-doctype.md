#### \{{doctype}}
_Easy way to add an uncommonly used doctype._

Default is HTML 5 (`<!DOCTYPE html>`) although this is probably only useful on projects that use anything besides HTML 5.

Template:

```html
\{{DOCTYPE 'svg 1.1'}}
```

Renders to:

```html
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```

Available doctypes:

**HTML 5 (default)**
*<br>- `\{{doctype '5'}}` | aliases: `html`, `html5`

**XML**
*<br>- `<?xml version="1.0" encoding="utf-8" ?>`
*<br>- `\{{doctype 'xml'}}`

**XHTML**
*<br>- `\{{doctype 'basic'}}`
*<br>- `\{{doctype 'strict'}}`
*<br>- `\{{doctype 'transitional'}}`
*<br>- `\{{doctype 'frameset'}}`
*<br>- `\{{doctype '1.1'}}` | aliases: `1.1`, `xhtml 1.1`
*<br>- `\{{doctype 'mobile'}}`

**HTML 4.01**
*<br>- `\{{doctype '4'}}` | aliases: `4.01`, `4.01 strict`
*<br>- `\{{doctype '4.01 trans'}}`
*<br>- `\{{doctype '4.01 frameset'}}`

**SVG**
*<br>- `\{{doctype 'svg'}}` | aliases: `svg`, `svg 1.1`, `svg1.1`
*<br>- `\{{doctype 'svg 1.0'}}` | aliases: `svg 1.0`, `svg1.0`, `svg1`
