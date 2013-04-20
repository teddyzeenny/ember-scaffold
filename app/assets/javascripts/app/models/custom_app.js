App.CustomApp = DS.Model.extend({
  name: DS.attr('string', {
    defaultValue: 'My Custom App'
  }),
  namespace: function() {
    return this.get('name').classify();
  }.property('name'),
  emberModels: DS.hasMany('App.EmberModel'),
  resources: DS.hasMany('App.Resource')
});