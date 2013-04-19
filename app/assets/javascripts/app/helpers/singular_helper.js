Em.Handlebars.registerBoundHelper('singular', function(context){
  return context.replace(/s$/, '');
});