'use strict';
//TODO ALIAS^^
let $ = require('jquery');
let factory = require('./song-factory');
// let songController = require('./song-controller');
let songTemplate = require('../templates/songList.hbs');

//Write each song in array
function outputSongs(songsArray) {
	// clearListSongsDOM();
	let songlist = songTemplate({songs: songsArray});
	$("#songList").append(songlist);
	// removeButtonHandlers();
}

module.exports.songsToDOM = () => {
factory.getSongs()
	.then( (songData) => {
		let allSongsArr = [];
		$.each(songData.music, function() {
			allSongsArr.push(this);
		});
		// $("#moreMusicButton").click( moreButtonHandler);
		outputSongs(allSongsArr);
	})
	.catch(function(error) {
		console.log('!', error.responseText);
	});
};
