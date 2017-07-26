'use strict';

let $ = require('jquery');
let songController = require('./song-controller');
let templates = require('./template-builder');
let factory = require('./song-factory');

//hide all wrappers, show desired wrapper via id (css .hidden class)
function showOnlyWrapper(id) {
	$(".pageWrapper").addClass("hidden");
	$(id).removeClass("hidden");
}

//listeners for view links
$("#addMusicAnchor").click( function() {
	showOnlyWrapper("#addMusicWrapper");
});

$("#listMusicAnchor").click( function() {
	showOnlyWrapper("#viewMusicWrapper");
	songController.songsToDOM();
});

function userAddNotification(newSong) {
	//remove any previous notification
	$("#addNotification").empty();
	let addNotification = templates.notification(newSong);
	$("#submitSongAdd").after(addNotification);
}

$("#addSongForm").submit( function() {
	//make new song object from user and push to array
	let songObject = {};
	songObject.title = $("#titleEntry").val();
	songObject.artist = $("#artistEntry").val();
	songObject.album = $("#albumEntry").val();
	factory.addSong(songObject);
	userAddNotification(songObject);
});


