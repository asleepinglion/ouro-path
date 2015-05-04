
var SuperJS = require('superjs');
var Class = require('superjs-base');
var path = require('path');

module.exports = Class.extend(SuperJS.Meta, SuperJS.GetSet, SuperJS.Loader, {

  _metaFile: function() {
    this._loadMeta(__filename);
  },

  init: function() {
    this.set('cmd', path.dirname(process.mainModule.filename) + '/');
    this.set('cwd', process.cwd() + '/');
  }

});
