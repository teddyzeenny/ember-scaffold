(function() {
  'use strict';

  var attributeTypesArray = [
  {
    id: 'small-text',
    name: 'Small Text',
    type: 'string'
  }, {
    id: 'large-text',
    name: 'Large text',
    type: 'string'
  }, {
    id: 'number',
    name: 'Number',
    type: 'number'
  }, {
    id: 'date',
    name: 'Date',
    type: 'date'
  }];

  var attributeTypes = [], attributeTypesByIds = {};

  App.AttributeType = Em.Object.extend({
    find: function(id) {
      if(id) {
        return attributeTypesByIds[id];
      } else {
        return attributeTypes;
      }
    }
  });

  attributeTypesArray.forEach(function(item) {
    var attributeType = Em.Object.create(item);
    attributeTypes.pushObject(attributeType);
    attributeTypesByIds[attributeType.get('id')] = attributeType;
  });

}());


