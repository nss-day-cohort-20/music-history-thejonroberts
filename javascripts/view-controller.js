'use strict';

let $ = require('jquery');
let songController = require('./song-controller');
let templates = require('./template-builder');
let factory = require('./song-factory');
let filter = require('./song-filter');

//TODO - INJECT ADD AND VIEW TEMPLATES ON LOAD
function showSongList() {
	$('#pageWrapper').html( templates.songListView() );
}

showSongList();
songController.songsToDOM();

//hide all wrappers, show desired wrapper via id (css .hidden class)
function showAddSong() {
	$('#pageWrapper').html( templates.addSongView() );
}
//listeners for view links
$("#addMusicAnchor").click( function() {
	showAddSong();
});

$("#listMusicAnchor").click( function() {
	showSongList();
	songController.songsToDOM();
});
//song add form handling
//notify user that click does something:
function userAddNotification(newSong) {
	//remove any previous notification
	$("#addNotification").empty();
	let addNotification = templates.notification(newSong);
	$("#submitSongAdd").after(addNotification);
}

$("#addSongForm").submit( function() {
	//build new song object from user input
	let songObject = {};
	songObject.title = $("#titleEntry").val();
	songObject.artist = $("#artistEntry").val();
	songObject.album = $("#albumEntry").val();
	//add Song to stored array in factory module
	factory.addSong(songObject);
	//notify user of add
	userAddNotification(songObject);
});

//listeners for select dropdowns; call fns in song-filter.js
$(document).on('change', '#artist-select', function() {
	filter.filterArtist( $('#artist-select').val() );
});

$(document).on('change', '#album-select', function() {
	filter.filterAlbum( $('#album-select').val() );
});










