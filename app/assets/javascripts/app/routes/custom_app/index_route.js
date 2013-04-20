App.CustomAppIndexRoute = Em.Route.extend({
  model: function() {
    var transaction = this.store.transaction();
    var model = this.modelFor('custom_app');
    transaction.add(model);
    return model;
  },
  deactivate: function() {
    this.get('currentModel.transaction').rollback();
  },
  events: {
    save: function(record) {
      record.get('transaction').commit();
    }
  }
});