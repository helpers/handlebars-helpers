#### \{{thumbnailImage}}
_Creates a figure with img and (optional) link and/or caption._

The idea behind this helper is that you have one or more images that you would like to use, most likely with a lightbox script of some kind. It is agnostic to what kind of script, attaching only an id in the form of `image-<given id>` and `class="js-thumbnail"` on the figure. 

Data:

```javascript
image = {
  id: 'Id',
  alt: 'Description of image',
  thumbnail: 'Link-to-thumbnail',
  size: {
    width: '200',
    height: '200'
  },
  classes: {
    figure: ['class', 'for', 'figure', '(optional)'],
    image: ['class', 'for', 'image', '(optional)'],
    link: ['class', 'for', 'link', '(optional)']
  }
  full: 'Link-to-full-image (optional)',
  caption: 'Caption (optional)'
}
```

Template:

```html
\{{thumbnailImage image}}
```

Output:

```html
<figure id="image-Id" class="js-thumbnail class for figure (optional)">
  <a href="Link-to-full-image" class="class for link (optional)">
    <img alt="Description of image" src="Link-to-thumbnail" width="200" height="200" class="class for image (optional)">
  </a>
  <figcaption>Caption</figcaption>
</figure>
```
