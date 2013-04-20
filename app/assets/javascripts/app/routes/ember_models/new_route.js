App.EmberModelsNewRoute = Em.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('attributeTypes', App.AttributeType.find());
    controller.set('models', this.modelFor('ember_models'));
  },
  model: function() {
    var transaction = this.store.transaction();
    return transaction.createRecord(App.EmberModel);
  },
  deactivate: function() {
    this.get('currentModel.transaction').rollback();
  }
});