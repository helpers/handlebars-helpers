# README

#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
[{{link.text}}]({{link.url}})
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```



## Single file explicit
#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
[{{link.text}}]({{link.url}})
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```



## Glob pattern
@color: 'blue';

.sidebar {
  font-size: 12px;
  background: @color;
}
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fodder</title>
</head>
<body>
  <h1>Fodder</h1>
  <p>different file formats for testing helpers</p>
</body>
</html>

.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: @line-height-base;
  color: @state-warning-text;
  background-color: @state-warning-background;
  border: 1px solid @state-warning-border;
  border-radius: @border-radius-base;

  // Headings for larger alerts
  h4 {
    margin-top: 0;
    // Specified for the h4 to prevent conflicts of changing @headingsColor
    color: inherit;
  }
  // Match the hr to the border of the alert
  hr {
    border-top-color: darken(@state-warning-border, 5%);
  }
  // Inherit color for immediate links and bolden them some
  > a,
  > p > a {
    font-weight: 500;
    color: darken(@state-warning-text, 10%);
  }
}
#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
[{{link.text}}]({{link.url}})
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fodder</title>
</head>
<body>
  <h1>Fodder</h1>
  <p>different file formats for testing helpers</p>
</body>
</html>

#### relative
_Derive the relative path from one absolute path to another._

Parameters: `string` (the value to test against)
Default: `none`

Usage:
``` html
[{{link.text}}]({{link.url}})
```
Example:
``` handlebars
<a href="{{relative "src" "dist"}}/assets/css/styles.css"></a> 

```
Renders to: 
``` html
<a href="../../dist/assets/css/styles.css"></a> 
```


## Markdown
## Blockquotes

Nunc vestibulum leo a lorem pulvinar ut convallis odio iaculis. Sed a sapien nec libero semper scelerisque at eget nisl. Vestibulum urna ligula, facilisis sed blandit nec, placerat eget augue. Nulla ultrices hendrerit mauris, quis hendrerit mi bibendum eget. Etiam quam justo, sollicitudin in tempus ac, tristique eget elit. Vivamus fermentum libero id magna mollis eleifend. Integer blandit libero in est hendrerit sollicitudin. Pellentesque ac orci id magna ullamcorper laoreet ut vitae nisl. 

> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi. 

Aliquam erat volutpat. Ut imperdiet condimentum nisi non aliquet. Vivamus sit amet consectetur sapien. Phasellus varius interdum urna, eget mattis justo faucibus vel. Aliquam elementum, magna ut pretium molestie, erat orci eleifend tellus, sit amet rhoncus arcu odio eu sem. Proin lobortis mi ac ante luctus porta. Mauris sit amet vestibulum orci.

> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi. 
>> Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.

Aliquam ut augue turpis, eget mattis nibh. Suspendisse urna mauris, pharetra vitae laoreet non, tempor sit amet metus. Donec risus diam, tincidunt id elementum sed, ultrices id neque. Curabitur sed nisl non sem gravida malesuada et dapibus justo. Nullam in sagittis magna. Aliquam erat volutpat. Suspendisse potenti. Fusce id posuere orci. In sed vestibulum dolor. Phasellus volutpat eleifend purus sed vestibulum. Ut dolor massa, volutpat nec elementum vel, vestibulum in mi. Donec fringilla dignissim risus.

## Code

#### Inline code

To include code (formatted in monospace font), you can either surround inline code with a single backtick (`` ` ``): `some code`

``` md
`some code`
```

#### Indented code

Or indent several lines of code by at least four spaces, as in:

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


#### Code "fences"

Or wrap the code with backtick "fences" before and after the code: ` ``` `

``` md
line 1 of code
line 2 of code
line 3 of code
```

#### Code highlighting

GFM, or "GitHub Flavored Markdown" also supports syntax highlighting. To activate it, simply add the file extension of the language you want to use directly after the first "fence": ` ``` js ` 

``` js
assemble: {
  // Files to build into pages
  pages: {
    src:  'templates/pages/*.hbs',
    dest: 'dist/'
  }
}
```

### Markdown Emphasis

_Cras quis elit turpis, sed_

**Cras quis elit turpis, sed**

Cras quis _elit_ turpis, sed

Cras quis **elit** turpis, sed
### Headings

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

``` md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

## Images

Images have a similar syntax to links but include a preceding exclamation point.

``` md
![Minion](http://octodex.github.com/images/minion.png)
```
![Minion](http://octodex.github.com/images/minion.png)

or
``` md
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

``` md
![Alt text][id]
```
![Alt text][id]

With a reference later in the document defining the URL location:

``` md

[id]: http://octodex.github.com/images/dojocat.jpg  "The Dojocat"
```
### Links

### Basic link
[Assemble](http://github.com/assemble/)

### Basic link with title
[Upstage](http://github.com/upstage/ "Visit Upstage!")

### Link within a paragraph
Aliquam hendrerit congue mauris at imperdiet. Suspendisse sit amet justo eu lacus tempor malesuada aliquam et massa. Proin malesuada, sem id facilisis facilisis, ipsum lacus tincidunt dui, ut tincidunt diam urna vitae tellus. Etiam auctor dapibus felis, auctor eleifend erat semper non. [Upstage](http://github.com/upstage/) laoreet metus. Duis odio elit, venenatis nec malesuada at, pretium ut quam. Aenean sagittis eleifend rutrum. Ut dictum volutpat metus sit amet imperdiet. Integer iaculis massa vel ipsum tincidunt dictum. In fringilla pellentesque massa eget faucibus. Quisque vitae ligula justo.
## Lists

#### Unordered list
* Bullet lists are easy too
- Another one
+ Another one

#### Ordered list
1. A numbered list
2. Which is numbered
3. With periods and a space


#### Multiple levels
* An item in a bulleted (unordered) list
    * A sub-item, indented with 4 spaces
    * And another indented sub-item
* Another item in a bulleted list

1. An item in an enumerated (ordered) list
    1.1. A subitem, indented with 4 spaces
2. Another item in an enumerated list


``` md
* An item in a bulleted (unordered) list
    * A sub-item, indented with 4 spaces
    * And another indented sub-item
* Another item in a bulleted list

1. An item in an enumerated (ordered) list
    1.1. A subitem, indented with 4 spaces
2. Another item in an enumerated list
```

This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

This cheatsheet is specifically *Markdown Here's* version of Github-flavored Markdown. This differs slightly in styling and syntax from what Github uses, so what you see below might vary a little from what you get in a *Markdown Here* email, but it should be pretty close.

You can play around with Markdown on our [live demo page](http://www.markdown-here.com/livedemo.html).

##### Table of Contents  
[Headers](#headers)  
[Emphasis](#emphasis)  
[Lists](#lists)  
[Links](#links)  
[Images](#images)  
[Code and Syntax Highlighting](#code)  
[Tables](#tables)  
[Blockquotes](#blockquotes)  
[Inline HTML](#html)  
[Horizontal Rule](#hr)  
[Line Breaks](#lines)  
[Youtube videos](#videos)  

<a name="headers"/>
## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
``` 

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

<a name="emphasis"/>
## Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
``` 

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


<a name="lists"/>
## Lists

```
1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
``` 

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

<a name="links"/>
## Links

There are two ways to create links.

```
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
``` 

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

<a name="images"/>
## Images

```
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
``` 

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

<a name="code"/>
## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

```
Inline `code` has `back-ticks around` it.
``` 

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks <code>``` </code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```
 ``` javascript
 var s = "JavaScript syntax highlighting";
 alert(s);
 ``` 
 
 ``` python
 s = "Python syntax highlighting"
 print s
 ``` 
 
 ``` 
 No language indicated, so no syntax highlighting. 
 But let's throw in a <b>tag</b>.
 ``` 
``` 

``` javascript
var s = "JavaScript syntax highlighting";
alert(s);
``` 

``` python
s = "Python syntax highlighting"
print s
``` 

``` 
No language indicated, so no syntax highlighting in Markdown Here (varies on Github). 
But let's throw in a <b>tag</b>.
``` 

(Github Wiki pages don't seem to support syntax highlighting, so the above won't be colourful (the strings are not red, for example). Try it out in a *Markdown Here* email or a Github Markdown README or Github Issue -- you can preview a new Issue without submitting it.)

Again, to see what languages are available for highlighting, and how to write those language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

<a name="tables"/>
## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
``` 

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<a name="blockquotes"/>
## Blockquotes

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
``` 

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

<a name="html"/>
## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. 

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
``` 

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<a name="hr"/>
## Horizontal Rule

``` 
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
``` 

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

<a name="lines"/>
## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend. 

Here are some things to try out:

``` 
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
``` 

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

<a name="videos"/>
## Youtube videos

They can't be added directly but you can add an image with a link to the video like this:

```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
``` 

Or, in pure Markdown, but losing the image sizing and border:

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
``` 


<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
### Paragraphs

Vestibulum posuere, quam sed bibendum posuere, orci est semper libero, nec congue tortor arcu eget velit. Mauris condimentum pulvinar condimentum. Sed suscipit elit tellus. Nunc vel fringilla massa. Aliquam sed velit lorem. Sed feugiat faucibus leo, ut iaculis eros ullamcorper vitae. 

Vestibulum posuere, quam sed bibendum posuere
Pellentesque habitant morbi tristique senectus
Pellentesque nulla augue, volutpat vitae

In hac habitasse platea dictumst. Morbi non rutrum risus.


``` md
Proin orci nisi, commodo eleifend elementum at, fermentum a velit. Sed venenatis facilisis eros, et elementum magna faucibus et. Sed in tellus lectus. Morbi vitae diam eu lorem malesuada rhoncus sit amet vitae felis. Proin ultrices ante et felis adipiscing rutrum.
```

### Reference Links

Assemble [gets the rocks out of your socks][get], to make you faster at building and maintaining web [components][comp].

[get]: http://github.com/assemble/assemble "Get the rocks out of your socks!"
[comp]: http://github.com/assemble/toolkit "Get components!"


## Line return

Line breaks inserted in the text are removed from the final result: the web browser is in charge of breaking lines depending on the available space. To force a line break, insert two spaces at the end of the line.


## Emphasized text
_italics_,  **bold**, and `code()`. 

``` md
_italics_,  **bold**, and `code()`. 
```



The latter option makes Markdown retain all whitespace—as opposed to the usual behaviour, which, by removing line breaks and excess spaces, would break indentation and code layout.

## Escaping

Use `\` for escaping code, such as handlebars templates, so the following:

``` md
\{{ page.title }}
```
would translate literally.


## Line breaks
When you do want to insert a break tag using Markdown, you end a line with two or more spaces, then type return. For example:

``` md
def show_results
tag_br space space
end
```

Result:

``` html
def show_results

end
```

You can also use two newlines. For example:
```
sentence A

sentence B
```
Result:

``` html
sentence A
sentence B
```

## Blockquotes

> "This entire paragraph of text will be enclosed in an HTML blockquote element.
Blockquote elements are reflowable. You may arbitrarily
wrap the text to your liking, and it will all be parsed
into a single blockquote element."

``` md
> "This entire paragraph of text will be enclosed in an HTML blockquote element.
Blockquote elements are reflowable. You may arbitrarily
wrap the text to your liking, and it will all be parsed
into a single blockquote element."
```


> Blockquotes are like quoted text in email replies
>> And, they can be nested



The above would translate into the following HTML:

``` html
<blockquote><p>This entire paragraph of text will be enclosed in an HTML blockquote element. Blockquote
elements are reflowable. You may arbitrarily wrap the text to your liking, and it will all
be parsed into a single blockquote element.</p></blockquote>
```

## External links

Links may be included inline. Here is a markdown link to [Assemble](https://github.com/assemble/assemble), and a literal <https://github.com/assemble/assemble/>. 


``` md
[link text here](link.address.here)
Ex. [Markdown](http://en.wikipedia.com/wiki/Markdown)
```
Literal links
``` md
<https://github.com/assemble/assemble/>
```

Alternatively, links can be placed in footnotes outside of the paragraph, being referenced with some sort of reference tag. For example, including the following inline:

``` md
[link text here][linkref]
```

would produce a link if the following showed up outside of the paragraph (or at the end of the document):

``` md

[linkref]: link.address.here "link title here"
```

## Images
Images have similar syntax to links, except the square brackets are preceded by an exclamation point.

``` md
![Alt text](http://octodex.github.com/images/minion.png)
```
![Alt text](http://octodex.github.com/images/minion.png)

or
``` md
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

``` md
![Alt text][id]
```
![Alt text][id]

With a reference later in the document defining the URL location:

``` md

[id]: http://octodex.github.com/images/dojocat.jpg  "The Dojocat"
```


## Horizontal rules
Horizontal rules are created by placing three or more hyphens, asterisks, or underscores on a line by themselves. You may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

``` md
* * *
***
*****
- - -
---------------------------------------
```

* * * *
****
--------------------------


## Tables

| Heading 1          | Heading 2          | Heading 3          |
| ------------------ | ------------------ | ------------------ |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |


* A colon can be used to right align text within a column: `| -------: |`

### Markdown Tables


| Heading 1          | Heading 2          | Heading 3          |
| ------------------ | ------------------ | ------------------ |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |
| **Lorem ipsum**    | `lorem ipsum`      | lorem ipsum        |


