{% Object.keys(methods).forEach(function(key) { %}
## {%= key %}
{%= apidocs("lib/" + key + ".js") %}
{% }) %}
