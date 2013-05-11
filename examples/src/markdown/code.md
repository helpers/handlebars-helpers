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
