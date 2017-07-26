'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
let templates = require('./template-builder');

//Write each song in array to list
function outputSongs( songsArr ) {
	//write list of songs in songsArr to dom
	$("#songList").empty();
	let songList = templates.songList( songsArr );
	$('#songList').html( songList );
	//start remove listener now that items are in dom
	removeButtonHandlers();
	//populate select dropdown filters based on songsArr
	let selectOptions = templates.populateSelect(songsArr);
	$('#select-options').html(selectOptions);
}
// on remove click, remove song from array and redraw song list
function removeButtonHandlers() {
	$(".removeButton").click( function() {
		// grab index from custom data attr to remove from storage array
		let index = $(this).parents('li').data('song-id');
		factory.removeSong(index);
		// empty, redraw dram from all songs left in storage array
		module.exports.songsToDOM();
	});
}
//make outputSongs() available outside module
module.exports.songsToDOM = () => {
	outputSongs( factory.storedSongs );
};
