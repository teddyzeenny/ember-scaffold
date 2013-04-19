
App.ResourcesNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.reset();
    controller.set('model', model);
  },
  model: function() {
    return this.get('store').transaction().createRecord(App.Resource);
  },
  deactivate: function() {
    this.get('currentModel.transaction').rollback();
  },
  events: {
    submit: function(record) {
      // check unique
      if (this.controllerFor('resources').rejectProperty('isNew').someProperty('name', record.get('name'))) {
        this.controllerFor('resources.new').set('recordExists', true);
        return;
      }
      record.one('didCreate', this, function() {
        this.transitionTo('resources.index');
      });
      record.get('transaction').commit();
    }
  }
});