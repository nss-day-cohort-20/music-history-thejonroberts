(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// let $ = require('jquery');

let allSongsArr = {};
/////////////////////
//XMR declarations //
/////////////////////
let getSongData = new XMLHttpRequest();
let getMoreSongData = new XMLHttpRequest();
//XMR Handlers
function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}
//TODO: when second file loaded on "more" click, append to this array
//rather than overwriting.
function parseSongData() {
	allSongsArr = JSON.parse(event.target.responseText).music;
	outputSongs(allSongsArr);
}
/////////////////////
//DOM Modification //
/////////////////////

function moreButtonCreation(moreButton) {
	if (moreButton === null) {  //only needs to be created once
		moreButton = document.createElement("button");
		moreButton.setAttribute("id", "moreMusicButton");
		moreButton.innerHTML = "More >";
		// songList.appendChild(moreButton);
		moreButtonHandler(moreButton);
		}
	}

//Write each song in array
function outputSongs(songsArray) {
	let songList = document.getElementById("songList");
	//append song objects from array songsarray to songlist, each with remove buttons
	songsArray.forEach(function(song) {
		let listItem = document.createElement("li");
		listItem.setAttribute("class", "songListItem");
		listItem.innerHTML += `<button class="hideButton"> - </button>
								<span class="title">${song.title}&nbsp;</span>
								<span class="artist">${song.artist}&nbsp;</span>
								from&nbsp;
								<span class="album">${song.album}</span>`;
		songList.appendChild(listItem);
	});
	removeButtonHandlers();
	//add "More" button to dom list
	let moreButton = document.getElementById("moreMusicButton");
	moreButtonCreation(moreButton);
}
//Clear Songs List (run before new output)
function clearListSongsDOM() {
	let songList = document.getElementById("songList");
	while( songList.hasChildNodes() ) {
		songList.removeChild(songList.lastChild);
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

function moreButtonHandler(moreButton) {
	moreButton.addEventListener("click", function() {
		getMoreSongData.open("GET", "./data/moreMusic.json");
		getMoreSongData.send();
		moreButton.setAttribute("class", "hidden");
		});
}

function removeButtonHandlers() {
		let removeButtons = document.querySelectorAll(".hideButton");
		removeButtons.forEach(function (button) {
		button.addEventListener("click", function() {
		event.target.parentNode.remove();
		});
	});
}
///////////////
//DOM - DATA //
///////////////

//add new songs from user input
let addSongForm = document.getElementById("addSongForm");
addSongForm.addEventListener("submit", function() {
	//make new song object from user and push to array
	let songObject = {};
	songObject.title = document.getElementById("titleEntry").value;
	songObject.artist = document.getElementById("artistEntry").value;
	songObject.album = document.getElementById("albumEntry").value;
	allSongsArr.push(songObject);
	userAddNotification(songObject);
});
//////////////////
//XMR Execution //
//////////////////

//set up event listeners for completed request and aborted request
getSongData.addEventListener("load", parseSongData);
getSongData.addEventListener("error", dataRequestFail);

getSongData.open("GET", "./data/music.json");
getSongData.send();

getMoreSongData.addEventListener("load", parseSongData);
getMoreSongData.addEventListener("error", dataRequestFail);
//requested in moreButtonHandler







},{}]},{},[1]);
