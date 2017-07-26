'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
let templates = require('./template-builder');

//Write each song in array
function outputSongs( songsArr ) {
	$("#songList").empty();
	let songList = templates.songList( songsArr );
	$('#songList').html( songList );
	removeButtonHandlers();
}

function removeButtonHandlers() {
	$(".removeButton").click( function() {
		let index = $(this).parents('li').data('song-id');
		factory.removeSong(index);
		module.exports.songsToDOM();
	});
}

module.exports.songsToDOM = () => {
	outputSongs( factory.storedSongs );
};
