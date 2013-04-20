App.PreviewView = Em.View.extend({
  tagName: 'iframe',
  didInsertElement: function() {
    var src = "data:text/html;charset=utf-8,";

    src += '<html><script>alert(1);</script></html>';
    this.$().get(0).src = src;
  }
});