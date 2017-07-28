'use strict';

let $ = require('jquery');
let songController = require('./song-controller');
let templates = require('./template-builder');
let factory = require('./song-factory');
let filter = require('./song-filter');

//run on load:
showSongList();
songController.songsToDOM();
viewSelectFilterHandlers();

function showSongList() {
	$('#pageWrapper').html( templates.songListView() );
}

function showAddSong() {
	$('#pageWrapper').html( templates.addSongView() );
}

//nav links - inject templates and start listeners
$("#addMusicAnchor").click( function() {
	showAddSong();
	addSongFormHandler();
});

$("#listMusicAnchor").click( function() {
	showSongList();
	songController.songsToDOM();
	viewSelectFilterHandlers();
});

//notify user that add song click does something:
function userAddNotification(newSong) {
	//remove any previous notification
	$("#addNotification").empty();
	let addNotification = templates.notification(newSong);
	$("#submitSongAdd").after(addNotification);
}

function addSongFormHandler() {
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
}

//listeners for select dropdowns; call fns in song-filter.js
function viewSelectFilterHandlers() {
	$(document).on('change', '#artist-select', function() {
		console.log('art select');
		filter.filterArtist( $('#artist-select').val() );
	});

	$(document).on('change', '#album-select', function() {
		console.log('alb select');
		filter.filterAlbum( $('#album-select').val() );
	});
}










