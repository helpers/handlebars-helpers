Handlebars.registerHelper 'add', (value, addition) ->
    value + addition

Handlebars.registerHelper 'subtract', (value, substraction) ->
    value - substraction

Handlebars.registerHelper 'divide', (value, divisor) ->
    value / divisor

Handlebars.registerHelper 'multiply', (value, multiplier) ->
    value * multiplier

Handlebars.registerHelper 'floor', (value) ->
    Math.floor value

Handlebars.registerHelper 'ceil', (value) ->
    Math.ceil value

Handlebars.registerHelper 'round', (value) ->
    Math.round value
