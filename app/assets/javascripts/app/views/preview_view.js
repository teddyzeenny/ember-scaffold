App.PreviewView = Em.View.extend({
  tagName: 'div',
  didInsertElement: function() {
    this.createIframe();
  },

  createIframe: function() {
    var emberModels = this.get('controller.emberModels');
    if (!emberModels.get('firstObject.name')) {
      return;
    }
    var self = this;
    Em.run.next(function() {
      self.$('iframe').remove();
      var src = "data:text/html;charset=utf-8,";
      src += '<!doctype html><html><body>';
      src += $('#entire-index').text();
      src += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>';
      src += '<script src="https://raw.github.com/wycats/handlebars.js/1.0.0-rc.3/dist/handlebars.js"></script>';
      src += '<script src="http://builds.emberjs.com.s3.amazonaws.com/ember-latest.js"></script>';
      src += '<script src="http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.js"></script>';
      src += '<script>' + $('#entire-js').text() + '</script>';

      src += '</body></html>';

      var view = Em.View.create({
        tagName: 'iframe'
      });

      var $iframe = $('<iframe>');
      $iframe.get(0).src = src;
      // $iframe.get(0).content().innerHTML = 'test';

      self.$().append($iframe);
    });

  }.observes('controller.emberModels.@each.name')


});