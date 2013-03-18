#### hyphenate
_Replace spaces in string with hyphens._
<br>Parameters: `none`
``` handlebars
\{{hyphenate "make this all hyphenated"}}

// Result 
make-this-all-hyphenated
```

#### dashify
_Same as `hyphenate`, but replaces dots in string with hyphens._
<br>Parameters: `none`
``` handlebars
\{{dashify "make.this.all.hyphenated"}}

// Result
make-this-all-hyphenated
```

#### lowercase
_Turns a string to lowercase._
<br>Parameters: `none`
``` handlebars
\{{lowercase "MAKE THIS ALL LOWERCASE"}}

// Result
make this all lowercase
```

#### uppercase
_Turns a string to uppercase. Opposite of `\{{lowercase}}`._
<br>Parameters: `none`
``` handlebars
 \{{uppercase "make this all uppercase"}}

// Result
MAKE THIS ALL UPPERCASE
```

#### capitalizeFirst
_Capitalizes the first word in a string._
<br>Parameters: `none`
``` handlebars
\{{capitalizeFirst "capitalize first word in this sentence"}}

// Result
Capitalize first word in this sentence
```

#### capitalizeEach
_Capitalizes each word in a string._
<br>Parameters: `none`
``` handlebars
\{{capitalizeEach "capitalize EACH word in this sentence"}}

// Result
Capitalize EACH Word In This Sentence
```

#### titleize
_Capitalizes all words within a string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel)._
<br>Parameters: `none`
``` handlebars
\{{titleize "capitalize EACH word in this sentence"}}

// Result
Capitalize Each Word In This Sentence.
```

#### sentence
_Capitalizes the first word of each sentence in a string and converts the rest of the sentence to lowercase._
Parameters: `none`
``` handlebars
\{{sentence "capitalize the FIRST word in each sentence. but make the OTHER words lowercase."}}

// Result
Capitalize the first word in each sentence. But make the other words lowercase.
```

#### reverse
_Reverses a string._
<br>Parameters: `none`
``` handlebars
\{{reverse "bender should NOT be allowed on TV."}}

// Result
.VT no dewolla eb TON dluohs redneb
```

#### truncate
_Truncates a string given a specified `length`, providing a custom string to denote an `omission`._
<br>Parameters: 

* length: `int`- The number of characters to keep (Required). 
* omission: `string` - A string to denote an omission (Optional). 

``` handlebars
\{{truncate "Bender should not be allowed on tv." 31 "..."}}

// Result
Bender should not be allowed...
```

#### center
_Centers a string using non-breaking spaces._
<br>Parameters: spaces: `int` - The number of spaces. (Required)
``` handlebars
\{{center "Bender should not be allowed on tv." 10}}

// Result:
|              Bender should not be allowed on tv.              |
```

#### nl2br
_Convert new lines (`\r\n`, `\n\r`, `\r`, `\n`) to line breaks_
<br>Parameters: `none`
``` handlebars
\{{nl2br <br>description}}

// Result: 
<br>
```
