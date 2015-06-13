
var Ouro = require('ouro');
var Class = require('ouro-base');
var path = require('path');

module.exports = Class.extend(Ouro.Meta, Ouro.GetSet, Ouro.Loader, {

  _metaFile: function() {
    this._loadMeta(__filename);
  },

  init: function() {
    this.set('cmd', path.dirname(process.mainModule.filename) + '/');
    this.set('cwd', process.cwd() + '/');
  }

});
