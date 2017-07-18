'use strict';

let $ = require('jquery');
let factory = require('./song-factory');
let songController = require('./song-controller');

let allSongsArr = [];

//DOM - PAGE NAVIGATION
function showOnlyWrapper(id) {
	let $allPageWrappers = $(".pageWrapper");
	$allPageWrappers.addClass("hidden");
	let $targetedPage = $(id);
	$targetedPage.removeClass("hidden");
}
//handlers for link clicks - hide other wrappers, show desired wrapper (css .hidden rules applied/removed)
let $addMusicAnchor = $("#addMusicAnchor");
$addMusicAnchor.click( function() {
	showOnlyWrapper("#addMusicWrapper");
});

let $listMusicAnchor = $("#listMusicAnchor");
$listMusicAnchor.click( function() {
	removeUserAddNotification();
	outputSongs(allSongsArr);
	showOnlyWrapper("#viewMusicWrapper");
});

/////////////////////
//DOM Modification //
/////////////////////
//Write each song in array
function outputSongs(songsArray) {
	console.log('outputSongs');
	clearListSongsDOM();
	songsArray.forEach( function(song) {
		let $listItem = $("<li/>");
		$listItem.addClass("songListItem");
		$listItem.html(`<button class="hideButton"> - </button>
								<span class="title">${song.title}&nbsp;</span>
								<span class="artist">${song.artist}&nbsp;</span>
								from&nbsp;
								<span class="album">${song.album}</span>`);
		$("#songList").append($listItem);
	});
	removeButtonHandlers();
}

//Clear Songs List (run before new output)
function clearListSongsDOM() {
$("#songList").empty();
}
//remove add notification
function removeUserAddNotification() {
	$("#addNotification").remove();
}
//notify user of add success
function userAddNotification(newSong) {
		removeUserAddNotification();
		let $addButton = $("#submitSongAdd");
		let $addNotification = $("<p/>");
		$addNotification.attr("id", "addNotification");
		$addNotification.html(`<span class="title">${newSong.title}&nbsp;</span>by
								<span class="artist">${newSong.artist}&nbsp;</span>
								from&nbsp;<span class="album">${newSong.album}&nbsp;</span> was added.`);
		$addButton.after($addNotification);
}
/////////////////////////////
//EVENT Listeners/Handlers //
/////////////////////////////
function removeButtonHandlers() {
		let $removeButtons = $(".hideButton");
		$removeButtons.click( function() {
			this.parentNode.remove();
		});
}
///////////////
//DOM - DATA //
///////////////

//add new songs from user input
let $addSongForm = $("#addSongForm");
$addSongForm.submit( function() {
	//make new song object from user and push to array
	let songObject = {};
	songObject.title = $("#titleEntry").val();
	songObject.artist = $("#artistEntry").val();
	songObject.album = $("#albumEntry").val();
	allSongsArr.push(songObject);
	userAddNotification(songObject);
});
//////////////////
//XMR Execution //
//////////////////

function moreButtonHandler() {
		let $moreButton = $("#moreMusicButton");
		$moreButton.addClass("hidden");
		 $.ajax({
			url: "../data/moreMusic.json"
			})
			.done( function(data) {
				$.each(data.music, function() {
					allSongsArr.push(this);
				});
				outputSongs(allSongsArr);
			})
			.fail( function(error) {
				console.log('!', error.responseText);
			});
		}


songController.songsToDOM();
// factory.getSongs()
// 	.then( (songData) => {
// 		console.log('getSongs', songData);
// 		$.each(songData.music, function() {
// 			allSongsArr.push(this);
// 		});
// 		console.log('allSongsArr', allSongsArr);
// 		$("#moreMusicButton").click( moreButtonHandler);
// 		outputSongs(allSongsArr);
// 	})
// 	.catch(function(error) {
// 		console.log('!', error.responseText);
// 	});
