Utils = require '../utils/utils'
grunt = require 'grunt'

# Value: extracts a value from a specific property
module.exports =

  ###
   * Use globbing patterns to embed content from specified file or files.
   * @param  {String} src          [description]
   * @param  {Function} compare_fn [description]
   * @return {String}              [description]
   * @example {{ glob 'path/to/files/*.md' }}
  ###
  glob: glob = (src, compare_fn) ->
    content = Utils.globFiles(src, compare_fn)
    Utils.safeString(content)

module.exports.register = (Handlebars, options) ->
  Handlebars.registerHelper 'glob', glob

  @