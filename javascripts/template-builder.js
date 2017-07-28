'use strict';

let songListTemplate = require('../templates/songList.hbs');
let notificationTemplate = require('../templates/addNotification.hbs');
let selectTemplate = require('../templates/select-options.hbs');
let viewSongsTemplate = require('../templates/view-music.hbs');
let addSongTemplate = require('../templates/add-song-view.hbs');
// let selectTemplate = require('../templates/select-options.hbs');


module.exports.songListView = () => {
	return viewSongsTemplate();
};

module.exports.addSongView = () => {
	return addSongTemplate();
};

module.exports.songList = (songArray) => {
	return songListTemplate( {songs: songArray} );
};
//notify user of successful add
module.exports.notification = (songObj) => {
	return notificationTemplate( {song: songObj} );
};

module.exports.populateSelect = (songArray) => {
	return selectTemplate ( {songs: songArray} );
};
