App.EmberModelsNewController = Em.ObjectController.extend({
  error: null,

  reset: function() {
    this.set('error', null);
  }
});