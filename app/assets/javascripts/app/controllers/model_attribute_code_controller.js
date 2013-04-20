App.ModelAttributeCodeController = Em.ObjectController.extend({

  isLast: function() {
    return this.get('emberModel.modelAttributes.lastObject') === this.get('model')
  }.property('emberModel.modelAttributes.lastObject')

});