

/**
 * Expose Lo-Dash as Handlebars helpers
 */

(function () {
  for (var helper in _) {
    if (_.hasOwnProperty(helper)) {
      Library.addHelper('_' + helper, _[helper]);
    }
  }
}());
