App.ResourcesNewController = Em.ObjectController.extend({
  recordExists: false,
  reset: function() {
    this.set('recordExists', false);
  }
});