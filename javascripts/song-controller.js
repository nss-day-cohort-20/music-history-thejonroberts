'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
// let songController = require('./song-controller');
let templates = require('./template-builder');

//Write each song in array
function outputSongs( songsArr ) {
	clearListSongsDOM();
	let songList = templates.songList( {songs: songsArr} );
	$('#songList').html( songList );
	removeButtonHandlers();
	// $("#moreMusicButton").click( moreButtonHandler);
}

function clearListSongsDOM() {
	$("#songList").empty();
}

function removeButtonHandlers() {
	let $removeButtons = $(".hideButton");
	$removeButtons.click( function() {
		this.parentNode.remove();
	});
}

module.exports.songsToDOM = () => {
	factory.getSongs()
		.then( ( songData ) => {
			outputSongs( songData.music );
			})
		.catch(function(error) {
			console.log('!', error.responseText);
		});
};
