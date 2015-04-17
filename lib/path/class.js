
var SuperJS = require('superjs');
var path = require('path');

module.exports = SuperJS.Class.extend({

  _metaFile: function() {
    this._loadMeta(__filename);
  },

  init: function() {
    this.set('cmd', path.dirname(process.mainModule.filename) + '/');
    this.set('cwd', process.cwd() + '/');
  }

});
