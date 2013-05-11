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