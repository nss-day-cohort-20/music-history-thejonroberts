'use strict';

let Handlebars = require('handlebars');
let songListTemplate = require('../templates/songList.hbs');
let notificationTemplate = require('../templates/addNotification.hbs');


module.exports.songList = (songArray) => {
	return songListTemplate({songs: songArray.songs});
};

module.exports.notification = (songObj) => {
	return songListTemplate( {song: songObj} );
};
