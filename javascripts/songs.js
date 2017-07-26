'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
let songController = require('./song-controller');

factory.getSongs()
.then(() => {
	songController.songsToDOM();
});

require('./view-controller');



