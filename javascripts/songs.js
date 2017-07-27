'use strict';

window.jQuery = require("jquery");
window.Tether = require("tether");
require("../lib/node_modules/bootstrap/dist/js/bootstrap");

let $ = require('jquery');
let factory = require('./song-factory');
let songController = require('./song-controller');

factory.getSongs()
.then(() => {
	songController.songsToDOM();
});

require('./view-controller');
