App.EmberModelsIndexRoute = Em.Route.extend({
  model: function() {
    return App.EmberModel.find();
  }
});