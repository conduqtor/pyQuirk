var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'pyQuirk',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'pyQuirk',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

