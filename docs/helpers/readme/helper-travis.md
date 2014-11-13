### Travis CI

#### \{{travis}}
_Creates a "full" Travis CI link in markdown format_.

Params: `branch`
Type: `String`
Usage: `\{{travis [branch]}}`

Template:

```html
\{{travis}}`
```

Renders to:

```markdown
# [assemble v9.1.0](https://github.com/assemble/assemble)[![Build Status](https://travis-ci.org/assemble/assemble.png)](https://travis-ci.org/assemble/assemble)
```

Template with branch:

```html
\{{travis 'master'}}
```

Renders to:

```markdown
# [assemble v9.1.0](https://github.com/assemble/assemble)[![Build Status](https://travis-ci.org/assemble/assemble.png?branch=master)](https://travis-ci.org/assemble/assemble)
```

#### \{{travis-badge}}
_Creates a Travis CI link in markdown format_.

Params: `none`
Usage: `\{{travis-badge}}`

Template

```html
\{{travis}}`
```

Renders to:

```markdown
[![Build Status](https://travis-ci.org/assemble/assemble.png)](https://travis-ci.org/assemble/assemble)
```