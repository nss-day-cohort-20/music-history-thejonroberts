'use strict';

let songListTemplate = require('../templates/songList.hbs');
let notificationTemplate = require('../templates/addNotification.hbs');

module.exports.songList = (songArray) => {
	return songListTemplate( {songs: songArray} );
};

module.exports.notification = (songObj) => {
	return notificationTemplate( {song: songObj} );
};
