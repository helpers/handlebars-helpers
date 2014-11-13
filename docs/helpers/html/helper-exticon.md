#### \{{exticon}}
_Generate the appropriate icon based on the extension of the given file._

Since this helper generates classes that are very specific, feel free to copy the code and use it as inspiration for your a helper that works for you.

Usage:

```html
\{{exticon 'file.png'}}
\{{exticon 'file.pdf'}}
\{{exticon 'file.doc'}}
\{{exticon 'file.txt'}}
\{{exticon 'file.csv'}}
\{{exticon 'file'}}
```
Output:

```html
<img src="img/img-icon.png"><i>file.png</i>
<img src="img/pdf-icon.png"><i>file.pdf</i>
<img src="img/word-icon.png"><i>file.doc</i>
<img src="img/txt-icon.png"><i>file.txt</i>
<img src="img/csv-icon.png"><i>file.csv</i>
<img src="img/other-icon.png"><i>file</i>
```
