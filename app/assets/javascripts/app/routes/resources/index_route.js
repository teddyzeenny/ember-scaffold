App.ResourcesIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Resource.find();
  },
  events: {
    remove: function(record) {
      var transaction = this.get('store').transaction();
      transaction.add(record);
      record.deleteRecord();
      record.get('transaction').commit();
    }
  }
});