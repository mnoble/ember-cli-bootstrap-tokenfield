/* jshint node: true */
'use strict';

module.exports = {
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/jquery-ui/jquery-ui.js');
    app.import('bower_components/bootstrap-tokenfield/dist/bootstrap-tokenfield.js');
  },

  name: 'ember-cli-bootstrap-tokenfield'
};
