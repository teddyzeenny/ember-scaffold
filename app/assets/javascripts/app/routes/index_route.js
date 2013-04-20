App.IndexRoute = Em.Route.extend({
  redirect: function() {
    var app = App.CustomApp.find(1);
    var self = this;
    app.then(function() {
      self.transitionTo('custom_app.index', app);
    });
  }
});