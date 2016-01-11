requirejs.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    lodash: '../../bower_components/lodash/lodash',
    backbone: '../../bower_components/backbone/backbone',
    highway: '../../bower_components/backbone-highway/src/backbone.highway',
    marionette: '../../bower_components/marionette/lib/backbone.marionette',
    moment: '../../bower_components/moment/min/moment-with-locales.min',
    text: '../../bower_components/requirejs-plugins/lib/text',
    json: '../../bower_components/requirejs-plugins/src/json',
    loglevel: '../../bower_components/loglevel/dist/loglevel',
    phaser: '../../bower_components/phaser/build/phaser'
  },

  map: {
    '*': {
      underscore: 'lodash'
    }
  },

  deps: ['loglevel', 'jquery', 'underscore', 'backbone', 'marionette', 'highway', 'phaser']
});
