(function() {
  Handlebars.registerHelper('toFixed', function(number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 0;
    }
    return number.toFixed(digits);
  });

  Handlebars.registerHelper('toPrecision', function(number, precision) {
    if (Utils.isUndefined(precision)) {
      precision = 1;
    }
    return number.toPrecision(precision);
  });

  Handlebars.registerHelper('toExponential', function(number, fractions) {
    if (Utils.isUndefined(fractions)) {
      fractions = 0;
    }
    return number.toExponential(fractions);
  });

  Handlebars.registerHelper('toInt', function(number) {
    return parseInt(number, 10);
  });

  Handlebars.registerHelper('toFloat', function(number) {
    return parseFloat(number);
  });

  Handlebars.registerHelper('addCommas', function(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  });

}).call(this);
