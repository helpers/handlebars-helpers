

Library.addHelper('is', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value && value === test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{is}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('isnt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (!value || value !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{isnt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('gt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value > test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{gt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('gte', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value >= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{gte}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('lt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value < test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('lte', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value <= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lte}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('or', function (testA, testB, options) {
  if (!((Utils.isHandlebarsSpecific(testA)) && (Utils.isHandlebarsSpecific(testB)))) {
    testA = Utils.result(testA);
    testB = Utils.result(testB);
    if (testA || testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{or}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('and', function (testA, testB, options) {
  if (!((Utils.isHandlebarsSpecific(testA)) && (Utils.isHandlebarsSpecific(testB)))) {
    testA = Utils.result(testA);
    testB = Utils.result(testB);
    if (testA && testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{and}} takes two arguments (string|number, string|number).');
  }
});


