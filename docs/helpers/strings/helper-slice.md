#### \{{slice}}
_Extracts a section of a string and returns a new string_
<br>Parameters:

* beginSlice: `int`- The zero-based index at which to begin extraction (Required).
* endSlice: `int` - The zero-based index at which to end extraction (Optional).


```html
\{{slice "Bender should not be allowed on tv." 7 20}}
```
Result:

```
should not be
```