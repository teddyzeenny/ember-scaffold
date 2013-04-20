App.EmberModelsNewRoute = Em.Route.extend({
  model: function() {
    var transaction = this.store.transaction();
    return transaction.createRecord(App.EmberModel);
  },
  deactivate: function() {
    this.get('currentModel.transaction').rollback();
  },
  events: {
    createRecord: function(record) {
      var self = this,
      controller = this.controllerFor('ember_models.new');
      controller.reset();
      models = App.EmberModel.find({});

      models.then(function() {
        record.beforeSave();
        var existing = models.filterProperty('isNew', false)
          .filterProperty('name', record.get('name'));

        if (existing.get('length') === 0) {
          record.one('didCreate', this, function() {
            Em.run.next(function() {
              self.transitionTo('ember_models');
            });
          });
          record.get('transaction').commit();
        } else {
          controller.set('error', 'Model already exists');
        }

      });


    }
  }
});