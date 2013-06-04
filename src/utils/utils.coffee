Handlebars = require('../helpers/helpers').Handlebars

fs        = require 'fs'
path      = require 'path'
grunt     = require "grunt"
_         = require "lodash"
minimatch = require "minimatch"
to        = require "to" 

Utils          = module.exports = {}
Utils.toString = Object.prototype.toString



# Type check
Utils.isFunction = (obj) ->
  typeof obj is "function"

Utils.isBoolean = (obj) ->
  undef = undefined
  type = typeof obj
  obj isnt undef and type is "boolean" or type is "Boolean"

Utils.isNumber = (obj) ->
  undef = undefined
  obj isnt undef and obj isnt null and (typeof obj is "number" or obj instanceof Number)

Utils.isObject = (obj) ->
  undef = undefined
  obj isnt null and obj isnt undef and typeof obj is "object"

Utils.isRegExp = (obj) ->
  undef = undefined
  obj isnt undef and obj isnt null and (obj instanceof RegExp)

Utils.detectType = (value) ->
  switch typeof value
    when "string"
      "str"
    when "number"
      "num"
    when "object"
      "obj"
    else
      "other"

###
# String Utils
###

toString = (val) ->
  (if not val? then "" else val.toString())
  
Utils.lowerCase = (str) ->
  str = toString(str)
  str.toLowerCase()

Utils.isUndefined = (value) ->
  value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.trim = (str) ->
  trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
  str.toString().replace trim, ''

Utils.safeString = (str) ->
  new Handlebars.SafeString str

Utils.escapeString = (str, except) -> #String
  #String?
  str.replace /([\.$?*|{}\(\)\[\]\\\/\+\^])/g, (ch) ->
    return ch  if except and except.indexOf(ch) isnt -1
    "\\" + ch

Utils.escapeExpression = (str) ->
  Handlebars.Utils.escapeExpression

Utils.stringifyYAML = (src) ->
  YAML = to.format.yaml
  stringifyFile = YAML.stringify(src)

Utils.stringifyObj = (src, type) ->
  YAML = to.format.yaml
  output = JSON.stringify(src, null, 2)
  switch type
    when "json"
      output = JSON.stringify(src)
    when "yml", "yaml"
      output = YAML.stringify(src)
  output


### 
# Object Utils
###

Utils.prop = (name) ->
  (obj) ->
    obj[name]

Utils.showProps = (obj, objName) ->
  result = ""
  for i of obj
    result += objName + "." + i + " = " + obj[i] + "\n"  if obj.hasOwnProperty(i)
  result

Utils.listAllProperties = (obj) ->
  objectToInspect = undefined
  result = []
  objectToInspect = obj
  while objectToInspect isnt null
    result = result.concat(Object.getOwnPropertyNames(objectToInspect))
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  result

Utils.listProps = (obj) ->
  key = undefined
  value = undefined
  result = []
  return []  unless obj
  for key of obj
    if obj.hasOwnProperty(key)
      value = obj[key]
      result.push value
  result



###
# Node.js Path Utils
###

Utils.getExt = (str) ->
  extname = path.extname(str)
  str = extname  if extname
  str = str.substring(1)  if str[0] is "."
  str

Utils.getBasename = (base, ext) ->
  fullName = path.basename(base, ext)
  base     = path.basename(base, path.extname(fullName))

Utils.getRelativePath = (from, to) ->
  fromDirname  = path.normalize(path.dirname(from))
  toDirname    = path.normalize(path.dirname(to))
  toBasename   = path.basename(to)
  relativePath = path.relative(fromDirname, toDirname)
  Utils.urlNormalize(path.join(relativePath, toBasename))



###
# File type
###

Utils.toggleOutput = (ext, md, html) ->
  if ext is ''
    output = md
  else
    output = html

Utils.switchOutput = (ext, md, html) ->
  switch ext
    when "", ".md"
      output = md
    when ".html", ".htm"
      output = html
  output

Utils.switchType = (ext) ->
  reader = grunt.file.readJSON
  Utils.getExt(ext)
  switch ext
    when ".json"
      reader = grunt.file.readJSON
    when ".yml", ".yaml"
      reader = grunt.file.readYAML
  reader

# Read 'Optional' JSON
Utils.readOptionalJSON = (filepath) ->
  data = {}
  try
    data = grunt.file.readJSON(filepath)
    grunt.verbose.write("Reading " + filepath + "...").ok()
  data

# Read 'Optional' YAML
Utils.readOptionalYAML = (filepath) ->
  data = {}
  try
    data = grunt.file.readYAML(filepath)
    grunt.verbose.write("Reading " + filepath + "...").ok()
  data

Utils.readPackageJSON = (filepath) ->
  data = {}
  try
    data = grunt.file.readJSON(filepath)
  try
    data = grunt.file.readJSON('package.json')
    grunt.verbose.write("Reading " + filepath + "...").ok()
  data

# Extract repo url from package.json, convenience util
# @param {none}
Utils.repoUrl = (str) ->
  pkg = grunt.file.readJSON("./package.json")
  url = pkg.repository.url
  str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str)

# Detect and return the indentation.
# @param  {String} string
# @return {Mixed} Indentation used, or undefined.
Utils.detectIndentation = (string) ->
  tabs = string.match(/^[\t]+/g) or []
  spaces = string.match(/^[ ]+/g) or []

  # Pick the smallest indentation level of a prevalent type
  prevalent = (if tabs.length >= spaces.length then tabs else spaces)
  indentation = undefined
  i = 0
  il = prevalent.length

  while i < il
    indentation = prevalent[i]  if not indentation or prevalent[i].length < indentation.length
    i++
  indentation

###
# Grunt.js Utils
###

Utils.detectDestType = (dest) ->
  if grunt.util._.endsWith(dest, "/")
    "directory"
  else
    "file"

# Grunt.file.exists True if the file path exists.
Utils.exists = (file) ->
  src = grunt.file.exists(file)

# Read a file, return its contents.
Utils.read = (filepath, options) ->
  src = grunt.file.read(filepath, options)

# Read a file, parse its contents, return an object.
Utils.readJSON = (filepath, options) ->
  src = grunt.file.readJSON(filepath, options)

# Read a YAML file, parse its contents, return an object.
Utils.readYAML = (filepath, options) ->
  src = grunt.file.readYAML(filepath, options)

# Write a file.
Utils.write = (filepath, contents, options) ->
  src = grunt.file.write(filepath, contents, options)

# Copy file from A to B
Utils.copyFile = (filepath, options) ->
  src = grunt.file.copy(filepath, options)
  true

# Create a directory along with any intermediate directories.
Utils.mkDir = (dirpath, mode) ->
  src = grunt.file.mdDir(dirpath, mode)

# Normalize linefeeds in a string.
Utils.normalizelf = (str) ->
  src = grunt.util.normalizelf(str)



###
# Globbing Utils
###

# Return an array of all file paths that match
# the given wildcard patterns, then read each file
# and return its contents as a string, and last
# normalize all line linefeeds in the string

# @param {String|Array} src Globbing pattern(s).
# @param {Function=} compare_fn Function accepting two objects (a,b)
# and returning 1 if a >= b otherwise -1.

# Note: Objects passed to compare_fn are:
# {
#   index: original index of file strating with 1
#   path: full file path
#   content: content of file
# }
Utils.globFiles = (src, compare_fn) ->
  content = undefined
  compare_fn = compare_fn or (a, b) ->
    (if a.index >= b.index then 1 else -1)

  index = 0
  content = grunt.file.expand(src).map((path) ->
    index += 1
    index: index
    path: path
    content: grunt.file.read(path)
  ).sort(compare_fn).map((obj) ->
    obj.content
  ).join(grunt.util.normalizelf(grunt.util.linefeed))


Utils.buildObjectPaths = (obj) ->
  files = []
  _.forOwn obj, (value, key) ->
    file = key
    recurse = (obj) ->
      _.forOwn obj, (value, key) ->
        file += '/' unless file.length == 0
        file += key
        if _.isObject(value)
          recurse value

    if _.isObject(value)
      recurse value

    files.push file

  files

Utils.globObject = (obj, pattern) ->
  files = Utils.buildObjectPaths obj
  matches = files.filter(minimatch.filter(pattern))
  rtn = {}

  getValue = (obj, path) ->
    keys = path.split '/'
    value = _.cloneDeep obj
    _.forEach keys, (key) ->
      if _.has value, key
        value = _.cloneDeep value[key]
    value

  setValue = (obj, path, value) ->
    keys = path.split '/'
    key = keys.shift()
    if keys.length
      obj[key] = setValue {}, keys.join('/'), value
    else
      obj[key] = value
    obj

  _.forEach matches, (match) ->
    value = getValue obj, match
    rtn = setValue rtn, match, value
  rtn


###
# Regex
###

Utils.getMatches = (string, regex, index) ->
  index or (index = 1) # default to the first capturing group
  matches = []
  match = undefined
  matches.push match[index]  while match = regex.exec(string)
  matches

# Return all pattern matches with captured groups
RegExp::execAll = (string) ->
  matches = []
  while match = @exec string
    matches.push(group for group in match)
  matches

# Ensures that a url path is returned instead
# of a filesystem path.
Utils.urlNormalize = (filepath) ->
  filepath.replace /\\/g, "/"
