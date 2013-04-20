App.ApplicationRoute = Em.Route.extend({
  setupController: function() {
    this.controllerFor('code').set('model', App.Resource.find());
    this.controllerFor('code').set('emberModels', App.EmberModel.find());
  },
  renderTemplate: function() {
    this._super();

    this.render('code', {
      into: 'application',
      outlet: 'code'
    });
  },
  events: {
    removeRecord: function(record) {
      var transaction = this.store.transaction();
      transaction.add(record);
      record.deleteRecord();
      transaction.commit();
    }
  }
});