App.ApplicationRoute = Em.Route.extend({
  events: {
    removeRecord: function(record) {
      var transaction = this.store.transaction();
      transaction.add(record);
      record.deleteRecord();
      transaction.commit();
    }
  }
});