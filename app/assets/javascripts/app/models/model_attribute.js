App.ModelAttribute = DS.Model.extend({
  name: DS.attr('string'),
  attributeType: DS.attr('string'),

  emberModel: DS.belongsTo('App.EmberModel'),

  attributeTypeObject: function(key, val) {
    if (val !== undefined) {
      this.set('attributeType', val.get('id'));
    }
    return App.AttributeType.find(this.get('attributeType'));
  }.property('attributeType')
});