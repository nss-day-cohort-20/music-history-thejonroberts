'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
let songController = require('./song-controller');
let templates = require('./template-builder');

songController.songsToDOM();

//DOM - PAGE NAVIGATION
function showOnlyWrapper(id) {
	$(".pageWrapper").addClass("hidden");
	$(id).removeClass("hidden");
}
//handlers for link clicks - hide other wrappers, show desired wrapper (css .hidden rules applied/removed)
$("#addMusicAnchor").click( function() {
	showOnlyWrapper("#addMusicWrapper");
});

$("#listMusicAnchor").click( function() {
	showOnlyWrapper("#viewMusicWrapper");
	songController.songsToDOM();
});

/////////////////////
//DOM Modification //
/////////////////////

//notify user of add success
function userAddNotification(newSong) {
		//remove any previous notification
		$("#addNotification").empty();
		let addNotification = templates.notification(newSong);
		$("#submitSongAdd").after(addNotification);
}

///////////////
//DOM - DATA //
///////////////

//add new songs from user input
$("#addSongForm").submit( function() {
	//make new song object from user and push to array
	let songObject = {};
	songObject.title = $("#titleEntry").val();
	songObject.artist = $("#artistEntry").val();
	songObject.album = $("#albumEntry").val();
	// factory.addSong();
	// allSongsArr.push(songObject);
	userAddNotification(songObject);
});

