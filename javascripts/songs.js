'use strict';

let $ = require('jquery');

let allSongsArr = {};

//DOM - PAGE NAVIGATION
function showOnlyWrapper(id) {
	let allPageWrappers = document.querySelectorAll(".pageWrapper");
	allPageWrappers.forEach( function(div) {
		div.classList.add("hidden");
	});
	let targetedPage = document.getElementById(id);
	targetedPage.classList.remove("hidden");
}
//handlers for link clicks - hide other wrappers, show desired wrapper (css .hidden rules applied/removed)
let addMusicAnchor = document.getElementById("addMusicAnchor");
addMusicAnchor.addEventListener("click", function() {
	showOnlyWrapper("addMusicWrapper");
});

let listMusicAnchor = document.getElementById("listMusicAnchor");
listMusicAnchor.addEventListener("click", function() {
	clearListSongsDOM();
	removeUserAddNotification();
	outputSongs(allSongsArr);
	showOnlyWrapper("viewMusicWrapper");
});
//TODO: when second file loaded on "more" click, append to this array
//rather than overwriting.

/////////////////////
//DOM Modification //
/////////////////////

//Write each song in array
function outputSongs(songsArray) {
	// let songList = document.getElementById("songList");
	//append song objects from array songsarray to songlist, each with remove buttons
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

	//add "More" button to dom list
	moreButtonCreation();

	removeButtonHandlers();
}

function moreButtonCreation() {
	if ( $("#moreMusicButton") === null || undefined || {} ) {  //only needs to be created once
		let $moreButton = $("<button/>");
		$moreButton.attr("id", "moreMusicButton");
		$moreButton.html("More >");
		$('#songList').append($moreButton);
		moreButtonHandler($moreButton);
	}
}
//Clear Songs List (run before new output)
function clearListSongsDOM() {
	let songList = document.getElementById("songList");
	while( songList.hasChildNodes() ) {
		$("#songList").empty();
	}
}
//remove add notification
function removeUserAddNotification() {
	if( document.getElementById("addNotification") !== null ) {
		let addNotification = document.getElementById("addNotification");
		addNotification.parentNode.removeChild(addNotification.parentNode.lastChild);
	}
}
//notify user of add success
function userAddNotification(newSong) {
		removeUserAddNotification();
		let addButton = document.getElementById("submitSongAdd");
		let addNotification = document.createElement("p");
		addNotification.setAttribute("id", "addNotification");
		addNotification.innerHTML = `<span class="title">${newSong.title}&nbsp;</span>by
								<span class="artist">${newSong.artist}&nbsp;</span>
								from&nbsp;<span class="album">${newSong.album}&nbsp;</span> was added.`;
		addButton.parentNode.appendChild(addNotification);
}

/////////////////////////////
//EVENT Listeners/Handlers //
/////////////////////////////

function removeButtonHandlers() {
		let $removeButtons = $(".hideButton");
		console.log('$removeButtons', $removeButtons);
		$removeButtons.click( function() {
			this.parentNode.remove();
		});
}
///////////////
//DOM - DATA //
///////////////

//add new songs from user input
let addSongForm = $("#addSongForm");
addSongForm.submit( function() {
	//make new song object from user and push to array
	let songObject = {};
	songObject.title = $("#titleEntry").value;
	songObject.artist = $("#artistEntry").value;
	songObject.album = $("#albumEntry").value;
	allSongsArr.push(songObject);
	userAddNotification(songObject);
});
//////////////////
//XMR Execution //
//////////////////

let getSongData = new XMLHttpRequest();
let getMoreSongData = new XMLHttpRequest();

function moreButtonHandler(moreButton) {
	moreButton.click( function() {
		getMoreSongData.open("GET", "./data/moreMusic.json");
		getMoreSongData.send();
		moreButton.addClass("hidden");
		});
}

 $.ajax({
	url: "../data/music.json"
	})
	.done( function(data) {
		outputSongs(data.music);
	})
	.fail(function(error) {
		console.log('!', error.responseText);
	});

function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}






