HTML = module.exports = {}



HTML.parseAttributes = (hash) ->
  Object.keys(hash).map((key) ->
      "#{key}=\"#{hash[key]}\""
  ).join ' '
