App.EmberModelsItemController = Em.ObjectController.extend({
  isEditing: false,

  edit: function() {
    var transaction = this.store.transaction();
    transaction.add(this.get('model'));
    this.set('isEditing', true);
  },

  cancel: function() {
    this.get('transaction').rollback();
    this.set('isEditing', false);
  },

  save: function(record) {
    record.one('didUpdate', this, function() {
      this.set('isEditing', false);
    });
    record.beforeSave().get('transaction').commit();
  }
});