App.ModelAttribute = DS.Model.extend({
  name: DS.attr('string')
  attributeType: DS.attr('string'),
  attributeTypeObject: function(key, val) {
    if (val !== undefined) {
      this.set('attributeType', val.get('id'));
    }
    return App.AttriuteType.find(this.get('attributeType'));
  }.property('attributeType');
});