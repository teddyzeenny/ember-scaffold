App.CodeController = Em.ArrayController.extend({
  emberModels: [],

  currentView: 'model',

  setView: function(view) {
    this.set('currentView', view);
  },

  isModelView: function() {
    return this.get('currentView') === 'model';
  }.property('currentView'),

  isRouterView: function() {
    return this.get('currentView') === 'router';
  }.property('currentView'),

  isRouteView: function() {
    return this.get('currentView') === 'route';
  }.property('currentView'),

  isControllerView: function() {
    return this.get('currentView') === 'controller';
  }.property('currentView'),

  isViewView: function() {
    return this.get('currentView') === 'view';
  }.property('currentView'),

  isTemplateView: function() {
    return this.get('currentView') === 'template';
  }.property('currentView')

});