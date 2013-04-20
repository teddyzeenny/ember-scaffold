App.Router.map(function() {
  this.resource('ember_models', function() {
    this.route('new');
  });
  this.resource('resources', function() {
    this.route('new');
  });
});

