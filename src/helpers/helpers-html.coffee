module.exports.register = (Handlebars, options) ->
  HTML       = require '../utils/html'
  Utils      = require '../utils/utils'




  Handlebars.registerHelper "ul", (context, options) ->
      ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ul>"


  ###
  <ol>
  Same as the `ul` helper but creates and ordered list.
  ###
  Handlebars.registerHelper "ol", (context, options) ->
      ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ol>"



  Handlebars.registerHelper 'br', (count, options) ->
      br = '<br>'

      unless Utils.isUndefined count
          i = 0

          while i < count - 1
              br += '<br>'
              i++

      Utils.safeString br

  ###
  Convert new line (\n) to <br>
  from http://phpjs.org/functions/nl2br:480
  ###
  Handlebars.registerHelper 'nl2br', (text) ->
      nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2")
      new Handlebars.SafeString(nl2br)


  ###
  link helper function.

  This will escape the passed in parameters, but mark the response as safe,
  so Handlebars will not try to escape it even if the "triple-stash" is not used.

  Usage:

  {{link 'href' 'title' 'class'}}
  ###
  Handlebars.registerHelper "link", (url, text, linkClass) ->
      url = Handlebars.Utils.escapeExpression(url)
      text = Handlebars.Utils.escapeExpression(text)
      linkClass = ""  if Utils.isUndefined(linkClass)
      result = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>'
      new Handlebars.SafeString(result)


  Handlebars.registerHelper "highlight", (value, options) ->
      escaped = Handlebars.Utils.escapeExpression(value)
      new Handlebars.SafeString("<span class=\"highlight\">" + escaped + "</span>")


  Handlebars.registerHelper "icon", (attachment) ->
      extension = attachment.substr((attachment.lastIndexOf(".") + 1))
      value = Handlebars.Utils.escapeExpression(extension)
      switch value
        when "jpg", "jpeg", "png", "gif"
          return new Handlebars.SafeString('<img src="img/img-icon.png"><span>' + attachment + '</span>')
        when "zip", "rar"
          return new Handlebars.SafeString('<img src="img/archive-icon.png"><span>' + attachment + '</span>')
        when "pdf"
          return new Handlebars.SafeString('<img src="img/pdf-icon.png"><span>' + attachment + '</span>')
        when "txt"
          return new Handlebars.SafeString('<img src="img/txt-icon.png"><span>' + attachment + '</span>')
        when "doc", "docx"
          return new Handlebars.SafeString('<img src="img/word-icon.png"><span>' + attachment + '</span>')
        when "xls", "xlsx"
          return new Handlebars.SafeString('<img src="img/xls-icon.png"><span>' + attachment + '</span>')
        when "csv"
          return new Handlebars.SafeString('<img src="img/csv-icon.png"><span>' + attachment + '</span>')
        when "ppt", "pptx"
          return new Handlebars.SafeString('<img src="img/ppt-icon.png"><span>' + attachment + '</span>')
        when "mp3"
          return new Handlebars.SafeString('<img src="img/audio-icon.png"><span>' + attachment + '</span>')
        else
          new Handlebars.SafeString('<img src="img/other-icon.png"><span>' + attachment + '</span>')

  @
