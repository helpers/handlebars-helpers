
Library.addHelper('inflect', function (count, singular, plural, include) {
  if (!((Utils.isUndefined(count)) && (Utils.isUndefined(singular)) && (Utils.isUndefined(plural)))) {
    count = parseFloat(Utils.result(count));
    singular = Utils.result(singular);
    plural = Utils.result(plural);
    var word = count > 1 || count === 0 ? plural : singular;
    if (Utils.isUndefined(include) || include === false) {
      return word;
    } else {
      return "" + count + " " + word;
    }
  } else {
    return Utils.err('{{inflect}} takes at least three arguments (number, string, string).');
  }
});

Library.addHelper('ordinalize', function (value) {
  var ref;
  if (!Utils.isUndefined(value)) {
    value = parseFloat(Utils.result(value));
    var normal = Math.abs(Math.round(value));
    if (ref = normal % 100, Utils._indexOf.call([11, 12, 13], ref) >= 0) {
      return "" + value + "th";
    } else {
      switch (normal % 10) {
      case 1:
        return "" + value + "st";
      case 2:
        return "" + value + "nd";
      case 3:
        return "" + value + "rd";
      default:
        return "" + value + "th";
      }
    }
  } else {
    return Utils.err('{{ordinalize}} takes one arguments (number).');
  }
});
