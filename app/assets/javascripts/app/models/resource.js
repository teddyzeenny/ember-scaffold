App.Resource = DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('App.Resource'),
  customApp: DS.belongsTo('App.CustomApp')
});