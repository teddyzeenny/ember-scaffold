App.EmberModel = DS.Model.extend({
  name: DS.attr('string'),
  plural: DS.attr('string'),

  modelAttributes: DS.hasMany('App.ModelAttribute'),
  customApp: DS.belongsTo('App.CustomApp'),

  fullName: function() {
    return this.get('customApp.namespace') + '.' + this.get('name');
  }.property('name'),

  beforeSave: function() {
    var name = this.get('name').replace('App.', '').classify();
    this.set('name', name);
    return this;
  }
});