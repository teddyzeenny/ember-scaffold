App.Resource = DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('App.Resource')
});