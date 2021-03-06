/*jshint latedef:false */
var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');

module.exports = Generator;

function Generator() {
  generator.NamedBase.apply(this, arguments);
  var dirPath = '../templates/javascript';
  this.sourceRoot(path.join(__dirname, dirPath));

  this.argument('model', { type: String, required: false });
  this.argument('inherit', { type: String, required: false });

  this.option('create-all', { desc: 'Create a new model for this collection' });
  

  if (this.model && this.options['create-all']) {
    this.hookFor('marionette', { as: 'model', args: [this.model], options: this.options })
  }
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  var ext = 'js';
  this.template('collection.' + ext, path.join('app/scripts/collections', this.name + '.' + ext));
};
