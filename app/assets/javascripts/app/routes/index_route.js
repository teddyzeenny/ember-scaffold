App.IndexRoute = Em.Route.extend({
  redirect: function() {
    this.transitionTo('ember_models');
  }
});