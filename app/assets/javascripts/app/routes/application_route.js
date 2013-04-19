App.ApplicationRoute = Em.Route.extend({
  setupController: function() {
    this.controllerFor('code').set('model', App.Resource.find());
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
      record.deleteRecord();
    }
  }
});