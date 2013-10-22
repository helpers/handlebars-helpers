#### \{{truncate}}
_Truncates a string given a specified `length`, providing a custom string to denote an `omission`._
<br>Parameters:

* length: `int`- The number of characters to keep (Required).
* omission: `string` - A string to denote an omission (Optional).

```html
\{{truncate "Bender should not be allowed on tv." 31 "..."}}
```
Renders to:

```
Bender should not be allowed...
```
