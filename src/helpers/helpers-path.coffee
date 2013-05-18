###! path helpers ###

path  = require 'path'
Utils = require '../utils/utils'



# directory: Returns the absolute path to the current directory.
# Usage: {{directory [path]}}. Returns: C:\path\to\the\current\current\directory
module.exports.directory = directory = (dir) ->
  path.dirname()

# absolute: Returns the absolute path to the current directory.
# Usage: {{absolute [to]}}. Returns: C:\path\to\the\current\current\directory
module.exports.absolute = absolute = (to) ->
  absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()))

# Relative: {{relative [from] [to]}}
# Returns the derived relative path from A to B.
module.exports.relative = relative = (a, b) ->
  Utils.getRelativePath(a, b)

# Basename: Returns the basename of a given file.
# Usage:    {{base "docs/toc.md"}}. Returns:  toc
module.exports.basename = basename = (file) ->
  Utils.getBasename(file)

# Basename: Returns the basename of a given file.
# Usage:    {{base "docs/toc.md"}}. Returns:  toc
module.exports.filename = filename = (file) ->
  path.basename(file)

# Extension: Returns the extension of a given file.
# Usage:    {{ext "docs/toc.md"}}. Returns:  .md
module.exports.extname = extname = (ext) ->
  Utils.getExt(ext)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "directory", directory
  Handlebars.registerHelper "absolute", absolute
  Handlebars.registerHelper "relative", relative
  Handlebars.registerHelper "basename", basename
  Handlebars.registerHelper "filename", filename
  Handlebars.registerHelper "extname", extname

  @