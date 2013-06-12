###! path helpers ###

path  = require 'path'
Utils = require '../utils/utils'



# directory: Returns the absolute path to the current directory.
# Usage: {{dirname dir}}. Returns: C:/path/to/the/current/current/directory
module.exports.dirname = dirname = (dir) ->
  path.dirname(dir)

# Relative: {{relative [from] [to]}}
# Returns the derived relative path from A to B.
module.exports.relative = relative = (a, b) ->
  Utils.getRelativePath(a, b)

# Basename: Returns the basename of a given file.
# Usage:    {{basename "docs/toc.md"}}. Returns:  toc
module.exports.basename = basename = (file) ->
  Utils.getBasename(file)
  # Utils.basename(file, path.extname(file))

# Basename: Returns the filename of a given file.
# Usage:    {{filename "docs/toc.md"}}. Returns:  toc
module.exports.filename = filename = (file) ->
  path.basename(file)

# Extension: Returns the extension of a given file.
# Usage:    {{extname "docs/toc.md"}}. Returns:  .md
module.exports.extname = extname = (ext) ->
  Utils.getExt(ext)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "dirname", dirname
  Handlebars.registerHelper "relative", relative
  Handlebars.registerHelper "basename", basename
  Handlebars.registerHelper "filename", filename
  Handlebars.registerHelper "extname", extname


  @