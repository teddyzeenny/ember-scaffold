App.EmberModelsNewController = Em.ObjectController.extend({
  error: null,

  reset: function() {
    this.set('error', null);
  },

  addAttribute: function() {
    var transaction = this.get('transaction');
    transaction.createRecord(App.ModelAttribute, { emberModel: this.get('model') });
  },

  removeAttribute: function(record) {
    this.get('modelAttributes').removeObject(record);
    record.deleteRecord();
  },

  createModel: function(record) {
    var self = this;

      this.reset();
      models = this.get('models');

      record.beforeSave();
      var existing = models.filterProperty('isNew', false)
        .filterProperty('name', record.get('name'));

      if (existing.get('length') === 0) {
        record.one('didCreate', this, function() {
          Em.run.next(function() {
            self.transitionToRoute('ember_models');
          });
        });
        record.get('transaction').commit();
      } else {
        this.set('error', 'Model already exists');
      }


  }
});