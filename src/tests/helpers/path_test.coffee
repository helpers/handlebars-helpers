require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-special').register Handlebars, {}

## TODO
# basename
# extname
# filename
# relative
# directory
# absolute

# describe 'basename', ->
#     describe '{{basename id}}', ->
#         it 'should return the basename of a given file', ->
#             source   = '{{basename "docs/toc.md"}}'
#             template = Handlebars.compile(source)

#             template().should.equal 'toc'
