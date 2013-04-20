App.EmberModel = DS.Model.extend({
  name: DS.attr("string"),
  plural: DS.attr("string"),

  fullName: function() {
    return 'App.' + this.get('name');
  }.property('name'),

  beforeSave: function() {
    var name = this.get('name').replace('App.', '').classify();
    this.set('name', name);
    return this;
  }
});