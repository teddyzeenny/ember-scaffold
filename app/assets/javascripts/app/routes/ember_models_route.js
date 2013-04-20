App.EmberModelsRoute = Em.Route.extend({
  model: function() {
    return this.modelFor('custom_app').get('emberModels');
  }
});