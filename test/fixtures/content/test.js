// Assemble Engine Loader
var EngineLoader = options.EngineLoader = assemble.EngineLoader(options);
var engine = null;
EngineLoader.getEngine(function(err, results) {
  if(err) {
    console.log(err);
    return;
  }
  engine = options.engine = results;
});