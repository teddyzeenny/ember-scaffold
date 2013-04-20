App.PreviewController = Em.Controller.extend({
  needs: ['code'],

  emberModelsBinding: 'controllers.code.emberModels'
});