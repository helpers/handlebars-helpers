Handlebars = require('./helpers').Handlebars
Utils      = require '../utils/utils'
fs         = require 'fs'
path       = require 'path'

# Fiddle
# Usage: {{ jsfiddle [id] [tabs] }}
Handlebars.registerHelper "jsfiddle", (id, tabs) ->
  tabs   = "result,js,html,css"  if Utils.isUndefined(tabs)
  result = "<iframe width=\"100%\" height=\"300\" src=\"http://jsfiddle.net/" + id + "/embedded/" + tabs + "/presentation/\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>"
  new Handlebars.SafeString(result)


# Gist
# Downloads and embeds public GitHub Gists by
# adding only the Id of the Gist.
#
# Usage: {{ gist [id] [file] }}
Handlebars.registerHelper "gist", (id, file) ->
  id = Handlebars.Utils.escapeExpression(id)
  file = ""  if Utils.isUndefined(file)
  result = "<script src=\"https://gist.github.com/" + id + ".js\"></script>"
  new Handlebars.SafeString(result)


# Authors
# Reads in data from an "AUTHORS" file to generate markdown formtted
# author or list of authors for a README.md. Accepts a second optional
# parameter to a different file than the default.
#
# Usage: {{authors [file]}}
Handlebars.registerHelper "authors", (authors) ->
  if Utils.isUndefined(authors)
    authors = fs.readFileSync("./AUTHORS", "utf8")
  else
    authors = fs.readFileSync(authors, "utf8")
  matches = authors.replace(/(.*?)\s*\((.*)\)/g, "[$1]" + "($2)") or []
  new Handlebars.SafeString(matches)


# Basename: Returns the basename of a given file.
#
# Usage: {{base "docs/toc.md"}}
# Returns: toc
Handlebars.registerHelper "basename", (base, ext) ->
  fullName = path.basename(base, ext)
  base = path.basename(base, path.extname(fullName))
  base
