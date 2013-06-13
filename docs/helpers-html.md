#### {{doctype}}
_Easy way to add an uncommonly used doctype._

Default: HTML 5 (`<!DOCTYPE html>`), although tThis is probably only useful on projects that use anything besides HTML 5. 

Template: 
```
{{DOCTYPE 'svg 1.1'}}
```
Renders to: 
``` html
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```

Available doctypes:

**HTML 5 (default)**
* `<!DOCTYPE html>`
* examples: `{{doctype '5'}}`, `{{doctype 'html5'}}`
* aliases: `5`, `html`, `html5`

**XML**
* `<?xml version="1.0" encoding="utf-8" ?>`
* example: `{{doctype 'xml'}}`
* aliases: `xml`

**XHTML**
* `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`
* example: `{{doctype 'strict'}}`
* aliases: `strict`
* `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
* aliases: `transitional`
* `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`
* aliases: `frameset`
* `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`
* aliases: `1.1`, `xhtml 1.1`
* `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">`
* aliases: `basic`
* `<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">`
* aliases: `mobile`

**HTML 4.01**
* `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
* aliases: `4`, `4.01`, `4.01 strict`
* `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`
* aliases: `4.01 trans`
* `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`
* aliases: `4.01 frameset`

**SVG**
* `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`
* aliases: `svg`, `svg 1.1`, `svg1.1`
* `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">`
* aliases: `svg 1.0`, `svg1.0`, `svg1`



#### {{blockquote}}
**Planned...**

_Create a blockquote. Outputs a string with a given attribution as a quote._

Template:

``` handlebars
{{#blockquote '@doowb' 'http://github.com/source/for/your/quote' 'This is the title' }}
  This is your quote.
{{/blockquote}}
```

Renders to:

``` html
<blockquote>
  <p>This is your quote.</p>
  <footer> 
    <strong>@doowb</strong>
    <cite> 
      <a href="http://github.com/source/for/your/quote">This is the title</a>
    </cite>
  </footer>
</blockquote>
```

#### {{timeline}}
**Planned...**

_Iterates through an array, letting the contents know whether a timeline entry belongs in the left or right column._

Parameters: 

* `array` to iterate over, 
* `string`: CSS class name for left columns
* `string`: CSS class name for right columns

Credit: by [@jonschlinkert](http://github.com/jonschlinkert), and based on striped helper from [treehouse blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)

Usage:
``` handlebars
<div class="timeline">
 {{#timeline myArray "left" "right"}}
 <div class="{{columnClass}}">
   {{> entry}}
 </div>
 {{else}}
   <em>There aren't any entries.</em>
 {{/timeline}}
</div>
```

#### {{exticon}}
_Generate the appropriate icon based on the extension of the given file._

Since this helper generates classes that are very specific, feel free to copy the code and use it as inspiration for your a helper that works for you.

Usage: 
``` handlebars
{{exticon 'file.png'}}
{{exticon 'file.pdf'}}
{{exticon 'file.doc'}}
{{exticon 'file.txt'}}
{{exticon 'file.csv'}}
{{exticon 'file'}}
```
Output:
``` html
<img src="img/img-icon.png"><i>file.png</i>
<img src="img/pdf-icon.png"><i>file.pdf</i>
<img src="img/word-icon.png"><i>file.doc</i>
<img src="img/txt-icon.png"><i>file.txt</i>
<img src="img/csv-icon.png"><i>file.csv</i>
<img src="img/other-icon.png"><i>file</i>
```

#### {{ul}}
_Creates an unordered list._

Parameters: `Hash|HTML attributes`, `Optional`

HTML attributes to use on the `ul` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```
Template:
``` handlebars
{{#ul collection class="deliveries-list"}}
  {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
{{/ul}}
```
``` html
// Output:
<ul class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ul>
```
#### {{ol}}
_Same as the `ul` helper but creates and ordered list. Returns `<br>` tags based on a count._

Parameters: `Hash`, `HTML attributes`, `Optional`

HTML attributes to use on the `ol` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```

Template:
``` handlebars
{{#ol collection class="deliveries-list"}}
  {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
{{/ol}}
```
``` html
// Output:
<ol class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ol>
```

#### {{br}}
_Renders `<br>` elements in the output, based on the number given as a parameter. Not really recommended for general use, but it's here if you need it._

Parameters: `Integer|Count`, `Optional`

The number of `br` elements to render. 

`template.hbs`
``` handlebars
{{br 5}}
```
renders to:
``` html
`<br><br><br><br><br>`
```