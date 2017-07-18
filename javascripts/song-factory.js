'use strict';

let $ = require('jquery');
// let songControl = require('./song-conroller');

// var allSongsArr = allSongsArr || [];

module.exports.getMoreSongs = () => {
  return new Promise( ( resolve, reject) => {
    $.ajax({
			url: "../data/moreMusic.json"
			})
			.done( function(data) {
				// $.each(data.music, function() {
				// 	allSongsArr.push(this);
				// });
				// songControl.outputSongs(allSongsArr);
			})
			.fail( function(error) {
				console.log('!', error.responseText);
			});
	});
};

module.exports.getSongs = () => {
  return new Promise( ( resolve, reject) => {
		 $.ajax({
			url: "../data/music.json"
			})
			.done( function(songData) {
				resolve(songData);
			})
			.fail(function(error) {
				console.log('!', error.responseText);
				reject(error);
			});
	});
};

