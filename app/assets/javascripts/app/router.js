App.Router.map(function() {
  this.resource('custom_app', { path: '/app/:custom_app_id' }, function() {
    this.resource('ember_models', { path: 'models' }, function() {
        this.route('new');
      });
    this.resource('resources', { path: '/resources' }, function() {
      this.route('new');
    });

    this.resource('preview', function() {

    });

  });

});

