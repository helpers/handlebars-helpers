{{#todo}}
#### \{{timeline}}
**Planned...**

_Iterates through an array, letting the contents know whether a timeline entry belongs in the left or right column._

Parameters:

* `array` to iterate over,
* `string`: CSS class name for left columns
* `string`: CSS class name for right columns

Credit: by [@jonschlinkert](http://github.com/jonschlinkert), and based on striped helper from [treehouse blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)

Usage:

```html
<div class="timeline">
 \{{#timeline myArray "left" "right"}}
 <div class="\{{columnClass}}">
   \{{> entry}}
 </div>
 \{{else}}
   <em>There aren't any entries.</em>
 \{{/timeline}}
</div>
```
{{/todo}}
