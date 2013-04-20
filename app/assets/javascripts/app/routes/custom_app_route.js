App.CustomAppRoute = Em.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('code').set('model', model.get('resources'));
    this.controllerFor('code').set('emberModels', model.get('emberModels'));
  },
  renderTemplate: function() {

    this._super();

    this.render('code', {
      into: 'custom_app',
      outlet: 'code'
    });
  }
});